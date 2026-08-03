import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Component,
  LayoutDashboard,
  LayoutGrid,
  LayoutTemplate,
  PencilRuler,
  Search,
  Smartphone,
  Star,
  Box as BoxIcon,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectGallery, type GalleryProject } from "@/components/ui/project-gallery";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description:
    "User-centered UI/UX design — wireframes, high-fidelity mockups and design systems that engage users and turn attention into conversions.",
  alternates: { canonical: "/services/ui-ux-design" },
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
    title: "UX Research",
    description: "Understand users, goals and pain points.",
    icon: Search,
    tone: "blue",
  },
  {
    title: "Wireframing",
    description: "Structure ideas and create user flows.",
    icon: LayoutGrid,
    tone: "violet",
  },
  {
    title: "UI Design",
    description: "Beautiful, modern and pixel-perfect designs.",
    icon: PencilRuler,
    tone: "rose",
  },
  {
    title: "Dashboard Design",
    description: "Analytics dashboards that drive insights.",
    icon: LayoutDashboard,
    tone: "sky",
  },
  {
    title: "SaaS Design",
    description: "Scalable and conversion focused SaaS interfaces.",
    icon: BoxIcon,
    tone: "emerald",
  },
  {
    title: "Mobile App Design",
    description: "iOS & Android app design that users love.",
    icon: Smartphone,
    tone: "orange",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing page designs.",
    icon: LayoutTemplate,
    tone: "fuchsia",
  },
  {
    title: "Design Systems",
    description: "Consistent components and design languages.",
    icon: Component,
    tone: "indigo",
  },
];

const whyChooseFeatures = [
  "User-centered approach that solves real problems",
  "Clean, modern and conversion-focused designs",
  "Pixel-perfect, organized and scalable files",
  "Responsive design for all devices",
  "Accessible and inclusive design practices",
  "Smooth handoff and developer collaboration",
];

const toolkit: { name: string; logo: string }[] = [
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Adobe Xd", logo: "/logos/adobe-xd.svg" },
  { name: "Illustrator", logo: "/logos/illustrator.svg" },
  { name: "Photoshop", logo: "/logos/photoshop.svg" },
  { name: "Framer", logo: "/logos/framer.png" },
  { name: "Spline", logo: "/logos/spline.png" },
  { name: "After Effects", logo: "/logos/after-effects.svg" },
  { name: "Maze", logo: "/logos/maze.png" },
  { name: "Miro", logo: "/logos/miro.png" },
  { name: "Notion", logo: "/logos/notion.png" },
];

