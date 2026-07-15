import { motion } from 'framer-motion'
import { 
  Target, Eye, Heart, Award, Users, Clock, Globe, Lightbulb,
  CheckCircle, ArrowRight, Calendar, TrendingUp 
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We believe in honest communication, transparent processes, and ethical business practices.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every line of code, every design, and every interaction.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering true partnership and shared success.',
    color: 'from-red-500 to-pink-500',
  },
]

const milestones = [
  { year: '2025', title: 'Founded', description: 'Started with a team of 5 passionate developers.' },
  { year: '2025', title: 'First Enterprise Client', description: 'Signed our first Fortune 500 company.' },
  { year: '2026', title: 'Expansion', description: 'Opened offices in Accra and Kumasi.' },
  { year: '2026', title: '50+ Projects', description: 'Reached milestone of 50 completed projects.' },
  { year: '2026', title: 'AI Division Launched', description: 'Started dedicated AI and ML practice.' },
  { year: '2026', title: 'Series A Funding', description: 'Raised ₵15k to accelerate growth.' },
]

const team = [
  {
    name: 'Chris Aidoo',
    role: 'Co-Founder',
    bio: '',
    avatar: 'CA',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Agyenim Boateng Anning',
    role: 'Co-Founder',
    bio: '',
    avatar: 'MABA',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Siisi Botwe',
    role: 'Senior Graphics Designer',
    bio: 'Graphic design expert with background in fintech and healthcare technology.',
    avatar: 'SB',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Tracy Baffoe',
    role: 'General Secretary',
    bio: 'Dedicated operations and administration professional responsible for coordinating meetings, maintaining corporate records, managing internal communications, and ensuring smooth organizational workflows that support the company’s growth and success.',
    avatar: 'TB',
    color: 'from-red-500 to-pink-500',
  },
  {
    name: 'Joe Tibuah',
    role: 'DPO',
    bio: 'Compliance lead expert in "Privacy by Design" for digital services, ensuring innovation meets rigorous security standards.',
    avatar: 'JT',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Kaf Makaty',
    role: 'Financial Manager',
    bio: 'Corporate finance expert with a background in fintech growth and capital management.',
    avatar: 'KM',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Chris Appiah Jnr',
    role: 'Trading Manager',
    bio: 'Market operations expert with a background in high-frequency trading environments.',
    avatar: 'CAJ',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Francis Amewoyi Walker ',
    role: 'Junior Dev',
    bio: 'Software engineer specializing in Python and django with a focus on creating efficient, clean-code solutions.',
    avatar: 'FAW',
    color: 'from-red-500 to-pink-500',
  },
]

const stats = [
  { value: '10+', label: 'Team Members', icon: Users },
  { value: '6', label: 'Global Offices', icon: Globe },
  { value: '50+', label: 'Projects Delivered', icon: Award },
  { value: '50+', label: 'Companies Served', icon: Globe },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              About SL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
              We're a team of passionate technologists dedicated to transforming businesses through innovative software solutions. Since 2025, we've been helping companies across the globe embrace the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                To empower businesses with transformative technology that drives growth, efficiency, and innovation. We believe that the right software can change the world, and we're here to help you build it.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Every project we undertake is guided by our commitment to excellence and our genuine care for our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                To be the world's most trusted partner in digital transformation, known for delivering solutions that exceed expectations and set new industry standards.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                We envision a world where every business has access to cutting-edge technology that enables them to compete and thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
                <stat.icon className="w-10 h-10 text-blue-100 mx-auto mb-4" />
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Values"
            title="What Drives Us"
            subtitle="Our core values shape every decision we make and every solution we deliver"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} delay={index * 0.1}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Journey"
            title="Company Milestones"
            subtitle="Key moments that shaped SL into what it is today"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 md:px-8 pl-20 md:pl-0">
                    <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center z-10">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            badge="Leadership"
            title="Meet Our Team"
            subtitle="The visionaries behind SL's success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6">
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${member.color} opacity-10 dark:opacity-20 flex items-center justify-center group-hover:opacity-100 group-hover:[&>span]:text-white transition-all duration-300`}>
                    <span className="text-5xl font-bold text-slate-400 dark:text-slate-500 transition-colors duration-300">{member.avatar}</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-5" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <a href="/careers" className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
