export const site = {
  name: "Basiq Khan",
  role: "Full Stack Developer",
  url: "https://basiqkhan.dev",
  email: "basiqkhan@proton.me",
  emails: ["basiqkhan@proton.me", "muhammadbasiqkhan@outlook.com"],
  phone: "+92 3460840491",
  location: "Karachi, Pakistan",
  calendly: "https://cal.com/basiqkhan/intro",
  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-basiq-khan/",
    github: "https://github.com/khanbasiq16",
    instagram: "https://www.instagram.com/muhammadbasiqkhan2246",
    facebook: "https://www.facebook.com/basiq.khan.92",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const clientLogos = [
  "Layers",
  "Sitemark",
  "Circely",
  "Catalog",
  "Quotient",
  "Luminous",
  "Cloudly",
  "Nietzsche",
] as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  tone: "blue" | "violet" | "sky" | "indigo" | "rose" | "amber" | "emerald" | "fuchsia" | "cyan" | "orange";
};

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Modern, user-centered interfaces that engage visitors and turn attention into conversions.",
    longDescription:
      "Good design isn't decoration — it's the shortest path between a visitor landing on your site and taking the action you need them to take. I design interfaces around real user behavior: clear hierarchy, obvious next steps, and layouts that hold up on every screen size.",
    features: [
      "User research and competitor teardown before any pixels are placed",
      "Wireframes and high-fidelity mockups in Figma",
      "A reusable component and design-token system your team can build on",
      "Conversion-focused layouts for landing pages, dashboards and checkouts",
      "Full accessibility pass — contrast, focus states and keyboard navigation",
    ],
    icon: "PenTool",
    tone: "blue",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom websites built with modern technologies, tuned for speed and long-term maintainability.",
    longDescription:
      "Custom-built websites using Next.js, React and TypeScript — no page builders, no bloat. Every site is built to load fast, rank well and stay easy to maintain as your business grows.",
    features: [
      "Marketing sites, portfolios and multi-page business websites",
      "Next.js + TypeScript for speed, type-safety and long-term maintainability",
      "Responsive, mobile-first builds tested on real devices",
      "SEO fundamentals baked in from day one — metadata, sitemaps, structured data",
      "Clean, documented code handed over with no vendor lock-in",
    ],
    icon: "Code2",
    tone: "violet",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    description: "Scalable product apps with real-time data, auth, dashboards and clean, testable code.",
    longDescription:
      "Beyond marketing sites — full product builds with authentication, dashboards, real-time data and the database design to support them. Built to handle real users and scale without a rewrite.",
    features: [
      "Auth, roles and permissions done properly from the start",
      "Real-time dashboards, analytics views and admin panels",
      "PostgreSQL or MongoDB schema design for your actual data model",
      "REST or GraphQL APIs built for your frontend and future integrations",
      "Testable, componentized code instead of one giant unmaintainable file",
    ],
    icon: "LayoutDashboard",
    tone: "sky",
  },
  {
    slug: "cms-development",
    title: "CMS Development",
    description: "WordPress and Shopify builds so your team ships content and products without a developer.",
    longDescription:
      "WordPress, Shopify and headless CMS builds (Sanity, Payload) so your team can publish content and manage products without calling a developer for every change.",
    features: [
      "Custom WordPress themes and Shopify storefronts, not generic templates",
      "Headless CMS setups with Sanity or Payload for structured content",
      "Editor-friendly page builders your team can actually use",
      "Plugin and app cleanup for faster load times",
      "Migration from an existing platform with zero content loss",
    ],
    icon: "Database",
    tone: "emerald",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    description: "Third-party and custom API work — payments, CRMs, webhooks and everything in between.",
    longDescription:
      "Payments, CRMs, email, analytics, third-party data — wired into your product cleanly, with proper error handling and webhooks that don't silently fail.",
    features: [
      "Stripe, PayPal and other payment gateway integrations",
      "CRM and marketing tool sync — HubSpot, Mailchimp and similar",
      "Webhook handling with retries and logging, not fire-and-forget",
      "Custom internal APIs for mobile apps or partner integrations",
      "Clear documentation so your team isn't locked out of the setup",
    ],
    icon: "Plug",
    tone: "amber",
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description: "Assistants, RAG search and smart automations wired straight into your existing product.",
    longDescription:
      "Practical AI features — not gimmicks. Chat assistants, document search over your own data (RAG), and automations that remove real manual work from your team's day.",
    features: [
      "Support and sales assistants trained on your own docs and FAQs",
      "Retrieval-augmented search (RAG) over your product or knowledge base",
      "Workflow automations that replace manual copy-paste tasks",
      "Integration with OpenAI, Anthropic Claude and open-source models",
      "Cost-aware architecture so AI features don't blow up your bill",
    ],
    icon: "Sparkles",
    tone: "fuchsia",
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    description: "Core Web Vitals, bundle diets and caching strategy that move both rankings and revenue.",
    longDescription:
      "Slow sites lose customers and rankings. I audit and fix Core Web Vitals, bundle size and caching so your existing site loads faster without a full rebuild.",
    features: [
      "Core Web Vitals audit — LCP, CLS and INP fixes",
      "Bundle analysis and code-splitting to cut unused JavaScript",
      "Image and font optimization for faster first paint",
      "Caching and CDN strategy for both static and dynamic content",
      "Before/after performance report so the impact is measurable",
    ],
    icon: "Gauge",
    tone: "cyan",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description: "Ongoing updates, monitoring and quick fixes so your site keeps running while you focus on business.",
    longDescription:
      "Ongoing care after launch — updates, monitoring and quick fixes — so your site keeps running smoothly while you focus on running your business, not your server.",
    features: [
      "Regular framework, plugin and dependency updates",
      "Uptime and error monitoring with fast response times",
      "Monthly backups and a tested recovery plan",
      "Small content and design tweaks included in every plan",
      "Direct access to me — no ticket queue or support tiers",
    ],
    icon: "LifeBuoy",
    tone: "orange",
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  tags: string[];
  links: { demo?: string; caseStudy?: string; github?: string };
  image: string;
};

