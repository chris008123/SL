import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = true,
  delay = 0,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
      className={`bg-white dark:bg-dark-900 rounded-2xl shadow-lg border border-dark-100 dark:border-dark-800 ${
        padding ? 'p-6 md:p-8' : ''
      } ${hover ? 'hover:shadow-2xl cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
