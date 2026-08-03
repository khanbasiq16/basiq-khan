import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ban,
  Bug,
  Building2,
  Check,
  Cloud,
  Code2,
  Columns3,
  Dumbbell,
  Eye,
  FileText,
  GraduationCap,
  HardDrive,
  HardHat,
  Heading2,
  HeartPulse,
  Home,
  Image as ImageIcon,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  LayoutTemplate,
  Lock,
  MessageSquare,
  MousePointerClick,
  Package,
  Palette,
  Pencil,
  Plane,
  PenTool,
  Plug,
  Plus,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  Type,
  Users,
  UtensilsCrossed,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiBigcommerce,
  SiContentful,
  SiElementor,
  SiShopify,
  SiSquarespace,
  SiStrapi,
  SiWebflow,
  SiWix,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LaptopMockup, PhoneMockup } from "@/components/ui/device-mockup";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CMS Development",
  description:
    "WordPress, WooCommerce, Shopify and Elementor builds so your team can manage content, products, blogs and pages without touching code.",
  alternates: { canonical: "/services/cms-development" },
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

const cmsPlatformLogos: { name: string; node: React.ReactNode }[] = [
  { name: "WordPress", node: <SiWordpress className="size-6 text-[#21759B]" /> },
  { name: "WooCommerce", node: <SiWoocommerce className="size-6 text-[#7F54B3]" /> },
  { name: "Shopify", node: <SiShopify className="size-6 text-[#95BF47]" /> },
  { name: "Elementor", node: <SiElementor className="size-6 text-[#92003B]" /> },
  { name: "Webflow", node: <SiWebflow className="size-6 text-[#4353FF]" /> },
  { name: "Wix", node: <SiWix className="size-6 text-ink" /> },
  { name: "Squarespace", node: <SiSquarespace className="size-6 text-ink" /> },
  { name: "BigCommerce", node: <SiBigcommerce className="size-6 text-ink" /> },
  { name: "Strapi", node: <SiStrapi className="size-6 text-[#4945FF]" /> },
  { name: "Contentful", node: <SiContentful className="size-6 text-[#2478CC]" /> },
];

const cmsServices: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  {
    title: "Custom WordPress Development",
    description: "Custom themes, plugins and WordPress website builds.",
    icon: Code2,
    tone: "blue",
  },
  {
    title: "WooCommerce Stores",
    description: "High-converting WooCommerce stores with secure payment integration.",
    icon: ShoppingCart,
    tone: "violet",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify stores that are fast, secure and scalable.",
    icon: ShoppingBag,
    tone: "rose",
  },
  {
    title: "Elementor Websites",
    description: "Pixel-perfect websites using Elementor & Elementor Pro page builder.",
    icon: LayoutTemplate,
    tone: "sky",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages designed to generate leads and sales.",
    icon: Rocket,
    tone: "emerald",
  },
  {
    title: "Business Websites",
    description: "Modern, responsive and SEO friendly business websites for growth.",
    icon: Building2,
    tone: "orange",
  },
  {
    title: "Blog Websites",
    description: "SEO optimized blog websites that are easy to manage and update.",
    icon: PenTool,
    tone: "fuchsia",
  },
  {
    title: "Membership Websites",
    description: "Create membership sites with content restriction and user management.",
    icon: Users,
    tone: "indigo",
  },
  {
    title: "CMS Maintenance",
    description: "Regular updates, backups, security and performance maintenance.",
    icon: ShieldCheck,
    tone: "blue",
  },
];

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Easy Content Editing", description: "Update text, images and pages yourself in minutes, no developer needed.", icon: Pencil },
  { title: "No Coding Required", description: "A visual editor built for your team, not for engineers.", icon: MousePointerClick },
  { title: "SEO Friendly", description: "Clean markup and metadata structure that search engines actually read.", icon: Search },
  { title: "Fast Performance", description: "Optimized assets and caching so pages load in under a second.", icon: Zap },
  { title: "Secure", description: "Hardened against common exploits with regular security patching.", icon: ShieldCheck },
  { title: "Scalable", description: "Grows from a single landing page to a full product catalog.", icon: TrendingUp },
  { title: "Responsive", description: "Looks and works right on every phone, tablet and desktop.", icon: Smartphone },
  { title: "Easy Product Management", description: "Add, edit and organize products or posts without touching code.", icon: Package },
];

const featuredProjects = projects.slice(0, 6);

