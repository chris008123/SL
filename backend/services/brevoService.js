/**
 * Brevo (Sendinblue) API Service
 * Handles all communication with Brevo Contacts API using direct REST calls (no SDK).
 */

let apiKey = null
let baseUrl = 'https://api.brevo.com/v3'

/**
 * Initialize the Brevo API client with API key.
 * Must be called once before any contact operations.
 *
 * @throws {Error} If BREVO_API_KEY is not set in environment
 */
export function configureBrevo() {
  apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not defined in environment variables')
  }

  console.log('✅ Brevo API client configured successfully')
}

/**
 * Make an authenticated request to Brevo API.
 *
 * @param {string} endpoint - API endpoint path (e.g., '/contacts')
 * @param {Object} options - fetch options (method, body, etc.)
 * @returns {Promise<object>} JSON response
 * @throws {Error} On API error with status code and message
 */
async function brevoRequest(endpoint, options = {}) {
  if (!apiKey) {
    throw new Error('Brevo not configured. Call configureBrevo() first.')
  }

  const url = `${baseUrl}${endpoint}`
  const headers = {
    'api-key': apiKey,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  }

  const config = {
    ...options,
    headers,
  }

  try {
    const response = await fetch(url, config)

    // Handle non-2xx responses
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}))
      const error = new Error(errorBody.message || 'Brevo API request failed')
      error.statusCode = response.status
      error.response = { body: errorBody }
      throw error
    }

    // Return parsed JSON (may be empty for 204 responses)
    return response.status === 204 ? null : await response.json()
  } catch (err) {
    console.error('❌ Brevo API error:', {
      url,
      status: err.statusCode,
      message: err.message,
    })
    throw err
  }
}

/**
 * Subscribe an email to the configured Brevo contact list.
 *
 * @param {string} email - Validated email address
 * @param {Object} options - Optional metadata
 * @param {string} [options.source] - Source identifier (e.g., 'footer_form', 'blog_newsletter')
 * @returns {Promise<object>} Brevo contact response containing ID
 * @throws {Error} On API failure (duplicate, validation, network)
 */
export async function subscribeEmail(email, options = {}) {
  const normalizedEmail = email.toLowerCase().trim()

  const listId = parseInt(process.env.BREVO_LIST_ID, 10)
  if (isNaN(listId)) {
    throw new Error('BREVO_LIST_ID must be a valid numeric ID')
  }

  const contactData = {
    email: normalizedEmail,
    listIds: [listId],
    attributes: {
      SOURCE: options.source || 'website_signup',
    },
    updateEnabled: false,  // false = reject duplicates
  }

  try {
    const response = await brevoRequest('/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData),
    })
    console.log(`✅ Contact subscribed: ${normalizedEmail} → ID: ${response.id}`)
    return response
  } catch (err) {
    console.error('❌ Brevo subscribe error:', {
      email: normalizedEmail,
      status: err.statusCode,
      body: err.response?.body,
    })
    throw err
  }
}

/**
 * Unsubscribe an email from all lists (hard delete).
 *
 * @param {string} email - Email to unsubscribe
 * @returns {Promise<void>}
 * @throws {Error} On API failure (404 is swallowed — already deleted)
 */
export async function unsubscribeEmail(email) {
  const normalizedEmail = email.toLowerCase().trim()

  try {
    await brevoRequest(`/contacts/${encodeURIComponent(normalizedEmail)}`, {
      method: 'DELETE',
    })
    console.log(`🗑 Contact unsubscribed: ${normalizedEmail}`)
  } catch (err) {
    // 404 = contact not found; treat as already unsubscribed
    if (err.statusCode === 404) return
    throw err
  }
}

/**
 * Check if a contact exists.
 *
 * @param {string} email
 * @returns {Promise<object|null>} Contact object or null
 */
export async function getContact(email) {
  const normalizedEmail = email.toLowerCase().trim()
  try {
    const contact = await brevoRequest(`/contacts/${encodeURIComponent(normalizedEmail)}`, {
      method: 'GET',
    })
    return contact
  } catch (err) {
    if (err.statusCode === 404) return null
    throw err
  }
}

/**
 * Send contact form email to site owner via Brevo transactional email.
 */
export async function sendContactEmail({ name, email, company, service, budget, message }) {
  const ownerEmail = process.env.CONTACT_RECEIVER_EMAIL
  const senderEmail = process.env.CONTACT_SENDER_EMAIL
  const senderName = process.env.CONTACT_SENDER_NAME || 'TechSL Website'

  if (!ownerEmail || !senderEmail) {
    throw new Error('CONTACT_RECEIVER_EMAIL and CONTACT_SENDER_EMAIL must be set in .env')
  }

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Company:</strong></td><td>${company || 'N/A'}</td></tr>
      <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
      <tr><td><strong>Budget:</strong></td><td>${budget || 'Not specified'}</td></tr>
    </table>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  return await brevoRequest('/smtp/email', {
    method: 'POST',
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: ownerEmail }],
      replyTo: { email, name },
      subject: `New Inquiry from ${name} — ${service}`,
      htmlContent,
    }),
  })
}
