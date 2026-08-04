import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Cloud,
  Code2,
  CreditCard,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  RefreshCw,
  Share2,
  Building2,
  type LucideIcon,
} from "lucide-react";
import {
  SiFirebase,
  SiGooglecloud,
  SiGooglemaps,
  SiGraphql,
  SiHubspot,
  SiJson,
  SiPaypal,
  SiRazorpay,
  SiStripe,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "API Integration",
  description:
    "Third-party and custom API integrations — payments, CRMs, email, maps and cloud services wired into your product with proper error handling and webhooks.",
  alternates: { canonical: "/services/api-integration" },
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

const apiTech: { name: string; node: React.ReactNode }[] = [
  { name: "REST API", node: <Braces className="size-6 text-brand-500" /> },
  { name: "GraphQL", node: <SiGraphql className="size-6 text-[#E10098]" /> },
  { name: "JSON", node: <SiJson className="size-6 text-ink" /> },
  { name: "Firebase", node: <SiFirebase className="size-6 text-[#FFCA28]" /> },
  { name: "AWS", node: <Cloud className="size-6 text-[#FF9900]" strokeWidth={2} /> },
  { name: "Google Cloud", node: <SiGooglecloud className="size-6 text-[#4285F4]" /> },
  { name: "Stripe", node: <SiStripe className="size-6 text-[#635BFF]" /> },
  { name: "PayPal", node: <SiPaypal className="size-6 text-[#003087]" /> },
  { name: "Twilio", node: <MessageSquare className="size-6 text-[#F22F46]" strokeWidth={2} /> },
  { name: "SendGrid", node: <Mail className="size-6 text-[#1A82E2]" strokeWidth={2} /> },
];

const helpCards: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  {
    title: "Third-Party API Integration",
    description: "Connect and integrate third-party APIs seamlessly.",
    icon: Share2,
    tone: "blue",
  },
  {
    title: "Custom API Development",
    description: "Build secure and reliable APIs tailored to your needs.",
    icon: Code2,
    tone: "violet",
  },
  {
    title: "Payment Gateway Integration",
    description: "Integrate secure payment systems for smooth payments.",
    icon: CreditCard,
    tone: "rose",
  },
  {
    title: "CRM & Marketing Integration",
    description: "Sync CRM and marketing tools to automate your workflows.",
    icon: RefreshCw,
    tone: "sky",
  },
  {
    title: "Maps & Location Integration",
    description: "Add maps, location tracking, and geolocation features.",
    icon: MapPin,
    tone: "emerald",
  },
  {
    title: "Cloud & Storage Integration",
    description: "Integrate cloud services for storage, media, and file management.",
    icon: Cloud,
    tone: "orange",
  },
];

const hubNodes: { label: string; sub: string; icon: LucideIcon; side: "left" | "right"; tone: Tone }[] = [
  { label: "Payment Gateways", sub: "Stripe, PayPal, Razorpay", icon: CreditCard, side: "left", tone: "blue" },
  { label: "CRM Systems", sub: "HubSpot, Salesforce", icon: RefreshCw, side: "left", tone: "violet" },
  { label: "Email Services", sub: "SendGrid, Mailchimp", icon: Mail, side: "left", tone: "sky" },
  { label: "Maps & Location", sub: "Google Maps, Mapbox", icon: MapPin, side: "right", tone: "emerald" },
  { label: "Cloud Services", sub: "AWS, Firebase, Cloudinary", icon: Cloud, side: "right", tone: "orange" },
  { label: "Your Application", sub: "Web / Mobile / SaaS", icon: Monitor, side: "right", tone: "indigo" },
];

const unlockFeatures = [
  "Automate repetitive tasks",
  "Improve data accuracy",
  "Save time and reduce costs",
  "Enhance user experience",
  "Scale your application easily",
  "Connect everything together",
];

const integrationSteps = [
  { step: "01", title: "Discover", description: "Understand your requirements and integration goals.", icon: "Search" },
  { step: "02", title: "Plan", description: "Analyze and plan the integration approach.", icon: "FileText" },
  { step: "03", title: "Integrate", description: "Connect APIs securely and efficiently.", icon: "Code2" },
  { step: "04", title: "Test", description: "Test everything for reliability end to end.", icon: "ClipboardCheck" },
  { step: "05", title: "Deploy", description: "Deploy and monitor performance in production.", icon: "Rocket" },
  { step: "06", title: "Support", description: "Provide ongoing support and maintenance.", icon: "Headphones" },
];

