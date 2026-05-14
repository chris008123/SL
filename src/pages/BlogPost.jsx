import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Clock, Eye, Calendar, Tag,
  Code, Cpu, Cloud, Shield, BarChart3, Share2, BookOpen
} from 'lucide-react'

// -- Shared data (in a real app, move this to a data/ file and import in both Blog.jsx and here) --
const blogPosts = [
  {
  id: 'featured',
  title: 'The Complete Guide to Digital Transformation',
  excerpt: 'Everything you need to know about modernizing your business for the digital age — from strategy to execution.',
  category: 'AI & ML',
  author: 'Alexandra Chen',
  date: 'Feb 18, 2024',
  readTime: '20 min read',
  views: '5.2K',
  image: 'ai',
  tags: ['Strategy', 'Innovation', 'Change Management'],
  content: `
Digital transformation is not a technology project. It is a fundamental rethinking of how an organization creates value in a digital world.

## What Digital Transformation Actually Means

Too many organizations treat digital transformation as a software rollout — new ERP, a mobile app, a cloud migration. These are tactics, not transformation. True transformation changes how the business operates, competes, and delivers value to customers.

## The Four Dimensions

### Strategy
Digital transformation starts with a clear-eyed assessment of where digital disruption will hit your industry and where it creates opportunity. Map your value chain and identify which parts are most vulnerable to digital alternatives and which can be enhanced with technology.

### Operations
Modernizing operations means replacing manual, paper-based, and siloed processes with integrated, automated, data-driven workflows. This typically involves consolidating legacy systems, adopting cloud infrastructure, and embedding automation throughout the business.

### Customer Experience
Digital customers expect seamless, personalized, always-on experiences. Organizations must rebuild customer journeys around digital touchpoints — from discovery and purchase to support and retention — with data driving continuous improvement.

### Culture and Talent
The hardest part. Technology is the easy bit; changing how people work is not. Successful transformation requires psychological safety to experiment, new skills across the workforce, and leadership willing to make decisions based on data rather than intuition.

## Common Failure Modes

- **Treating it as an IT project**: Technology enables transformation; it doesn't cause it. Business leadership must own the agenda.
- **Boiling the ocean**: Organizations that try to transform everything at once transform nothing. Pick high-value beachheads and move fast.
- **Ignoring change management**: A new system that people don't use is worthless. Investment in training, communication, and adoption is not optional.
- **Measuring the wrong things**: Tracking project delivery milestones instead of business outcomes (revenue, cost, NPS) masks whether transformation is actually working.

## A Practical Roadmap

**Year 1 — Foundation**: Audit your current state. Identify the highest-value transformation opportunities. Stand up data infrastructure. Begin cloud migration. Establish a cross-functional digital team.

**Year 2 — Acceleration**: Launch customer-facing digital products. Automate core operational processes. Build data and analytics capabilities. Run experiments and kill what doesn't work fast.

**Year 3 — Scale**: Embed digital ways of working across the organization. Extend successful pilots to full scale. Begin building proprietary data and AI advantages.

## The Competitive Reality

Organizations that delay transformation are not standing still — they are falling behind competitors who are moving. The window to catch up narrows every year as digital-native competitors accumulate data advantages and customer relationships that are increasingly hard to displace.

The question is no longer whether to transform, but how fast.
  `,
  },
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
    content: `
Artificial intelligence is no longer a futuristic concept — it is actively reshaping how enterprises operate, compete, and grow. From intelligent automation to predictive analytics, AI is becoming the backbone of modern business strategy.

## Why Enterprises Are Adopting AI Now

The convergence of cheaper compute, abundant data, and mature ML frameworks has finally made AI practical for non-tech companies. Organizations that once needed entire research teams to experiment with models can now integrate powerful capabilities through APIs in days.

Key drivers include:
- **Cost reduction**: Automating repetitive tasks frees up human capital for higher-value work.
- **Decision intelligence**: Real-time data analysis enables faster, evidence-based decisions.
- **Customer experience**: Personalization at scale, once impossible, is now table stakes.

## Core Use Cases Gaining Traction

### Intelligent Process Automation
Beyond traditional RPA, AI-driven automation can handle unstructured inputs — reading contracts, classifying emails, flagging anomalies in financial data — that rule-based systems can't touch.

### Predictive Maintenance
Manufacturing and logistics companies are using sensor data and ML models to predict equipment failures before they happen, reducing downtime by up to 40%.

### Generative AI for Knowledge Work
LLMs are being embedded into enterprise tools for drafting, summarizing, and retrieving institutional knowledge. Early adopters report meaningful productivity gains in legal, finance, and engineering teams.

## Challenges Still to Solve

Adoption isn't frictionless. Data quality remains the biggest bottleneck — garbage in, garbage out. Organizations also grapple with explainability requirements in regulated industries, and the ongoing challenge of aligning AI outputs with business objectives.

Security and privacy concerns are real, especially when dealing with sensitive customer data fed into third-party models.

## Looking Ahead

The enterprises that will win are those treating AI not as a tool to bolt on, but as an organizational capability to build. That means investing in data infrastructure, upskilling teams, and developing governance frameworks alongside the technology itself.

AI in enterprise is still early. The foundations being laid today will determine who leads the next decade.
    `,
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
    content: `
Microservices architecture has become the de facto standard for building large-scale web applications. When done right, it offers independent deployability, fault isolation, and the ability to scale individual components. When done wrong, it creates a distributed monolith with all the downsides of both worlds.

## The Core Principles

A microservice should:
1. Own a single, well-defined business capability
2. Manage its own data store
3. Communicate through well-defined APIs (REST, gRPC, or events)
4. Be independently deployable

## Why Node.js?

Node's non-blocking I/O model makes it well-suited for the kinds of lightweight, network-heavy services that appear in microservices architectures. It starts fast, uses memory efficiently, and has a vast ecosystem of libraries for HTTP, messaging, and database access.

## Practical Patterns

### API Gateway
All client requests should flow through a single entry point. The gateway handles auth, rate limiting, and routing — keeping those concerns out of individual services.

### Event-Driven Communication
For non-critical, async operations (notifications, analytics, cache invalidation), use a message broker like Kafka or RabbitMQ instead of synchronous HTTP calls. This decouples services and improves resilience.

### Circuit Breaker
Wrap outgoing service calls in a circuit breaker (e.g., using \`opossum\` for Node.js). When a downstream service degrades, fail fast instead of cascading failures across the system.

## Common Mistakes to Avoid

- **Too fine-grained services**: Starting with one service per function leads to massive operational overhead. Group by business domain first.
- **Shared databases**: If two services share a database, they are not actually independent. Keep data ownership strict.
- **Ignoring observability**: Distributed tracing (OpenTelemetry), centralized logging, and service-level metrics are not optional at scale.

## Deployment

Containerize every service with Docker, and orchestrate with Kubernetes. Use Helm charts for managing configuration across environments, and implement proper health checks for readiness and liveness probes.

## Closing Thoughts

Microservices solve real problems at scale, but they introduce complexity that small teams shouldn't take on prematurely. Start with a well-structured monolith, identify the seams, and extract services where the operational overhead is clearly justified.
    `,
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
    content: `
Kubernetes has matured significantly, but running it well in production still requires disciplined practices. Here are the patterns that separate stable clusters from ones that page you at 3am.

## Resource Management

Always set **requests and limits** on every container. Without requests, the scheduler can't make good placement decisions. Without limits, a single noisy neighbor can starve other pods.

Use **Vertical Pod Autoscaler (VPA)** in recommendation mode to tune your resource settings over time based on actual usage data.

## Security Hardening

- Run containers as non-root users
- Use read-only root filesystems where possible
- Apply **NetworkPolicies** to restrict inter-pod traffic to only what's necessary
- Scan images in CI with tools like Trivy before they reach your registry

## Observability Stack

A production cluster needs three pillars:
1. **Metrics**: Prometheus + Grafana. Scrape cluster and application metrics, alert on SLO breaches.
2. **Logs**: Fluentbit → Loki or Elasticsearch. Structured JSON logs from every service.
3. **Traces**: OpenTelemetry SDK + Tempo or Jaeger for distributed tracing across services.

## GitOps Deployments

Manage cluster state declaratively through Git with **ArgoCD** or **Flux**. Pull-based deployments reduce attack surface (no CI credentials in your cluster) and give you auditability and easy rollbacks.

## Cluster Upgrades

Upgrade minor versions every 3-4 months to stay within the supported window. Test upgrades in a staging cluster first. Use **PodDisruptionBudgets** to ensure rolling upgrades don't drop availability below your threshold.

## Cost Optimization

Enable **Cluster Autoscaler** and pair it with **Spot/Preemptible nodes** for non-critical workloads. Use **Karpenter** on AWS for smarter, faster node provisioning.

Audit for unused or over-provisioned resources regularly — idle clusters are expensive.

## Summary

Kubernetes is powerful, but the defaults are permissive. Applying these practices from the start is far cheaper than retrofitting them after an incident.
    `,
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
    content: `
The perimeter-based security model — trust everything inside the network, block everything outside — is dead. Modern organizations have hybrid workforces, multi-cloud infrastructure, and third-party integrations that make the very concept of a network perimeter meaningless.

Zero Trust replaces implicit trust with continuous verification.

## The Core Principle

**"Never trust, always verify."**

Every access request, regardless of where it originates, must be authenticated, authorized, and continuously validated. This applies to users, devices, services, and APIs.

## Five Pillars of Zero Trust

### 1. Identity
Strong identity is the foundation. Implement MFA everywhere, use short-lived credentials, and enforce least-privilege access. Identity providers like Okta, Azure AD, or Google Workspace are your control plane.

### 2. Device Health
A valid identity on a compromised device is still a threat. Integrate device posture checks (OS version, EDR status, disk encryption) into access decisions using tools like CrowdStrike Falcon or Microsoft Intune.

### 3. Network Segmentation
Replace flat networks with micro-segmentation. Use software-defined perimeters (Cloudflare Access, Zscaler ZPA) to make internal applications invisible to the public internet.

### 4. Application Access
Enforce application-layer authorization. Every API call should carry a verified identity token (OAuth 2.0/OIDC). Implement fine-grained authorization policies — not just "can this user access this app" but "can this user perform this action on this resource."

### 5. Data Protection
Classify your data and apply controls proportional to sensitivity. Encrypt data at rest and in transit. Implement DLP policies that follow the data, not the network boundary.

## Implementation Roadmap

Start with identity — it gives you the highest ROI. Then move to device trust, network segmentation, and application-layer controls. Instrument everything for observability; you can't detect anomalies you can't see.

Zero Trust is a journey, not a product. No single vendor delivers it completely. Expect 12–18 months to meaningfully transform your posture.

## Compliance Alignment

Zero Trust aligns well with frameworks like NIST SP 800-207, SOC 2 Type II, and ISO 27001. Documenting your Zero Trust architecture serves double duty as compliance evidence.
    `,
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
    content: `
Apache Kafka has become the de facto backbone for real-time data pipelines. Its durability, throughput, and ecosystem make it the right choice when you need reliable, scalable event streaming. But getting Kafka right in production requires more than just spinning up brokers.

## Topic Design

Think carefully about topic granularity before you start. Too few topics and you're filtering events at the consumer; too many and you're managing operational overhead without benefit.

**Use one topic per event type or entity type.** Avoid catch-all topics. Leverage log compaction for entity state topics (e.g., user profiles) to keep only the latest state per key.

## Schema Management

Use a schema registry (Confluent Schema Registry or AWS Glue) with **Avro** or **Protobuf**. This enforces contracts between producers and consumers and prevents schema drift from breaking downstream pipelines silently.

Define compatibility rules: **backward compatibility** lets old consumers read new messages; **full compatibility** gives you the most flexibility to evolve schemas safely.

## Producer Configuration

- Set \`acks=all\` for critical data — this ensures all in-sync replicas have acknowledged the write before the producer considers it successful.
- Set \`enable.idempotence=true\` to prevent duplicate messages on network retries.
- Configure \`compression.type=lz4\` for a good balance of CPU and throughput.

## Consumer Best Practices

- Process and commit offsets only **after** successful downstream writes. Committing before processing risks data loss on failure.
- Use consumer groups to distribute partitions across instances for horizontal scaling.
- Implement **dead letter topics** for messages that fail processing after retries — don't silently drop them.

## Monitoring

Watch these metrics closely:
- **Consumer lag**: Alerts when consumers fall behind producers.
- **Under-replicated partitions**: Sign of broker or network issues.
- **Producer error rate**: Catches misconfigured producers early.

Expose these through JMX and scrape with Prometheus. Alert aggressively on consumer lag above your SLO threshold.

## Kafka Streams vs. Flink

For lightweight stateful processing (joins, aggregations, windowing) without a separate cluster, Kafka Streams is excellent. For complex event processing at very high scale, consider Apache Flink — it offers more sophisticated state management and exactly-once semantics across more complex topologies.
    `,
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
    content: `
Cloud computing centralized everything. Edge computing is the deliberate reversal — pushing compute, storage, and decision-making closer to where data is generated and consumed.

## Why Edge, Why Now?

Three forces are making edge computing practical and necessary:

1. **5G rollout**: Dramatically increased bandwidth and lower latency at the network edge.
2. **IoT proliferation**: Billions of devices generating data that can't all be sent to a central cloud cost-effectively.
3. **Latency-sensitive applications**: Autonomous vehicles, AR/VR, industrial robotics — they need sub-10ms response times that round-trip to a data center can't provide.

## Edge vs. Cloud: Complementary, Not Competing

Edge doesn't replace cloud — it extends it. The pattern is typically:
- **Edge**: Real-time processing, immediate response, local decision-making
- **Cloud**: Aggregated analytics, model training, long-term storage, global coordination

A factory floor sensor might detect an anomaly at the edge and trigger an immediate shutdown, while sending telemetry to the cloud for trend analysis and ML model updates.

## Key Architectures

### CDN Edge (Cloudflare Workers, Lambda@Edge)
Run lightweight functions at CDN PoPs — sub-millisecond execution globally. Great for personalization, A/B testing, and auth without round-tripping to origin.

### Telco Edge (MEC — Multi-Access Edge Computing)
Compute co-located with 5G base stations. Enables carrier-grade latency for mobile applications.

### On-Premise Edge
Industrial IoT deployments with local servers in factories, retail stores, or hospitals. Full control, air-gap capable, but requires on-site management.

## Challenges

Edge environments are constrained and heterogeneous. Managing software across thousands of edge nodes — patching, monitoring, rollouts — is an operational challenge that's often underestimated. Tools like K3s (lightweight Kubernetes for edge) and AWS Greengrass are emerging to address this, but the space is still maturing.

## What to Watch

AI inference at the edge is the most exciting near-term opportunity. Running optimized models on edge hardware (NPUs, FPGAs) enables real-time vision, speech, and anomaly detection without cloud latency or cost.
    `,
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
    content: `
The GraphQL vs REST debate has been running for nearly a decade, and the answer is still — it depends. Here's a clear-eyed look at where each shines and where each falls short.

## REST: Strengths and Weaknesses

REST is simple, cacheable, and universally understood. Its resource-oriented model maps naturally to CRUD operations and HTTP semantics. Every developer knows it, every tool supports it.

The pain points emerge at scale: over-fetching (getting more data than you need), under-fetching (needing multiple round trips to assemble a view), and versioning as APIs evolve.

## GraphQL: Strengths and Weaknesses

GraphQL lets clients specify exactly what data they need in a single request. This eliminates over-fetching and under-fetching, and it gives frontend teams autonomy to evolve their data requirements without backend changes.

The tradeoffs: HTTP caching doesn't work out of the box (all queries hit one endpoint via POST), query complexity can be unbounded without explicit protections, and the learning curve is real.

## When to Use REST

- Public APIs consumed by third parties (simpler to document, easier to cache)
- Simple CRUD services with stable, predictable data shapes
- Small teams where GraphQL's tooling overhead isn't justified
- When performance of a CDN-cacheable response matters

## When to Use GraphQL

- Complex frontends with varying data requirements across views (mobile vs. desktop, dashboard vs. detail page)
- Multiple clients (web, iOS, Android) with different data needs
- Rapid product iteration where frontend teams shouldn't be blocked on backend changes
- Aggregating data from multiple services via a federated graph (Apollo Federation)

## A Practical Middle Ground

Many teams run both: REST for public, cacheable, or simple APIs; GraphQL as an internal API layer aggregating data for product frontends. This captures most of the benefit without the all-in organizational commitment.

## The Verdict

Neither is universally better. Choose based on your client diversity, team structure, and data complexity — not because one is newer.
    `,
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
    content: `
Building a demo with an LLM is easy. Building a production application that behaves consistently, safely, and cost-effectively is genuinely hard. Prompt engineering is the craft at the center of that challenge.

## Why Prompting Matters in Production

Model behavior is a function of the prompt. A vague or fragile prompt produces inconsistent outputs. In a demo, that's a quirk. In production, it's a bug that affects real users at scale.

## Core Techniques

### System Prompts
The system prompt is your contract with the model. Be explicit about role, tone, format, and constraints. Don't assume the model will infer what you want — state it.

Bad: "You are a helpful assistant."
Better: "You are a customer support agent for Acme Corp. Always respond in under 100 words. If the user asks about pricing, direct them to pricing@acme.com. Never speculate about unreleased features."

### Few-Shot Examples
For tasks where format consistency matters — structured output, specific reasoning styles, classification — include 2–5 examples in the prompt. Examples outperform instructions for teaching format.

### Chain of Thought
For complex reasoning tasks, prompt the model to "think step by step" before giving a final answer. This reliably improves accuracy on multi-step problems.

### Output Structuring
Request JSON or structured output explicitly. If the model supports function calling or structured output mode, use it — it's more reliable than parsing free-text responses.

## Reliability Patterns

**Validation layer**: Never trust raw model output. Parse and validate against a schema. If output is invalid, retry with a corrective prompt before surfacing an error.

**Fallback chains**: If the primary model call fails or returns low-confidence output, fall back to a simpler prompt, a different model, or a deterministic rule-based path.

**Evals**: Build an evaluation dataset before you ship. Run it on every prompt change. Treat regressions like failing tests.

## Cost Management

Token cost scales with prompt length. Use the shortest prompt that achieves your quality bar. Cache system prompts where the API supports it (Anthropic and OpenAI both offer prompt caching). Use smaller, faster models for classification or routing steps before calling expensive models for generation.

## The Meta-Skill

Prompt engineering is empirical. Write a prompt, test it, measure it, improve it. Intuition helps, but measurement wins.
    `,
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
    content: `
AWS IAM is the control plane for your entire cloud environment. Getting it wrong is the most common root cause of cloud security incidents. Getting it right is foundational to everything else.

## The Principle of Least Privilege

Every principal (user, role, service) should have exactly the permissions it needs — no more. This is the bedrock of IAM security, and it's harder to implement than it sounds because AWS services often require broader permissions than you'd expect.

Use **IAM Access Analyzer** to identify overly permissive policies and unused permissions. AWS also surfaces "last accessed" data per service and action, which tells you what can be safely removed.

## Roles Over Users

Avoid long-lived IAM user credentials wherever possible. Use IAM roles with temporary credentials instead:
- EC2, Lambda, ECS tasks: use instance/execution roles
- CI/CD pipelines: use OIDC federation with GitHub Actions or GitLab CI instead of storing AWS credentials as secrets
- Cross-account access: use role assumption with explicit trust policies

## Root Account Hygiene

The AWS root account should have an MFA device attached and its credentials locked in a vault. It should never be used for day-to-day operations. Create an admin IAM user (or preferably, use AWS SSO) for all operational access.

## Service Control Policies (SCPs)

If you're running a multi-account AWS Organization, SCPs are your guardrails. Use them to:
- Prevent disabling of CloudTrail or GuardDuty
- Restrict regions to only those your business operates in
- Block creation of public S3 buckets across the org

SCPs apply even to account root users — they're the strongest control in the AWS policy hierarchy.

## Auditing and Detection

Enable **CloudTrail** in all regions and all accounts. Ship logs to a centralized, write-protected S3 bucket in a dedicated logging account. Alert on:
- Root account login
- IAM policy changes
- Console sign-ins without MFA
- API calls from unusual geographic locations (via GuardDuty)

## Permission Boundaries

For delegating IAM management to teams without giving them full IAM admin access, use permission boundaries. They cap the maximum permissions a principal can have, even if their policies grant more.

## The 80/20

If you do nothing else: enforce MFA on all humans, delete unused IAM users and access keys, and enable GuardDuty. These three steps eliminate the most common attack vectors.
    `,
  },
]

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

function renderContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-dark-900 dark:text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-dark-800 dark:text-dark-200 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 mb-4 text-dark-700 dark:text-dark-300">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\./.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 mb-4 text-dark-700 dark:text-dark-300">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-dark-700 dark:text-dark-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      )
    }

    i++
  }

  return elements
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-dark-900 dark:text-white font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-dark-100 dark:bg-dark-800 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
}

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()

  const post = blogPosts.find((p) => String(p.id) === String(id))

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary-600 dark:text-primary-400 underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const Icon = iconMap[post.category]
  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div
        className={`h-64 md:h-80 bg-gradient-to-br ${gradientMap[post.image] ?? 'from-indigo-500 to-purple-500'} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20" />
        {Icon && <Icon className="w-24 h-24 md:w-32 md:h-32 text-white/30 absolute" />}
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-6">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>{post.views} views</span>
            </div>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-1.5 text-primary-600 dark:text-primary-400 hover:underline"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-xl text-dark-600 dark:text-dark-300 leading-relaxed mb-10 pb-10 border-b border-dark-100 dark:border-dark-800 font-medium">
            {post.excerpt}
          </p>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-dark-100 dark:border-dark-800">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                More in {post.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => {
                  const RIcon = iconMap[r.category]
                  return (
                    <Link
                      key={r.id}
                      to={`/blog/${r.id}`}
                      className="group flex gap-4 p-4 rounded-xl bg-dark-50 dark:bg-dark-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-dark-100 dark:border-dark-800"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientMap[r.image] ?? 'from-indigo-500 to-purple-500'} flex items-center justify-center flex-shrink-0`}
                      >
                        {RIcon && <RIcon className="w-6 h-6 text-white/80" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-sm leading-snug mb-1">
                          {r.title}
                        </h3>
                        <span className="text-xs text-dark-500 dark:text-dark-400">{r.readTime}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Back CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
