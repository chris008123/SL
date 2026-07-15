import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, Cpu, Zap, Shield, BarChart3, Globe, ArrowRight, CheckCircle,
  Star, Download, ExternalLink, Clock, TrendingUp, Lock, Users, Server,
  Database, Smartphone, Mail, MessageSquare, Search, FileText
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const products = [
  {
    id: 'cloudflow',
    name: 'CloudFlow',
    tagline: 'Enterprise Cloud Management Platform',
    description: 'Streamline your cloud operations with our comprehensive management platform. Monitor, optimize, and scale your infrastructure from a single dashboard.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Real-time resource monitoring',
      'Cost optimization recommendations',
      'Automated scaling policies',
      'Multi-cloud support',
      'Security compliance checks',
      'Custom dashboards',
    ],
    stats: {
      users: '10K+',
      uptime: '99.99%',
      satisfaction: '98%',
    },
    pricing: {
      starter: '$299/mo',
      professional: '$599/mo',
      enterprise: 'Custom',
    },
    cta: 'Start Free Trial',
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    tagline: 'Intelligent Automation for Your Workflow',
    description: 'Automate repetitive tasks and boost productivity with our AI-powered assistant. It learns from your workflows and suggests improvements.',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Natural language commands',
      'Task automation',
      'Smart scheduling',
      'Document analysis',
      'Meeting summaries',
      'Integration with 100+ apps',
    ],
    stats: {
      tasks: '1M+',
      saved: '50K hrs',
      rating: '4.9/5',
    },
    pricing: {
      starter: '$49/mo',
      professional: '$149/mo',
      enterprise: 'Custom',
    },
    cta: 'Get Early Access',
  },
  {
    id: 'datasync',
    name: 'DataSync Pro',
    tagline: 'Real-time Data Synchronization',
    description: 'Keep your data synchronized across all platforms in real-time. Perfect for distributed teams and multi-device applications.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Real-time sync (<100ms)',
      'Conflict resolution',
      'Offline support',
      'Data transformation',
      'Webhook triggers',
      'Audit logging',
    ],
    stats: {
      syncs: '50M+',
      uptime: '99.99%',
      latency: '<100ms',
    },
    pricing: {
      starter: '$199/mo',
      professional: '$399/mo',
      enterprise: 'Custom',
    },
    cta: 'Start Free Trial',
  },
  {
    id: 'security',
    name: 'Security Shield',
    tagline: 'Advanced Threat Protection',
    description: 'Comprehensive security solution that protects your applications from modern threats. AI-powered detection with instant response.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    features: [
      'AI-powered threat detection',
      'Real-time monitoring',
      'Automated incident response',
      'Compliance reporting',
      'Vulnerability scanning',
      '24/7 SOC support',
    ],
    stats: {
      threats: '99.9%',
      response: '<5 min',
      coverage: '100%',
    },
    pricing: {
      starter: '$499/mo',
      professional: '$999/mo',
      enterprise: 'Custom',
    },
    cta: 'Request Demo',
  },
  {
    id: 'analytics',
    name: 'Analytics Hub',
    tagline: 'Business Intelligence Made Simple',
    description: 'Transform your data into actionable insights with powerful analytics and beautiful visualizations. No coding required.',
    icon: BarChart3,
    color: 'from-green-500 to-teal-500',
    features: [
      'Drag-and-drop dashboard builder',
      '100+ chart types',
      'Real-time data updates',
      'Scheduled reports',
      'Team collaboration',
      'White-label options',
    ],
    stats: {
      reports: '1M+',
      users: '50K+',
      rating: '4.8/5',
    },
    pricing: {
      starter: '$99/mo',
      professional: '$299/mo',
      enterprise: 'Custom',
    },
    cta: 'Try Free',
  },
  {
    id: 'global',
    name: 'Global CDN',
    tagline: 'Lightning-Fast Content Delivery',
    description: 'Deliver your content to users worldwide with milliseconds of latency. Built for high-traffic applications.',
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    features: [
      '200+ edge locations',
      'Automatic optimization',
      'DDoS protection',
      'Custom caching rules',
      'Analytics & insights',
      'Instant purging',
    ],
    stats: {
      bandwidth: '500TB+',
      coverage: '190+',
      latency: '<50ms',
    },
    pricing: {
      starter: '$99/mo',
      professional: '$299/mo',
      enterprise: 'Custom',
    },
    cta: 'Get Started',
  },
]

const integrations = [
  { name: 'Slack', icon: MessageSquare },
  { name: 'GitHub', icon: Globe },
  { name: 'Jira', icon: Globe },
  { name: 'Salesforce', icon: Globe },
  { name: 'HubSpot', icon: Globe },
  { name: 'Zendesk', icon: Globe },
  { name: 'Stripe', icon: Globe },
  { name: 'AWS', icon: Cloud },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'Azure', icon: Cloud },
  { name: 'Notion', icon: Globe },
  { name: 'Figma', icon: Globe },
]

