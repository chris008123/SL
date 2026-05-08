/**
 * Express Server — Newsletter Subscription API
 * Core subscription/unsubscribe functionality only (webhooks removed).
 */

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { configureBrevo } from './services/brevoService.js'
import subscribeRouter from './routes/subscribe.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(helmet())
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
}))
app.use(express.json({ limit: '10kb' }))

// ── Request Logging ───────────────────────────────────────────────────────────
app.use((req, res, next) => {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] ${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  })
  next()
})

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api', subscribeRouter)  // Handles POST /api/subscribe and DELETE /api/unsubscribe

// ── Health Check ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'sl-newsletter-api',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: {
      subscribe: 'POST /api/subscribe',
      unsubscribe: 'DELETE /api/unsubscribe',
    },
  })
})

// ── API Status (development) ─────────────────────────────────────────────────
app.get('/api/status', (req, res) => {
  res.json({
    brevo: 'configured',
    listId: process.env.BREVO_LIST_ID,
    environment: process.env.NODE_ENV,
  })
})

// ── 404 Handler ───────────────────────────────────────────────────────────────
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  })
})

// ── Error Handler ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
})

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, async () => {
  console.log(`🚀 Newsletter API listening on http://localhost:${PORT}`)
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`)

  try {
    configureBrevo()
    console.log('🔑 Brevo API authenticated')
    console.log('📧 Subscription endpoint: POST http://localhost:' + PORT + '/api/subscribe')
    console.log('🗑 Unsubscribe endpoint: DELETE http://localhost:' + PORT + '/api/unsubscribe')
  } catch (error) {
    console.error('❌ Failed to initialize Brevo:', error.message)
    console.error('💡 Ensure BREVO_API_KEY is set in .env')
    process.exit(1)
  }
})

export default app
