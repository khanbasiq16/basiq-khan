import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Eye,
  Gauge,
  Headphones,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  PenTool,
  Plug,
  ShieldCheck,
  Sparkles,
  Tag,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { services, site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for CMS websites, custom websites and custom software — fixed starting plans, no hidden charges, and a free consultation to find the right fit.",
  alternates: { canonical: "/pricing" },
};

/* ── Data ────────────────────────────────────────────────────────────── */

const heroFeatureChips: { label: string; icon: LucideIcon }[] = [
  { label: "No Hidden Charges", icon: ShieldCheck },
  { label: "Fixed Project Pricing", icon: Tag },
  { label: "Flexible Solutions", icon: Layers },
  { label: "Free Consultation", icon: Sparkles },
];

type PricingVariant = "affordable" | "popular" | "enterprise";

type PricingPlan = {
  key: string;
  icon: LucideIcon;
  title: string;
  price: string;
  suitableFor: string[];
  included: string[];
  buttonLabel: string;
  badge: string;
  variant: PricingVariant;
};

const pricingPlans: PricingPlan[] = [
  {
    key: "cms",
    icon: Database,
    title: "CMS Website",
    price: "$200",
    suitableFor: ["Business Websites", "Blogs", "Portfolio", "Company Profile", "Landing Pages"],
    included: [
      "WordPress or Headless CMS",
      "Responsive Design",
      "Modern UI",
      "Contact Form",
      "Basic SEO",
      "Speed Optimization",
      "CMS Training",
      "Up To 10 Pages",
      "2 Month Support",
    ],
    buttonLabel: "Choose CMS Plan",
    badge: "Most Affordable",
    variant: "affordable",
  },
  {
    key: "custom-website",
    icon: Code2,
    title: "Custom Website",
    price: "$400",
    suitableFor: ["Company Websites", "Business Platforms", "Membership Sites", "Custom Dashboards", "Advanced Websites"],
    included: [
      "Fully Custom UI",
      "Next.js",
      "React",
      "API Integration",
      "Authentication",
      "Database",
      "SEO",
      "High Performance",
      "3 Months Support",
    ],
    buttonLabel: "Choose Custom Plan",
    badge: "Most Popular",
    variant: "popular",
  },
  {
    key: "custom-software",
    icon: LayoutDashboard,
    title: "Custom Software",
    price: "$900",
    suitableFor: [
      "CRM",
      "ERP",
      "Booking Systems",
      "Hospital Systems",
      "School Management",
      "SaaS Platforms",
      "Admin Panels",
      "Enterprise Solutions",
    ],
    included: [
      "Custom Architecture",
      "Authentication",
      "Admin Dashboard",
      "Multiple Roles",
      "API Integration",
      "Database",
      "Analytics",
      "Documentation",
      "Deployment",
      "5 Months Support",
    ],
    buttonLabel: "Request Quote",
    badge: "Enterprise",
    variant: "enterprise",
  },
];

type Cell = { kind: "text"; value: string } | { kind: "check"; value?: string } | { kind: "cross"; value?: string };
const text = (value: string): Cell => ({ kind: "text", value });
const yes = (value?: string): Cell => ({ kind: "check", value });
const no = (value?: string): Cell => ({ kind: "cross", value });

const comparisonRows: { feature: string; cms: Cell; custom: Cell; software: Cell }[] = [
  { feature: "Development Time", cms: text("3–7 Days"), custom: text("2–4 Weeks"), software: text("6–12 Weeks") },
  { feature: "Starting Price", cms: text("$200"), custom: text("$400"), software: text("$900") },
  { feature: "Customization", cms: text("Theme-Based"), custom: text("Fully Custom"), software: text("Fully Custom") },
  { feature: "Scalability", cms: text("Good"), custom: text("Excellent"), software: text("Enterprise-Grade") },
  { feature: "Admin Panel", cms: no(), custom: yes("Optional"), software: yes("Full Dashboard") },
  { feature: "SEO", cms: yes("Basic"), custom: yes("Advanced"), software: yes("Advanced") },
  { feature: "Performance", cms: text("Good"), custom: text("Excellent"), software: text("Excellent") },
  { feature: "API Integration", cms: no(), custom: yes(), software: yes("Advanced") },
  { feature: "Authentication", cms: no(), custom: yes(), software: yes("Multi-Role") },
  { feature: "Database", cms: no("CMS Storage"), custom: yes(), software: yes("Advanced Schema") },
  { feature: "Maintenance", cms: text("Easy"), custom: text("Moderate"), software: text("Managed") },
  { feature: "Support", cms: text("2 Months"), custom: text("3 Months"), software: text("5 Months") },
  { feature: "Future Expansion", cms: text("Limited"), custom: text("Good"), software: text("Unlimited") },
];

