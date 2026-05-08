# Newsletter Subscription Backend (Brevo Integration)

> **Status (2026-05-08)**: Webhook functionality has been deprecated and removed. Core subscription (`POST /api/subscribe`) and unsubscribe (`DELETE /api/unsubscribe`) endpoints are fully operational.

Express.js API server for handling newsletter subscriptions with Brevo (Sendinblue).

---

## 🚀 Quick Start

```bash
cd backend
npm install          # Install dependencies
cp .env.example .env # Copy environment template
# Edit .env with your Brevo API key and list ID
node server.js       # Start server on http://localhost:3001
```

---

## 📁 Project Structure

```
backend/
├── .env                  # Environment variables (gitignored)
├── .env.example          # Template for developers
├── package.json          # Dependencies
├── server.js             # Express app entry point (routes)
├── routes/
│   └── subscribe.js      # Subscription & unsubscribe endpoints
├── services/
│   └── brevoService.js   # Brevo API service (REST calls)
├── test-connection.js    # Connectivity test script
├── test-integration.ps1  # Integration test script
└── README.md
```

---

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `BREVO_API_KEY` | ✅ Yes | Brevo API v3 key (from SMTP & API → API Keys) |
| `BREVO_LIST_ID` | ✅ Yes | Numeric ID of Brevo contact list (NOT list name) |
| `PORT` | ❌ No | Server port (default: `3001`) |
| `NODE_ENV` | ❌ No | `development` or `production` |
| `ALLOWED_ORIGINS` | ⚠️ Prod | Comma-separated CORS origins |

> **Get BREVO_LIST_ID**: Dashboard → Contacts → Lists → Click your list → Check URL: `.../lists/123` → `123` is the ID.

---

## 📡 API Endpoints

### `POST /api/subscribe`

Subscribe an email to the newsletter.

**Request Body:**
```json
{
  "email": "user@example.com",
  "source": "footer",       // optional: tracks form origin
  "hp_input": ""           // honeypot: bots fill this (empty for humans)
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed! Please check your inbox for a confirmation email.",
  "data": {
    "contactId": "12345",
    "email": "user@example.com"
  }
}
```

**Error Responses:**
- `400` — Invalid email or validation failed
- `409` — Email already subscribed (`duplicate_contact`)
- `429` — Rate limit exceeded (5 requests/min per IP)
- `500` — Server/Brevo error

---

### `DELETE /api/unsubscribe`

Remove an email from all Brevo lists.

**Request Body:**
```json
{ "email": "user@example.com" }
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully unsubscribed. We're sorry to see you go!"
}
```

---

### `GET /health`

Health check endpoint (no auth required).

**Response:**
```json
{
  "status": "ok",
  "service": "sl-newsletter-api",
  "timestamp": "2024-02-01T12:00:00.000Z",
  "version": "1.0.0"
}
```

---

### `GET /api/status` (dev)

Returns configuration status (development only).

```json
{
  "brevo": "configured",
  "listId": 123,
  "webhookConfigured": true,
  "environment": "development"
}
```

---

### `GET /api/webhook-events` (dev only)

View logged webhook events from local file. **Disabled in production**.

---

## 🧪 Testing

### Manual Test with cURL

```bash
# 1. Subscribe a valid email
curl -X POST http://localhost:3001/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","hp_input":""}'

# 2. Try duplicate (should return 409)
curl -X POST http://localhost:3001/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","hp_input":""}'

# 3. Unsubscribe
curl -X DELETE http://localhost:3001/api/unsubscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# 4. Health check
curl http://localhost:3001/health
```

### Automated Test Script

```bash
node test-connection.js
```

Expected:
```
🔍 Initializing Brevo SDK...
✅ SDK initialized

🔎 Testing API access...
✅ Contact not found — API is working

🎉 Brevo connection verified successfully!
```

---

## 🔒 Security Features

| Feature | Implementation |
|---------|----------------|
| **Input Validation** | Joi schema (email format, required fields) |
| **Rate Limiting** | 5 requests per IP per minute (configurable) |
| **Honeypot Anti-Spam** | Hidden `hp_input` field — bots fill it → silent reject |
| **CORS** | Configurable allowed origins (default: `*` for dev) |
| **Security Headers** | Helmet.js (HSTS, CSP, X-Frame-Options, etc.) |
| **API Key Protection** | Stored in `.env`, never in source code |

---

## 🐛 Debugging & Logs

- **Server logs** — Subscription/unsubscribe events print to console with timestamps

Common Issues:
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `401 Unauthorized` | `BREVO_API_KEY` invalid/missing | Check `.env` file, regenerate key in Brevo |
| Contact not appearing | `BREVO_LIST_ID` is name, not numeric ID | Use numeric ID from URL |
| Duplicate contact error | `updateEnabled: false` in service | This is expected; send "already subscribed" message to user |

---

## 📦 Production Deployment

Before deploying:

- [ ] Update `BREVO_LIST_ID` to production list numeric ID
- [ ] Set `NODE_ENV=production`
- [ ] Set `ALLOWED_ORIGINS` to your frontend domain(s) only
- [ ] Set `updateEnabled: true` in `brevoService.js` if you want to allow updating existing contacts
- [ ] Enable **Double Opt-in** in Brevo list settings for GDPR compliance
- [ ] Add request logging (winston/pino) and error monitoring (Sentry)
- [ ] Use process manager (PM2, Docker, or platform service like Railway/Vercel)

---

## 📚 References

- [Brevo API v3 Docs](https://developers.brevo.com/reference)
- [Brevo Node.js SDK](https://github.com/sendinblue/Dev-Hub/tree/main/API-v3)
- [Webhooks Guide](https://developers.brevo.com/docs/webhooks-overview)
- [GDPR & Double Opt-in](https://help.brevo.com/hc/en-us/articles/8541824525879)

---

**Questions?** Check the main `BREVO_SUBSCRIPTION_GUIDE.md` in the project root.
