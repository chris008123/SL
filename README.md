# SL - Modern Technology Company Website

A production-ready, scalable, high-performance tech company website built with React, Tailwind CSS, and Framer Motion.

![SL Website](https://via.placeholder.com/1200x630/0ea5e9/ffffff?text=SL)

## 🚀 Features

### Core Features
- **Modern Tech Stack**: React 18 + Vite for blazing fast performance
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, engaging interactions
- **Routing**: React Router v6 for seamless navigation
- **Dark Mode**: Full dark/light mode support with system preference detection
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels

### Pages Included
- 🏠 **Home** - Hero, services, products, testimonials, CTA
- 👥 **About Us** - Mission, vision, values, team, timeline
- 🛠️ **Services** - Detailed service offerings with case studies
- 📦 **Products** - Product showcase with pricing and features
- 💼 **Careers** - Job listings, benefits, company culture
- 📝 **Blog** - Articles, categories, search functionality
- 📬 **Contact** - Form, contact info, map section
- 📄 **Legal** - Privacy Policy, Terms of Service

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18, Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM |
| Icons | Lucide React |
| Backend | Firebase (optional) |
| Deployment | Vercel |

## 📁 Project Structure

```
tech-company-website/
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── Navbar.jsx         # Navigation with dropdowns
│   │   ├── Footer.jsx         # Footer with newsletter
│   │   ├── BackToTop.jsx      # Scroll to top button
│   │   └── ui/
│   │       ├── Button.jsx     # Reusable button component
│   │       ├── Card.jsx       # Reusable card component
│   │       └── SectionHeading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Careers.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── NotFound.jsx
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark/light mode context
│   ├── config/
│   │   └── firebase.js        # Firebase configuration
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tech-company-website.git
   cd tech-company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
   VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change primary color
  },
  accent: {
    500: '#d946ef',  // Change accent color
  },
}
```

### Content
Edit the page files in `src/pages/` to customize text and content.

### Images
Replace placeholder images in the `public/` folder with your actual images.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔒 Security

- HTTPS enforced in production
- Environment variables for sensitive data
- Input validation on forms
- XSS protection via React
- CORS configuration for API calls

## 📈 SEO

The website includes:
- Semantic HTML structure
- Meta description tags
- Open Graph tags for social sharing
- Twitter card meta tags
- Sitemap generation (add sitemap.xml to public/)
- Robots.txt file

## 🌙 Dark Mode

Dark mode is automatically detected from system preferences and can be toggled via the navbar button. The preference is saved in localStorage.

## 🧪 Performance

- Code splitting via Vite
- Lazy loading for routes
- Optimized images (use WebP format)
- Minified production builds
- Gzip compression (configure on server)

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite project
4. Add environment variables in Vercel dashboard
5. Deploy!

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Environment Variables for Production
Make sure to set all `VITE_FIREBASE_*` variables in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)
- [Firebase](https://firebase.google.com/)

---

Built with ❤️ by [SL]

