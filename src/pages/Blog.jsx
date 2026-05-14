import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, ArrowRight, Search, ChevronRight,
  Code, Cpu, Cloud, Shield, BarChart3, Globe, Eye, X
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import NewsletterSubscribe from '../components/NewsletterSubscribe'

const categories = [
  { name: 'All', icon: Globe, count: 24 },
  { name: 'AI & ML', icon: Cpu, count: 8 },
  { name: 'Web Development', icon: Code, count: 7 },
  { name: 'Cloud', icon: Cloud, count: 5 },
  { name: 'Security', icon: Shield, count: 3 },
  { name: 'Data', icon: BarChart3, count: 4 },
]

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'How artificial intelligence is transforming the way businesses operate and make decisions.',
    category: 'AI & ML',
    author: 'Alexandra Chen',
    date: 'Feb 15, 2024',
    readTime: '8 min read',
    views: '2.3K',
    image: 'ai',
    tags: ['Machine Learning', 'Enterprise', 'Automation'],
  },
  {
    id: 2,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'A comprehensive guide to designing and implementing microservices architecture.',
    category: 'Web Development',
    author: 'Marcus Johnson',
    date: 'Feb 12, 2024',
    readTime: '12 min read',
    views: '1.8K',
    image: 'code',
    tags: ['Node.js', 'Microservices', 'Architecture'],
  },
  {
    id: 3,
    title: 'Kubernetes Best Practices for 2024',
    excerpt: 'Essential tips and patterns for managing containerized applications at scale.',
    category: 'Cloud',
    author: 'Sofia Rodriguez',
    date: 'Feb 10, 2024',
    readTime: '10 min read',
    views: '1.5K',
    image: 'cloud',
    tags: ['Kubernetes', 'DevOps', 'Containers'],
  },
  {
    id: 4,
    title: 'Zero Trust Security: A Complete Implementation Guide',
    excerpt: 'Why traditional security models are obsolete and how to implement zero trust.',
    category: 'Security',
    author: 'David Park',
    date: 'Feb 8, 2024',
    readTime: '15 min read',
    views: '2.1K',
    image: 'security',
    tags: ['Security', 'Zero Trust', 'Compliance'],
  },
  {
    id: 5,
    title: 'Data Pipeline Best Practices with Apache Kafka',
    excerpt: 'Build reliable, real-time data streaming systems with Kafka and Kafka Streams.',
    category: 'Data',
    author: 'Emily Watson',
    date: 'Feb 5, 2024',
    readTime: '11 min read',
    views: '1.2K',
    image: 'data',
    tags: ['Kafka', 'Data Engineering', 'Streaming'],
  },
  {
    id: 6,
    title: 'The Rise of Edge Computing',
    excerpt: 'How edge computing is reducing latency and enabling new applications.',
    category: 'Cloud',
    author: 'Michael Lee',
    date: 'Feb 3, 2024',
    readTime: '9 min read',
    views: '1.4K',
    image: 'edge',
    tags: ['Edge Computing', 'IoT', '5G'],
  },
  {
    id: 7,
    title: 'GraphQL vs REST: Choosing the Right API Strategy',
    excerpt: 'A deep dive into the tradeoffs between GraphQL and REST for modern applications.',
    category: 'Web Development',
    author: 'Marcus Johnson',
    date: 'Jan 30, 2024',
    readTime: '10 min read',
    views: '1.9K',
    image: 'code',
    tags: ['GraphQL', 'REST', 'API Design'],
  },
  {
    id: 8,
    title: 'Prompt Engineering for Production LLM Apps',
    excerpt: 'Techniques and patterns for building reliable AI-powered applications at scale.',
    category: 'AI & ML',
    author: 'Alexandra Chen',
    date: 'Jan 28, 2024',
    readTime: '14 min read',
    views: '3.1K',
    image: 'ai',
    tags: ['LLMs', 'Prompt Engineering', 'AI Apps'],
  },
  {
    id: 9,
    title: 'Securing Your AWS Infrastructure with IAM Best Practices',
    excerpt: 'How to design a least-privilege IAM strategy that scales without sacrificing security.',
    category: 'Security',
    author: 'David Park',
    date: 'Jan 25, 2024',
    readTime: '13 min read',
    views: '1.7K',
    image: 'security',
    tags: ['AWS', 'IAM', 'Cloud Security'],
  },
]