const featuresIncluded = [
  "Custom Theme Design",
  "Drag & Drop Builder",
  "Responsive Design",
  "Blog System",
  "SEO Setup",
  "Contact Forms",
  "Google Maps Integration",
  "Analytics Integration",
  "Speed Optimization",
  "Security & Backup",
  "User Role Management",
  "Ecommerce Ready",
];

const platformComparison: { name: string; description: string; node: React.ReactNode; color: string }[] = [
  { name: "WordPress", description: "Best for business websites and blogs", node: <SiWordpress className="size-9" />, color: "#21759B" },
  { name: "WooCommerce", description: "Best for online stores with WordPress", node: <SiWoocommerce className="size-9" />, color: "#7F54B3" },
  { name: "Shopify", description: "Best for dedicated online stores", node: <SiShopify className="size-9" />, color: "#95BF47" },
  { name: "Webflow", description: "Best for design-focused websites", node: <SiWebflow className="size-9" />, color: "#4353FF" },
  { name: "Strapi", description: "Headless CMS for developers", node: <SiStrapi className="size-9" />, color: "#4945FF" },
  { name: "Contentful", description: "Enterprise content platform", node: <SiContentful className="size-9" />, color: "#2478CC" },
];

const comparisonRows = [
  { template: "Hard To Manage", custom: "Easy Management" },
  { template: "Poor SEO Structure", custom: "SEO Friendly" },
  { template: "Slower Load Times", custom: "Better Performance" },
  { template: "Generic Design", custom: "Custom Design" },
  { template: "Locked-In Features", custom: "Unlimited Flexibility" },
  { template: "Rented Platform", custom: "Full Ownership" },
];

const industries: { label: string; icon: LucideIcon }[] = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Education", icon: GraduationCap },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "Real Estate", icon: Home },
  { label: "Construction", icon: HardHat },
  { label: "Finance", icon: Landmark },
  { label: "Travel", icon: Plane },
  { label: "Fitness", icon: Dumbbell },
  { label: "Retail", icon: ShoppingBag },
  { label: "Law Firms", icon: Scale },
];

const performanceMetrics = [
  { label: "Performance", value: 98, color: "#4F6BFF" },
  { label: "Accessibility", value: 100, color: "#22C55E" },
  { label: "SEO", value: 95, color: "#F59E0B" },
  { label: "Responsive", value: 100, color: "#8098FF" },
];

const securityFeatures: { label: string; icon: LucideIcon }[] = [
  { label: "SSL Encryption", icon: Lock },
  { label: "Firewall Protection", icon: ShieldAlert },
  { label: "Daily Backup", icon: HardDrive },
  { label: "Malware Protection", icon: Bug },
  { label: "Role Based Permissions", icon: KeyRound },
  { label: "Spam Protection", icon: Ban },
  { label: "Cloud Hosting", icon: Cloud },
  { label: "Regular Updates", icon: RefreshCw },
];

const cmsFaqs = [
  {
    question: "Why should I choose WordPress for my website?",
    answer:
      "WordPress powers a huge share of the web for good reason — it's flexible, has a plugin for almost anything, and doesn't lock you into one host or agency. For most business sites and blogs it's the fastest path to something you can manage yourself.",
  },
  {
    question: "Can I edit the content myself?",
    answer:
      "Yes. Every CMS build comes with training on your dashboard — editing pages, publishing posts, updating images and managing products all happen without touching code.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I start with an audit of your current site — structure, content and SEO — then rebuild it on a modern, easy-to-manage CMS without losing your existing rankings.",
  },
  {
    question: "Do you provide hosting and domain?",
    answer:
      "I can set up and manage hosting on providers like Cloudways, Kinsta or SiteGround, plus domain configuration — or work with hosting you already have.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Every project includes 30 days of free post-launch support, with an optional monthly plan after that covering updates, backups, security monitoring and small content changes.",
  },
  {
    question: "Can you migrate my website to a new CMS?",
    answer:
      "Yes — content, media, SEO metadata and URL structure are migrated carefully with redirects in place, so you don't lose search rankings in the move.",
  },
];

/* ── Local, image-free UI mockups (match device-mockup.tsx's approach) ─ */

function ScoreRing({ value, color, size = 40 }: { value: number; color: string; size?: number }) {
  const radius = (size - 5) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="-rotate-90 shrink-0" aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
      />
    </svg>
  );
}

