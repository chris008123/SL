/**
 * Newsletter Subscription API Client
 * Handles communication with the backend Brevo subscription endpoint.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

/**
 * Subscribe an email to the newsletter.
 *
 * @param {string} email - Validated email address
 * @param {string} [source] - Optional source identifier (e.g., 'footer', 'blog')
 * @returns {Promise<{success: boolean, message: string, contactId?: string}>}
 */
export async function subscribeNewsletter(email, source = 'website') {
  try {
    const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source,
        hp_input: '',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Create error with status and message from response
      const error = new Error(data.message || 'Subscription failed')
      error.status = response.status
      error.body = data
      throw error
    }

    return data
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    throw error
  }
}

/**
 * Unsubscribe an email from the newsletter.
 *
 * @param {string} email - Email to unsubscribe
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function unsubscribeNewsletter(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/unsubscribe`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      const error = new Error(data.message || 'Unsubscribe failed')
      error.status = response.status
      error.body = data
      throw error
    }

    return data
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    throw error
  }
}

/**
 * Check API health status.
 *
 * @returns {Promise<{status: string, timestamp?: string}>}
 */
export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`)
    return await response.json()
  } catch (error) {
    return { status: 'error', error: error.message }
  }
}
