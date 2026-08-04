import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  Database,
  Gauge,
  Headphones,
  ImageIcon,
  LayoutDashboard,
  LifeBuoy,
  PenTool,
  Plug,
  RefreshCw,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UploadCloud,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SiCpanel, SiGithub, SiGooglecloud, SiWoocommerce, SiWordpress } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { LaptopMockup } from "@/components/ui/device-mockup";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { projects, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Maintenance & Support",
  description:
    "Ongoing website maintenance and support — updates, security monitoring, daily backups, uptime monitoring and fast technical support so your site keeps running perfectly.",
  alternates: { canonical: "/services/maintenance-support" },
};

const toneStyles = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  rose: "bg-rose-50 text-rose-600",
  sky: "bg-sky-50 text-sky-600",
  emerald: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  fuchsia: "bg-fuchsia-50 text-fuchsia-600",
  indigo: "bg-indigo-50 text-indigo-600",
} as const;

type Tone = keyof typeof toneStyles;
const toneKeys = Object.keys(toneStyles) as Tone[];

/* ── Data ────────────────────────────────────────────────────────────── */

const heroChips: { label: string; icon: LucideIcon }[] = [
  { label: "24/7 Monitoring", icon: Activity },
  { label: "Regular Updates", icon: RefreshCw },
  { label: "Security First", icon: ShieldCheck },
  { label: "Fast Support", icon: Headphones },
];

const maintenanceToolLogos: { name: string; node: React.ReactNode }[] = [
  { name: "WordPress", node: <SiWordpress className="size-6 text-[#21759B]" /> },
  { name: "WooCommerce", node: <SiWoocommerce className="size-6 text-[#7F54B3]" /> },
  { name: "cPanel", node: <SiCpanel className="size-6 text-[#FF6C2C]" /> },
  { name: "Cloudflare", node: <Cloud className="size-6 text-[#F38020]" strokeWidth={2} /> },
  { name: "Sucuri", node: <ShieldCheck className="size-6 text-[#5BB974]" strokeWidth={2} /> },
  { name: "Jetpack", node: <Zap className="size-6 text-[#00BE28]" strokeWidth={2} /> },
  { name: "Google Cloud", node: <SiGooglecloud className="size-6 text-[#4285F4]" /> },
  { name: "AWS", node: <Cloud className="size-6 text-[#FF9900]" strokeWidth={2} /> },
  { name: "GitHub", node: <SiGithub className="size-6 text-ink" /> },
  { name: "UpdraftPlus", node: <UploadCloud className="size-6 text-[#1E88E5]" strokeWidth={2} /> },
];

const whatsIncluded: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Regular Updates",
    description: "We update core, themes, plugins and dependencies regularly.",
    icon: RefreshCw,
  },
  {
    title: "Security Monitoring",
    description: "24/7 security monitoring, malware scanning and threat removal.",
    icon: ShieldCheck,
  },
  {
    title: "Daily Backups",
    description: "Automatic daily backups to the cloud with easy one-click restoration.",
    icon: UploadCloud,
  },
  {
    title: "Uptime Monitoring",
    description: "We monitor uptime around the clock and ensure your site is always live.",
    icon: Activity,
  },
  {
    title: "Bug Fixes",
    description: "Quick bug fixes and issue resolution before they affect visitors.",
    icon: Wrench,
  },
  {
    title: "Performance Optimization",
    description: "We keep your website fast, lean and optimized as it grows.",
    icon: Gauge,
  },
  {
    title: "Content Updates",
    description: "Update text, images, banners, blogs and pages whenever you need.",
    icon: ImageIcon,
  },
  {
    title: "Technical Support",
    description: "Expert support whenever you need help — email, chat or a call.",
    icon: Headphones,
  },
];

const howWeWorkSteps = [
  { step: "01", title: "Monitoring", description: "We monitor your website 24/7 for issues.", icon: "Activity" },
  { step: "02", title: "Updates", description: "We keep everything updated and current.", icon: "RefreshCw" },
  { step: "03", title: "Backup", description: "Daily backups for complete peace of mind.", icon: "UploadCloud" },
  { step: "04", title: "Optimize", description: "We optimize speed and performance.", icon: "Gauge" },
  { step: "05", title: "Fix Issues", description: "We fix bugs and resolve errors fast.", icon: "Wrench" },
  { step: "06", title: "Support", description: "We're always here when you need us.", icon: "Headphones" },
] as const;

