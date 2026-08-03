"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

interface CTAProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  eyebrow = "Let's work together",
  heading = "Have a Project in Mind?",
  description = "Tell me what you're building and I'll come back within a day with a plan, a timeline and a fixed price. No sales call required.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Send Me an Email",
  secondaryHref = `mailto:${site.email}`,
}: CTAProps = {}) {
  return (
    <section className="relative bg-white pb-12 pt-12 md:pb-20 md:pt-20">
      <div className="container">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[32px] bg-brand-gradient px-8 py-14 shadow-lift md:px-14 md:py-16">
            {/* atmosphere */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-white/10 blur-3xl" />
              <svg className="absolute inset-0 size-full opacity-[0.14]" aria-hidden>
                <defs>
                  <pattern id="cta-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                    <path d="M42 0H0V42" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
                <h2 className="mt-4 font-display text-display-md text-white balance md:text-[2.4rem]">
                  {heading}
                </h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-white/85 pretty">{description}</p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <motion.span
                  aria-hidden
                  animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden size-16 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md xl:grid"
                >
                  <Rocket className="size-7" />
                </motion.span>
                <Button asChild size="lg" variant="white" magnetic={8}>
                  <Link href={primaryHref}>{primaryLabel}</Link>
                </Button>
                <Button asChild size="lg" variant="light" magnetic={8}>
                  <a href={secondaryHref}>
                    {secondaryLabel}
                    <Mail className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
