import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BookOpen,
  Boxes,
  Check,
  Code2,
  Database,
  FileSearch,
  Globe,
  Layers,
  MessageSquare,
  Pencil,
  Search,
  Server,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiAnthropic,
  SiGooglegemini,
  SiLangchain,
  SiMeta,
  SiN8N,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LaptopMockup, PhoneMockup } from "@/components/ui/device-mockup";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { AiCTA } from "@/components/sections/ai-cta";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Integration",
  description:
    "AI chatbots, RAG systems, AI agents and workflow automation wired into your product — practical AI features that save real time, not gimmicks.",
  alternates: { canonical: "/services/ai-integration" },
};

/* ── Data ────────────────────────────────────────────────────────────── */

const toneStyles = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  rose: "bg-rose-50 text-rose-600",
  emerald: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  indigo: "bg-indigo-50 text-indigo-600",
} as const;

const techChips = ["GPT-4o / GPT-5", "Claude", "Gemini", "Open Source LLMs"];

const aiTechLogos: { name: string; node: React.ReactNode }[] = [
  { name: "OpenAI", node: <Bot className="size-6 text-ink" /> },
  { name: "Anthropic", node: <SiAnthropic className="size-6 text-[#D97757]" /> },
  { name: "Google Gemini", node: <SiGooglegemini className="size-6 text-[#4285F4]" /> },
  { name: "Meta Llama", node: <SiMeta className="size-6 text-[#0866FF]" /> },
  { name: "Pinecone", node: <Database className="size-6 text-ink" /> },
  { name: "LangChain", node: <SiLangchain className="size-6 text-[#1C3C3C]" /> },
  { name: "n8n", node: <SiN8N className="size-6 text-[#EA4B71]" /> },
  { name: "Supabase", node: <SiSupabase className="size-6 text-[#3ECF8E]" /> },
  { name: "Vercel", node: <SiVercel className="size-6 text-ink" /> },
  { name: "Node.js", node: <SiNodedotjs className="size-6 text-[#339933]" /> },
];

const aiSolutions: {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  tone: keyof typeof toneStyles;
}[] = [
  {
    title: "AI Chatbots",
    description: "Trained assistants that answer questions and qualify leads around the clock.",
    points: ["Website Chat", "WhatsApp & Messenger", "Lead Generation", "Customer Support"],
    icon: MessageSquare,
    tone: "blue",
  },
  {
    title: "RAG Systems",
    description: "Search that actually understands your own documents and knowledge base.",
    points: ["Upload PDFs & Docs", "Knowledge Base", "Semantic Search", "Internal Search"],
    icon: FileSearch,
    tone: "violet",
  },
  {
    title: "AI Agents",
    description: "Autonomous agents that complete multi-step tasks across your tools.",
    points: ["Autonomous Tasks", "Email & CRM", "Scheduling", "Data Processing"],
    icon: Bot,
    tone: "rose",
  },
  {
    title: "Workflow Automation",
    description: "Connect your apps so repetitive, manual work runs itself.",
    points: ["No Manual Work", "Connect Your Apps", "CRM, Sheets, Slack", "Zapier & n8n"],
    icon: Workflow,
    tone: "emerald",
  },
  {
    title: "Document AI",
    description: "Pull structured data out of scans, invoices and long documents in seconds.",
    points: ["OCR & Scanning", "Invoice Processing", "PDF Extraction", "Smart Summaries"],
    icon: Layers,
    tone: "orange",
  },
  {
    title: "Custom AI Products",
    description: "Full AI-native products, from first prototype to a shipped MVP.",
    points: ["AI SaaS Platforms", "AI Marketplaces", "MVP Development", "End-to-End Builds"],
    icon: Boxes,
    tone: "indigo",
  },
];

const whyChooseFeatures = [
  "Production Ready — scalable, secure solutions built for real users",
  "Fast Delivery — quick turnaround without compromising quality",
  "Secure Architecture — best practices for security & data protection",
  "Cost Optimized — efficient solutions that save your money",
  "Scalable — grows from a single MVP to millions of requests",
  "Modern Stack — documented, maintainable and easy to hand over",
];

