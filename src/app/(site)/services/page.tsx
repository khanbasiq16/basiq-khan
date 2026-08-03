import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  PenTool,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";
import { services, site, type Service } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Eight focused services from ${site.name} — UI/UX design, web development, web applications, CMS builds, API and AI integration, performance and ongoing support.`,
  alternates: { canonical: "/services" },
};

const icons: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  LayoutDashboard,
  Database,
  Plug,
  Sparkles,
  Gauge,
  LifeBuoy,
};

const tones: Record<Service["tone"], string> = {
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

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="up">
              <p className="eyebrow mb-4">What I do</p>
            </Reveal>
            <h1 className="font-display text-display-xl text-ink balance">
              <TextReveal text="Services I" />{" "}
              <span className="text-brand-500 underline-dot">
                <TextReveal text="Provide" delay={0.1} />
              </span>
            </h1>
            <Reveal direction="up" delay={0.15}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted pretty">
                Eight focused offerings that cover the whole life of a product — from the first
                wireframe to the maintenance window six months after launch. Pick one, or combine a
                few.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = icons[service.icon] ?? Code2;
              return (
                <li key={service.slug}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-surface group relative flex h-full flex-col overflow-hidden p-7"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100"
                      />
                      <div className="relative flex h-full flex-col">
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110 ${tones[service.tone]}`}
                        >
                          <Icon className="size-6" strokeWidth={2} />
                        </span>
                        <h2 className="mt-5 text-lg font-bold tracking-tight text-ink">{service.title}</h2>
                        <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ink-muted pretty">
                          {service.description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand-500">
                          View details
                          <ArrowUpRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
