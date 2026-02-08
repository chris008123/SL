import { motion } from 'framer-motion'
import { Shield, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'Personal information such as name, email address, and phone number when you contact us or subscribe to our newsletter.',
      'Company information including company name, job title, and industry.',
      'Usage data and analytics about how you interact with our website.',
      'Technical data such as IP address, browser type, and operating system.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To provide and improve our services to you.',
      'To communicate with you about our products, services, and events.',
      'To process your job applications and evaluate your candidacy.',
      'To comply with legal obligations and protect our rights.',
    ],
  },
  {
    title: '3. Data Sharing and Disclosure',
    content: [
      'We do not sell your personal information to third parties.',
      'We may share information with service providers who assist in our operations.',
      'We may disclose information if required by law or to protect our rights.',
      'In the event of a merger or acquisition, your information may be transferred.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We implement industry-standard security measures to protect your data.',
      'All data is encrypted in transit and at rest where applicable.',
      'We regularly audit our security practices and update them as needed.',
      'We limit access to your personal information to authorized personnel only.',
    ],
  },
  {
    title: '5. Cookies and Tracking',
    content: [
      'We use cookies to enhance your browsing experience and analyze site traffic.',
      'You can control cookies through your browser settings.',
      'We may use third-party analytics services like Google Analytics.',
      'Marketing cookies require your explicit consent.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information.',
      'You can opt out of marketing communications at any time.',
      'You have the right to request a copy of your data in a portable format.',
      'You can lodge a complaint with a supervisory authority.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain your personal information for as long as necessary.',
      'Data related to active business relationships is retained indefinitely.',
      'Job application data is retained for 2 years after submission.',
      'Analytics data is anonymized and retained for reporting purposes.',
    ],
  },
  {
    title: '8. International Data Transfers',
    content: [
      'Your information may be transferred to and processed in countries other than your own.',
      'We ensure appropriate safeguards are in place for international transfers.',
      'We comply with applicable data protection regulations.',
      'Standard contractual clauses are used for EU data transfers.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this policy from time to time.',
      'We will notify you of any material changes via email or website notice.',
      'The updated policy will be effective upon posting.',
      'We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have questions about this privacy policy, please contact us.',
      'Our Data Protection Officer can be reached at dpo@sl.com.',
      'We will respond to your inquiry within 30 days.',
    ],
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mr-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-dark-900 dark:text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Last updated: February 1, 2024
            </p>
          </div>

          {/* Intro */}
          <div className="bg-dark-50 dark:bg-dark-900 rounded-2xl p-6 mb-12">
            <p className="text-dark-700 dark:text-dark-300">
              At SL, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services. Please read 
              this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do 
              not access the site.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-dark-600 dark:text-dark-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 rounded-2xl gradient-bg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Our Privacy Practices?
            </h3>
            <p className="text-primary-100 mb-6">
              If you have any questions or concerns about this privacy policy, please don't hesitate to contact us.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
