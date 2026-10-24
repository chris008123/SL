// Central SEO settings for the whole site.
//
// The main address is https://sl-gh.com (no "www"). In Vercel, set
// www.sl-gh.com to redirect to sl-gh.com so Google sees one version only.
//
// If you ever change domain, update SITE_URL here and the same address in:
//   - index.html   (canonical, og:url, og:image, JSON-LD)
//   - public/sitemap.xml
//   - public/robots.txt (Sitemap line)

export const SITE_URL = 'https://sl-gh.com'
export const SITE_NAME = 'SL'
export const DEFAULT_IMAGE = '/og-image.jpg'

// Titles: keep under ~60 characters. Descriptions: keep under ~155.
// Keywords focus on Ghana (Kumasi / Accra) while staying readable for
// international visitors.
export const ROUTE_SEO = {
  '/': {
    title: 'SL | Web Development, AI & Cloud Solutions in Ghana',
    description:
      'SL builds websites, web apps, AI solutions and secure cloud systems for businesses in Ghana and abroad. Get a free consultation today.',
  },
  '/about': {
    title: 'About SL | Technology Company in Kumasi & Accra, Ghana',
    description:
      'Meet SL, a Ghana-based technology company with offices in Kumasi and Accra, helping businesses grow with modern software and AI.',
  },
  '/services': {
    title: 'Web, AI, Cloud & Cybersecurity Services in Ghana | SL',
    description:
      'Web development, AI and machine learning, cloud solutions and cybersecurity for Ghanaian businesses and international clients. Request a quote.',
  },
  '/products': {
    title: 'Our Projects & Platforms | Built by SL in Ghana',
    description:
      'Explore platforms and apps built by SL, from e-commerce and education tools to restaurant and media products made in Ghana.',
  },
  '/careers': {
    title: 'Tech Careers in Ghana | Join SL in Accra & Kumasi',
    description:
      'Explore open roles at SL in Accra and Kumasi. Join a growing Ghanaian tech team building web, AI and cloud products.',
  },
  '/blog': {
    title: 'Tech Blog | AI, Cloud & Digital Insights from SL',
    description:
      'Practical articles on AI, cloud, cybersecurity, data and digital transformation from the SL team in Ghana.',
  },
  '/contact': {
    title: 'Contact SL | Get a Quote for Your Project in Ghana',
    description:
      'Talk to SL about your website, app or AI project. Visit us in Kumasi, call, or send a message and we will reply within 24 hours.',
  },
  '/privacy': {
    title: 'Privacy Policy | SL',
    description: 'How SL collects, uses and protects your personal information.',
  },
  '/terms': {
    title: 'Terms of Service | SL',
    description: 'The terms that apply when you use the SL website and services.',
  },
  '/unsubscribe': {
    title: 'Unsubscribe | SL',
    description: 'Unsubscribe from the SL newsletter.',
    noindex: true,
  },
}

// Used for any URL that is not in ROUTE_SEO (a real "page not found").
export const NOT_FOUND_SEO = {
  title: 'Page Not Found | SL',
  description: 'The page you are looking for does not exist or has moved.',
  noindex: true,
}