function CmsDeviceMockup() {
  return (
    <div className="relative mx-auto max-w-[460px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />
      <LaptopMockup />
      <div className="absolute -bottom-8 -right-2 rotate-[6deg] sm:-right-6">
        <PhoneMockup />
      </div>
    </div>
  );
}

function CmsEditorMockup() {
  const rows: { label: string; status: "Published" | "Draft"; icon: LucideIcon }[] = [
    { label: "Home Page", status: "Published", icon: Home },
    { label: "About Us", status: "Published", icon: FileText },
    { label: "New Blog Draft", status: "Draft", icon: PenTool },
  ];
  return (
    <div className="relative mx-auto max-w-[440px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />
      <div className="card-surface p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#21759B]/10 text-[#21759B]">
              <SiWordpress className="size-4" />
            </span>
            <p className="text-[0.9rem] font-bold text-ink">Pages</p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1.5 text-[0.68rem] font-bold text-brand-600">+ Add New</span>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {rows.map((row) => {
            const RowIcon = row.icon;
            return (
              <li
                key={row.label}
                className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-muted p-3"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-hairline bg-white text-ink-muted">
                  <RowIcon className="size-4" />
                </span>
                <span className="flex-1 truncate text-[0.82rem] font-semibold text-ink">{row.label}</span>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[0.65rem] font-bold ${row.status === "Published" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    }`}
                >
                  {row.status}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ── Hero device screens — real markup, not a rasterized image, so the
   dashboard text stays crisp and legible at every DPR. ────────────────── */

const wpNavItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Posts", icon: FileText },
  { label: "Media", icon: ImageIcon },
  { label: "Pages", icon: LayoutTemplate },
  { label: "Comments", icon: MessageSquare },
  { label: "Appearance", icon: Palette },
  { label: "Plugins", icon: Plug },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

function WpDashboardScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-hairline px-3 py-2 sm:px-3.5 sm:py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#21759B] text-white sm:size-5">
            <SiWordpress className="size-2.5 sm:size-3" />
          </span>
          <span className="text-[0.56rem] font-bold text-ink sm:text-[0.66rem]">Dashboard</span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="rounded-full border border-hairline px-2.5 py-1 text-[0.48rem] font-medium text-ink-faint">
            Screen Options
          </span>
          <span className="rounded-full border border-hairline px-2.5 py-1 text-[0.48rem] font-medium text-ink-faint">
            Help
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[29%] shrink-0 flex-col gap-1 bg-[#1E2328] p-2 pt-2.5 sm:flex">
          {wpNavItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-1.5 rounded-[4px] px-2 py-1",
                item.active && "bg-brand-500"
              )}
            >
              <item.icon
                className={cn("size-2.5 shrink-0", item.active ? "text-white" : "text-white/45")}
                strokeWidth={2.2}
              />
              <span
                className={cn(
                  "truncate text-[0.46rem] font-medium leading-none",
                  item.active ? "text-white" : "text-white/45"
                )}
              >
                {item.label}
              </span>
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden p-3 sm:p-3.5">
          <div>
            <p className="text-[clamp(0.68rem,1.7vw,1rem)] font-bold leading-tight text-ink">
              Welcome to WordPress!
            </p>
            <p className="mt-1 hidden text-[0.5rem] leading-snug text-ink-muted sm:block">
              We&apos;ve assembled some links to get you started.
            </p>
          </div>

          <div className="hidden gap-5 sm:flex">
            <div className="flex-1">
              <p className="text-[0.46rem] font-bold uppercase tracking-wide text-ink-faint">Get Started</p>
              <span className="mt-1.5 inline-block w-fit rounded-[5px] bg-brand-gradient px-2.5 py-1 text-[0.5rem] font-semibold text-white">
                Customize Your Site
              </span>
              <p className="mt-1.5 text-[0.46rem] text-brand-500">or change your theme completely</p>
            </div>
            <div className="flex-1 border-l border-hairline pl-4">
              <p className="text-[0.46rem] font-bold uppercase tracking-wide text-ink-faint">Next Steps</p>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {["Write your first blog post", "Add an About page", "Set up your homepage"].map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="size-1 shrink-0 rounded-full bg-brand-400" />
                    <span className="truncate text-[0.46rem] text-brand-500">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <span className="w-fit rounded-[5px] bg-brand-gradient px-2.5 py-1 text-[0.5rem] font-semibold text-white sm:hidden">
            Customize Your Site
          </span>

          <div className="mt-auto grid grid-cols-2 gap-2">
            <div className="rounded-[7px] border border-hairline p-2">
              <p className="text-[0.5rem] font-bold text-ink">At a Glance</p>
              <p className="mt-1 text-[0.46rem] text-ink-muted">12 Posts · 6 Pages</p>
              <div className="mt-1.5 h-[3px] w-full rounded-full bg-surface-muted" />
            </div>
            <div className="hidden rounded-[7px] border border-hairline p-2 sm:block">
              <p className="text-[0.5rem] font-bold text-ink">Quick Draft</p>
              <div className="mt-1.5 h-[3px] w-3/4 rounded-full bg-surface-muted" />
              <div className="mt-1.5 h-3 w-full rounded-[3px] bg-surface-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const wpBlockPalette: { label: string; icon: LucideIcon }[] = [
  { label: "Paragraph", icon: Type },
  { label: "Heading", icon: Heading2 },
  { label: "Image", icon: ImageIcon },
  { label: "Columns", icon: Columns3 },
  { label: "Buttons", icon: MousePointerClick },
  { label: "Gallery", icon: Layers },
];

function WpEditorScreen() {
  return (
    <div className="flex h-full flex-col bg-white pt-5">
      <div className="flex items-center justify-between px-3 pb-2">
        <span className="text-[0.6rem] font-bold text-ink">Edit Page</span>
        <Eye className="size-3.5 text-brand-500" strokeWidth={2} />
      </div>

      <div className="flex items-center justify-between px-3">
        <p className="whitespace-nowrap text-[0.66rem] font-bold text-ink">Home Page</p>
      </div>

      <div className="mt-2 flex gap-4 border-b border-hairline px-3">
        <span className="border-b-2 border-brand-500 pb-1.5 text-[0.52rem] font-bold text-brand-600">Blocks</span>
        <span className="pb-1.5 text-[0.52rem] font-medium text-ink-faint">Patterns</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-2.5">
        {wpBlockPalette.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center gap-1 rounded-[6px] border border-hairline bg-surface-muted py-2.5"
          >
            <block.icon className="size-3.5 text-ink-muted" strokeWidth={1.8} />
            <span className="text-[0.42rem] font-medium text-ink-muted">{block.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-hairline px-3.5 py-2">
        <span className="grid size-5 place-items-center rounded-full bg-brand-500 text-white">
          <Plus className="size-3" strokeWidth={2.5} />
        </span>
        <div className="flex items-center gap-2.5 text-ink-faint">
          <Layers className="size-3.5" />
          <FileText className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

export default function CmsDevelopmentPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-[120px] md:pb-28 md:pt-[140px] lg:pb-36 lg:pt-[152px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-mesh-soft" />
          <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
          <div className="absolute -left-24 top-10 size-[420px] animate-floaty-slow rounded-full bg-brand-400/[0.09] blur-[130px]" />
          <div className="absolute -right-16 top-24 size-[460px] animate-floaty rounded-full bg-accent/[0.1] blur-[140px]" />
          {[
            { l: "12%", t: "22%", s: 6, d: "0s" },
            { l: "58%", t: "14%", s: 5, d: "2.1s" },
            { l: "90%", t: "32%", s: 4, d: "1.8s" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute animate-floaty rounded-full bg-brand-400/30"
              style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }}
            />
          ))}
        </div>

        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(2rem,4vw,4rem)]">
            {/* left */}
            <div className="flex flex-col items-center text-center lg:w-[clamp(380px,36vw,520px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge icon={<Star className="size-3.5 fill-current" />}>Premium CMS Development</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(1rem,3vw,2.1rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink balance sm:text-[clamp(1.8rem,2.8vw,2.5rem)]">
                <TextReveal text="Powerful CMS Websites" />
                <br />
                <TextReveal text="That Are" delay={0.06} />{" "}
                <span className="relative bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Easy To Manage" delay={0.12} />
                  <Reveal direction="none" delay={0.9} duration={0.5} className="absolute -bottom-1 left-0 w-full">
                    <svg viewBox="0 0 240 12" className="w-full text-brand-300" fill="none" aria-hidden>
                      <path d="M2 8C40 3 120 2 238 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </Reveal>
                </span>
                .
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I build modern CMS websites that give you full control over your content, pages,
                  products and media — without any technical skills. Update, edit and manage
                  everything with ease.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Start Your CMS Project
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="#portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
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
                      <span className="font-bold text-ink">20+ Happy Clients</span> Worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: CMS dashboard mockup */}
            <div className="w-full lg:w-[clamp(420px,42vw,640px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>

                {/* Badges are positioned relative to this div (the mockup's own visual
                    bounds), not the wider outer column — otherwise they drift off-screen
                    once the column goes full-width and the mockup is only mx-auto centered
                    within it (stacked tablet/mobile layouts). */}
                <div className="relative mx-auto w-[94%] max-w-[440px] sm:w-[88%] sm:max-w-[520px] lg:mx-0 lg:w-full lg:max-w-none">
                  <LaptopMockup screen={<WpDashboardScreen />} />
                  <div className="absolute -bottom-9 -right-3 w-[112px] rotate-[6deg] sm:-right-6 sm:w-[160px] lg:w-[190px] xl:w-[215px]">
                    <PhoneMockup className="w-full" screen={<WpEditorScreen />} />
                  </div>

                  <div
                    aria-hidden
                    className="animate-floaty-slow absolute -top-9 left-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-8"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                      <Pencil className="size-3.5" />
                    </span>
                    <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Easy Content Editing</span>
                  </div>

                  <div
                    aria-hidden
                    className="animate-floaty absolute bottom-2 left-0 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-10"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                      <Search className="size-3.5" />
                    </span>
                    <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">SEO Optimized</span>
                  </div>

                  <div
                    aria-hidden
                    className="animate-floaty absolute -top-9 right-1 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-right-6"
                    style={{ animationDelay: "1.6s" }}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky-50 text-sky-600">
                      <Smartphone className="size-3.5" />
                    </span>
                    <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Mobile Friendly</span>
                  </div>

                  <div
                    aria-hidden
                    className="animate-floaty-slow absolute -bottom-14 right-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:right-4"
                    style={{ animationDelay: "2s" }}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-500">
                      <Zap className="size-3.5" />
                    </span>
                    <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Fast Loading</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CMS platforms marquee ──────────────────────────────── */}
      <section aria-label="CMS platforms I work with" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              CMS Platforms I Work With
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...cmsPlatformLogos, ...cmsPlatformLogos].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= cmsPlatformLogos.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CMS services ───────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I offer"
            title="CMS Development"
            highlight="Services"
            description="From a single WordPress theme to a full multi-vendor Shopify build — every CMS project is scoped around what your team needs to manage day to day."
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cmsServices.map((service, i) => {
              const Icon = service.icon;
              const tone = toneKeys[i % toneKeys.length];
              return (
                <li key={service.title}>
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
                        <h3 className="mt-4 text-[0.98rem] font-bold tracking-tight text-ink">{service.title}</h3>
                        <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-muted pretty">
                          {service.description}
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

      {/* ── Why choose CMS ─────────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <CmsDeviceMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why choose CMS</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Built For Easy Management" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="And Better Performance" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <Reveal key={benefit.title} direction="up" delay={0.05 * i}>
                      <li className="flex items-start gap-3.5">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <div>
                          <p className="font-bold text-ink">{benefit.title}</p>
                          <p className="mt-0.5 text-[0.85rem] leading-relaxed text-ink-muted">{benefit.description}</p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured CMS projects ──────────────────────────────── */}
      <section id="portfolio" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Featured work"
            title="Featured CMS"
            highlight="Projects"
            description="A few recent builds — each one shipped, measured and still running in production."
            action={{ label: "View All Projects", href: "/#projects" }}
          />

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <li key={project.title}>
                <Reveal direction="up" delay={0.06 * i}>
                  <article className="card-surface group h-full overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                      <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.07]">
                        <Image
                          src={project.image}
                          alt={`${project.title} — website preview`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div className="min-w-0">
                        <h3 className="truncate text-[1rem] font-bold tracking-tight text-ink transition-colors group-hover:text-brand-600">
                          {project.title}
                        </h3>
                        <p className="mt-1 truncate text-[0.8rem] text-ink-muted">{project.category}</p>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted transition-all duration-400 ease-premium group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process
        description="Eight stages, each with a deliverable you can actually look at — no black boxes between kickoff and launch."
        steps={[
          { step: "01", title: "Discovery", description: "Understanding your goals, content and requirements.", icon: "Search" },
          { step: "02", title: "Wireframe", description: "Planning the structure and page layout.", icon: "Pencil" },
          { step: "03", title: "UI Design", description: "Designing a clean and modern interface.", icon: "Palette" },
          { step: "04", title: "CMS Development", description: "Building with clean and efficient code.", icon: "Code2" },
          { step: "05", title: "Content Setup", description: "Adding your content, pages and media.", icon: "FileText" },
          { step: "06", title: "Testing", description: "Quality testing on all devices.", icon: "ClipboardCheck" },
          { step: "07", title: "Launch", description: "Deploying to the live server.", icon: "Rocket" },
          { step: "08", title: "Maintenance", description: "Ongoing support and updates.", icon: "Headphones" },
        ]}
      />

      {/* ── Features included ─────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <CmsEditorMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Features included</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Everything Your CMS" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Website Needs" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {featuresIncluded.map((feature, i) => (
                  <Reveal key={feature} direction="up" delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <p className="text-[0.9rem] leading-relaxed text-ink-muted">{feature}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform comparison ────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Popular CMS platforms"
            title="The Right Platform For"
            highlight="Your Project"
            description="Every platform has a sweet spot — here's what I reach for depending on what you're building."
          />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformComparison.map((platform, i) => (
              <li key={platform.name}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface flex h-full flex-col items-center gap-3 p-7 text-center">
                    <span
                      className="grid size-14 shrink-0 place-items-center rounded-2xl"
                      style={{ backgroundColor: `${platform.color}1A`, color: platform.color }}
                    >
                      {platform.node}
                    </span>
                    <p className="font-bold text-ink">{platform.name}</p>
                    <p className="text-[0.85rem] leading-relaxed text-ink-muted">{platform.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why custom CMS ─────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Why go custom"
            title="Template Website vs"
            highlight="Custom CMS Website"
            description="Custom CMS websites give you full control, flexibility and long-term benefits for your business growth."
            align="center"
          />

          <Reveal direction="scale">
            <div className="relative mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-hairline bg-white p-8 shadow-soft">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-faint">Template Website</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <li key={row.template} className="flex items-center gap-3 text-[0.92rem] text-ink-muted">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
                        <X className="size-3.5" strokeWidth={2.5} />
                      </span>
                      {row.template}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-brand-200 bg-white p-8 shadow-lift">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/60 via-transparent to-brand-50/60"
                />
                <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-500">
                  Custom CMS Website
                </p>
                <ul className="relative mt-6 flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <li key={row.custom} className="flex items-center gap-3 text-[0.92rem] font-semibold text-ink">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                      {row.custom}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-surface-muted bg-brand-gradient text-xs font-extrabold text-white shadow-lift md:grid"
              >
                VS
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Industries I serve"
            title="Built For Every"
            highlight="Industry"
            description="Different industries, the same discipline — clean content models and interfaces your team will actually use."
            align="center"
          />

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.label} direction="up" delay={0.05 * i}>
                  <li className="group flex flex-col items-center gap-3">
                    <span className="grid size-16 place-items-center rounded-full border border-hairline bg-white text-ink-muted shadow-soft transition-all duration-400 ease-premium group-hover:-translate-y-1 group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-600">
                      <Icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <span className="text-[0.85rem] font-semibold text-ink">{industry.label}</span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Performance ────────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Performance score"
            title="Built For"
            highlight="Speed"
            description="Every CMS build is audited against Lighthouse before launch — not tested once and forgotten."
            align="center"
          />

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {performanceMetrics.map((metric, i) => (
              <li key={metric.label}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface flex h-full flex-col items-center gap-4 p-7 text-center">
                    <div className="relative grid place-items-center">
                      <ScoreRing value={metric.value} color={metric.color} size={96} />
                      <span className="absolute font-display text-2xl font-extrabold text-ink">{metric.value}</span>
                    </div>
                    <p className="text-[0.85rem] font-semibold text-ink-muted">{metric.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Security ───────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Website security"
            title="Enterprise-Grade"
            highlight="Security"
            description="Security isn't bolted on at the end — it's part of every CMS build from the first commit."
            align="center"
          />

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.label} direction="up" delay={0.05 * i}>
                  <li className="flex w-[152px] flex-col items-center gap-3 rounded-2xl border border-hairline bg-white px-4 py-6 text-center shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <span className="text-[0.8rem] font-semibold text-ink-muted">{feature.label}</span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ items={cmsFaqs} />

      <CTA
        heading="Let's Build A CMS Website That Grows Your Business."
        description="Get a modern, fast and easy-to-manage CMS website tailored to your business needs."
        primaryLabel="Book Free Consultation"
        secondaryLabel="Request Free Quote"
        secondaryHref="/contact"
      />
    </>
  );
}
