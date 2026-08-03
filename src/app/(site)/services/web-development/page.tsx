import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Building,
  Building2,
  CalendarClock,
  Clock,
  Code2,
  Heart,
  Home as HomeIcon,
  Images,
  LayoutTemplate,
  RefreshCw,
  Rocket,
  Search,
  Smartphone,
  Star,
  TrendingUp,
  
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { projects } from "@/data/site";
import { FaCss3 } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Custom, high-performance websites built with Next.js and React — fast, SEO-friendly, responsive and built to convert visitors into customers.",
  alternates: { canonical: "/services/web-development" },
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

const offerings: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  {
    title: "Business Website",
    description: "Professional business websites that build trust and generate more leads.",
    icon: Building2,
    tone: "blue",
  },
  {
    title: "Landing Page",
    description: "High-converting landing pages designed to boost your campaign results.",
    icon: LayoutTemplate,
    tone: "violet",
  },
  {
    title: "Portfolio Website",
    description: "Showcase your work with stunning portfolio websites that stand out.",
    icon: Images,
    tone: "rose",
  },
  {
    title: "Corporate Website",
    description: "Powerful corporate websites for companies that want to establish credibility.",
    icon: Building,
    tone: "sky",
  },
  {
    title: "SaaS Website",
    description: "Modern SaaS websites with clean UI and seamless user experience.",
    icon: Boxes,
    tone: "emerald",
  },
  {
    title: "Real Estate Website",
    description: "Feature-rich real estate websites with property management.",
    icon: HomeIcon,
    tone: "orange",
  },
  {
    title: "Booking Website",
    description: "Booking & appointment websites with easy scheduling system.",
    icon: CalendarClock,
    tone: "fuchsia",
  },
  {
    title: "Custom Web App",
    description: "Full-stack web applications built for specific business requirements.",
    icon: AppWindow,
    tone: "indigo",
  },
];

const whyChooseFeatures: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Lightning Fast", description: "Optimized for speed and performance", icon: Zap },
  { title: "Clean Code", description: "Well-structured & maintainable code", icon: Code2 },
  { title: "SEO Ready", description: "Built with SEO best practices", icon: Search },
  { title: "CMS Ready", description: "Easy to update with any CMS", icon: RefreshCw },
  { title: "Mobile First", description: "Fully responsive on all devices", icon: Smartphone },
  { title: "Easy Maintenance", description: "Support and maintenance made easy", icon: RefreshCw },
];

const webDevStats = [
  { value: 50, suffix: "+", label: "Projects Completed", icon: Rocket },
  { value: 20, suffix: "+", label: "Happy Clients", icon: Heart },
  { value: 2, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Award },
];

const featuredProjects = projects.slice(0, 3);

const techLogos = [
  { name: "HTML5", node: <SiHtml5 className="size-6 text-[#E34F26]" /> },
  { name: "CSS3", node: <FaCss3 className="size-6 text-[#1572B6]" /> },
  { name: "JavaScript", node: <SiJavascript className="size-6 text-[#F7DF1E]" /> },
  { name: "Tailwind CSS", node: <SiTailwindcss className="size-6 text-[#38BDF8]" /> },
  { name: "React", node: <SiReact className="size-6 text-[#61DAFB]" /> },
  { name: "Next.js", node: <SiNextdotjs className="size-6 text-ink" /> },
  { name: "TypeScript", node: <SiTypescript className="size-6 text-[#3178C6]" /> },
];