const whyPricingFeatures: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Transparent Pricing",
    description: "Every plan shows exactly what's included from day one — no vague line items or surprise scope creep once we start.",
    icon: Eye,
  },
  {
    title: "No Hidden Charges",
    description: "The price you see is the price you pay. Anything extra is scoped and approved before any work begins.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Technology",
    description: "Every tier is built on the same modern stack — Next.js, React and TypeScript — never outdated templates.",
    icon: Zap,
  },
  {
    title: "Long-Term Support",
    description: "Support doesn't end at launch. Every plan includes a real support window, with maintenance plans available after.",
    icon: Headphones,
  },
];

const pricingFaqs = [
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. Most clients start with a CMS or Custom Website plan and upgrade to Custom Software as their business grows — you only pay for the added scope, not a full restart.",
  },
  {
    question: "Do you offer monthly maintenance?",
    answer:
      "Yes, every plan can be extended with a monthly maintenance plan covering updates, backups, monitoring and small content changes after your included support window ends.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Absolutely. Every plan is a starting point, not a fixed template — additional features are scoped and quoted individually so your price stays predictable.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "I can set up and manage hosting on providers like Vercel, Cloudways or AWS, plus domain configuration — or work with hosting you already have.",
  },
  {
    question: "Can I pay in milestones?",
    answer:
      "Yes. Projects are typically split into two or three milestone payments tied to deliverables, so you're never paying for work you haven't seen.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. I start with an audit of your current site, then rebuild it on the plan that fits your goals — without losing your existing content or search rankings.",
  },
];

