import { motion } from 'framer-motion'
import { 
  Users, Heart, Zap, Globe, Coffee, Code, ArrowRight, CheckCircle,
  Briefcase, GraduationCap, Trophy, Clock, DollarSign, Building2,
  MessageSquare, Mail, MapPin, Calendar 
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
  },
  {
    icon: Globe,
    title: 'Remote-First',
    description: 'Work from anywhere. We trust you to manage your time and location.',
  },
  {
    icon: Zap,
    title: 'Learning Budget',
    description: '$5,000 annual budget for courses, conferences, and certifications.',
  },
  {
    icon: Coffee,
    title: 'Unlimited PTO',
    description: 'Take the time you need. We believe in rest and rejuvenation.',
  },
  {
    icon: Trophy,
    title: 'Equity Package',
    description: 'Every employee is an owner. Share in our success.',
  },
  {
    icon: Code,
    title: 'Latest Tech',
    description: 'Work with cutting-edge tools and technologies.',
  },
]

const openPositions = [
  {
    department: 'Engineering',
    title: 'Senior Frontend Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '₵140K - ₵180K',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    department: 'Engineering',
    title: 'Backend Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '₵150K - ₵190K',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    department: 'Engineering',
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '₵130K - ₵170K',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    department: 'AI/ML',
    title: 'Machine Learning Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '₵160K - ₵200K',
    tags: ['Python', 'TensorFlow', 'PyTorch'],
  },
  {
    department: 'Design',
    title: 'Senior UX Designer',
    location: 'Remote',
    type: 'Full-time',
    salary: '₵120K - ₵150K',
    tags: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    department: 'Product',
    title: 'Product Manager',
    location: 'London, UK',
    type: 'Full-time',
    salary: '₵130K - ₵170K',
    tags: ['Strategy', 'Analytics', 'Agile'],
  },
]

const perks = [
  'Home office stipend',
  'Professional development',
  'Annual retreats',
  'Sabbatical program',
  'Parental leave',
  '401(k) matching',
  'Life insurance',
  'Gym membership',
  'Free meals',
  'Equipment budget',
]

export default function Careers() {
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
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Join Our{' '}
              <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400">
              We're building the future of technology. Join a team of passionate innovators who are transforming businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-dark-100 dark:border-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Team Members' },
              { value: '25+', label: 'Countries' },
              { value: '4.9/5', label: 'Glassdoor Rating' },
              { value: '95%', label: 'Employee Retention' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-dark-500 dark:text-dark-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Benefits"
            title='Why Work With Us'
            subtitle="We invest in our people because they are our greatest asset"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
                Perks & Amenities
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
                We've thought of everything to make your work life enjoyable and productive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-dark-700 dark:text-dark-300">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-bg opacity-10 absolute inset-0" />
                <div className="aspect-square rounded-3xl bg-white dark:bg-dark-900 shadow-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-dark-900 dark:text-white">Remote-First Culture</p>
                    <p className="text-dark-600 dark:text-dark-400 mt-2">Work from anywhere in the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge='Open Positions'
            title='Join Our Team'
            subtitle={`${openPositions.length} positions available`}
          />

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                          {position.department}
                        </span>
                        <span className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {position.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <span className="text-lg font-bold text-dark-900 dark:text-white">
                        {position.salary}
                      </span>
                      <div className="flex gap-3">
                        <button className="btn-primary">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                We believe in building a culture where everyone can thrive. Our values guide everything we do.
              </p>
              <div className="space-y-4">
                {[
                  'Open and transparent communication',
                  'Continuous learning and growth',
                  'Work-life balance',
                  'Inclusive and diverse team',
                  'Innovation at every level',
                  'Customer-obsessed mindset',
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-dark-700 dark:text-dark-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Open Dialogue</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Learning</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Coffee className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Collaboration</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  Contact Us
                  <Mail className="ml-2 w-5 h-5" />
                </a>
                <button className="btn-outline">
                  Submit Resume
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