// --- New: "Our Work" showcase data ---
const showcaseFilters = ['All', 'Website', 'Mobile App', 'SaaS', 'Dashboard']

const showcaseStats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Building' },
]

const featuredProject = {
  id: 'sl-hub',
  name: 'SL Hub',
  category: 'Mobile App',
  description: 'A community platform for tech builders, built with a custom dark-themed UI system. Live stats, push notification infrastructure, notification/email digests, and a restricted admin panel keep the community informed and organized.',
  tech: ['React Native', 'Expo Router', 'Supabase', 'Zustand'],
  color: 'from-blue-500 to-cyan-500',
  icon: Smartphone,
  // Drop a real screenshot here, e.g. '/images/projects/sl-hub.png'
  image: '/images/projects/sl-hub.png',
  stats: {
    builders: '2',
    uptime: '99.9%',
    build: '8 weeks',
  },
  liveUrl: '#',
  caseStudyUrl: '#',
}

const showcaseProjects = [
  {
    id: 'miuzicly',
    name: 'Miuzicly',
    category: 'SaaS',
    description: 'A web app engineered for keeping musical scripts.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    color: 'bg-gradient-to-r from-green-800 via-green-600 to-lime-500',
    icon: Smartphone,
    image: '/images/projects/miuzicly.png', // e.g. '/images/projects/partnersup.png'
    liveUrl: 'miuzicly.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'tutorly',
    name: 'Tutorly',
    category: 'SaaS',
    description: 'A Q&A web platform connecting developers with tutors for real-time help and mentorship.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    color: 'from-pink-500 to-rose-500',
    icon: Users,
    image: '/images/projects/tutorly.png', // e.g. '/images/projects/tutorly.png'
    liveUrl: 'tutorly-frontend-blue.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'rabi',
    name: 'RabiReigns',
    category: 'SaaS',
    description: 'A web platform for real-time buying of products.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    color: 'from-rose-950 to-red-700',
    icon: Users,
    image: '/images/projects/rabi.png', // e.g. '/images/projects/tutorly.png'
    liveUrl: 'rabireigns.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'uni-cam',
    name: 'Uni-cam',
    category: 'SaaS',
    description: 'A web platform connecting university students with real-time video and connection.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    color: 'from-blue-500 to-cyan-300',
    icon: Users,
    image: '/images/projects/Uni-cam.png', // e.g. '/images/projects/tutorly.png'
    liveUrl: 'uni-cam.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    category: 'SaaS',
    description: 'A web platform for real-time buying of products.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    color: 'from-orange-700 to-orange-500',
    icon: Users,
    image: '/images/projects/e-commerce.png', // e.g. '/images/projects/tutorly.png'
    liveUrl: 'e-commerce-bice-one-71.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'olympus',
    name: 'Olympus',
    category: 'SaaS',
    description: 'A web platform for real-time buying of products.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    color: 'from-yellow-400 to-yellow-600',
    icon: Users,
    image: '/images/projects/olympus.png', // e.g. '/images/projects/tutorly.png'
    liveUrl: 'olympus-black.vercel.app',
    caseStudyUrl: '#',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    category: 'Dashboard',
    description: 'A modular knowledge management app with a full light/dark theme system built on CSS custom properties.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    color: 'from-blue-600 to-sky-500',
    icon: Database,
    image: '/images/projects/restaurant.png', // e.g. '/images/projects/atlas-nexus.png'
    liveUrl: 'restaurant-three-steel.vercel.app/',
    caseStudyUrl: '#',
  },
  {
    id: 'skillmap',
    name: 'SkillMap',
    category: 'Dashboard',
    description: 'A department and role-matching tool used to onboard and organize new team members automatically.',
    tech: ['React', 'Groq API', 'Netlify Functions'],
    color: 'from-violet-500 to-fuchsia-500',
    icon: BarChart3,
    image: '/images/projects/sl-info.png', // e.g. '/images/projects/skillmap.png'
    liveUrl: 'sl-info-666c.netlify.app',
    caseStudyUrl: '#',
  },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = showcaseProjects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Powerful Platforms for{' '}
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400">
              Industry-leading products built by developers, for developers. Scale faster with tools trusted by thousands of companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================= */}
      {/* NEW: Our Work / Featured Projects Section */}
      {/* Placed right after the Hero, ahead of the Products Grid (CloudFlow, AI Assistant, etc.), */}
      {/* reusing the same Card / SectionHeading / motion / gradient patterns used elsewhere on this page */}
      {/* ============================= */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Work"
            title="Projects We've Built"
            subtitle="Every product below represents a unique challenge solved with thoughtful design and modern engineering."
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {showcaseStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4 py-6 rounded-xl bg-dark-50 dark:bg-dark-800"
              >
                <p className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Filters + Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {showcaseFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === filter
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-700 dark:text-dark-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Featured Project (spans two columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${featuredProject.color} opacity-10 rounded-full blur-3xl transform translate-x-24 -translate-y-24`} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                {/* Mock browser thumbnail */}
                <div className="rounded-xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-lg">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-100 dark:bg-dark-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="h-64 bg-dark-100 dark:bg-dark-800 overflow-hidden">
                    {featuredProject.image ? (
                      <img
                        src={featuredProject.image}
                        alt={`${featuredProject.name} screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${featuredProject.color} flex items-center justify-center`}>
                        <featuredProject.icon className="w-20 h-20 text-white/80" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                    Featured &middot; {featuredProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">{featuredProject.name}</h3>
                  <p className="text-dark-600 dark:text-dark-400 mb-6">{featuredProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {Object.entries(featuredProject.stats).map(([key, value]) => (
                      <div key={key} className="px-4 py-2 bg-dark-50 dark:bg-dark-800 rounded-lg">
                        <p className="text-lg font-bold text-dark-900 dark:text-white">{value}</p>
                        <p className="text-xs text-dark-500 dark:text-dark-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={featuredProject.liveUrl}
                      className={`flex-1 py-3 rounded-lg bg-gradient-to-r ${featuredProject.color} text-white font-semibold hover:shadow-lg transition-shadow flex items-center justify-center`}
                    >
                      Visit Live Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <a
                      href={featuredProject.caseStudyUrl}
                      className="px-6 py-3 rounded-lg border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 font-semibold hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors flex items-center justify-center"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Remaining Projects — same large layout as the featured project, stacked full-width */}
          <div className="flex flex-col gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <Card className="relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl transform translate-x-24 -translate-y-24`} />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                    {/* Thumbnail */}
                    <div className="rounded-xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-lg">
                      <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-100 dark:bg-dark-800">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="h-64 bg-dark-100 dark:bg-dark-800 overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                            <project.icon className="w-20 h-20 text-white/80" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center">
                      <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">{project.name}</h3>
                      <p className="text-dark-600 dark:text-dark-400 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={project.liveUrl}
                          className={`flex-1 py-3 rounded-lg bg-gradient-to-r ${project.color} text-white font-semibold hover:shadow-lg transition-shadow flex items-center justify-center`}
                        >
                          Visit Live Website
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                        <a
                          href={project.caseStudyUrl}
                          className="px-6 py-3 rounded-lg border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 font-semibold hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors flex items-center justify-center"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-dark-500 dark:text-dark-400 mt-8">
              No projects match that search or filter.
            </p>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.color} opacity-5 rounded-full blur-3xl transform translate-x-20 -translate-y-20`} />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 relative">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-white">{product.name}</h3>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-600 dark:text-dark-400 mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.slice(0, 6).map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-dark-600 dark:text-dark-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="px-4 py-2 bg-dark-50 dark:bg-dark-800 rounded-lg">
                        <p className="text-lg font-bold text-dark-900 dark:text-white">{value}</p>
                        <p className="text-xs text-dark-500 dark:text-dark-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">Starting at:</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-dark-900 dark:text-white">{product.pricing.starter}</span>
                      <span className="text-dark-500 dark:text-dark-400">/month</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className={`flex-1 py-3 rounded-lg bg-gradient-to-r ${product.color} text-white font-semibold hover:shadow-lg transition-shadow flex items-center justify-center`}>
                      {product.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 font-semibold hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Integrations"
            title='Works With Your Stack'
            subtitle='Connect with 100+ tools you already use'
          />

          <div className="flex flex-wrap items-center justify-center gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-dark-900 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center">
                  <integration.icon className="w-5 h-5 text-dark-600 dark:text-dark-400" />
                </div>
                <span className="font-medium text-dark-700 dark:text-dark-300">{integration.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-outline">
              View All Integrations
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Product Roadmap"
            title='Coming Soon'
            subtitle='Exciting new features in development'
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quarter: 'Q1 2026', title: 'AI Copilot', desc: 'Intelligent coding assistant for developers', status: 'In Development' },
              { quarter: 'Q2 2026', title: 'Mobile SDK', desc: 'Native mobile SDKs for all products', status: 'In Development' },
              { quarter: 'Q3 2026', title: 'Enterprise SSO', desc: 'Advanced authentication options', status: 'Planning' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                    {item.quarter}
                  </span>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-dark-600 dark:text-dark-400 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-500 dark:text-dark-400">{item.status}</span>
                    <button className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline">
                      Learn More
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg text-primary-100 mb-8">
                Join thousands of developers and businesses already using our products.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-xl transition-shadow flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
