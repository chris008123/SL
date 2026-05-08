import { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { unsubscribeNewsletter } from '../services/newsletter'

export default function Unsubscribe() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

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
      const result = await unsubscribeNewsletter(email)
      setStatus({ type: 'success', message: result.message })
      setEmail('')
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'An unexpected error occurred. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
            Unsubscribe
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            We're sorry to see you go. Enter your email to unsubscribe from our newsletter.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-dark-100 dark:border-dark-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={loading}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:opacity-50"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !isValidEmail}
              className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Unsubscribe
                </>
              )}
            </button>
          </form>

          {status.type && (
            <div
              className={`mt-4 p-4 rounded-lg text-sm flex items-start gap-3 ${
                status.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}
              role="alert"
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-dark-500 dark:text-dark-400">
          If you're having trouble unsubscribing,{' '}
          <a href="mailto:techsl9181@gmail.com" className="text-primary-600 hover:underline">
            contact us
          </a>{' '}
          and we'll help.
        </p>
      </div>
    </div>
  )
}