const otherServiceSlugs = [
  "ui-ux-design",
  "web-development",
  "cms-development",
  "ai-integration",
  "performance-optimization",
  "maintenance-support",
  "api-integration",
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
const otherServices = otherServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

/* ── Local, image-free hero mockup ──────────────────────────────────── */

function PricingHeroMockup() {
  const plans: { label: string; price: string; popular?: boolean }[] = [
    { label: "CMS Website", price: "$299" },
    { label: "Custom Website", price: "$500", popular: true },
    { label: "Custom Software", price: "$999" },
  ];

  return (
    <div className="relative mx-auto w-[94%] max-w-[440px] sm:w-[88%] sm:max-w-[560px] lg:mx-0 lg:w-full lg:max-w-none">
      <div className="rounded-[24px] border border-hairline bg-white p-5 shadow-float sm:rounded-[28px] sm:p-7">
        <div className="flex items-center gap-1.5 pb-5">
          <span className="size-2.5 rounded-full bg-rose-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 h-2 w-20 rounded-full bg-surface-muted" />
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={cn(
                "relative flex flex-col rounded-2xl p-3 transition-transform duration-500 ease-premium sm:p-4",
                plan.popular ? "z-10 -translate-y-2 bg-brand-gradient text-white shadow-lift" : "bg-surface-muted text-ink"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-wide text-brand-600 shadow-soft">
                  Popular
                </span>
              )}
              <p
                className={cn(
                  "truncate text-[0.5rem] font-bold uppercase tracking-wide sm:text-[0.58rem]",
                  plan.popular ? "text-white/75" : "text-ink-faint"
                )}
              >
                {plan.label}
              </p>
              <p className="mt-1.5 text-[0.85rem] font-extrabold sm:text-[1.05rem]">{plan.price}</p>
              <div className="mt-3 flex flex-col gap-1.5" aria-hidden>
                {[100, 75, 85].map((w, i) => (
                  <span
                    key={i}
                    className={cn("h-1 rounded-full", plan.popular ? "bg-white/30" : "bg-white")}
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
              <span
                className={cn(
                  "mt-4 rounded-full py-1.5 text-center text-[0.5rem] font-bold sm:text-[0.58rem]",
                  plan.popular ? "bg-white text-brand-600" : "border border-hairline bg-white text-ink-muted"
                )}
              >
                Choose
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="animate-floaty-slow absolute -top-7 left-2 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-left-8"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
          <Tag className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">Fixed Pricing</span>
      </div>

      <div
        aria-hidden
        className="animate-floaty absolute -bottom-8 right-1 hidden items-center gap-2.5 rounded-full border border-hairline bg-white/95 px-4 py-2.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:flex lg:-right-6"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <ShieldCheck className="size-3.5" />
        </span>
        <span className="whitespace-nowrap text-[0.78rem] font-semibold text-ink">No Hidden Charges</span>
      </div>
    </div>
  );
}

/* ── Pricing card ───────────────────────────────────────────────────── */

function PricingCard({ plan, delay }: { plan: PricingPlan; delay: number }) {
  const Icon = plan.icon;
  const isPopular = plan.variant === "popular";
  const isEnterprise = plan.variant === "enterprise";

  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-[28px] border bg-white p-8 transition-all duration-500 ease-premium",
          isPopular
            ? "border-brand-200 shadow-lift lg:-translate-y-3"
            : "border-hairline shadow-soft hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
        )}
      >
        {isPopular && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-50/60 via-transparent to-brand-50/60"
          />
        )}

        <span
          className={cn(
            "absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-wide shadow-lift",
            isPopular && "bg-brand-gradient text-white",
            isEnterprise && "bg-ink text-white",
            plan.variant === "affordable" && "border border-hairline bg-white text-ink-muted shadow-soft"
          )}
        >
          {plan.badge}
        </span>

        <div className="relative flex flex-1 flex-col">
          <span
            className={cn(
              "grid size-12 shrink-0 place-items-center rounded-xl",
              isPopular && "bg-brand-gradient text-white",
              isEnterprise && "bg-ink text-white",
              plan.variant === "affordable" && "bg-brand-50 text-brand-500"
            )}
          >
            <Icon className="size-6" strokeWidth={2} />
          </span>

          <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{plan.title}</h3>
          <p className="mt-2 text-[0.78rem] font-medium text-ink-faint">Starting From</p>
          <p className="mt-0.5 font-display text-4xl font-extrabold text-ink">{plan.price}</p>

          <div className="mt-6">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-faint">Suitable For</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {plan.suitableFor.map((item) => (
                <li key={item} className="rounded-full bg-surface-muted px-2.5 py-1 text-[0.72rem] font-medium text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex-1 border-t border-hairline pt-6">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-faint">Included</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {plan.included.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[0.86rem] text-ink-muted">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Button asChild size="md" variant={isPopular ? "primary" : "outline"} magnetic={6} className="mt-8 w-full">
            <Link href="/contact">
              {plan.buttonLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Comparison table cell ──────────────────────────────────────────── */

function ComparisonCell({ cell }: { cell: Cell }) {
  if (cell.kind === "check") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="grid size-6 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <Check className="size-3.5" strokeWidth={2.5} />
        </span>
        {cell.value && <span className="text-[0.7rem] text-ink-muted">{cell.value}</span>}
      </div>
    );
  }
  if (cell.kind === "cross") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="grid size-6 place-items-center rounded-full bg-rose-50 text-rose-400">
          <X className="size-3.5" strokeWidth={2.5} />
        </span>
        {cell.value && <span className="text-[0.7rem] text-ink-muted">{cell.value}</span>}
      </div>
    );
  }
  return <span className="text-[0.86rem] font-semibold text-ink">{cell.value}</span>;
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function PricingPage() {
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
                <Badge>Transparent Pricing</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-black leading-[1.08] tracking-[-0.02em] text-ink balance">
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Simple Pricing" />
                </span>
                <br />
                <TextReveal text="For Every Business." delay={0.08} />
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  Whether you need a CMS website, a fully custom website, or a custom software solution,
                  choose the plan that best matches your business goals. Every project includes modern
                  design, responsive layouts, clean code, and dedicated support.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.28}>
                <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {heroFeatureChips.map((chip) => (
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

              <Reveal direction="up" delay={0.36}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Book Free Consultation
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" magnetic={6}>
                    <Link href="#pricing">Request Custom Quote</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* right: pricing dashboard mockup */}
            <div className="w-full lg:w-[clamp(420px,42vw,640px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>
                <PricingHeroMockup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ───────────────────────────────────────── */}
      <section id="pricing" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Our pricing plans"
            title="Choose The Right"
            highlight="Solution"
            description="Two starting points and one enterprise track — pick the one that matches where your business is today."
            align="center"
          />

          <ul className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <li key={plan.key} className="h-full">
                <PricingCard plan={plan} delay={0.08 * i} />
              </li>
            ))}
          </ul>

          <Reveal direction="up" delay={0.3}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-hairline bg-surface-muted p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-[0.92rem] text-ink-muted">
                <span className="font-bold text-ink">Need something in between?</span> Contact me and I&apos;ll
                recommend the best solution for your needs and budget.
              </p>
              <Button asChild variant="outline" size="md" magnetic={6} className="shrink-0">
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Comparison table ────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Compare plans"
            title="Every Plan, Side"
            highlight="By Side"
            description="A detailed breakdown of what each tier includes, so there's no guesswork before you choose."
            align="center"
          />

          <Reveal direction="up">
            <div className="overflow-x-auto rounded-[28px] border border-hairline bg-white shadow-soft">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <caption className="sr-only">Comparison of CMS Website, Custom Website and Custom Software plans</caption>
                <thead>
                  <tr className="border-b border-hairline">
                    <th scope="col" className="w-[200px] px-6 py-5 text-[0.8rem] font-bold text-ink">
                      Features
                    </th>
                    <th scope="col" className="px-4 py-5 text-center">
                      <span className="mx-auto grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-500">
                        <Database className="size-4" />
                      </span>
                      <p className="mt-2 text-[0.85rem] font-bold text-ink">CMS Website</p>
                    </th>
                    <th scope="col" className="border-x border-brand-100 bg-brand-50/40 px-4 py-5 text-center">
                      <span className="mx-auto grid size-9 place-items-center rounded-lg bg-brand-gradient text-white">
                        <Code2 className="size-4" />
                      </span>
                      <p className="mt-2 text-[0.85rem] font-bold text-brand-600">Custom Website</p>
                    </th>
                    <th scope="col" className="px-4 py-5 text-center">
                      <span className="mx-auto grid size-9 place-items-center rounded-lg bg-ink text-white">
                        <LayoutDashboard className="size-4" />
                      </span>
                      <p className="mt-2 text-[0.85rem] font-bold text-ink">Custom Software</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={cn("border-b border-hairline last:border-0", i % 2 === 1 && "bg-surface-muted/50")}>
                      <th scope="row" className="px-6 py-4 text-[0.86rem] font-semibold text-ink">
                        {row.feature}
                      </th>
                      <td className="px-4 py-4 text-center">
                        <ComparisonCell cell={row.cms} />
                      </td>
                      <td className="border-x border-brand-100/70 bg-brand-50/20 px-4 py-4 text-center">
                        <ComparisonCell cell={row.custom} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <ComparisonCell cell={row.software} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <Process
        description="Six clear stages from first conversation to a live, fully tested launch — the same discipline no matter which plan you choose."
        steps={[
          { step: "01", title: "Requirement Discussion", description: "Understanding your goals, budget and the right plan for your business.", icon: "Search" },
          { step: "02", title: "Planning", description: "Mapping out scope, timeline and milestones before any work begins.", icon: "Pencil" },
          { step: "03", title: "Design", description: "Creating wireframes and UI designs that match your brand.", icon: "Palette" },
          { step: "04", title: "Development", description: "Building your website or software with clean, efficient code.", icon: "Code2" },
          { step: "05", title: "Testing", description: "Testing across devices for performance and functionality.", icon: "ClipboardCheck" },
          { step: "06", title: "Launch", description: "Deploying to production and handing over a live, working product.", icon: "Rocket" },
        ]}
      />

      {/* ── Why my pricing ───────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Why my pricing"
            title="Built On Trust,"
            highlight="Not Fine Print"
            description="No inflated quotes, no vague scopes — just clear plans built on modern technology and long-term support."
            align="center"
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyPricingFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <Reveal direction="up" delay={0.06 * i} className="h-full">
                    <div className="card-surface flex h-full flex-col items-center gap-4 p-7 text-center">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <h3 className="text-[0.98rem] font-bold tracking-tight text-ink">{item.title}</h3>
                      <p className="text-[0.85rem] leading-relaxed text-ink-muted pretty">{item.description}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FAQ items={pricingFaqs} />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative bg-white pb-12 pt-12 md:pb-20 md:pt-20">
        <div className="container">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[32px] bg-brand-gradient px-8 py-14 shadow-lift md:px-14 md:py-16">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl" />
                <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-white/10 blur-3xl" />
                <svg className="absolute inset-0 size-full opacity-[0.14]" aria-hidden>
                  <defs>
                    <pattern id="pricing-cta-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                      <path d="M42 0H0V42" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pricing-cta-grid)" />
                </svg>
              </div>

              <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/70">Still deciding?</p>
                  <h2 className="mt-4 font-display text-display-md text-white balance md:text-[2.4rem]">
                    Not Sure Which Plan Is Right For You?
                  </h2>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/85 pretty">
                    Book a free consultation and I&apos;ll recommend the best solution based on your business,
                    budget, and future growth.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button asChild size="lg" variant="white" magnetic={8}>
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="light" magnetic={8}>
                    <a href={`https://wa.me/${site.phone.replace(/[^\d]/g, "")}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                      <FaWhatsapp className="size-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="light" magnetic={8}>
                    <a href={`mailto:${site.email}`}>
                      Send Email
                      <Mail className="size-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Other services ──────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="container">
          <Reveal direction="up">
            <p className="eyebrow mb-8 text-center md:text-left">Explore other services</p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
