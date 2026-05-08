import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  ArrowRight, CheckCircle, Linkedin, Twitter, Github, Instagram
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@yourdomain.com',
    href: 'mailto:hello@yourdomain.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+233 53 455 5395, +233 54 764 5984',
    href: 'tel:+233534555395',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Unity Hall Street, Kumasi, Ghana',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon - Fri: 9AM - 6PM PST',
    href: null,
  },
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tech-sl-954995405/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/TechSl72541/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/techsl9181-hue/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/techsl9181/' },
]

const services = [
  'Web Development',
  'AI & Machine Learning',
  'Cloud Solutions',
  'Cybersecurity',
  'Mobile Development',
  'Data Analytics',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400">
              Have a project in mind? Get in touch and let's discuss how we can help transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                      Thank You!
                    </h2>
                    <p className="text-dark-600 dark:text-dark-400 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Project Budget
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['$10K - $25K', '$25K - $50K', '$50K - $100K', '$100K+'].map((budget) => (
                            <label key={budget} className="cursor-pointer">
                              <input
                                type="radio"
                                name="budget"
                                value={budget}
                                onChange={handleChange}
                                className="sr-only peer"
                              />
                              <span className="block px-4 py-3 text-center text-sm rounded-lg border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/30 peer-checked:text-primary-600 dark:peer-checked:text-primary-400 transition-colors">
                                {budget}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full md:w-auto">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </Card>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-900 dark:text-white">{item.title}</p>
                        <p className="text-dark-600 dark:text-dark-400">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* FAQ Preview */}
              <Card>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                  Quick FAQ
                </h3>
                <div className="space-y-3">
                  {[
                    'What is your typical project timeline?',
                    'Do you offer ongoing support?',
                    'What is your payment structure?',
                  ].map((faq, index) => (
                    <div key={index} className="flex items-center text-dark-600 dark:text-dark-400">
                      <MessageSquare className="w-4 h-4 mr-3 text-primary-500" />
                      <span className="text-sm">{faq}</span>
                    </div>
                  ))}
                </div>
                <a href="/faq" className="inline-flex items-center mt-4 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline">
                  View all FAQs
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Locations"
            title="Our Global Presence"
            subtitle="Offices around the world ready to serve you"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'San Francisco', address: '123 Innovation Drive, CA 94105', timezone: 'PST (UTC-8)' },
              { city: 'New York', address: '456 Tech Avenue, NY 10001', timezone: 'EST (UTC-5)' },
              { city: 'London', address: '789 Innovation Blvd, EC1A 1BB', timezone: 'GMT (UTC+0)' },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    {office.city}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 mb-2">{office.address}</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">{office.timezone}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
