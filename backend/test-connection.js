/**
 * Test Script — Verify Brevo API Connectivity
 * Run: node test-connection.js
 */

import dotenv from 'dotenv'
import { configureBrevo, getContact } from './services/brevoService.js'

// Load environment variables
dotenv.config()

async function test() {
  try {
    console.log('🔍 Initializing Brevo SDK...')
    configureBrevo()
    console.log('✅ SDK initialized\n')

    const testEmail = 'test-brevo-connection@example.com'
    console.log(`🔎 Testing API access with: ${testEmail} ...`)

    const contact = await getContact(testEmail)
    if (contact) {
      console.log('✅ Contact found:', contact.id)
    } else {
      console.log('✅ Contact not found (expected) — API is working')
    }

    console.log('\n🎉 Brevo connection verified successfully!')
    console.log('📋 Checklist:')
    console.log('   1. Verify BREVO_LIST_ID in .env is a valid numeric ID from your Brevo dashboard')
    console.log('   2. Test subscription: curl -X POST http://localhost:3001/api/subscribe -H "Content-Type: application/json" -d \'{"email":"you@test.com","hp_input":""}\'')
    console.log('   3. Verify contact appears in Brevo Dashboard → Contacts → Lists')
    console.log('\n🚀 Next: Set up Brevo webhook for real-time event sync')
    console.log('   Dashboard → Automations → Webhooks → Create → URL: http://localhost:3001/api/webhooks/brevo')
  } catch (error) {
    console.error('\n❌ Connection test failed:')
    console.error('Status:', error.statusCode)
    console.error('Message:', error.message)
    console.error('\n💡 Troubleshooting:')
    console.error('1. Verify BREVO_API_KEY in .env is correct and active')
    console.error('2. Check API key permissions: Contacts - Read & Write')
    console.error('3. Ensure BREVO_LIST_ID is a number (not the list name)')
    console.error('4. Ensure backend server is running on port 3001')
    process.exit(1)
  }
}

test()
