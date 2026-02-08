import { motion } from 'framer-motion'
import { FileText, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
      'If you do not agree to abide by these terms, please do not use this website.',
      'SL reserves the right to change these terms at any time. Continued use of the site constitutes acceptance of changes.',
      'These terms apply to all visitors, users, and others who access or use the service.',
    ],
  },
  {
    title: '2. Use of Services',
    content: [
      'Our services are intended for business purposes. By using our services, you represent that you are at least 18 years old.',
      'You agree not to use our services for any illegal or unauthorized purpose.',
      'You agree not to interfere with or disrupt our services or servers.',
      'You agree to provide accurate and complete information when using our services.',
    ],
  },
  {
    title: '3. Intellectual Property',
    content: [
      'All content, features, and functionality on this website are owned by SL and are protected by international copyright laws.',
      'The trademarks, logos, and service marks displayed on this site are the property of SL or third parties.',
      'You may not modify, copy, reproduce, publish, transmit, or distribute any material from this site without written consent.',
      'Our product names, logos, and designs are trademarks of SL in the United States and other countries.',
    ],
  },
  {
    title: '4. User Content',
    content: [
      'By submitting content to our website (such as comments or contact form submissions), you grant SL a worldwide, royalty-free license.',
      'You retain ownership of your content but grant us the right to use, modify, and display it.',
      'You are responsible for the content you submit and its legality.',
      'We reserve the right to remove any user content that violates these terms.',
    ],
  },
  {
    title: '5. Disclaimers',
    content: [
      'Our services are provided "as is" and "as available" without any warranties of any kind.',
      'SL does not warrant that the service will be uninterrupted, timely, or error-free.',
      'We make no representations about the accuracy or completeness of content on this site.',
      'Any reliance on material on this site is at your own risk.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'In no event shall SL be liable for any indirect, incidental, special, consequential, or punitive damages.',
      'Our total liability to you for any claims arising from your use of services shall not exceed the amount paid by you.',
      'We shall not be liable for any loss of profits, business, or data arising out of your use of our services.',
      'This limitation applies even if we have been advised of the possibility of such damages.',
    ],
  },
  {
    title: '7. Indemnification',
    content: [
      'You agree to defend, indemnify, and hold harmless SL from any claims, damages, or expenses arising from your use of services.',
      'This includes reasonable attorneys fees and costs.',
      'You agree to cooperate with us in the defense of any such claims.',
      'This indemnification obligation survives termination of these terms.',
    ],
  },
  {
    title: '8. Termination',
    content: [
      'We may terminate or suspend your access to our services immediately, without prior notice, for conduct we believe violates these terms.',
      'Upon termination, your right to use the services will immediately cease.',
      'All provisions of these terms that should survive termination will survive, including ownership provisions.',
      'We may discontinue or modify our services at any time with reasonable notice.',
    ],
  },
  {
    title: '9. Governing Law',
    content: [
      'These terms shall be governed by and construed in accordance with the laws of California, United States.',
      'Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in California.',
      'If any provision of these terms is found to be unenforceable, the remaining provisions remain in effect.',
      'Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right.',
    ],
  },
  {
    title: '10. Contact Information',
    content: [
      'If you have questions about these terms, please contact us.',
      'Our legal team can be reached at legal@technova.com.',
      'We will respond to your inquiry within 30 business days.',
    ],
  },
]

export default function Terms() {
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
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-dark-900 dark:text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Last updated: February 1, 2024
            </p>
          </div>

          {/* Intro */}
          <div className="bg-dark-50 dark:bg-dark-900 rounded-2xl p-6 mb-12">
            <p className="text-dark-700 dark:text-dark-300">
              These Terms of Service ("Terms") govern your access to and use of SL's website and services. 
              Please read these terms carefully before using our website or services. By accessing or using our services, 
              you agree to be bound by these Terms and our Privacy Policy.
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
              Questions About These Terms?
            </h3>
            <p className="text-primary-100 mb-6">
              If you have any questions or concerns about these terms of service, please contact our legal team.
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