const featuredPost = {
  id: 'featured',
  title: 'The Complete Guide to Digital Transformation',
  excerpt: 'Everything you need to know about modernizing your business for the digital age — from strategy to execution.',
  category: 'Digital Transformation',
  author: 'Alexandra Chen',
  date: 'Feb 18, 2024',
  readTime: '20 min read',
  views: '5.2K',
  tags: ['Strategy', 'Innovation', 'Change Management'],
}

const POSTS_PER_PAGE = 6

const gradientMap = {
  ai: 'from-purple-500 to-pink-500',
  code: 'from-blue-500 to-cyan-500',
  cloud: 'from-sky-500 to-blue-500',
  security: 'from-red-500 to-orange-500',
  data: 'from-green-500 to-teal-500',
  edge: 'from-indigo-500 to-purple-500',
}

const iconMap = {
  'AI & ML': Cpu,
  'Web Development': Code,
  'Cloud': Cloud,
  'Security': Shield,
  'Data': BarChart3,
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory
      const q = query.toLowerCase()
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, query])

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  const handleCategoryChange = (name) => {
    setActiveCategory(name)
    setVisibleCount(POSTS_PER_PAGE)
  }

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
    setVisibleCount(POSTS_PER_PAGE)
  }

  const clearSearch = () => {
    setQuery('')
    setVisibleCount(POSTS_PER_PAGE)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Tech Insights &{' '}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400">
              Expert perspectives, tutorials, and thought leadership on the
              technologies shaping our future.
            </p>

            {/* Search */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search articles..."
                className="w-full pl-12 pr-10 py-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600 dark:hover:text-dark-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-dark-100 dark:border-dark-800">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.name
              return (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-dark-200 dark:bg-dark-700'
                    }`}
                  >
                    {category.count}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Post — hide when searching or filtering */}
      {!query && activeCategory === 'All' && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-primary-100 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200 mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container-custom">
          <SectionHeading
            badge="Latest"
            title={
              query
                ? `Results for "${query}"`
                : activeCategory !== 'All'
                ? activeCategory
                : 'Recent Articles'
            }
            subtitle={
              filteredPosts.length === 0
                ? 'No articles found. Try a different search or category.'
                : `Stay up to date with our latest insights`
            }
          />

          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-dark-500 dark:text-dark-400"
              >
                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No articles match your search.</p>
                <button
                  onClick={() => { clearSearch(); handleCategoryChange('All') }}
                  className="mt-4 text-primary-600 dark:text-primary-400 underline text-sm"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visiblePosts.map((post, index) => {
                  const Icon = iconMap[post.category]
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.07 }}
                      className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Card Image */}
                      <div
                        className={`h-48 bg-gradient-to-br ${gradientMap[post.image] ?? 'from-indigo-500 to-purple-500'} flex items-center justify-center`}
                      >
                        {Icon && <Icon className="w-16 h-16 text-white/80" />}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-dark-500 dark:text-dark-400">
                            <Eye className="w-4 h-4 mr-1" />
                            <span className="text-xs">{post.views}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-dark-500 dark:text-dark-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-dark-100 dark:border-dark-800">
                          <span className="text-sm text-dark-500 dark:text-dark-400">
                            {post.author}
                          </span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                            <Link
                              to={`/blog/${post.id}`}
                              className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline"
                            >
                              Read
                              <ChevronRight className="w-4 h-4 ml-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                className="btn-primary"
              >
                Load More Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <p className="mt-3 text-sm text-dark-400">
                Showing {visiblePosts.length} of {filteredPosts.length} articles
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12"
            >
              <NewsletterSubscribe
                title="Stay Updated"
                description="Subscribe to our newsletter and get the latest tech insights delivered to your inbox."
                source="blog"
                variant="minimal"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
