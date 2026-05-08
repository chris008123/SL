import { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { subscribeNewsletter } from '../services/newsletter'

/**
 * NewsletterSubscribe — Reusable subscription form component.
 *
 * @param {Object} props
 * @param {string} props.title - Heading text (default: "Stay Updated")
 * @param {string} props.description - Subtitle text
 * @param {string} props.source - Tracking source identifier (default: "website")
 * @param {string} props.variant - 'default' | 'minimal' styling preset
 */
export default function NewsletterSubscribe({
  title = 'Stay Updated',
  description = 'Subscribe to our newsletter and get the latest tech insights delivered to your inbox.',
  source = 'website',
  variant = 'default',
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })
  const [hpInput] = useState('') // Honeypot anti-spam field (empty for humans)

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !isValidEmail) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const result = await subscribeNewsletter(email, source)
      setStatus({ type: 'success', message: result.message })
      setEmail('')
    } catch (error) {
      // Determine user-friendly message based on HTTP status
      let message = error.message || 'An unexpected error occurred. Please try again.'

      if (error.status === 409) {
        message = 'This email is already subscribed to our newsletter.'
      } else if (error.status === 429) {
        message = 'Too many subscription attempts. Please wait a moment and try again.'
      } else if (error.status === 400) {
        // Validation error — Brevo or Joi should have provided specific message
        // Keep error.message as is
      } else if (error.status >= 500) {
        message = 'Service temporarily unavailable. Please try again in a few minutes.'
      }

      setStatus({ type: 'error', message })
    } finally {
      setLoading(false)
    }
  }

  // Styling variants
  const containerClasses = variant === 'minimal' ? 'max-w-md mx-auto' : 'max-w-xl mx-auto text-center'
  const headingClass = variant === 'minimal' ? 'text-xl font-semibold mb-2 text-white' : 'text-3xl font-bold mb-4 text-white'
  const subtextClass = variant === 'minimal' ? 'text-sm text-gray-300 mb-4' : 'text-lg text-primary-100 mb-8'
  const inputClass = variant === 'minimal'
    ? 'flex-1 px-4 py-2 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500'
    : 'flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white'
  const buttonClass = variant === 'minimal'
    ? 'px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition disabled:opacity-50 whitespace-nowrap flex items-center justify-center'
    : 'px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-shadow-lg transition-shadow disabled:opacity-50 whitespace-nowrap flex items-center justify-center'
  const statusSuccessClass = variant === 'minimal'
    ? 'mt-3 p-3 rounded-lg text-sm bg-green-100 border border-green-300 text-green-800'
    : 'mt-4 p-4 rounded-lg text-sm bg-green-500/20 border border-green-400 text-green-100'
  const statusErrorClass = variant === 'minimal'
    ? 'mt-3 p-3 rounded-lg text-sm bg-red-100 border border-red-300 text-red-800'
    : 'mt-4 p-4 rounded-lg text-sm bg-red-500/20 border border-red-400 text-red-100'

  return (
    <div className={containerClasses}>
      <h2 className={headingClass}>{title}</h2>
      <p className={subtextClass}>{description}</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        {/* Email Input */}
        <div className="flex-1 relative">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
            aria-label="Email address"
            required
            spellCheck={false}
            className={`w-full ${inputClass}`}
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Honeypot (invisible to humans) */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <input
            type="text"
            name="hp_input"
            value={hpInput}
            readOnly
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !isValidEmail}
          className={buttonClass}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </>
          )}
        </button>
      </form>

      {/* Status Message */}
      {status.type && (
        <div
          className={status.type === 'success' ? statusSuccessClass : statusErrorClass}
          role="alert"
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="inline w-4 h-4 mr-2" />
          ) : (
            <AlertCircle className="inline w-4 h-4 mr-2" />
          )}
          {status.message}
        </div>
      )}
    </div>
  )
}
