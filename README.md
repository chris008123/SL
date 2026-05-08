# SL — Modern Technology Company Website

> A production-ready, high-performance React application with integrated newsletter subscription via Brevo. Built for scalability, accessibility, and seamless user experiences.

![SL Website](https://via.placeholder.com/1200x630/0ea5e9/ffffff?text=SL+Website)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [🔧 Configuration](#-configuration)
  - [Environment Variables](#environment-variables)
  - [Newsletter Integration (Brevo)](#newsletter-integration-brevo)
  - [Production Injection](#production-injection)
- [📡 API Reference](#-api-reference)
  - [Backend Newsletter API](#backend-newsletter-api)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Security & Privacy](#-security--privacy)
- [♿ Accessibility](#-accessibility)
- [📈 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📋 Overview

**SL** is a fully-featured corporate website built for a technology services company. It showcases the company's offerings, team, blog content, and includes a fully functional newsletter subscription system powered by **Brevo (Sendinblue)**.

The application consists of:

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18 + Vite | Fast, modern SPA with hot module replacement |
| **Styling** | Tailwind CSS | Utility-first CSS framework with custom theme |
| **Animations** | Framer Motion | Smooth page transitions & interactive effects |
| **Routing** | React Router v6 | Client-side navigation |
| **Backend** | Node.js + Express | REST API for newsletter subscription |
| **Email Service** | Brevo API | Contact management & newsletter delivery |

---

## ✨ Features

### Frontend

- **Dark Mode Toggle** — Automatic system preference detection with manual override
- **Smooth Animations** — Page transitions, hover effects, scroll-triggered reveals
- **Responsive Layout** — Mobile-first design across all breakpoints
- **Form Validation** — Client-side email validation with real-time feedback
- **Newsletter Subscription** — Inline signup forms in Footer & Blog page
- **SEO Optimization** — Meta tags, Open Graph, structured data, sitemap support
- **Accessibility** — ARIA labels, keyboard navigation, semantic HTML

### Backend

- **REST API** — Express.js server with rate limiting & input validation
- **Brevo Integration** — Direct REST calls to Brevo Contacts API (no SDK dependency)
- **Honeypot Anti-Spam** — Invisible field to trap bots
- **Duplicate Handling** — 409 response for already-subscribed emails
- **Error Mapping** — Brevo error codes translated to user-friendly messages

### User-Facing Pages

- **Home** — Hero, services overview, product highlights, CTA sections
- **About** — Mission, vision, team bios, company timeline
- **Services** — Detailed service cards with use cases
- **Products** — Product showcase with feature lists
- **Careers** — Job openings & company culture
- **Blog** — Articles with categories & reading time estimates
- **Contact** — Contact form + company contact details (email, phone, address)
- **Legal** — Privacy Policy, Terms of Service, Unsubscribe page

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend Framework** | React | 18.2.0 |
| **Build Tool** | Vite | 8.0.2 |
| **Styling** | Tailwind CSS | 3.4.0 |
| **Animations** | Framer Motion | 10.16.16 |
| **Routing** | React Router DOM | 6.21.0 |
| **Icons** | Lucide React | 0.294.0 |
| **Backend Runtime** | Node.js | ≥18.0.0 |
| **Backend Framework** | Express | 4.18.2 |
| **Validation** | Joi | 17.11.0 |
| **Email Service** | Brevo API (Sendinblue) | REST v3 |
| **Dev Tools** | ESLint | 8.55.0 |

---

## 📁 Project Structure

```
SL/
├── .env                      # Frontend environment (Vite)
├── .gitignore                # Git ignore rules
├── package.json              # Frontend dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind theme
├── postcss.config.js         # PostCSS config
├── PRODUCTION_TEMPLATE.md    # Production injection guide
├── production-values.json    # Production configuration (gitignored)
├── BREVO_SUBSCRIPTION_GUIDE.md  # Newsletter integration guide
│
├── backend/                  # Express newsletter API server
│   ├── .env                  # Backend secrets (gitignored)
│   ├── .env.example          # Environment template
│   ├── .gitignore            # Backend-specific ignores
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Express entry point
│   ├── routes/
│   │   └── subscribe.js      # Subscribe & unsubscribe endpoints
│   ├── services/
│   │   └── brevoService.js   # Brevo API client (native fetch)
│   └── test-*.js             # Connectivity & integration tests
│
├── public/                   # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── (og-image.jpg to be added)
│
└── src/
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx           # Contains newsletter signup
    │   ├── BackToTop.jsx
    │   ├── NewsletterSubscribe.jsx  # Reusable subscription form
    │   └── ui/
    │       ├── Button.jsx
    │       ├── Card.jsx
    │       └── SectionHeading.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── Products.jsx
    │   ├── Careers.jsx
    │   ├── Blog.jsx             # Contains newsletter CTA
    │   ├── Contact.jsx
    │   ├── Privacy.jsx
    │   ├── Terms.jsx
    │   ├── Unsubscribe.jsx      # Newsletter unsubscribe page
    │   └── NotFound.jsx
    │
    ├── context/
    │   └── ThemeContext.jsx     # Dark/light mode state
    │
    ├── services/
    │   └── newsletter.js        # Frontend API client
    │
    ├── App.jsx                 # Router & layout composition
    ├── main.jsx                # React entry point
    └── index.css               # Global styles + Tailwind imports
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0 (required for native `fetch` and `--watch` flags)
- **npm** ≥ 9.0.0
- **Git** (optional, for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sl-website.git
   cd sl-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your Brevo API key and list ID (see Configuration section)
   cd ..
   ```

4. **Start development servers** (two terminals)

   **Terminal 1 — Backend (port 3001):**
   ```bash
   cd backend
   npm run dev
   ```
   Output:
   ```
   🚀 Newsletter API listening on http://localhost:3001
   ✅ Brevo API client configured successfully
   ```

   **Terminal 2 — Frontend (port 3000):**
   ```bash
   npm run dev
   ```
   Open browser to `http://localhost:3000`

---

## 🔧 Configuration

### Environment Variables

#### Frontend (`.env` in project root)

```env
# Backend API URL for newsletter subscription
VITE_API_URL=http://localhost:3001
```

#### Backend (`backend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `BREVO_API_KEY` | ✅ Yes | Brevo API v3 key (Dashboard → SMTP & API → API Keys) |
| `BREVO_LIST_ID` | ✅ Yes | Numeric ID of contact list (Contacts → Lists → click list → check URL) |
| `PORT` | ❌ No | Server port (default: `3001`) |
| `NODE_ENV` | ❌ No | `development` or `production` |
| `ALLOWED_ORIGINS` | ⚠️ Prod | Comma-separated CORS origins (e.g., `https://sl.vercel.app`) |

> **⚠️ Important**: Never commit `.env` files. `.gitignore` already excludes them.

### Newsletter Integration (Brevo)

1. **Create a Brevo account** at [brevo.com](https://www.brevo.com)
2. **Create a contact list** → Contacts → Lists → "Create a List"
3. **Get your list ID** — Click the list; browser URL ends with `/lists/123` → `123` is the ID
4. **Generate an API key** — SMTP & API → API Keys → "Create a New API Key" (permissions: Contacts - Read & Write)
5. **Update `backend/.env`:**
   ```env
   BREVO_API_KEY=xkeysib-...
   BREVO_LIST_ID=123
   ```
6. **Double Opt-In** — Enable/disable in Brevo list settings (confirmation email toggle)

---

## 📡 API Reference

### Backend Newsletter API

**Base URL:** `http://localhost:3001` (dev) or `https://api.yourdomain.com` (prod)

#### `POST /api/subscribe`

Subscribe an email address to the newsletter.

**Request:**
```json
{
  "email": "user@example.com",
  "source": "footer",   // optional: tracks where signup originated
  "hp_input": ""        // honeypot: left empty by humans, filled by bots
}
```

**Responses:**

| Status | Body | Meaning |
|--------|------|---------|
| `200` | `{ success: true, message: "...", data: { contactId, email } }` | Subscribed successfully |
| `400` | `{ success: false, message: "...", errors: [...] }` | Invalid email or validation failed |
| `409` | `{ success: false, message: "This email is already subscribed..." }` | Email already in list |
| `429` | `{ success: false, message: "Too many requests..." }` | Rate limit exceeded (5/min per IP) |
| `500` | `{ success: false, message: "Service unavailable..." }` | Brevo or server error |

**Example (cURL):**
```bash
curl -X POST http://localhost:3001/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","hp_input":""}'
```

---

#### `DELETE /api/unsubscribe`

Remove an email from the newsletter list.

**Request:**
```json
{ "email": "user@example.com" }
```

**Responses:**

| Status | Body | Meaning |
|--------|------|---------|
| `200` | `{ success: true, message: "Successfully unsubscribed..." }` | Removed from list |
| `400` | `{ success: false, message: "Valid email required." }` | Invalid email format |
| `500` | `{ success: false, message: "Unable to unsubscribe..." }` | Server/Brevo error |

**Example (cURL):**
```bash
curl -X DELETE http://localhost:3001/api/unsubscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

#### `GET /health`

Health check endpoint (used by monitoring/load balancers).

**Response:**
```json
{
  "status": "ok",
  "service": "sl-newsletter-api",
  "timestamp": "2026-05-08T03:00:00.000Z",
  "version": "1.0.0",
  "endpoints": {
    "subscribe": "POST /api/subscribe",
    "unsubscribe": "DELETE /api/unsubscribe"
  }
}
```

---

## 🧪 Testing

### Run Backend Tests

```bash
cd backend

# Test Brevo API connectivity (no server required)
npm run test:connection

# Run full integration test (starts server, subscribes, then unsubscribes)
npm run test:integration
```

### Frontend Development

```bash
npm run dev        # Start Vite dev server on http://localhost:3000
npm run build      # Create production build in dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint (if configured)
```

---

## 🚢 Deployment

### Deploy Frontend (Vercel — Recommended)

1. Push code to GitHub
2. Log in to [Vercel](https://vercel.com) → "New Project"
3. Import your repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**:
     - `VITE_API_URL` = `https://api.yourdomain.com` (your deployed backend URL)
5. Deploy

### Deploy Backend (Vercel / Railway / Render)

**Vercel (Node.js Serverless):**
- Place `server.js`, `routes/`, `services/` in a `api/` folder at the project root
- Vercel will treat it as a serverless function
- Or deploy as standalone Node.js app with `vercel.json` config

**Railway / Render (Container/VM):**
```bash
cd backend
npm install --production
npm start
```

Set environment variables in the platform dashboard (`BREVO_API_KEY`, `BREVO_LIST_ID`, `NODE_ENV=production`).

**Production Checklist:**

- [ ] `BREVO_LIST_ID` set to production list numeric ID
- [ ] `VITE_API_URL` points to production backend endpoint
- [ ] `ALLOWED_ORIGINS` restricted to frontend domain(s)
- [ ] Double Opt-In configured in Brevo (GDPR compliance)
- [ ] Domain authentication set up in Brevo (SPF/DKIM)
- [ ] HTTPS enforced (SSL certificate)
- [ ] Monitoring/alerting configured (optional: Sentry, Datadog)

---

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0ea5e9',  // Change primary brand color
          600: '#0284c7',
        },
        accent: {
          500: '#d946ef',  // Change accent color
        },
      },
    },
  },
}
```

### Content

- **Pages**: Edit files in `src/pages/`
- **Footer/Newsletter**: Edit `src/components/Footer.jsx` and `src/components/NewsletterSubscribe.jsx`
- **Contact Info**: Update `production-values.json` (see Production Injection below)
- **Legal Pages**: Privacy/Terms content in `src/pages/Privacy.jsx`, `Terms.jsx`

### Images

- **Favicon**: Replace `public/favicon.svg`
- **OG Image**: Create `public/og-image.jpg` (1200×630px)
- **Hero/Service images**: Add to `public/` and reference in page components

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | `640px` | Large phones |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Laptops |
| `xl` | `1280px` | Desktops |
| `2xl` | `1536px` | Large screens |

All pages are designed mobile-first and scale up gracefully.

---

## 🔒 Security & Privacy

- **Environment Variables** — All secrets stored in `.env` (gitignored)
- **Input Validation** — Frontend regex + backend Joi schema validation
- **Rate Limiting** — 5 subscription requests per minute per IP
- **Honeypot** — Hidden form field traps bots without impacting UX
- **CORS** — Configurable allowed origins (restricted in production)
- **Security Headers** — Helmet.js sets CSP, HSTS, X-Frame-Options, etc.
- **HTTPS** — Enforced in production (Vercel auto-provisions SSL)
- **GDPR Compliance** — Double opt-in support; data export/deletion via unsubscribe

**Privacy Policy** available at `/privacy`; **Terms** at `/terms`.

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast meets WCAG AA guidelines
- Screen-reader friendly form labels

---

## 📈 Performance

| Metric | Target | Implementation |
|--------|--------|----------------|
| **LCP** | ≤ 2.5s | Optimized images, code splitting, Vite prebundling |
| **FID** | ≤ 100ms | Deferred non-critical JS, small bundle size |
| **CLS** | ≤ 0.1 | Reserved image aspect-ratio boxes, no layout shifts |
| **Bundle Size** | < 200KB gzipped | Tree-shaking, dynamic imports, minimal dependencies |

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make changes** — follow existing code style (Prettier + ESLint)
4. **Test locally** — ensure frontend and backend work
5. **Commit with clear messages**: `git commit -m "feat: add newsletter toast notifications"`
6. **Push & open PR** — describe changes, reference issues

**Conventions:**
- Follow [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `docs:`, etc.)
- Keep PRs focused and small
- Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

Built with these amazing open-source technologies:

- [React](https://reactjs.org/) — UI library
- [Vite](https://vitejs.dev/) — Next-gen frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lucide Icons](https://lucide.dev/) — Beautiful icon set
- [React Router](https://reactrouter.com/) —client-side routing
- [Express.js](https://expressjs.com/) — Backend framework
- [Brevo](https://www.brevo.com/) — Email marketing platform

---

## 📞 Contact

For questions about this project:

- **Email**: techsl9181@gmail.com
- **GitHub**: [@techsl9181-hue](https://github.com/techsl9181-hue)
- **LinkedIn**: [Tech SL](https://www.linkedin.com/in/tech-sl-954995405/)
- **Twitter**: [@TechSl72541](https://x.com/TechSl72541)

---

## 🗺️ Roadmap

- [ ] Add reCAPTCHA v3 to newsletter forms
- [ ] Implement newsletter preference center (manage subscription)
- [ ] Add analytics dashboard (page views, subscription metrics)
- [ ] Create admin panel for content management
- [ ] Multi-language support (i18n)
- [ ] PWA features (offline mode, install banner)

---

> **Note:** Newsletter subscription functionality is provided via a separate Express.js backend (`backend/` folder) that communicates with the Brevo API. See `BREVO_SUBSCRIPTION_GUIDE.md` for detailed architecture.