const featuredDesigns: GalleryProject[] = [
  {
    title: "Supply Run",
    category: "Unscripted Adventure Series",
    image: "/redesign-sr.png",
    width: 850,
    height: 1851,
  },
  {
    title: "The Wright Community Management",
    category: "HOA & Community Management",
    image: "/redesign-wright.png",
    width: 836,
    height: 1881,
  },
  {
    title: "FEAM Aero",
    category: "Aviation Line Maintenance",
    image: "/redesign-feam.png",
    width: 804,
    height: 1956,
  },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-[500px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/25 blur-[90px]" />

      <div className="relative aspect-[1240/835] w-full">
        <Image
          src="/uiuxsideimage.png"
          alt="Figma-style design workspace showing a booking app mockup, typography and color styles"
          fill
          sizes="500px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function UiUxDesignPage() {
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
          <div className="flex flex-col items-center gap-12 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.25rem,2.5vw,2rem)]">
            {/* left */}
            <div className="flex flex-col items-center text-center lg:w-[clamp(380px,38vw,600px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge icon={<Star className="size-3.5 fill-current" />}>Premium UI/UX Design</Badge>
              </Reveal>

              <h1 className="mt-7 font-display text-display-xl text-ink balance">
                <TextReveal text="Design Experiences" />
                <br />
                <TextReveal text="People" delay={0.08} />{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Love To Use" delay={0.14} />
                </span>
                .
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-muted pretty lg:mx-0">
                  I create intuitive, user-centered designs that engage users, solve real problems and
                  help your business grow.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-3 min-[1420px]:gap-4">
                  <Button
                    asChild
                    size="lg"
                    magnetic={8}
                    className="lg:h-10 lg:gap-1.5 lg:px-3 lg:text-xs lg:[&_svg]:size-3.5 min-[1420px]:h-14 min-[1420px]:gap-2 min-[1420px]:px-8 min-[1420px]:text-base min-[1420px]:[&_svg]:size-5"
                  >
                    <Link href="/contact">
                      Book Discovery Call
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    magnetic={6}
                    className="lg:h-10 lg:gap-1.5 lg:px-3 lg:text-xs lg:[&_svg]:size-3.5 min-[1420px]:h-14 min-[1420px]:gap-2 min-[1420px]:px-8 min-[1420px]:text-base min-[1420px]:[&_svg]:size-5"
                  >
                    <Link href="#portfolio">
                      View Design Portfolio
                      <LayoutGrid className="size-5" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-11 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                  <div className="flex -space-x-3">
                    {["#4F6BFF", "#6C63FF", "#8098FF", "#3D57E8"].map((c, i) => (
                      <span
                        key={i}
                        className="grid size-11 place-items-center rounded-full border-[3px] border-white text-[0.7rem] font-bold text-white shadow-soft"
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

            {/* right: device composition */}
            <div className="w-full lg:w-[clamp(500px,50vw,700px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>

                <div className="relative mx-auto w-full max-w-[500px] sm:max-w-[580px] lg:mx-0 lg:w-full lg:max-w-none">
                  <div className="relative aspect-[1536/1024] w-full ">
                    <Image
                      src="/uiuxbanner.png"
                      alt="Laptop, tablet and phone showing UI/UX design mockups for a SaaS dashboard and landing page"
                      fill
                      priority
                      sizes="(min-width: 1024px) 640px, (min-width: 640px) 520px, 94vw"
                      className="object-contain drop-shadow-[0_45px_80px_rgba(31,45,90,0.32)]"
                    />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty-slow absolute -top-4 left-0 hidden w-[155px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block lg:-left-2"
                >
                  <p className="text-[0.6rem] font-semibold text-ink-muted">Design System</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    {["#4F6BFF", "#6C63FF", "#F59E0B", "#111827"].map((c, i) => (
                      <span key={i} className="size-3.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="mt-2 font-display text-base font-bold text-ink">Aa</p>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty absolute right-0 top-[8%] hidden w-[150px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                  style={{ animationDelay: "1.1s" }}
                >
                  <p className="text-[0.6rem] font-semibold text-ink-muted">UI Components</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="grid size-7 place-items-center rounded-lg bg-brand-50 text-brand-500">
                      <Component className="size-3.5" />
                    </span>
                    <span className="grid size-7 place-items-center rounded-lg bg-violet-50 text-violet-500">
                      <LayoutGrid className="size-3.5" />
                    </span>
                    <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-500">
                      <BoxIcon className="size-3.5" />
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty absolute bottom-[14%] left-[-2%] hidden w-[150px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                  style={{ animationDelay: "1.6s" }}
                >
                  <p className="text-[0.6rem] font-semibold text-ink-muted">Color Palette</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    {["#4F6BFF", "#8B5CF6", "#9CA3AF", "#111827"].map((c, i) => (
                      <span key={i} className="size-4 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty-slow absolute bottom-0 right-[-2%] hidden w-[150px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-[0.6rem] font-semibold text-ink-muted">Auto Layout</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="grid size-7 place-items-center rounded-lg bg-amber-50 text-amber-500">
                      <LayoutTemplate className="size-3.5" />
                    </span>
                    <span className="grid size-7 place-items-center rounded-lg bg-sky-50 text-sky-500">
                      <LayoutDashboard className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I do"
            title="UI/UX Design"
            highlight="Services"
            description="From first user interview to final handoff — every design decision is made to solve a real problem, not just to look good."
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

      <Process />

      {/* ── Why choose me ─────────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <DashboardMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why choose me</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Design That Converts," />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Not Just Looks Good." delay={0.12} />
                </span>
              </h2>

              <ul className="mt-9 flex flex-col gap-3.5">
                {whyChooseFeatures.map((feature, i) => (
                  <Reveal key={feature} direction="up" delay={0.06 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <p className="text-[0.95rem] leading-relaxed text-ink-muted">{feature}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ─────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <Reveal direction="up" className="mb-12 text-center md:mb-14">
            <p className="eyebrow mb-4">Tools I use</p>
            <h2 className="font-display text-display-md text-ink balance">My Design Toolkit</h2>
          </Reveal>

          <ul className="flex flex-wrap items-center justify-center gap-3 lg:flex-nowrap lg:gap-3 xl:gap-4">
            {toolkit.map((tool, i) => (
              <Reveal key={tool.name} direction="up" delay={0.04 * i} className="lg:min-w-0 lg:flex-1">
                <li
                  title={tool.name}
                  className="flex w-[104px] shrink-0 flex-col items-center gap-2.5 rounded-2xl border border-hairline bg-white px-3 py-5 text-center shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card lg:w-full lg:px-2"
                >
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={28}
                    height={28}
                    className="size-7 shrink-0 rounded-md object-contain"
                  />
                  <span className="w-full truncate text-[0.72rem] font-semibold text-ink-muted">{tool.name}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Projects preview ──────────────────────────────────── */}
      <section id="portfolio" className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Recent design work"
            title="Selected"
            highlight="Projects"
            description="A few recent design projects — each one shipped, tested and still in use today."
            action={{ label: "View All Projects", href: "/#projects" }}
          />

          <ProjectGallery projects={featuredDesigns} />
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
