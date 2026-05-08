import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin,
  ArrowRight, CheckCircle2 
} from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Press', path: '/#' },
  ],
  Services: [
    { name: 'Web Development', path: '/services#web-dev' },
    { name: 'AI & Machine Learning', path: '/services#ai-ml' },
    { name: 'Cloud Solutions', path: '/services#cloud' },
    { name: 'Cybersecurity', path: '/services#security' },
  ],
  Products: [
    { name: 'CloudFlow', path: '/products#cloudflow' },
    { name: 'AI Assistant', path: '/products#ai-assistant' },
    { name: 'DataSync Pro', path: '/products#datasync' },
    { name: 'Security Shield', path: '/products#security' },
  ],
  Resources: [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Help Center', path: '/help' },
    { name: 'Status', path: '/status' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/techsl9181-hue' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/TechSl72541/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/tech-sl-954995405/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/techsl9181/' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 dark:bg-dark-950 border-t border-dark-800">
      {/* Newsletter Section */}
      <div className="border-b border-dark-800">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-dark-400">
                Get the latest tech insights and company updates delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                <span>Subscribe</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SL</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                SL
              </span>
            </Link>
            <p className="text-dark-400 mb-6 max-w-sm">
              Transforming businesses with cutting-edge AI, cloud solutions, and digital innovation. Build the future with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@yourdomain.com" className="flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>hello@yourdomain.com</span>
              </a>
              <a href="tel:+233534555395, +233547645984" className="flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+233 53 455 5395</span>
              </a>
              <div className="flex items-center space-x-2 text-dark-400">
                <MapPin className="w-4 h-4" />
                <span>Unity Hall Street, Kumasi, Ghana</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-dark-400 text-sm">
              <span>© {new Date().getFullYear()} SL. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <Link to="/privacy" className="hover:text-primary-400 transition-colors duration-200">Privacy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-primary-400 transition-colors duration-200">Terms</Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-primary-400 transition-colors duration-200">Cookies</Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-white hover:bg-dark-700 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
