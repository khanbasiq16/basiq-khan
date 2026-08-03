import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
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
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";
import { services, stats, type Service } from "@/data/site";

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

/** Bold banner gradient — each service gets its own color identity. */
const bannerGradients: Record<Service["tone"], string> = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
  violet: "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700",
  sky: "bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600",
  indigo: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-700",
  rose: "bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700",
  amber: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
  emerald: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700",
  fuchsia: "bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700",
  cyan: "bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600",
  orange: "bg-gradient-to-br from-orange-500 via-red-500 to-rose-600",
};

/** Soft accent for the "what's included" checklist — echoes the banner color at rest. */
const accentTones: Record<Service["tone"], string> = {
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

const dedicatedRoutes = ["web-development", "ui-ux-design", "web-applications", "cms-development", "api-integration"];

export function generateStaticParams() {
  // These slugs have their own dedicated route (services/<slug>/page.tsx) with a
  // much richer, custom layout — the dynamic template below covers the rest.
  return services.filter((service) => !dedicatedRoutes.includes(service.slug)).map((service) => ({ slug: service.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = icons[service.icon] ?? Code2;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const bannerStats = stats.slice(0, 3);

  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <section className={`relative overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[132px] ${bannerGradients[service.tone]}`}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 size-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-28 right-0 size-96 rounded-full bg-white/10 blur-3xl" />
          <svg className="absolute inset-0 size-full opacity-[0.12]" aria-hidden>
            <defs>
              <pattern id="service-banner-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                <path d="M42 0H0V42" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-banner-grid)" />
          </svg>
        </div>

        <div className="container relative">
          <Reveal direction="up">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" /> All services
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Reveal direction="up" delay={0.05}>
                <span className="grid size-16 place-items-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <Icon className="size-8" strokeWidth={2} />
                </span>
              </Reveal>

              <h1 className="mt-6 font-display text-display-xl text-white balance">
                <TextReveal text={service.title} />
              </h1>

              <Reveal direction="up" delay={0.15}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 pretty">
                  {service.longDescription}
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="white" magnetic={8}>
                    <Link href="/contact">
                      Start a Project
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="light" magnetic={6}>
                    <Link href="/services">Browse All Services</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.2} className="flex shrink-0 gap-3 lg:flex-col lg:gap-3">
              {bannerStats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[132px] rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-2xl font-extrabold text-white">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-[0.72rem] font-medium leading-tight text-white/70">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Details ─────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal direction="up">
              <h2 className="text-xl font-bold tracking-tight text-ink">What&apos;s included</h2>
              <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-hairline bg-white p-4 text-[0.92rem] leading-relaxed text-ink-muted shadow-soft"
                  >
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-full ${accentTones[service.tone]}`}
                    >
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            {others.length > 0 && (
              <Reveal direction="up" delay={0.1}>
                <div className="mt-16 border-t border-hairline pt-10">
                  <p className="text-sm font-semibold text-ink-muted">Other services</p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/services/${other.slug}`}
                          className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-2 text-[0.85rem] font-medium text-ink-muted transition-colors hover:border-brand-300 hover:text-brand-600"
                        >
                          {other.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
