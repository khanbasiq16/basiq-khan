import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Eye,
  FileText,
  FileX2,
  Gauge,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  Palette,
  PenTool,
  Plug,
  Puzzle,
  Search,
  Server,
  Settings,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiCloudflare,
  SiCloudinary,
  SiGooglechrome,
  SiLighthouse,
  SiNextdotjs,
  SiNodedotjs,
  SiPagespeedinsights,
  SiReact,
  SiVercel,
  SiWebpack,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DesktopMockup, LaptopMockup } from "@/components/ui/device-mockup";
import { MetricRing, SemiGauge } from "@/components/ui/metric-ring";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { PerformanceCTA } from "@/components/sections/performance-cta";
import { services, type Service } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Performance Optimization",
  description:
    "Speed up your website with Core Web Vitals fixes, image and JavaScript optimization, smart caching and a measurable before-and-after performance report.",
  alternates: { canonical: "/services/performance-optimization" },
};

/* ── Data ────────────────────────────────────────────────────────────── */

const toneStyles: Record<Service["tone"], string> = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  sky: "bg-sky-50 text-sky-600",
  indigo: "bg-indigo-50 text-indigo-600",
  rose: "bg-rose-50 text-rose-600",
  amber: "bg-amber-50 text-amber-600",
  emerald: "bg-emerald-50 text-emerald-600",
  fuchsia: "bg-fuchsia-50 text-fuchsia-600",
  cyan: "bg-cyan-50 text-cyan-600",
  orange: "bg-orange-50 text-orange-600",
};

const heroChips = ["Core Web Vitals", "Lighthouse 100", "Faster Loading", "SEO Ready", "Image Optimization"];

const trustedTools: { name: string; node: React.ReactNode }[] = [
  { name: "Google Lighthouse", node: <SiLighthouse className="size-6 text-[#F44B21]" /> },
  { name: "PageSpeed Insights", node: <SiPagespeedinsights className="size-6 text-[#4285F4]" /> },
  { name: "GTmetrix", node: <Gauge className="size-6 text-emerald-500" /> },
  { name: "Cloudflare", node: <SiCloudflare className="size-6 text-[#F38020]" /> },
  { name: "Vercel", node: <SiVercel className="size-6 text-ink" /> },
  { name: "Next.js", node: <SiNextdotjs className="size-6 text-ink" /> },
  { name: "React", node: <SiReact className="size-6 text-[#61DAFB]" /> },
  { name: "Node.js", node: <SiNodedotjs className="size-6 text-[#5FA04E]" /> },
  { name: "ImageKit", node: <ImageIcon className="size-6 text-violet-500" /> },
  { name: "Cloudinary", node: <SiCloudinary className="size-6 text-[#3448C5]" /> },
];

const optimizationServices: { title: string; points: string[]; icon: LucideIcon; tone: Service["tone"] }[] = [
  {
    title: "Core Web Vitals",
    points: ["LCP Optimization", "CLS Stability", "INP Improvement"],
    icon: Activity,
    tone: "blue",
  },
  {
    title: "Image Optimization",
    points: ["WebP & AVIF Conversion", "Lazy Loading", "Responsive Images"],
    icon: ImageIcon,
    tone: "violet",
  },
  {
    title: "JavaScript Optimization",
    points: ["Code Splitting", "Tree Shaking", "Bundle Analysis"],
    icon: Code2,
    tone: "amber",
  },
  {
    title: "CSS Optimization",
    points: ["Critical CSS", "Unused CSS Removal", "Minification"],
    icon: Palette,
    tone: "sky",
  },
  {
    title: "Caching & CDN",
    points: ["Browser Cache", "CDN Integration", "Server & Edge Cache"],
    icon: Database,
    tone: "emerald",
  },
  {
    title: "SEO Performance",
    points: ["Technical SEO", "Structured Data", "Meta & Schema"],
    icon: Search,
    tone: "rose",
  },
];

const performanceMetrics: { label: string; value: number; color: string }[] = [
  { label: "Performance", value: 98, color: "#4F6BFF" },
  { label: "SEO", value: 100, color: "#F59E0B" },
  { label: "Accessibility", value: 95, color: "#22C55E" },
  { label: "Best Practices", value: 100, color: "#6C63FF" },
];