const architectureNodes: { label: string; caption: string; icon: LucideIcon; tone: keyof typeof toneStyles }[] = [
  { label: "User", caption: "Asks a question or starts a task", icon: Globe, tone: "blue" },
  { label: "Website / App", caption: "Your product's chat or automation UI", icon: Globe, tone: "blue" },
  { label: "AI Agent", caption: "Plans the steps and calls the right tools", icon: Bot, tone: "violet" },
  { label: "Knowledge Base", caption: "Your docs, product data and FAQs", icon: BookOpen, tone: "violet" },
  { label: "OpenAI / Claude", caption: "Reasoning and response generation", icon: Sparkles, tone: "emerald" },
  { label: "Vector Database", caption: "Semantic search over your data", icon: Server, tone: "orange" },
  { label: "Response", caption: "Delivered back in under a second", icon: MessageSquare, tone: "indigo" },
];

const caseStudies = [
  {
    label: "AI Customer Support Chatbot",
    metric: "40%",
    description: "Reduction in support cost after moving first-line replies to an AI assistant.",
    icon: MessageSquare,
    color: "#4F6BFF",
  },
  {
    label: "Internal Knowledge Assistant",
    metric: "10x",
    description: "Faster information retrieval across scattered internal docs and wikis.",
    icon: FileSearch,
    color: "#6C63FF",
  },
  {
    label: "Workflow Automation System",
    metric: "80%",
    description: "Of a manual, repetitive weekly process eliminated end-to-end.",
    icon: Zap,
    color: "#22C55E",
  },
];

const aiFaqs = [
  {
    question: "Do I need my own OpenAI or Claude account?",
    answer:
      "Yes — API usage is billed directly by the provider (OpenAI, Anthropic, Google) to your own account, so you always see and control the real cost. I architect the integration to keep that bill predictable.",
  },
  {
    question: "Will the AI make things up about my business?",
    answer:
      "Not if it's built properly. I ground responses in your actual data through retrieval-augmented search (RAG) and keep the model scoped to what it should answer — with fallbacks to a human for anything outside that.",
  },
  {
    question: "How long does an AI integration take?",
    answer:
      "A focused chatbot or automation typically ships in 1–3 weeks. Larger AI agent or multi-source RAG systems run 4–8 weeks depending on how much of your data and how many tools need to be connected.",
  },
  {
    question: "Can this work with my existing app or website?",
    answer:
      "Yes. Most of this work is integration, not a rebuild — a widget, an API route or a background worker added to what you already run, whether that's Next.js, WordPress, Shopify or a custom backend.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data stays in infrastructure you control — your own database and vector store. I don't train models on your data, and I document exactly what gets sent to which provider and why.",
  },
];

const otherServiceSlugs = ["ui-ux-design", "web-development", "cms-development", "web-applications", "api-integration"];
const otherServiceIcons: Record<string, LucideIcon> = {
  PenTool: Pencil,
  Code2: Code2,
  LayoutDashboard: Layers,
  Database: Database,
  Plug: Workflow,
};
const otherServices = otherServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

/* ── Local, image-free UI mockups (match device-mockup.tsx's approach) ─ */

