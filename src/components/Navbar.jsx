import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  Menu, X, Sun, Moon, ChevronDown 
} from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: [
    { name: 'Web Development', path: '/services#web-dev' },
    { name: 'AI & ML', path: '/services#ai-ml' },
    { name: 'Cloud Solutions', path: '/services#cloud' },
    { name: 'Cybersecurity', path: '/services#security' },
  ]},
  { name: 'Products', path: '/products' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const navSpring = { type: 'spring', stiffness: 300, damping: 32, mass: 0.9 }

const pillVariants = {
  top: {
    width: '100%',
    marginTop: 0,
    borderRadius: 0,
    backgroundColor: 'rgba(15,15,20,0)',
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
    boxShadow: '0 0px 0px rgba(0,0,0,0)',
    borderColor: 'rgba(255,255,255,0)',
  },
  scrolled: {
    width: '91%',
    marginTop: 16,
    borderRadius: 999,
    backgroundColor: 'rgba(15,15,20,0.65)',
    backdropFilter: 'blur(22px)',
    WebkitBackdropFilter: 'blur(22px)',
    boxShadow: '0 20px 45px -12px rgba(0,0,0,0.45)',
    borderColor: 'rgba(255,255,255,0.08)',
  },
}

const heightVariants = {
  top: { height: 88 },
  scrolled: { height: 68 },
}

const logoVariants = {
  top: { scale: 1 },
  scrolled: { scale: 0.9 },
}

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()

  const state = scrolled ? 'scrolled' : 'top'

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial="top"
        animate={state}
        variants={pillVariants}
        transition={navSpring}
        className="pointer-events-auto border"
        style={{ borderStyle: 'solid' }}
      >
        <motion.div
          variants={heightVariants}
          animate={state}
          transition={navSpring}
          className="container-custom flex items-center justify-between px-4 lg:px-6"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src="/favicon.svg"
              alt="Logo"
              variants={logoVariants}
              animate={state}
              transition={navSpring}
              className={`w-9 origin-left transition-[height] duration-300 ${
                scrolled ? 'h-9' : 'h-11'
              }`}
            />
            <span
              className="font-display font-bold text-xl text-dark-900 dark:text-white transition-colors duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative z-10 flex items-center px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                      isActive
                        ? scrolled
                          ? 'text-primary-400'
                          : 'text-primary-600 dark:text-primary-400'
                        : scrolled
                          ? 'text-dark-300 hover:text-white'
                          : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Sliding active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute inset-0 rounded-full backdrop-blur-sm ${
                        scrolled ? 'bg-white/10' : 'bg-dark-900/5 dark:bg-white/10'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}

                  {/* Subtle hover indicator */}
                  {!isActive && activeDropdown === link.name && (
                    <motion.div
                      layoutId="hoverIndicator"
                      className={`absolute inset-0 rounded-full ${
                        scrolled ? 'bg-white/5' : 'bg-dark-900/5 dark:bg-white/5'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-3 w-60 rounded-2xl overflow-hidden border"
                        style={{
                          background: 'rgba(15,15,20,0.75)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          borderColor: 'rgba(255,255,255,0.08)',
                          boxShadow: '0 20px 45px -12px rgba(0,0,0,0.5)',
                        }}
                      >
                        <div className="py-2">
                          {link.dropdown.map((item, i) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.03 * i, duration: 0.18 }}
                            >
                              <Link
                                to={item.path}
                                className="block px-4 py-2.5 text-sm text-dark-200 hover:text-white hover:bg-white/5 transition-colors duration-200"
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? 'text-dark-300 hover:bg-white/10'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-900/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center px-5 py-2.5 rounded-full font-medium text-white bg-primary-600 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.55)]"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? 'text-dark-300 hover:bg-white/10'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-900/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? 'text-dark-300 hover:bg-white/10'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-900/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden mx-4 mb-4 rounded-2xl border"
              style={{
                background: 'rgba(15,15,20,0.8)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 20px 45px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="py-4 px-2 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                        location.pathname === link.path
                          ? 'text-primary-400 bg-white/10'
                          : 'text-dark-200 hover:bg-white/5'
                      }`}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault()
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        }
                      }}
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="pl-4 overflow-hidden"
                        >
                          <div className="py-2 space-y-1">
                            {link.dropdown.map((item, i) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.03 * i, duration: 0.18 }}
                              >
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2 text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 px-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-5 py-3 rounded-full font-medium text-white bg-primary-600 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.55)]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