const slowReasons: { label: string; icon: LucideIcon }[] = [
  { label: "Large, Unoptimized Images", icon: ImageIcon },
  { label: "Unused JavaScript", icon: Code2 },
  { label: "Slow Third-Party APIs", icon: Server },
  { label: "Render-Blocking CSS", icon: Palette },
  { label: "Too Many Plugins", icon: Puzzle },
  { label: "No Caching Strategy", icon: Database },
  { label: "Poor Hosting", icon: Globe },
];

const beforeStats = [
  { label: "Load Time", value: "5.8s" },
  { label: "LCP", value: "4.2s" },
  { label: "CLS", value: "0.34" },
];

const afterStats = [
  { label: "Load Time", value: "1.2s" },
  { label: "LCP", value: "1.4s" },
  { label: "CLS", value: "0.02" },
];

const toolsIUse: { name: string; node: React.ReactNode }[] = [
  { name: "Google Lighthouse", node: <SiLighthouse className="size-6 text-[#F44B21]" /> },
  { name: "Chrome DevTools", node: <SiGooglechrome className="size-6 text-[#4285F4]" /> },
  { name: "GTmetrix", node: <Gauge className="size-6 text-emerald-500" /> },
  { name: "PageSpeed Insights", node: <SiPagespeedinsights className="size-6 text-[#4285F4]" /> },
  { name: "Webpack Analyzer", node: <SiWebpack className="size-6 text-[#8DD6F9]" /> },
  { name: "Vercel Analytics", node: <SiVercel className="size-6 text-ink" /> },
  { name: "Cloudflare", node: <SiCloudflare className="size-6 text-[#F38020]" /> },
  { name: "ImageKit", node: <ImageIcon className="size-6 text-violet-500" /> },
  { name: "Cloudinary", node: <SiCloudinary className="size-6 text-[#3448C5]" /> },
];

const caseStudies: { label: string; metric: string; description: string; icon: LucideIcon; color: string }[] = [
  {
    label: "E-Commerce Website",
    metric: "-72%",
    description: "Load time cut from 4.8s to 1.3s after an image, JavaScript and caching overhaul — Lighthouse performance hit 98.",
    icon: Zap,
    color: "#4F6BFF",
  },
  {
    label: "Corporate Website",
    metric: "99/100",
    description: "Lighthouse performance score after a full Core Web Vitals pass, up from a 61 baseline — organic traffic grew 65%.",
    icon: Building2,
    color: "#22C55E",
  },
  {
    label: "SaaS Platform",
    metric: "-45%",
    description: "Bounce rate dropped once dashboard load time came in under 1.5 seconds, lifting engaged session time by 40%.",
    icon: LayoutDashboard,
    color: "#6C63FF",
  },
];

const performanceFaqs = [
  {
    question: "How long does performance optimization take?",
    answer:
      "Most audits and fixes are completed within 3–7 days depending on site size and how much custom code is involved. You get a before-and-after benchmark report, so the improvement is measurable, not just a promise.",
  },
  {
    question: "Will my website design change?",
    answer:
      "No. Performance work happens under the hood — image formats, code splitting, caching and server config. Your layout, branding and content stay exactly as they are unless you specifically ask for design changes too.",
  },
  {
    question: "Will SEO improve after optimization?",
    answer:
      "Yes. Core Web Vitals are a confirmed Google ranking signal, and faster load times directly reduce bounce rate — both typically move your rankings in the right direction within a few weeks of re-indexing.",
  },
  {
    question: "Can you optimize WordPress websites?",
    answer:
      "Yes. Plugin audits, database cleanup, image conversion, caching and CDN setup are some of the most common wins on WordPress and WooCommerce sites specifically.",
  },
  {
    question: "Can you optimize Next.js websites?",
    answer:
      "Yes — bundle analysis, dynamic imports, image optimization and edge caching are native to how Next.js works, so these sites usually see the fastest turnaround.",
  },
  {
    question: "Do you provide ongoing performance monitoring?",
    answer:
      "Every optimization includes a 30-day monitoring window, with an optional monthly plan after that covering Core Web Vitals tracking, alerts and regressions before they hurt your rankings.",
  },
];

const otherServiceSlugs = ["ui-ux-design", "web-development", "cms-development", "ai-integration", "api-integration"];
const otherServiceIcons: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  Database,
  Sparkles,
  Plug,
};
const otherServices = otherServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

/* ── Local, image-free UI mockups (match device-mockup.tsx's approach) ─ */