function AiDashboardScreen() {
  const stats = [
    { label: "Total Conversations", value: "12,458", delta: "+12.3%" },
    { label: "Resolved Queries", value: "98.5%", delta: "+10.3%" },
    { label: "Documents Indexed", value: "2,458", delta: "+14.5%" },
  ];
  const recent = ["How can I reset my password?", "What's your refund policy?", "How do I integrate the API?"];

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-hairline px-3 py-2 sm:px-3.5 sm:py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-500 text-white sm:size-5">
            <Sparkles className="size-2.5 sm:size-3" />
          </span>
          <span className="text-[0.56rem] font-bold text-ink sm:text-[0.66rem]">Overview</span>
        </div>
        <span className="hidden rounded-full border border-hairline px-2.5 py-1 text-[0.48rem] font-medium text-ink-faint sm:inline-block">
          RAG Search
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden p-3 sm:p-3.5">
        <div className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[7px] border border-hairline p-2">
              <p className="truncate text-[0.42rem] font-medium text-ink-faint">{s.label}</p>
              <p className="mt-1 text-[0.6rem] font-bold text-ink sm:text-[0.68rem]">{s.value}</p>
              <p className="mt-0.5 text-[0.42rem] font-semibold text-emerald-500">{s.delta}</p>
            </div>
          ))}
        </div>

        <div className="hidden flex-1 rounded-[7px] border border-hairline p-2.5 sm:block">
          <p className="text-[0.46rem] font-bold text-ink-faint">Conversations Over Time</p>
          <svg viewBox="0 0 200 46" className="mt-1.5 h-9 w-full" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="ai-dash-line" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 36 L28 30 L56 34 L84 18 L112 24 L140 10 L168 16 L200 4"
              fill="none"
              stroke="#4F6BFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M0 36 L28 30 L56 34 L84 18 L112 24 L140 10 L168 16 L200 4 L200 46 L0 46 Z" fill="url(#ai-dash-line)" />
          </svg>
        </div>

        <div className="mt-auto min-h-0 flex-1 overflow-hidden rounded-[7px] border border-hairline p-2">
          <p className="text-[0.46rem] font-bold text-ink-faint">Recent Conversations</p>
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {recent.map((r) => (
              <li key={r} className="flex items-center gap-1.5">
                <span className="size-1 shrink-0 rounded-full bg-brand-400" />
                <span className="truncate text-[0.44rem] text-ink-muted">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AiChatScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-1.5 border-b border-hairline px-2.5 py-2">
        <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
          <Bot className="size-2.5" />
        </span>
        <span className="text-[0.5rem] font-bold text-ink">AI Assistant</span>
        <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-2.5">
        <div className="max-w-[80%] rounded-[8px] rounded-tl-[2px] bg-surface-muted px-2 py-1.5 text-[0.42rem] leading-snug text-ink">
          Hello! How can I help you today?
        </div>
        <div className="ml-auto max-w-[80%] rounded-[8px] rounded-tr-[2px] bg-brand-gradient px-2 py-1.5 text-[0.42rem] leading-snug text-white">
          Summarize this document
        </div>
        <div className="max-w-[85%] rounded-[8px] rounded-tl-[2px] bg-surface-muted px-2 py-1.5 text-[0.42rem] leading-snug text-ink">
          Sure! Here&apos;s the summary of your document.
        </div>
        <div className="flex items-center gap-1.5 rounded-[7px] border border-hairline bg-white px-2 py-1.5">
          <span className="grid size-4 shrink-0 place-items-center rounded-[4px] bg-rose-50 text-rose-500">
            <FileSearch className="size-2.5" />
          </span>
          <span className="truncate text-[0.4rem] font-semibold text-ink">Project_Proposal.pdf</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-1.5 border-t border-hairline p-2">
        <div className="h-4 flex-1 rounded-full bg-surface-muted" />
        <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
          <ArrowRight className="size-2.5" />
        </span>
      </div>
    </div>
  );
}

function HeroMockup() {
  const floaters = [
    { label: "RAG Search", icon: Search, tone: "bg-brand-50 text-brand-500", pos: "-top-9 right-1 lg:-right-6", delay: "0s" },
    { label: "AI Agents", icon: Bot, tone: "bg-violet-50 text-violet-600", pos: "top-[30%] -left-4 lg:-left-10", delay: "1s" },
    { label: "Knowledge Base", icon: BookOpen, tone: "bg-emerald-50 text-emerald-600", pos: "bottom-2 left-2 lg:-left-6", delay: "1.6s" },
    { label: "Automation", icon: Zap, tone: "bg-amber-50 text-amber-500", pos: "-bottom-10 right-2 lg:right-4", delay: "2.1s" },
  ];

  return (
    <div className="relative mx-auto w-[94%] max-w-[440px] sm:w-[88%] sm:max-w-[520px] lg:mx-0 lg:w-full lg:max-w-none">
      <LaptopMockup screen={<AiDashboardScreen />} />
      <div className="absolute -bottom-9 -right-3 w-[112px] rotate-[6deg] sm:-right-6 sm:w-[160px] lg:w-[190px] xl:w-[215px]">
        <PhoneMockup className="w-full" screen={<AiChatScreen />} />
      </div>

      {floaters.map((f) => (
        <div
          key={f.label}
          aria-hidden
          className={cn(
            "animate-floaty absolute hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex",
            f.pos
          )}
          style={{ animationDelay: f.delay }}
        >
          <span className={cn("grid size-7 shrink-0 place-items-center rounded-full", f.tone)}>
            <f.icon className="size-3.5" />
          </span>
          <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">{f.label}</span>
        </div>
      ))}
    </div>
  );
}

function Sparkline({ color, path }: { color: string; path: string }) {
  const gradId = `spark-${color.replace("#", "")}`;
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L120 36 L0 36 Z`} fill={`url(#${gradId})`} />
    </svg>
  );
}

/** Small decorative AI-core graphic — no image asset, pure CSS/SVG. */
function AiCoreIllustration() {
  const chips = [
    { icon: Bot, pos: "-left-4 top-2", tone: "bg-brand-50 text-brand-500" },
    { icon: Database, pos: "-right-3 top-10", tone: "bg-violet-50 text-violet-600" },
    { icon: Sparkles, pos: "left-6 -bottom-4", tone: "bg-emerald-50 text-emerald-600" },
  ];
  return (
    <div className="relative mx-auto grid size-40 place-items-center">
      <span aria-hidden className="absolute inset-0 rounded-[32px] bg-brand-gradient opacity-90 shadow-lift" />
      <span aria-hidden className="absolute inset-3 rounded-[24px] border border-white/25" />
      <Bot className="relative size-14 text-white" strokeWidth={1.5} />
      {chips.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className={cn(
            "animate-floaty absolute grid size-11 place-items-center rounded-2xl border border-hairline bg-white shadow-card",
            c.pos
          )}
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <span className={cn("grid size-full place-items-center rounded-2xl", c.tone)}>
            <c.icon className="size-5" strokeWidth={1.8} />
          </span>
        </span>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <ol className="relative mx-auto flex max-w-[360px] flex-col items-stretch">
      {architectureNodes.map((node, i) => {
        const isLast = i === architectureNodes.length - 1;
        return (
          <li key={node.label}>
            <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-white p-4 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", toneStyles[node.tone])}>
                <node.icon className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.9rem] font-bold text-ink">{node.label}</p>
                <p className="truncate text-[0.76rem] text-ink-muted">{node.caption}</p>
              </div>
            </div>
            {!isLast && (
              <div aria-hidden className="flex h-7 justify-center">
                <span className="w-px bg-hairline" />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function AiIntegrationPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-[120px] md:pb-28 md:pt-[140px] lg:pb-36 lg:pt-[152px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-mesh-soft" />
          <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
          <div className="absolute -left-24 top-10 size-[420px] animate-floaty-slow rounded-full bg-brand-400/[0.09] blur-[130px]" />
          <div className="absolute -right-16 top-24 size-[460px] animate-floaty rounded-full bg-accent/[0.1] blur-[140px]" />
        </div>

        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(2rem,4vw,4rem)]">
            {/* left */}
            <div className="flex flex-col items-center text-center lg:w-[clamp(380px,36vw,540px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge>AI Integration Services</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(1rem,4.6vw,2rem)] font-black leading-[1.08] tracking-[-0.02em] text-ink balance sm:text-[2.1rem] lg:text-[clamp(1.6rem,2.5vw,2.35rem)]">
                <TextReveal text="AI Integration That" />
                <br />
                <TextReveal text="Automates, Assists &" delay={0.06} />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Accelerates Your Business" delay={0.12} />
                </span>
                .
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I build intelligent AI-powered systems that automate tasks, answer questions, find
                  information and boost productivity using the latest AI models and technologies.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.28}>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {techChips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[0.78rem] font-semibold text-ink-muted shadow-soft"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal direction="up" delay={0.34}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Book Free Consultation
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="#case-studies">
                      View Case Studies
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex -space-x-3">
                    {["#4F6BFF", "#6C63FF", "#8098FF", "#3D57E8"].map((c, i) => (
                      <span
                        key={i}
                        className="grid size-10 place-items-center rounded-full border-[3px] border-white text-[0.68rem] font-bold text-white shadow-soft"
                        style={{ background: c }}
                        aria-hidden
                      >
                        {["JS", "SJ", "MB", "AO"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-[0.92rem] font-bold text-ink">20+ Happy Clients</p>
                    <p className="text-[0.8rem] text-ink-muted">Trusted by startups and businesses worldwide.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: AI dashboard mockup */}
            <div className="w-full lg:w-[clamp(420px,42vw,640px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>
                <HeroMockup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology logos ───────────────────────────────────── */}
      <section aria-label="AI technologies I work with" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              Built With Leading AI Technologies
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...aiTechLogos, ...aiTechLogos].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= aiTechLogos.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── AI solutions ────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I build"
            title="AI Solutions I"
            highlight="Build"
            description="Six practical ways AI can plug into your product — pick one, or combine them into a single system."
          />

          <ul className="grid gap-6 lg:grid-cols-2">
            {aiSolutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <li key={solution.title}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <article className="card-surface group relative h-full overflow-hidden rounded-3xl p-8">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100"
                      />
                      <div className="relative flex items-start justify-between gap-4">
                        <span
                          className={cn(
                            "grid size-12 shrink-0 place-items-center rounded-2xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110",
                            toneStyles[solution.tone]
                          )}
                        >
                          <Icon className="size-6" strokeWidth={1.8} />
                        </span>
                        <span className="grid size-10 shrink-0 -translate-x-1 place-items-center rounded-full border border-hairline text-ink-muted opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:opacity-100">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>

                      <h3 className="relative mt-6 text-[1.15rem] font-bold tracking-tight text-ink">
                        {solution.title}
                      </h3>
                      <p className="relative mt-2 max-w-md text-[0.92rem] leading-relaxed text-ink-muted pretty">
                        {solution.description}
                      </p>

                      <ul className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-hairline pt-5">
                        {solution.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-[0.8rem] text-ink-muted">
                            <span className="size-1 shrink-0 rounded-full bg-brand-400" />
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── How I work ──────────────────────────────────────────── */}
      <Process
        description="Six stages, from figuring out where AI actually helps to a monitored system in production."
        steps={[
          { step: "01", title: "Discovery", description: "Understand your goals, users and where AI actually helps.", icon: "Search" },
          { step: "02", title: "Planning", description: "Choose the right model, data source and integration points.", icon: "Pencil" },
          { step: "03", title: "AI Development", description: "Build and connect the agent, RAG pipeline or automation.", icon: "Code2" },
          { step: "04", title: "Testing", description: "Verify accuracy, edge cases and response quality.", icon: "ClipboardCheck" },
          { step: "05", title: "Deployment", description: "Ship to production with monitoring in place from day one.", icon: "Rocket" },
          { step: "06", title: "Support", description: "Ongoing tuning and improvements as real usage grows.", icon: "Headphones" },
        ]}
      />

      {/* ── Why choose me + AI architecture ───────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <div>
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why choose me</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Built To Actually" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Ship And Scale" delay={0.12} />
                </span>
              </h2>

              <Reveal direction="up" delay={0.15}>
                <div className="mt-10">
                  <AiCoreIllustration />
                </div>
              </Reveal>

              <ul className="mt-12 flex flex-col gap-5">
                {whyChooseFeatures.map((feature, i) => {
                  const [title, description] = feature.split(" — ");
                  return (
                    <Reveal key={title} direction="up" delay={0.05 * i}>
                      <li className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                          <Check className="size-3.5" strokeWidth={2.5} />
                        </span>
                        <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                          <span className="font-bold text-ink">{title}</span> — {description}
                        </p>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            <div>
              <Reveal direction="up">
                <p className="eyebrow mb-4">Under the hood</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="AI Architecture" />
                <br />
                <TextReveal text="Overview" delay={0.1} />
              </h2>
              <Reveal direction="up" delay={0.15}>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-muted pretty">
                  A typical setup — how a request moves from your user to a grounded, accurate response.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="mt-10">
                <ArchitectureDiagram />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case studies ────────────────────────────────────────── */}
      <section id="case-studies" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Real results"
            title="Real Results From"
            highlight="AI Solutions"
            description="A few measurable outcomes from AI features shipped into production, not lab demos."
          />

          <ul className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, i) => {
              const Icon = study.icon;
              return (
                <li key={study.label}>
                  <Reveal direction="up" delay={0.06 * i} className="h-full">
                    <article className="card-surface flex h-full flex-col rounded-3xl p-8">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="grid size-11 shrink-0 place-items-center rounded-xl"
                          style={{ backgroundColor: `${study.color}1A`, color: study.color }}
                        >
                          <Icon className="size-5" strokeWidth={1.8} />
                        </span>
                        <span className="truncate text-[0.8rem] font-semibold text-ink-muted">{study.label}</span>
                      </div>

                      <p className="mt-6 font-display text-4xl font-extrabold text-ink">{study.metric}</p>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-muted pretty">{study.description}</p>

                      <div className="mt-auto pt-6">
                        <Sparkline
                          color={study.color}
                          path="M0 30 L15 24 L30 27 L45 14 L60 19 L75 8 L90 12 L105 4 L120 9"
                        />
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-10 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
              >
                View All Case Studies
                <ArrowRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <FAQ items={aiFaqs} />
      <AiCTA />

      {/* ── Other services ──────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="container">
          <Reveal direction="up">
            <p className="eyebrow mb-8 text-center md:text-left">Other services</p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((service, i) => {
              const Icon = otherServiceIcons[service.icon] ?? Code2;
              return (
                <li key={service.slug}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-surface group flex h-full flex-col items-start gap-4 p-6"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110">
                        <Icon className="size-5" strokeWidth={1.8} />
                      </span>
                      <span className="flex items-center gap-1.5 text-[0.92rem] font-bold text-ink">
                        {service.title}
                        <ArrowUpRight className="size-3.5 text-ink-faint transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
