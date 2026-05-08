/**
 * Newsletter Subscription & Unsubscribe Routes
 * POST /api/subscribe    — Subscribe email to Brevo list
 * DELETE /api/unsubscribe — Remove email from Brevo
 */

import { Router } from 'express'
import Joi from 'joi'
import rateLimit from 'express-rate-limit'
import { subscribeEmail, unsubscribeEmail } from '../services/brevoService.js'

const router = Router()

// ── Rate Limiter ──────────────────────────────────────────────────────────────
const subscriptionRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again in 60 seconds.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Validation Schemas ─────────────────────────────────────────────────────────
const subscribeSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .lowercase()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'string.empty': 'Email address is required.',
      'any.required': 'Email address is required.',
    }),
  hp_input: Joi.string().allow('', null).optional(),
  captcha_token: Joi.string().allow('', null).optional(),
  source: Joi.string().allow('', null).optional(),
})

const unsubscribeSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .lowercase()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email address is required.',
    }),
})

// ── POST /api/subscribe ───────────────────────────────────────────────────────
router.post('/subscribe', subscriptionRateLimiter, async (req, res) => {
  try {
    const { error, value } = subscribeSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please check your input.',
        errors: error.details.map((d) => d.message),
      })
    }

    const { email, hp_input, source } = value
    console.log(`📨 Subscribe attempt: email=${email}, source=${source}`)

    // Honeypot check — silently reject bots
    if (hp_input && hp_input.trim().length > 0) {
      console.log(`🤖 Bot detected (honeypot filled): ${email}`)
      return res.status(200).json({ success: true, message: 'Thank you for subscribing!' })
    }

    // Subscribe via Brevo
    console.log(`🔄 Calling Brevo for: ${email}`)
    const contact = await subscribeEmail(email, { source })

    console.log(`✅ Subscribe success: ${email} → ID: ${contact.id}`)
    res.status(200).json({
      success: true,
      message: 'Successfully subscribed! Please check your inbox for a confirmation email.',
      data: { contactId: contact.id, email },
    })
  } catch (err) {
    console.error('❌ Subscription error:', {
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      error: err.message,
      statusCode: err.statusCode,
      body: err.response?.body,
      stack: err.stack,
    })

    // Brevo-specific error handling
    if (err.statusCode === 400) {
      const brevoCode = err.response?.body?.code
      // Handle both "duplicate_contact" (in this list) and "duplicate_parameter" (in another list)
      if (brevoCode === 'duplicate_contact' || brevoCode === 'duplicate_parameter') {
        return res.status(409).json({
          success: false,
          message: 'This email is already subscribed to our newsletter.',
        })
      }
      if (brevoCode === 'invalid_parameter') {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address.',
        })
      }
    }

    if (err.statusCode === 401) {
      return res.status(500).json({
        success: false,
        message: 'Service unavailable. Please try again later.',
      })
    }

    if (err.statusCode === 429) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again in a few minutes.',
      })
    }

    res.status(500).json({
      success: false,
      message: 'Unable to process subscription. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          errorMessage: err.message,
          statusCode: err.statusCode,
          brevoCode: err.response?.body?.code,
          brevoMessage: err.response?.body?.message,
        },
      }),
    })
  }
})

// ── DELETE /api/unsubscribe ────────────────────────────────────────────────────
router.delete('/unsubscribe', async (req, res) => {
  // Validate request body
  const { error, value } = unsubscribeSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: error.details.map((d) => d.message),
    })
  }

  const { email } = value

  try {
    await unsubscribeEmail(email)
    console.log(`🗑 API unsubscribe: ${email}`)

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed. We\'re sorry to see you go!',
    })
  } catch (err) {
    if (err.statusCode === 404) {
      return res.status(200).json({
        success: true,
        message: 'You are already unsubscribed.',
      })
    }

    console.error('❌ Unsubscribe error:', err)
    res.status(500).json({
      success: false,
      message: 'Unable to unsubscribe. Please try again later.',
    })
  }
})

export default router
