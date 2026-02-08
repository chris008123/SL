import { motion } from 'framer-motion'
import { 
  Code, Cpu, Cloud, Shield, BarChart3, Globe, Smartphone, Database,
  CheckCircle, ArrowRight, Layers, Zap, Lock, Server, Palette, LineChart,
  Terminal, Monitor, Megaphone 
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const services = [
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    shortDesc: 'Custom web applications built with modern frameworks',
    fullDesc: 'We build scalable, performant, and secure web applications using the latest technologies. From corporate websites to complex enterprise solutions, we deliver experiences that delight users and drive business growth.',
    features: [
      'React & Next.js Development',
      'Node.js & Express Backend',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'CMS Development',
      'API Integration & Development',
    ],
    benefits: [
      'Improved user engagement',
      'Higher conversion rates',
      'Better SEO performance',
      'Reduced maintenance costs',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    caseStudy: { client: 'Fortune 500 Retailer', result: '40% increase in conversions' },
  },
  {
    id: 'ai-ml',
    icon: Cpu,
    title: 'AI & Machine Learning',
    shortDesc: 'Intelligent solutions that learn and adapt',
    fullDesc: 'Harness the power of artificial intelligence to automate processes, gain insights from data, and create personalized experiences. Our AI solutions are designed to solve real business problems.',
    features: [
      'Custom ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbot Development',
      'Recommendation Systems',
    ],
    benefits: [
      'Automated decision making',
      'Cost reduction through automation',
      'Enhanced customer experiences',
      'Competitive advantage',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face'],
    caseStudy: { client: 'FinTech Startup', result: '60% reduction in support tickets' },
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    shortDesc: 'Scalable infrastructure for modern applications',
    fullDesc: 'Modernize your infrastructure with cloud-native solutions. We help businesses migrate, build, and optimize their cloud presence for maximum efficiency and scalability.',
    features: [
      'Cloud Migration Strategy',
      'Serverless Architecture',
      'Container orchestration (K8s)',
      'DevOps & CI/CD Pipelines',
      'Multi-cloud Management',
      'Cloud Cost Optimization',
    ],
    benefits: [
      'Unlimited scalability',
      'Reduced infrastructure costs',
      'Improved reliability',
      'Faster time to market',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    caseStudy: { client: 'Healthcare Provider', result: '99.99% uptime achieved' },
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cybersecurity',
    shortDesc: 'Enterprise-grade protection for your assets',
    fullDesc: 'Protect your business from evolving cyber threats with our comprehensive security solutions. We identify vulnerabilities, implement safeguards, and ensure compliance.',
    features: [
      'Penetration Testing',
      'Security Audits & Compliance',
      'Threat Modeling',
      'Security Monitoring',
      'Incident Response',
      'Security Training',
    ],
    benefits: [
      'Regulatory compliance',
      'Reduced breach risk',
      'Protected reputation',
      'Customer trust',
    ],
    technologies: ['OWASP', 'Burp Suite', 'Nessus', 'Splunk', 'CrowdStrike', 'HashiCorp Vault'],
    caseStudy: { client: 'Financial Institution', result: 'Zero security incidents' },
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile experiences',
    fullDesc: 'Create engaging mobile experiences that users love. We build performant iOS and Android applications, as well as cross-platform solutions that save time and resources.',
    features: [
      'iOS Development (Swift/SwiftUI)',
      'Android Development (Kotlin)',
      'React Native Apps',
      'Flutter Development',
      'Mobile UI/UX Design',
      'App Store Optimization',
    ],
    benefits: [
      'Larger mobile audience reach',
      'Improved customer engagement',
      'Brand visibility',
      'Direct marketing channel',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
    caseStudy: { client: 'Fitness Startup', result: '1M+ downloads in 6 months' },
  },
  {
    id: 'data',
    icon: BarChart3,
    title: 'Data Analytics',
    shortDesc: 'Turn data into actionable insights',
    fullDesc: 'Transform your raw data into strategic insights. Our data analytics solutions help you understand your business better and make data-driven decisions.',
    features: [
      'Business Intelligence Dashboards',
      'Data Warehousing',
      'ETL Pipeline Development',
      'Real-time Analytics',
      'Data Visualization',
      'ML-powered Analytics',
    ],
    benefits: [
      'Better decision making',
      'Identify market trends',
      'Optimize operations',
      'Predict future outcomes',
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Apache Spark', 'dbt'],
    caseStudy: { client: 'E-commerce Giant', result: '25% increase in sales' },
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'User-centered design that converts',
    fullDesc: 'Create intuitive and beautiful interfaces that users love. Our design process is rooted in research and data, ensuring solutions that meet real user needs.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'UI Design Systems',
      'Interaction Design',
      'Accessibility Design',
      'Design Audits',
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced support costs',
      'Competitive differentiation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'UsabilityHub'],
    caseStudy: { client: 'SaaS Platform', result: '50% reduction in bounce rate' },
  },
  {
    id: 'backend',
    icon: Server,
    title: 'API & Backend Systems',
    shortDesc: 'Robust foundations for your applications',
    fullDesc: 'Build scalable, secure, and performant backend systems that power your applications. From microservices to monoliths, we architect solutions that grow with your business.',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices Architecture',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Real-time Systems',
      'Legacy System Integration',
    ],
    benefits: [
      'Scalable architecture',
      'Better performance',
      'Enhanced security',
      'Easier maintenance',
    ],
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
    caseStudy: { client: 'API-first Company', result: '10x improvement in API response' },
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and challenges.' },
  { step: '02', title: 'Strategy', desc: 'We create a tailored roadmap for your project.' },
  { step: '03', title: 'Design', desc: 'We craft intuitive designs based on research.' },
  { step: '04', title: 'Development', desc: 'Our experts build your solution with agile methods.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA ensures quality and performance.' },
  { step: '06', title: 'Launch', desc: 'We deploy and support your live product.' },
]

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Comprehensive Tech{' '}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400">
              From concept to deployment, we offer end-to-end technology services that drive business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Visual */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center mb-8">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl -z-10" />
                  </div>
                  
                  {/* Case Study Card */}
                  <Card className="mt-8">
                    <div className="flex items-center mb-3">
                      <Zap className="w-5 h-5 text-primary-500 mr-2" />
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">Case Study</span>
                    </div>
                    <p className="font-semibold text-dark-900 dark:text-white mb-1">{service.caseStudy.client}</p>
                    <p className="text-dark-600 dark:text-dark-400">{service.caseStudy.result}</p>
                  </Card>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                        <span className="text-dark-600 dark:text-dark-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-3">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-3">
                      Key Benefits:
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-dark-600 dark:text-dark-400">
                          <ArrowRight className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="/contact" 
                    className="btn-primary inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading 
            badge="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers results"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-bg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white mb-2">{process.title}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">{process.desc}</p>
              </motion.div>
            ))}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