function PerformanceDashboardScreen() {
  const navItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
    { label: "Overview", icon: LayoutDashboard, active: true },
    { label: "Performance", icon: Gauge },
    { label: "Metrics", icon: BarChart3 },
    { label: "Reports", icon: FileText },
    { label: "Insights", icon: Eye },
    { label: "Settings", icon: Settings },
  ];
  const miniRings: { label: string; value: number; color: string }[] = [
    { label: "SEO", value: 100, color: "#F59E0B" },
    { label: "Accessibility", value: 95, color: "#22C55E" },
    { label: "Best Practices", value: 100, color: "#6C63FF" },
  ];
  const vitals: { label: string; value: string }[] = [
    { label: "LCP", value: "1.2s" },
    { label: "INP", value: "18ms" },
    { label: "CLS", value: "0.02" },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-hairline px-3 py-2 sm:px-3.5 sm:py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-500 text-white sm:size-5">
            <Gauge className="size-2.5 sm:size-3" />
          </span>
          <span className="text-[0.56rem] font-bold text-ink sm:text-[0.66rem]">Performance Overview</span>
        </div>
        <div className="hidden items-center gap-1.5 text-ink-faint sm:flex">
          <Globe className="size-3" />
          <span className="text-[0.48rem] font-medium">yoursite.com</span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[26%] shrink-0 flex-col gap-1 bg-[#1E2328] p-2 pt-2.5 sm:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={cn("flex items-center gap-1.5 rounded-[4px] px-2 py-1", item.active && "bg-brand-500")}
            >
              <item.icon
                className={cn("size-2.5 shrink-0", item.active ? "text-white" : "text-white/45")}
                strokeWidth={2.2}
              />
              <span
                className={cn(
                  "truncate text-[0.42rem] font-medium leading-none",
                  item.active ? "text-white" : "text-white/45"
                )}
              >
                {item.label}
              </span>
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 overflow-hidden p-3 sm:p-3.5">
          <div className="flex items-center gap-3">
            <MetricRing value={98} color="#4F6BFF" size={48} textClassName="text-[0.58rem]" />
            <div className="min-w-0">
              <p className="truncate text-[0.62rem] font-bold text-ink sm:text-[0.7rem]">Performance Score</p>
              <p className="text-[0.48rem] font-semibold text-emerald-500 sm:text-[0.54rem]">Excellent · +40 pts</p>
            </div>
          </div>

          <div className="hidden gap-2 sm:flex">
            {miniRings.map((r) => (
              <div key={r.label} className="flex flex-1 items-center gap-1.5 rounded-[7px] border border-hairline p-1.5">
                <MetricRing value={r.value} color={r.color} size={22} textClassName="text-[0.36rem]" />
                <span className="truncate text-[0.4rem] font-semibold text-ink-muted">{r.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-3 gap-2">
            {vitals.map((v) => (
              <div key={v.label} className="rounded-[7px] border border-hairline p-2">
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <p className="text-[0.42rem] font-bold uppercase text-ink-faint">{v.label}</p>
                </div>
                <p className="mt-1 text-[0.58rem] font-bold text-ink">{v.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-[94%] max-w-[460px] sm:w-[88%] sm:max-w-[560px] lg:mx-0 lg:w-full lg:max-w-none">
      <DesktopMockup screen={<PerformanceDashboardScreen />} />

      <div
        aria-hidden
        className="animate-floaty-slow absolute -top-7 left-0 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-6"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Core Web Vitals Passed</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty absolute bottom-8 left-0 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-10"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky-50 text-sky-600">
          <Search className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">SEO Score 100</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty absolute -top-9 right-0 hidden flex-col items-center gap-1.5 rounded-3xl border border-hairline bg-white/95 px-5 py-4 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-right-6"
        style={{ animationDelay: "1.6s" }}
      >
        <MetricRing value={100} color="#4F6BFF" size={56} textClassName="text-sm" />
        <span className="whitespace-nowrap text-[0.68rem] font-semibold text-ink-muted">Lighthouse Score</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty-slow absolute -bottom-11 right-2 hidden flex-col items-center gap-1.5 rounded-3xl border border-hairline bg-white/95 px-5 py-4 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:right-4"
        style={{ animationDelay: "2s" }}
      >
        <SemiGauge value={92} color="#22C55E" displayValue="1.2s" size={92} />
        <span className="whitespace-nowrap text-[0.68rem] font-semibold text-ink-muted">Super Fast</span>
      </div>
    </div>
  );
}

function SlowLoadingScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-4 text-center">
      <span className="size-10 animate-spin rounded-full border-2 border-rose-200 border-t-rose-500 sm:size-12" />
      <p className="text-[0.6rem] font-bold text-ink sm:text-[0.72rem]">Loading… 5.8s</p>
      <div className="h-1.5 w-3/4 overflow-hidden rounded-full bg-surface-muted">
        <span className="block h-full w-1/3 rounded-full bg-rose-400" />
      </div>
      <p className="text-[0.5rem] text-ink-faint sm:text-[0.58rem]">3.2MB transferred · 142 requests</p>
    </div>
  );
}

function SlowSiteMockup() {
  return (
    <div className="relative mx-auto max-w-[460px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-rose-500/10 blur-[90px]" />
      <LaptopMockup screen={<SlowLoadingScreen />} />

      <div className="animate-floaty-slow absolute -left-2 -top-6 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
          <AlertTriangle className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">5.8s Load Time</span>
      </div>

      <div
        className="animate-floaty absolute -bottom-6 -right-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-500">
          <FileX2 className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">3.2MB Page Size</span>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function PerformanceOptimizationPage() {
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
            <div className="flex flex-col items-center text-center lg:w-[clamp(380px,36vw,520px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge icon={<Zap className="size-3.5 fill-current" />}>Performance Optimization</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(1rem,3vw,2.1rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink balance sm:text-[clamp(1.8rem,2.8vw,2.5rem)]">
                <TextReveal text="Make Your Website" />
                <br />
                <span className="relative bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Lightning Fast" delay={0.06} />
                  <Reveal direction="none" delay={0.9} duration={0.5} className="absolute -bottom-1 left-0 w-full">
                    <svg viewBox="0 0 240 12" className="w-full text-brand-300" fill="none" aria-hidden>
                      <path d="M2 8C40 3 120 2 238 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </Reveal>
                </span>
                <br />
                <TextReveal text="And Ready To Scale" delay={0.12} />.
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I optimize websites for maximum speed, better Core Web Vitals, improved SEO rankings,
                  lower bounce rates and exceptional user experience.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.28}>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {heroChips.map((chip) => (
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
                      Optimize My Website
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="#case-studies">
                      View Performance Audit
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex -space-x-3">
                    {["#4F6BFF", "#6C63FF", "#8098FF"].map((c, i) => (
                      <span
                        key={i}
                        className="grid size-10 place-items-center rounded-full border-[3px] border-white text-[0.68rem] font-bold text-white shadow-soft"
                        style={{ background: c }}
                        aria-hidden
                      >
                        {["JS", "SJ", "MB"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-[0.92rem] font-bold text-ink">30+ Optimized Websites</p>
                    <p className="text-[0.8rem] text-ink-muted">Trusted by businesses worldwide.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: performance dashboard mockup */}
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

      {/* ── Trusted tools ───────────────────────────────────────── */}
      <section aria-label="Performance tools I work with" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              Trusted Tools & Technologies
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...trustedTools, ...trustedTools].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= trustedTools.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Performance optimization services ──────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I optimize"
            title="Performance Optimization"
            highlight="Services"
            description="Six focused optimization tracks that work together to take your site from sluggish to instant — measured, not guessed."
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {optimizationServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <li key={service.title}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <article className="card-surface group relative flex h-full flex-col rounded-3xl p-7">
                      <span
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110",
                          toneStyles[service.tone]
                        )}
                      >
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <h3 className="mt-5 text-[1.02rem] font-bold tracking-tight text-ink">{service.title}</h3>
                      <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-2.5 text-[0.86rem] text-ink-muted">
                            <span className="size-1.5 shrink-0 rounded-full bg-brand-300" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex size-9 shrink-0 items-center justify-center self-end rounded-full border border-hairline text-ink-muted transition-all duration-400 ease-premium group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Performance metrics ─────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Performance metrics"
            title="Numbers That"
            highlight="Speak For Themselves"
            description="Every optimization is benchmarked against Lighthouse and real Core Web Vitals data before I call a project done."
            align="center"
          />

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {performanceMetrics.map((metric, i) => (
              <li key={metric.label}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface flex h-full flex-col items-center gap-4 p-7 text-center">
                    <MetricRing value={metric.value} color={metric.color} size={96} />
                    <p className="text-[0.85rem] font-semibold text-ink-muted">{metric.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why websites are slow ───────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <SlowSiteMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why websites are slow</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Common Problems" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="I Fix Every Week" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {slowReasons.map((reason, i) => (
                  <Reveal key={reason.label} direction="up" delay={0.05 * i}>
                    <li className="flex items-center gap-3.5 rounded-2xl border border-hairline bg-white p-4 shadow-soft">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
                        <reason.icon className="size-4.5" strokeWidth={2} />
                      </span>
                      <span className="text-[0.88rem] font-semibold text-ink">{reason.label}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How I optimize ──────────────────────────────────────── */}
      <Process
        description="Six stages, from the first speed audit to a monitored, measurably faster site in production."
        steps={[
          { step: "01", title: "Audit", description: "Complete website performance audit and diagnostics.", icon: "Search" },
          { step: "02", title: "Analysis", description: "Analyze issues, bottlenecks and quick wins.", icon: "Activity" },
          { step: "03", title: "Optimization", description: "Implement fixes across code, images and caching.", icon: "Code2" },
          { step: "04", title: "Testing", description: "Test Core Web Vitals and performance on every device.", icon: "ClipboardCheck" },
          { step: "05", title: "Deployment", description: "Deploy optimized changes to your live site.", icon: "Rocket" },
          { step: "06", title: "Monitoring", description: "Continuous monitoring so gains don't regress.", icon: "RefreshCw" },
        ]}
      />

      {/* ── Before vs after ──────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="The results"
            title="Before vs"
            highlight="After Optimization"
            description="Real numbers from real audits — not best-case marketing figures."
            align="center"
          />

          <Reveal direction="scale">
            <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-rose-100 bg-white p-8 shadow-soft sm:p-9">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-rose-500">Before</p>
                <div className="mt-7 flex items-center justify-between gap-6">
                  <ul className="flex flex-1 flex-col gap-4">
                    {beforeStats.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-4 border-b border-hairline pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-[0.86rem] text-ink-muted">{row.label}</span>
                        <span className="text-[0.95rem] font-bold text-rose-600">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                  <SemiGauge value={58} color="#F43F5E" size={112} label="Performance" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-emerald-200 bg-white p-8 shadow-lift sm:p-9">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-emerald-50/60"
                />
                <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.14em] text-emerald-500">After</p>
                <div className="relative mt-7 flex items-center justify-between gap-6">
                  <ul className="flex flex-1 flex-col gap-4">
                    {afterStats.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-4 border-b border-hairline/70 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-[0.86rem] text-ink-muted">{row.label}</span>
                        <span className="text-[0.95rem] font-bold text-emerald-600">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                  <SemiGauge value={98} color="#22C55E" size={112} label="Performance" />
                </div>
              </div>

              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-surface-muted bg-brand-gradient text-white shadow-lift md:grid"
              >
                <ArrowRight className="size-5" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tools I use ──────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="My toolkit"
            title="Tools I Use For"
            highlight="Optimization"
            description="The same tools you can use yourself to verify every number in this page."
            align="center"
          />

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {toolsIUse.map((tool, i) => (
              <Reveal key={tool.name} direction="up" delay={0.05 * i}>
                <li className="flex w-[152px] flex-col items-center gap-3 rounded-2xl border border-hairline bg-white px-4 py-6 text-center shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-muted">
                    {tool.node}
                  </span>
                  <span className="text-[0.8rem] font-semibold text-ink-muted">{tool.name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Case studies ─────────────────────────────────────────── */}
      <section id="case-studies" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Real results"
            title="Recent Performance"
            highlight="Improvements"
            description="A few recent optimization engagements, each measured before and after — not lab demos."
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

                      <p className="mt-6 flex items-center gap-2 font-display text-4xl font-extrabold text-ink">
                        {study.metric.startsWith("-") ? (
                          <TrendingDown className="size-7 text-emerald-500" />
                        ) : (
                          <TrendingUp className="size-7 text-emerald-500" />
                        )}
                        {study.metric}
                      </p>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-muted pretty">{study.description}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ items={performanceFaqs} />
      <PerformanceCTA />

      {/* ── Other services ───────────────────────────────────────── */}
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