const popularIntegrations: { name: string; node: React.ReactNode }[] = [
  { name: "Stripe", node: <SiStripe className="size-6 text-[#635BFF]" /> },
  { name: "PayPal", node: <SiPaypal className="size-6 text-[#003087]" /> },
  { name: "Razorpay", node: <SiRazorpay className="size-6 text-[#0C2451]" /> },
  { name: "Twilio", node: <MessageSquare className="size-6 text-[#F22F46]" strokeWidth={2} /> },
  { name: "SendGrid", node: <Mail className="size-6 text-[#1A82E2]" strokeWidth={2} /> },
  { name: "HubSpot", node: <SiHubspot className="size-6 text-[#FF7A59]" /> },
  { name: "Salesforce", node: <Building2 className="size-6 text-[#00A1E0]" strokeWidth={2} /> },
  { name: "Google Maps", node: <SiGooglemaps className="size-6 text-[#4285F4]" /> },
];

/* ── Hero hub diagram (no image assets, pure CSS/SVG) ───────────────── */

function ApiHubNode({ node }: { node: (typeof hubNodes)[number] }) {
  const Icon = node.icon;
  return (
    <div className="card-surface flex items-center gap-3 rounded-2xl p-3.5">
      <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${toneStyles[node.tone]}`}>
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.82rem] font-bold tracking-tight text-ink">{node.label}</p>
        <p className="truncate text-[0.68rem] text-ink-muted">{node.sub}</p>
      </div>
    </div>
  );
}

function ApiHubMockup() {
  const left = hubNodes.filter((n) => n.side === "left");
  const right = hubNodes.filter((n) => n.side === "right");

  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />

      {/* connecting lines */}
      <svg
        aria-hidden
        viewBox="0 0 600 420"
        className="pointer-events-none absolute inset-0 hidden size-full sm:block"
      >
        {[70, 210, 350].map((y) => (
          <line
            key={`l-${y}`}
            x1="248"
            y1={y}
            x2="300"
            y2="210"
            stroke="#C7D2FE"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
        ))}
        {[70, 210, 350].map((y) => (
          <line
            key={`r-${y}`}
            x1="352"
            y1={y}
            x2="300"
            y2="210"
            stroke="#C7D2FE"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
        ))}
        {[70, 210, 350].flatMap((y) => [
          <circle key={`ld-${y}`} cx="248" cy={y} r="3.5" fill="#8098FF" />,
          <circle key={`rd-${y}`} cx="352" cy={y} r="3.5" fill="#8098FF" />,
        ])}
        <circle cx="300" cy="210" r="58" fill="none" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="4 5" />
      </svg>

      <div className="relative flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
        <div className="flex w-full flex-col gap-4 sm:w-[38%]">
          {left.map((node, i) => (
            <Reveal key={node.label} direction="right" delay={0.08 * i}>
              <ApiHubNode node={node} />
            </Reveal>
          ))}
        </div>

        <div className="flex items-center justify-center sm:hidden">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-lift">
            <span className="font-display text-base font-black tracking-tight">API</span>
          </span>
        </div>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
          <span className="relative grid size-28 place-items-center rounded-full bg-brand-gradient text-white shadow-lift">
            <span aria-hidden className="absolute -inset-2 animate-floaty-slow rounded-full border border-brand-300/40" />
            <span className="font-display text-xl font-black tracking-tight">API</span>
          </span>
        </div>

        <div className="flex w-full flex-col gap-4 sm:w-[38%]">
          {right.map((node, i) => (
            <Reveal key={node.label} direction="left" delay={0.08 * i}>
              <ApiHubNode node={node} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── "Why API integration" illustration (no image assets) ──────────── */

function ApiCodeMockup() {
  const lines: { w: string; color: string }[] = [
    { w: "55%", color: "bg-brand-400/70" },
    { w: "75%", color: "bg-white/20" },
    { w: "40%", color: "bg-emerald-400/70" },
    { w: "65%", color: "bg-white/20" },
    { w: "50%", color: "bg-violet-400/70" },
    { w: "30%", color: "bg-white/20" },
  ];

  return (
    <div className="relative mx-auto max-w-[460px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />

      <div
        aria-hidden
        className="animate-floaty absolute -left-6 -top-6 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-brand-500 shadow-glass sm:grid"
      >
        <Code2 className="size-6" strokeWidth={2} />
      </div>
      <div
        aria-hidden
        className="animate-floaty-slow absolute -right-4 -top-8 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-sky-500 shadow-glass sm:grid"
        style={{ animationDelay: "1s" }}
      >
        <Cloud className="size-6" strokeWidth={2} />
      </div>
      <div
        aria-hidden
        className="animate-floaty absolute -bottom-5 -left-4 hidden size-14 place-items-center rounded-2xl border border-hairline bg-white text-violet-500 shadow-glass sm:grid"
        style={{ animationDelay: "1.6s" }}
      >
        <Braces className="size-6" strokeWidth={2} />
      </div>

      <div className="relative overflow-hidden rounded-[20px] bg-[#0B1220] p-5 shadow-lift">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[0.65rem] font-medium text-white/40">integration.ts</span>
        </div>
        <div className="mt-5 flex flex-col gap-2.5">
          {lines.map((line, i) => (
            <span key={i} className={`block h-2.5 rounded-full ${line.color}`} style={{ width: line.w }} />
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="animate-floaty-slow absolute -bottom-8 right-[-4%] w-[168px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150"
        style={{ animationDelay: "0.5s" }}
      >
        <p className="text-[0.6rem] font-semibold text-ink-muted">Sync Success Rate</p>
        <div className="mt-2 flex h-8 items-end gap-[3px]" aria-hidden>
          {[45, 65, 50, 80, 60, 92, 74].map((v, i) => (
            <span key={i} className="flex-1 rounded-[1.5px] bg-brand-gradient" style={{ height: `${v}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ApiIntegrationPage() {
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
          <div className="flex flex-col items-center gap-12 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.5rem,3vw,3rem)]">
            {/* left */}
            <div className="flex flex-col items-center text-center lg:w-[clamp(360px,36vw,540px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge>API Integration</Badge>
              </Reveal>

              <h1 className="mt-6 font-display text-[clamp(1rem,5.4vw,2.2rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink balance sm:text-[2.15rem] lg:text-[clamp(1.6rem,2.5vw,2.4rem)]">
                <TextReveal text="Seamless API Integrations" />
                <br />
                <TextReveal text="That Power Your Digital" delay={0.08} />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Solutions" delay={0.16} />
                </span>
                .
              </h1>

              <Reveal direction="up" delay={0.25}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I integrate third-party and custom APIs into your applications to automate
                  workflows, sync data, and deliver powerful, scalable experiences.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.35}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="/#projects">
                      View Case Studies
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.45}>
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
                    <div className="flex items-center gap-0.5 text-amber-400" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                          <path d="M10 1.6l2.47 5.3 5.53.66-4.1 3.94 1.09 5.9L10 14.6l-4.99 2.8 1.09-5.9-4.1-3.94 5.53-.66L10 1.6z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-1 text-[0.85rem] font-medium text-ink-muted">
                      <span className="font-bold text-ink">20+ Happy Clients</span> Worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: API hub diagram */}
            <div className="w-full lg:w-[clamp(460px,48vw,700px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15}>
                <ApiHubMockup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies marquee ───────────────────────────────── */}
      <section aria-label="Technologies and platforms used for API integration" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              Technologies &amp; Platforms I Work With
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...apiTech, ...apiTech].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= apiTech.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How I can help ─────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="My API integration services"
            title="How I Can"
            highlight="Help You"
            description="From a single payment gateway to a full mesh of third-party services — wired in cleanly, with proper error handling."
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card, i) => {
              const Icon = card.icon;
              const tone = toneKeys[i % toneKeys.length];
              return (
                <li key={card.title}>
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
                        <h3 className="mt-4 text-[0.98rem] font-bold tracking-tight text-ink">{card.title}</h3>
                        <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-muted pretty">
                          {card.description}
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

      {/* ── Why API integration ────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <ApiCodeMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why API integration?</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Unlock More Power" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="With Smart Integrations" delay={0.12} />
                </span>
                .
              </h2>

              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {unlockFeatures.map((feature, i) => (
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

      <Process
        steps={integrationSteps}
        description="Six stages from first call to ongoing support — every integration is tested end to end before it touches production."
      />

      {/* ── Popular integrations ───────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <Reveal direction="up" className="mb-12 text-center md:mb-14">
            <p className="eyebrow mb-4">Popular integrations</p>
            <h2 className="font-display text-display-md text-ink balance">Services I Connect Most Often</h2>
          </Reveal>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {popularIntegrations.map((tool, i) => (
              <Reveal key={tool.name} direction="up" delay={0.04 * i}>
                <li
                  title={tool.name}
                  className="flex w-[104px] flex-col items-center gap-2.5 rounded-2xl border border-hairline bg-white px-3 py-5 text-center shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                >
                  <span className="inline-flex">{tool.node}</span>
                  <span className="text-[0.72rem] font-semibold text-ink-muted">{tool.name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      <CTA
        eyebrow="Let's connect"
        heading="Ready To Integrate Powerful APIs?"
        description="Let's connect your systems and automate your workflows with seamless API integrations."
      />
    </>
  );
}