const supportPlans: {
  name: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
}[] = [
  {
    name: "Basic Care",
    description: "Essential maintenance for small websites.",
    icon: LifeBuoy,
    features: ["Core & plugin updates", "Uptime monitoring", "Monthly backup", "Email support"],
  },
  {
    name: "Business Care",
    description: "Perfect for growing business websites.",
    icon: ShieldCheck,
    features: [
      "Everything in Basic Care",
      "Daily backups & malware scans",
      "24/7 security monitoring",
      "Priority email & chat support",
      "Monthly performance report",
    ],
    popular: true,
  },
  {
    name: "Premium Care",
    description: "Priority support and advanced maintenance.",
    icon: Rocket,
    features: [
      "Everything in Business Care",
      "Same-day issue resolution",
      "Speed & performance tuning",
      "Dedicated support line",
    ],
  },
];

const whyMattersBullets = [
  "Prevents downtime & data loss",
  "Keeps your website secure",
  "Improves performance & speed",
  "Better user experience",
  "Boosts SEO rankings",
  "Saves time & reduces stress",
];

const healthStats: { value: number; suffix: string; decimals?: number; label: string }[] = [
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime Guaranteed" },
  { value: 1.2, suffix: " hrs", decimals: 1, label: "Average Response Time" },
  { value: 0, suffix: "", label: "Security Issues (Last 30 Days)" },
  { value: 100, suffix: "+", label: "Websites Under Care" },
];

const maintainedSites: {
  title: string;
  category: string;
  tags: string[];
  since: string;
  image: string;
}[] = [
  {
    title: "E-Commerce Store",
    category: "WooCommerce Website",
    tags: ["Daily Backup", "Security", "Updates"],
    since: "Since 2023",
    image: projects[0].image,
  },
  {
    title: "Corporate Website",
    category: "Business Website",
    tags: ["Updates", "Security", "Performance"],
    since: "Since 2022",
    image: projects[1].image,
  },
  {
    title: "Blog Website",
    category: "WordPress Blog",
    tags: ["Backup", "Security", "SEO"],
    since: "Since 2022",
    image: projects[4].image,
  },
  {
    title: "Membership Site",
    category: "Online Community",
    tags: ["Updates", "Backup", "Support"],
    since: "Since 2022",
    image: projects[5].image,
  },
];

const maintenanceFaqs = [
  {
    question: "What's included in the maintenance plan?",
    answer:
      "Every plan covers core, theme and plugin updates, security monitoring, backups and uptime monitoring as a baseline. Business and Premium plans add daily backups, malware scanning, performance tuning and priority support — see the plan comparison above for the full breakdown.",
  },
  {
    question: "How often will my website be backed up?",
    answer:
      "Basic Care includes a tested monthly backup. Business Care and Premium Care both run automatic daily backups stored off-site, with one-click restoration if anything ever goes wrong.",
  },
  {
    question: "Will you update plugins and themes?",
    answer:
      "Yes. Core, theme and plugin updates are checked and applied regularly, and every update is tested on a staging copy first so a routine update never breaks your live site.",
  },
  {
    question: "How fast is your support response?",
    answer:
      "Standard requests are typically answered within a few hours during business days. Business and Premium Care plans get priority queuing, and average response time across all clients currently sits at 1.2 hours.",
  },
  {
    question: "Can hacked websites be fixed?",
    answer:
      "Yes. If your site is compromised I'll remove the malware, patch the vulnerability that let it in, restore from a clean backup if needed, and add hardening so it doesn't happen again.",
  },
  {
    question: "Can I cancel my plan anytime?",
    answer:
      "Yes, every maintenance plan is billed monthly with no long-term contract — cancel anytime with no cancellation fee.",
  },
];

const otherServiceIcons: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  LayoutDashboard,
  Database,
  Plug,
  Sparkles,
  Gauge,
  LifeBuoy,
};

const otherServices = services.filter((s) => s.slug !== "maintenance-support").slice(0, 6);

/* ── Hero dashboard mockup — real markup, not a rasterized image ──────── */

const supportNavItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Security", icon: ShieldCheck },
  { label: "Backups", icon: UploadCloud },
  { label: "Updates", icon: RefreshCw },
  { label: "Performance", icon: Gauge },
  { label: "Support", icon: Headphones },
];

