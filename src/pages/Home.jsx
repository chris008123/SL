import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Code, Cloud, Shield, Cpu, BarChart3, Users, Globe, Zap,
  CheckCircle, Star, Play, ChevronRight 
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import heroIllustration from '../assets/hero-illustration.png'

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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white dark:bg-dark-950 pt-16 lg:pt-20 pb-0 min-h-[calc(100vh-68px)] flex flex-col justify-center">

        {/* Very subtle dot grid texture — matches the mockup's white bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

            {/* ── LEFT ── */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="py-12 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-primary-200 dark:border-primary-700 bg-white dark:bg-dark-900 text-primary-600 dark:text-primary-400 shadow-sm">
                  <Zap className="w-3.5 h-3.5" />
                  Next-Generation Technology
                </span>
              </motion.div>

              {/* Headline — matches mockup weight & size */}
              <motion.h1
                variants={fadeInUp}
                className="font-bold leading-[1.06] tracking-tight mb-6 text-dark-900 dark:text-white"
                style={{ fontSize: 'clamp(32px, 7vw, 68px)' }}
              >
                Build the Future<br />
                with{' '}
                <span className="gradient-text">Innovative</span>
                <br />
                <span className="gradient-text">Tech</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-dark-500 dark:text-dark-400 mb-8 max-w-[420px] mx-auto lg:mx-0 leading-relaxed"
              >
                We craft cutting-edge software solutions that transform
                businesses. From AI to cloud infrastructure, we deliver the
                technology of tomorrow, today.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-10"
              >
                <Link
                  to="/contact"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  View Products
                </Link>
              </motion.div>

              {/* Trust row */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 justify-center lg:justify-start"
              >
                {['100% Satisfaction', 'NDA Protected', '24/7 Support'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── MOBILE illustration — shown below text on small screens ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="lg:hidden flex items-center justify-center w-full pb-8"
            >
              <img
                src={heroIllustration}
                alt="Tech team working with AI, cloud and data tools"
                className="w-full object-contain"
                style={{
                  maxWidth: '420px',
                  height: 'auto',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 12px 24px rgba(99,102,241,0.12))',
                }}
              />
            </motion.div>

            {/* ── RIGHT — illustration column ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center self-stretch"
              style={{ minHeight: '520px' }}
            >


              {/* Illustration — enlarged, overflows column for bold background presence */}
              <img
                src={heroIllustration}
                alt="Tech team working with AI, cloud and data tools"
                className="relative w-full object-contain"
                style={{
                  maxWidth: '1000px',
                  width: '130%',
                  height: 'auto',
                  marginTop: '-80px',
                  marginBottom: '-40px',
                  marginRight: '0px',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 20px 40px rgba(99,102,241,0.15))',
                }}
              />

              {/* ── Floating card: Web Development — top right ── */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[8%] right-[0%] bg-white dark:bg-dark-900 rounded-2xl shadow-lg border border-dark-100 dark:border-dark-700 px-4 py-3 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-900 dark:text-white leading-tight">Web Development</p>
                  <p className="text-xs text-dark-400 dark:text-dark-500">React &amp; Node.js</p>
                </div>
              </motion.div>

              {/* ── Floating card: AI Solutions — bottom left ── */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-[18%] left-[0%] bg-white dark:bg-dark-900 rounded-2xl shadow-lg border border-dark-100 dark:border-dark-700 px-4 py-3 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-900 dark:text-white leading-tight">AI Solutions</p>
                  <p className="text-xs text-dark-400 dark:text-dark-500">Machine Learning</p>
                </div>
              </motion.div>

              {/* ── Floating card: 500+ Projects — bottom right ── */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute bottom-[8%] right-[0%] bg-white dark:bg-dark-900 rounded-2xl shadow-lg border border-dark-100 dark:border-dark-700 px-4 py-3 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-dark-900 dark:text-white leading-tight">500+</p>
                  <p className="text-xs text-dark-400 dark:text-dark-500">Projects Delivered</p>
                </div>
              </motion.div>

            </motion.div>
            {/* ── END RIGHT ── */}

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y border-dark-100 dark:border-dark-800 bg-dark-50/40 dark:bg-dark-900/40">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: Users,    value: '500+', label: 'Projects Delivered' },
              { icon: Star,     value: '300+', label: 'Happy Clients' },
              { icon: Zap,      value: '10+',  label: 'Years Experience' },
              { icon: Shield,   value: '50+',  label: 'Tech Experts' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 px-3 py-3 md:px-5 md:py-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark-900 dark:text-white leading-tight">{item.value}</p>
                  <p className="text-xs text-dark-500 dark:text-dark-400">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-b border-dark-100 dark:border-dark-800">
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
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
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
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">{product.description}</p>
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