function ScoreRing({ value, color }: { value: number; color: string }) {
  const size = 40;
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

function CodeEditorMockup() {
  return (
    <div className="relative mx-auto max-w-[500px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/25 blur-[90px]" />

      <div className="relative aspect-[612/408] w-full">
        <Image
          src="/cleancode.png"
          alt="Code editor showing a clean, well-structured build with a 100 performance score"
          fill
          sizes="500px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
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
                <Badge icon={<Star className="size-3.5 fill-current" />}>Premium Web Development</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-display-xl text-ink balance">
                <TextReveal text="Custom Websites That" />{" "}
                <span className="relative bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Drive Results" delay={0.1} />
                  <Reveal
                    direction="none"
                    delay={0.9}
                    duration={0.5}
                    className="absolute -bottom-1 left-0 w-full"
                  >
                    <svg viewBox="0 0 240 12" className="w-full text-brand-300" fill="none" aria-hidden>
                      <path d="M2 8C40 3 120 2 238 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </Reveal>
                </span>
                .
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I build modern, high-performance websites that help businesses grow online. Fast,
                  SEO-friendly, responsive and built to convert visitors into customers.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" magnetic={8}>
                    <Link href="/contact">
                      Get Free Consultation
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
                      <span className="font-bold text-ink">50+ Happy Clients</span> Worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: SaaS mockup */}
            <div className="w-full lg:w-[clamp(420px,42vw,640px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
              <div aria-hidden className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
              </div>

              <div className="relative mx-auto w-[94%] max-w-[440px] sm:w-[88%] sm:max-w-[520px] lg:mx-0 lg:w-full lg:max-w-none">
                <div className="relative aspect-[1536/1024] w-full ">
                  <Image
                    src="/webdevelopment.png"
                    alt="Laptop and phone showing a modern website homepage"
                    fill
                    priority
                    sizes="(min-width: 1024px) 640px, (min-width: 640px) 520px, 94vw"
                    className="object-contain drop-shadow-[0_45px_80px_rgba(31,45,90,0.32)]"
                  />
                </div>
              </div>

              <div
                aria-hidden
                className="animate-floaty-slow absolute -top-4 right-0 hidden w-[165px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block lg:-right-2"
              >
                <div className="flex items-center gap-2">
                  <ScoreRing value={98} color="#22C55E" />
                  <div>
                    <p className="text-[0.58rem] font-medium text-ink-muted">Performance</p>
                    <p className="text-sm font-extrabold leading-tight text-ink">98%</p>
                    <p className="text-[0.56rem] font-medium text-ink-faint">Excellent Score</p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="animate-floaty absolute left-[13%] top-[36%] hidden w-[160px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                style={{ animationDelay: "1.1s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                    <TrendingUp className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-medium text-ink-muted">SEO Score</p>
                    <p className="text-sm font-extrabold leading-tight text-ink">95/100</p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="animate-floaty-slow absolute bottom-0 right-[-2%] hidden w-[160px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-500">
                    <Zap className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-medium text-ink-muted">Website Speed</p>
                    <p className="text-sm font-extrabold leading-tight text-ink">1.2s</p>
                    <p className="text-[0.56rem] font-medium text-ink-faint">Super Fast</p>
                  </div>
                </div>
              </div>
            </Reveal>

              <Reveal direction="up" delay={0.6} className="mt-14 text-center">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
                  Technologies I Work With
                </p>
                <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  {techLogos.map((t) => (
                    <li
                      key={t.name}
                      title={t.name}
                      className="grid h-12 min-w-[52px] place-items-center rounded-2xl border border-hairline bg-white px-3 text-lg shadow-soft transition-colors duration-300 ease-premium hover:border-brand-200 hover:shadow-card"
                    >
                      <span className="inline-flex">{t.node}</span>
                      <span className="sr-only">{t.name}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* ── Offerings ─────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I build"
            title="Web Solutions for Every"
            highlight="Business Need"
            description="Whatever kind of website your business needs, I build it with the same care — fast, clean and made to convert."
            action={{ label: "View All Services", href: "/services" }}
          />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering, i) => {
              const Icon = offering.icon;
              return (
                <li key={offering.title}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <article className="card-surface group relative h-full overflow-hidden p-6">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100"
                      />
                      <div className="relative">
                        <span
                          className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110 ${toneStyles[offering.tone]}`}
                        >
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <h3 className="mt-4 text-[0.98rem] font-bold tracking-tight text-ink">{offering.title}</h3>
                        <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-muted pretty">
                          {offering.description}
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

      {/* ── Why choose me ─────────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <CodeEditorMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why choose me</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Clean Code. Modern Design." />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Better Performance." delay={0.12} />
                </span>
              </h2>

              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {whyChooseFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <Reveal key={feature.title} direction="up" delay={0.06 * i}>
                      <li className="flex items-start gap-3.5">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <div>
                          <p className="font-bold text-ink">{feature.title}</p>
                          <p className="mt-0.5 text-[0.85rem] leading-relaxed text-ink-muted">{feature.description}</p>
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

      <Process />

      {/* ── Projects preview ──────────────────────────────────── */}
      <section id="portfolio" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Recent web projects"
            title="Some Recent"
            highlight="Web Projects"
            description="A few recent builds — each one shipped, measured and still running in production."
            action={{ label: "View All Projects", href: "/contact" }}
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
                        <p className="mt-1 truncate text-[0.8rem] text-ink-muted">{project.stack.join(", ")}</p>
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

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="bg-white pb-12 md:pb-20">
        <div className="container">
          <Reveal direction="scale">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-brand-gradient shadow-lift md:grid-cols-4">
              {webDevStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center gap-2 px-6 py-10 text-center text-white">
                    <Icon className="size-6 text-white/80" strokeWidth={1.8} />
                    <p className="font-display text-3xl font-extrabold">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-[0.8rem] font-medium text-white/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
