"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Gauge,
  Globe2,
  LayoutDashboard,
  LifeBuoy,
  PenTool,
  Plug,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type Service } from "@/data/site";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  LayoutDashboard,
  Globe2,
  Database,
  ShoppingBag,
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

export function Services() {
  return (
    <section id="services" className="section-shell bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="Services I"
          highlight="Provide"
          description="Eight focused offerings that cover the whole life of a product — from the first wireframe to the maintenance window six months after launch."
          action={{ label: "View All Services", href: "/services" }}
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <motion.li key={service.title} variants={fadeUp} custom={i % 4}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-surface group relative block h-full overflow-hidden p-6"
                >
                  {/* hover wash */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110 ${tones[service.tone]}`}
                      >
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <h3 className="text-[1rem] font-bold tracking-tight text-ink">{service.title}</h3>
                    </div>
                    <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ink-muted pretty">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand-500 opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                      Learn more
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