export const projects: Project[] = [
  {
    title: "American Publishing Central",
    category: "Publishing Services",
    summary: "A conversion-focused marketing site for a book publishing agency, built to turn first-time authors into signed clients.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://americanpublishingcentral.com/", caseStudy: "https://americanpublishingcentral.com/" },
    image: "/americanpublishing.png",
  },
  {
    title: "Cytech Solutions",
    category: "Digital Agency",
    summary: "Bold brand site for a digital growth agency, built around a bright, high-contrast identity that stands out from typical agency templates.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://cytech.solutions/", caseStudy: "https://cytech.solutions/" },
    image: "/cytech.png",
  },
  {
    title: "Golden Wattle Publishing",
    category: "Publishing Services",
    summary: "Editorial ebook publishing site pairing a dark, literary aesthetic with a clear path to a free quote.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://goldenwattlepublishing.com/", caseStudy: "https://goldenwattlepublishing.com/" },
    image: "/goldenwatte.png",
  },
  {
    title: "Velvet Pour",
    category: "Hospitality / Bar Brand",
    summary: "A moody, editorial cocktail-bar site built around big type and photography instead of a typical menu grid.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://magito-cock-tail.vercel.app/", caseStudy: "https://magito-cock-tail.vercel.app/" },
    image: "/majito.png",
  },
  {
    title: "Paramount Author Studio",
    category: "Publishing Services",
    summary: "Ghostwriting-to-bestseller studio site with a warm, literary look and a clear consultation funnel.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://paramountauthorstudio.co.uk/", caseStudy: "https://paramountauthorstudio.co.uk/" },
    image: "/paramountstudio.png",
  },
  {
    title: "Prime Line Marketing",
    category: "Real Estate",
    summary: "Real estate investment advisory site for the Pakistani market, built around trust signals for local and overseas buyers.",
    stack: ["Web Design", "Web Development"],
    tags: ["Design", "Development"],
    links: { demo: "https://primeline.com.pk/", caseStudy: "https://primeline.com.pk/" },
    image: "/primeline.png",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Technologies" },
] as const;

export const processSteps = [
  { step: "01", title: "Discover", description: "Understanding your goals, requirements and target audience.", icon: "Search" },
  { step: "02", title: "Design", description: "Creating wireframes and UI/UX designs that are modern and intuitive.", icon: "Pencil" },
  { step: "03", title: "Develop", description: "Writing clean, efficient code and building your website.", icon: "Code2" },
  { step: "04", title: "Test", description: "Testing for performance, responsiveness and functionality.", icon: "ClipboardCheck" },
  { step: "05", title: "Launch", description: "Deploying your website and making it live for the world.", icon: "Rocket" },
  { step: "06", title: "Support", description: "Providing ongoing support and maintenance for smooth performance.", icon: "Headphones" },
] as const;

export const testimonials = [
  {
    quote:
      "Basiq is an exceptional developer. He delivered exactly what I needed and on time. The website looks amazing and performs perfectly.",
    name: "John Smith",
    title: "CEO, TechCorp",
    initials: "JS",
    rating: 5,
  },
  {
    quote:
      "Great communication, fast delivery and excellent quality work. Will definitely work with Basiq again on my future projects.",
    name: "Sarah Johnson",
    title: "Founder, ShopEasy",
    initials: "SJ",
    rating: 5,
  },
  {
    quote:
      "Highly skilled and professional. He understood my requirements perfectly and built a fantastic website for my business.",
    name: "Michael Brown",
    title: "Marketing Director",
    initials: "MB",
    rating: 5,
  },
  {
    quote:
      "Our dashboard load time went from nine seconds to under one. That single change paid for the whole engagement.",
    name: "Amara Osei",
    title: "CTO, Ledgerly",
    initials: "AO",
    rating: 5,
  },
  {
    quote:
      "He asked the questions our last three agencies never did. The result finally looks like the brand we describe to clients.",
    name: "Daniel Ruiz",
    title: "Partner, Northline Studio",
    initials: "DR",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the complexity of the project. A simple website can take 1–2 weeks, while more complex web applications can take 4–8 weeks. You get a fixed schedule with milestone dates before we start.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Mostly Next.js, React, TypeScript and Tailwind CSS on the front end, with Node.js, PostgreSQL or MongoDB behind it. For content-led sites I work with WordPress, Shopify and headless CMS platforms like Sanity and Payload.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every build is designed mobile-first and tested across phones, tablets, laptops and large desktops before launch, including real devices rather than just browser emulation.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Every project includes 30 days of free post-launch support for fixes and small tweaks. After that you can move to a monthly maintenance plan covering updates, monitoring, backups and priority response.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I start with an audit of your current site — performance, structure, content and analytics — then propose a redesign that keeps what already converts and rebuilds what doesn't.",
  },
] as const;

export const projectTypes = [
  "Website Design",
  "Web Application",
  "E-commerce Store",
  "WordPress / CMS",
  "AI Integration",
  "Something else",
] as const;

export const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,000", "$7,000 – $15,000", "$15,000+"] as const;