const recentUpdateRows: { label: string; icon: LucideIcon; status: "Success" | "Scanned" }[] = [
  { label: "WordPress Core Updated", icon: RefreshCw, status: "Success" },
  { label: "Plugin Updates (3)", icon: Code2, status: "Success" },
  { label: "Security Scan", icon: ShieldAlert, status: "Scanned" },
];

function SupportDashboardScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-hairline px-3 py-2 sm:px-3.5 sm:py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-gradient text-white sm:size-5">
            <LifeBuoy className="size-2.5 sm:size-3" />
          </span>
          <span className="text-[0.56rem] font-bold text-ink sm:text-[0.66rem]">Support Dashboard</span>
        </div>
        <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.46rem] font-bold text-emerald-600 sm:inline-flex">
          <CheckCircle2 className="size-2.5" /> All Systems Operational
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[27%] shrink-0 flex-col gap-1 bg-[#0B1020] p-2 pt-2.5 sm:flex">
          {supportNavItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-1.5 rounded-[4px] px-2 py-1 ${item.active ? "bg-brand-500" : ""}`}
            >
              <item.icon
                className={`size-2.5 shrink-0 ${item.active ? "text-white" : "text-white/45"}`}
                strokeWidth={2.2}
              />
              <span
                className={`truncate text-[0.46rem] font-medium leading-none ${item.active ? "text-white" : "text-white/45"}`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 overflow-hidden p-3 sm:p-3.5">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <div className="rounded-[7px] border border-hairline p-2">
              <p className="text-[0.42rem] font-bold uppercase tracking-wide text-ink-faint">Website</p>
              <p className="mt-1 flex items-center gap-1 text-[0.6rem] font-bold text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Online
              </p>
            </div>
            <div className="rounded-[7px] border border-hairline p-2">
              <p className="text-[0.42rem] font-bold uppercase tracking-wide text-ink-faint">Uptime</p>
              <p className="mt-1 text-[0.6rem] font-bold text-ink">99.9%</p>
            </div>
            <div className="rounded-[7px] border border-hairline p-2">
              <p className="text-[0.42rem] font-bold uppercase tracking-wide text-ink-faint">Response</p>
              <p className="mt-1 text-[0.6rem] font-bold text-ink">1.2 hrs</p>
            </div>
          </div>

          <div className="min-h-0 flex-1 rounded-[7px] border border-hairline p-2">
            <p className="text-[0.46rem] font-bold text-ink">Recent Updates</p>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {recentUpdateRows.map((row) => (
                <li key={row.label} className="flex items-center gap-1.5 rounded-[5px] bg-surface-muted px-1.5 py-1">
                  <span className="grid size-4 shrink-0 place-items-center rounded-[4px] border border-hairline bg-white text-ink-muted">
                    <row.icon className="size-2" strokeWidth={2} />
                  </span>
                  <span className="flex-1 truncate text-[0.42rem] font-semibold text-ink">{row.label}</span>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.38rem] font-bold text-emerald-600">
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden rounded-[7px] border border-hairline p-2 sm:block">
            <p className="text-[0.46rem] font-bold text-ink">Performance</p>
            <div className="mt-1.5 flex h-5 items-end gap-[3px]" aria-hidden>
              {[45, 62, 55, 70, 64, 82, 95].map((v, i) => (
                <span key={i} className="flex-1 rounded-[1.5px] bg-brand-gradient" style={{ height: `${v}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportDeviceMockup() {
  return (
    <div className="relative mx-auto w-[94%] max-w-[440px] sm:w-[88%] sm:max-w-[520px] lg:mx-0 lg:w-full lg:max-w-none">
      <LaptopMockup screen={<SupportDashboardScreen />} />

      <div
        aria-hidden
        className="animate-floaty-slow absolute -top-9 left-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-8"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Website Online</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty absolute bottom-2 left-0 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-10"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
          <ShieldCheck className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Security Protected</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty absolute -top-9 right-1 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-right-6"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky-50 text-sky-600">
          <UploadCloud className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Backup Completed</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty-slow absolute -bottom-9 right-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:right-4"
        style={{ animationDelay: "2s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-500">
          <TrendingUp className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">99.9% Uptime</span>
      </div>
    </div>
  );
}

/* ── "Why maintenance matters" illustration (no image assets) ─────────── */

function MaintenanceShieldMockup() {
  return (
    <div className="relative mx-auto max-w-[420px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />

      <div
        aria-hidden
        className="animate-floaty absolute -left-4 top-2 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-brand-500 shadow-glass sm:grid"
      >
        <RefreshCw className="size-6" strokeWidth={2} />
      </div>
      <div
        aria-hidden
        className="animate-floaty-slow absolute -right-4 top-10 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-emerald-500 shadow-glass sm:grid"
        style={{ animationDelay: "1s" }}
      >
        <Gauge className="size-6" strokeWidth={2} />
      </div>
      <div
        aria-hidden
        className="animate-floaty absolute -bottom-5 left-2 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-sky-500 shadow-glass sm:grid"
        style={{ animationDelay: "1.6s" }}
      >
        <Clock className="size-6" strokeWidth={2} />
      </div>

      <div className="relative overflow-hidden rounded-[32px] bg-brand-gradient p-10 shadow-lift sm:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="absolute -inset-2 animate-floaty-slow rounded-[40px] border border-white/25" />
        </div>
        <div className="relative grid place-items-center">
          <ShieldCheck className="size-24 text-white sm:size-32" strokeWidth={1.3} />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute -bottom-6 right-[-6%] w-[170px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150"
      >
        <p className="text-[0.62rem] font-semibold text-ink-muted">Security Status</p>
        <p className="mt-1 flex items-center gap-1.5 text-[0.82rem] font-bold text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" /> Protected
        </p>
      </div>
    </div>
  );
}

export default function MaintenanceSupportPage() {
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
                <Badge icon={<ShieldCheck className="size-3.5" />}>Maintenance &amp; Support</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-black leading-[1.08] tracking-[-0.02em] text-ink balance">
                <TextReveal text="We Keep Your Website" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Secure, Updated &" delay={0.08} />
                  <br />
                  <TextReveal text="Running Perfectly." delay={0.16} />
                </span>
              </h1>

              <Reveal direction="up" delay={0.25}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  Reliable maintenance and support services that keep your website fast, secure and
                  always up to date. You focus on your business — I&apos;ll take care of the rest.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.32}>
                <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {heroChips.map((chip) => (
                    <li
                      key={chip.label}
                      className="flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[0.78rem] font-semibold text-ink-muted shadow-soft"
                    >
                      <chip.icon className="size-3.5 text-brand-500" strokeWidth={2} />
                      {chip.label}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Get Maintenance Plan
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="#plans">View Support Packages</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.48}>
                <div className="mt-11 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                  <div className="flex -space-x-3">
                    {["#4F6BFF", "#6C63FF", "#8098FF"].map((c, i) => (
                      <span
                        key={i}
                        className="grid size-11 place-items-center rounded-full border-[3px] border-white text-[0.7rem] font-bold text-white shadow-soft"
                        style={{ background: c }}
                        aria-hidden
                      >
                        {["JS", "SJ", "MB"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-0.5 text-amber-400" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4">
                          <path d="M10 1.6l2.47 5.3 5.53.66-4.1 3.94 1.09 5.9L10 14.6l-4.99 2.8 1.09-5.9-4.1-3.94 5.53-.66L10 1.6z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-1 text-sm font-medium text-ink-muted">
                      <span className="font-bold text-ink">50+ Happy Clients</span> Trust My Care
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: support dashboard mockup */}
            <div className="w-full lg:w-[clamp(420px,42vw,640px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>

                <SupportDeviceMockup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted tools marquee ───────────────────────────────── */}
      <section aria-label="Maintenance tools and platforms I use" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              Trusted Technologies &amp; Tools
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...maintenanceToolLogos, ...maintenanceToolLogos].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= maintenanceToolLogos.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What's included ─────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What's included"
            title="Everything Your Website"
            highlight="Needs To Thrive"
            description="A complete care plan that covers updates, security, backups and performance — so nothing slips through the cracks."
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatsIncluded.map((item, i) => {
              const Icon = item.icon;
              const tone = toneKeys[i % toneKeys.length];
              return (
                <li key={item.title}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <article className="card-surface group relative h-full overflow-hidden p-6">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100"
                      />
                      <div className="relative">
                        <span
                          className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110 ${toneStyles[tone]}`}
                        >
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <h3 className="mt-4 text-[0.95rem] font-bold tracking-tight text-ink">{item.title}</h3>
                        <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-muted pretty">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── How we work ─────────────────────────────────────────── */}
      <Process
        steps={howWeWorkSteps}
        description="Six stages, running on a loop every month — no black boxes between what you're paying for and what's actually happening."
      />

      {/* ── Support plans ───────────────────────────────────────── */}
      <section id="plans" className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Support plans"
            title="Pick The Plan That"
            highlight="Fits Your Website"
            description="Every plan includes direct access to me — no ticket queue, no support tiers hiding behind a chatbot."
            align="center"
          />

          <ul className="grid gap-6 lg:grid-cols-3">
            {supportPlans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <li key={plan.name} className="h-full">
                  <Reveal direction="up" delay={0.08 * i} className="h-full">
                    <div
                      className={`relative flex h-full flex-col rounded-[28px] border p-8 transition-all duration-500 ease-premium ${
                        plan.popular
                          ? "border-brand-200 bg-white shadow-lift lg:-translate-y-3"
                          : "border-hairline bg-white shadow-soft hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
                      }`}
                    >
                      {plan.popular && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-50/60 via-transparent to-brand-50/60"
                        />
                      )}
                      {plan.popular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-wide text-white shadow-lift">
                          Most Popular
                        </span>
                      )}

                      <div className="relative">
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                            plan.popular ? "bg-brand-gradient text-white" : "bg-brand-50 text-brand-500"
                          }`}
                        >
                          <Icon className="size-6" strokeWidth={2} />
                        </span>
                        <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{plan.name}</h3>
                        <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-muted">{plan.description}</p>

                        <ul className="mt-6 flex flex-1 flex-col gap-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-[0.86rem] text-ink-muted">
                              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                                <Check className="size-3" strokeWidth={2.5} />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button
                          asChild
                          size="md"
                          variant={plan.popular ? "primary" : "outline"}
                          magnetic={6}
                          className="mt-8 w-full"
                        >
                          <Link href="/contact">Choose {plan.name}</Link>
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Why maintenance matters ─────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <MaintenanceShieldMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why maintenance matters</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="A Small Investment That" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Protects A Much Bigger One" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {whyMattersBullets.map((bullet, i) => (
                  <Reveal key={bullet} direction="up" delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <p className="text-[0.9rem] leading-relaxed text-ink-muted">{bullet}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live website health ─────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Live website health"
            title="The Numbers Behind"
            highlight="Every Website I Maintain"
            description="Pulled straight from the same monitoring dashboard every client gets access to."
            align="center"
          />

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {healthStats.map((stat, i) => (
              <li key={stat.label}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface flex h-full flex-col items-center gap-2 p-7 text-center">
                    <p className="font-display text-3xl font-extrabold text-brand-500 sm:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                    </p>
                    <p className="text-[0.82rem] font-semibold leading-tight text-ink-muted">{stat.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Client websites we maintain ─────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="We maintain & support"
            title="Websites Running On"
            highlight="My Care Plans"
            description="A snapshot of the kinds of sites currently on a maintenance plan — different platforms, the same discipline."
            action={{ label: "View All Clients", href: "/#projects" }}
          />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {maintainedSites.map((maintained, i) => (
              <li key={maintained.title}>
                <Reveal direction="up" delay={0.06 * i}>
                  <article className="card-surface group h-full overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                      <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.07]">
                        <Image
                          src={maintained.image}
                          alt={`${maintained.title} — website preview`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.65rem] font-bold text-ink shadow-soft backdrop-blur">
                        {maintained.since}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[0.95rem] font-bold tracking-tight text-ink">{maintained.title}</h3>
                      <p className="mt-0.5 text-[0.78rem] text-ink-muted">{maintained.category}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {maintained.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-semibold text-brand-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ items={maintenanceFaqs} />

      <CTA
        eyebrow="Stay worry-free"
        heading="Let Us Handle Your Website Maintenance & Support."
        description="Stay worry-free while I keep your website secure, updated and running at its best."
        primaryLabel="Get Maintenance Plan"
        secondaryLabel="Book a Call"
        secondaryHref={site.calendly}
      />

      {/* ── Explore other services ──────────────────────────────── */}
      <section className="pb-12 md:pb-20">
        <div className="container">
          <Reveal direction="up" className="mb-8">
            <p className="eyebrow">Explore other services</p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, i) => {
              const Icon = otherServiceIcons[service.icon] ?? Code2;
              return (
                <li key={service.slug}>
                  <Reveal direction="up" delay={0.05 * i}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-soft transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110">
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <span className="flex-1 truncate text-[0.92rem] font-bold text-ink">{service.title}</span>
                      <ArrowUpRight className="size-4 shrink-0 text-ink-faint transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
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
