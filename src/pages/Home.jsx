import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Code, Cloud, Shield, Cpu, BarChart3, Users, Globe, Zap,
  CheckCircle, Star, Play, ChevronRight 
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Trusted companies logos (placeholder)
const trustedCompanies = [
  { name: 'TechCorp', initial: 'TC' },
  { name: 'InnovateLabs', initial: 'IL' },
  { name: 'FutureScale', initial: 'FS' },
  { name: 'CloudFirst', initial: 'CF' },
  { name: 'DataDriven', initial: 'DD' },
  { name: 'NextGen', initial: 'NG' },
]

// Services data
const services = [
  {
    icon: Code,
    title: 'Web & Mobile Development',
    description: 'Custom applications built with modern frameworks for seamless user experiences across all devices.',
    features: ['React & Next.js', 'React Native', 'Progressive Web Apps', 'API Integration'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced algorithms to automate and optimize your business processes.',
    features: ['Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure and deployment strategies that grow with your business needs.',
    features: ['AWS & Azure', 'Serverless Architecture', 'DevOps & CI/CD', 'Containerization'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive protection for your digital assets with enterprise-grade security measures.',
    features: ['Penetration Testing', 'Compliance Audits', 'Security Monitoring', 'Incident Response'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced visualization and reporting tools.',
    features: ['Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Predictive Modeling'],
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge technology and strategic digital initiatives.',
    features: ['Process Automation', 'Legacy Migration', 'Digital Strategy', 'Change Management'],
  },
]

// Stats data
const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support Available' },
]

// Testimonials data
const testimonials = [
  {
    content: "SL transformed our digital presence with a stunning website and powerful AI features. Our conversion rates increased by 40% within the first month.",
    author: 'Sarah Chen',
    role: 'CEO, InnovateLabs',
    avatar: 'SC',
    rating: 5,
  },
  {
    content: "Their cloud solutions are exceptional. We scaled from 10k to 1M users seamlessly. The team is responsive, professional, and truly understands our needs.",
    author: 'Michael Rodriguez',
    role: 'CTO, ScaleUp Inc',
    avatar: 'MR',
    rating: 5,
  },
  {
    content: "The AI implementation they built for us automated 60% of our customer support. Incredible ROI and the team was a pleasure to work with.",
    author: 'Emily Watson',
    role: 'VP Product, DataDriven',
    avatar: 'EW',
    rating: 5,
  },
]

// Products/Platforms data
const products = [
  {
    name: 'CloudFlow',
    description: 'Enterprise cloud management platform',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AI Assistant',
    description: 'Intelligent automation for your workflow',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'DataSync Pro',
    description: 'Real-time data synchronization',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Security Shield',
    description: 'Advanced threat protection',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Zap className="w-4 h-4 mr-2" />
                  Next-Generation Technology
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-900 dark:text-white mb-6 leading-tight">
                Build the Future with{' '}
                <span className="gradient-text">Innovative Tech</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                We craft cutting-edge software solutions that transform businesses. 
                From AI to cloud infrastructure, we deliver the technology of tomorrow, today.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/products" className="btn-secondary w-full sm:w-auto">
                  <Play className="mr-2 w-5 h-5" />
                  View Products
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-dark-500 dark:text-dark-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm"> NDA Protected</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image/Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 lg:right-10 glass-card p-6 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900 dark:text-white">Web Development</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">React & Node.js</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 lg:left-10 glass-card p-6 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900 dark:text-white">AI Solutions</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Machine Learning</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card p-8 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <p className="font-bold text-xl text-dark-900 dark:text-white">500+</p>
                    <p className="text-dark-500 dark:text-dark-400">Projects Delivered</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-dark-100 dark:border-dark-800">
        <div className="container-custom">
          <p className="text-center text-sm font-semibold text-dark-500 dark:text-dark-400 mb-8">
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-dark-400 dark:text-dark-500"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center font-bold text-dark-600 dark:text-dark-400">
                  {company.initial}
                </div>
                <span className="font-semibold">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Services"
            title="Comprehensive Tech Solutions"
            subtitle="End-to-end development services tailored to your unique business requirements"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} hover={true} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services" 
                  className="inline-flex items-center mt-4 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Products"
            title="Powerful Platforms"
            subtitle="Industry-leading products built on cutting-edge technology"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-dark-100 dark:border-dark-800 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  {product.description}
                </p>
                
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:underline"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <SectionHeading 
                badge="Why SL"
                title="Building Tomorrow's Technology Today"
                subtitle="We're not just developers – we're strategic partners invested in your success"
                align="left"
              />

              <div className="space-y-6">
                {[
                  { title: 'Cutting-Edge Technology', desc: 'We use the latest frameworks and tools to deliver future-proof solutions.' },
                  { title: 'Agile Development', desc: 'Iterative approach with regular demos and fast iterations to ensure your vision becomes reality.' },
                  { title: 'Scalable Architecture', desc: 'Built to grow with your business, handling millions of users without breaking a sweat.' },
                  { title: '24/7 Support', desc: 'Dedicated support team available around the clock to address any issues.' },
                  { title: 'Security First', desc: 'Enterprise-grade security built into every line of code we write.' },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 mr-4">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-dark-600 dark:text-dark-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-dark-50 dark:bg-dark-800 rounded-2xl flex items-center justify-center">
                      <Code className="w-12 h-12 text-primary-500" />
                    </div>
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                      <Cpu className="w-12 h-12 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Cloud className="w-12 h-12 text-white" />
                    </div>
                    <div className="bg-dark-900 dark:bg-dark-800 rounded-2xl flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – hear from the companies we've helped transform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.author} delay={index * 0.1}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-dark-600 dark:text-dark-400 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGE1ZTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJjMCAwLTItMi0yLTRzMi00IDItNCAyIDIgNCAyczQtMiA0LTJjMCAwIDItMiAyLTRzMi00IDItNCAyIDIgNCAyczQtMiA0LTJjMCAwIDItMiAyLTRzMi00IDItNHMtMi0yLTQtMmMwIDAtMi0yLTItNHMyLTQgMi00czItMiA0LTJjMCAwIDItMiAyLTRzMi00IDItNHMtMi0yLTQtMmMwIDAtMi0yLTItNHMyLTQgMi00czItMiA0LTJjMCAwIDItMiAyLTRzMi00IDItNHoiLz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8">
                Let's build something extraordinary together. Schedule a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-outline w-full sm:w-auto">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
