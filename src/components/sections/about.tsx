"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { stats } from "@/data/site";
import { viewportOnce } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="section-shell bg-white pb-0 md:pb-0 lg:pb-0">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-hairline bg-surface-muted shadow-card">
              {/* image reveal curtain */}
              <motion.span
                aria-hidden
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-20 origin-top bg-brand-gradient"
              />
              <Image
                src="/myimage.png"
                alt="Basiq Khan, full stack developer, in his office"
                fill
                priority={false}
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              />
            </div>
          </motion.div>

          {/* content */}
          <div>
            <Reveal direction="up">
              <p className="eyebrow mb-3">About me</p>
            </Reveal>

            <h1 className="font-display text-display-lg text-ink balance">
              <TextReveal text="Passionate About Building" />{" "}
              <span className="text-brand-500">
                <TextReveal text="Digital Experiences" delay={0.12} />
              </span>
            </h1>

            <Reveal direction="up" delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted pretty">
                I&apos;m Basiq Khan, a Full Stack Developer with 2+ years of experience in building
                modern websites and web applications. I help businesses bring their ideas to life with
                clean code, beautiful design, and great user experience.
              </p>
            </Reveal>

            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.li
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-hairline bg-white p-4 text-center transition-colors duration-300 ease-premium hover:border-brand-200 sm:p-5"
                >
                  <p className="font-display text-2xl font-extrabold tracking-tight text-brand-500 sm:text-[1.7rem]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-[0.72rem] font-medium leading-tight text-ink-muted">{stat.label}</p>
                </motion.li>
              ))}
            </ul>

            <Reveal direction="up" delay={0.5}>
              <Button asChild size="lg" magnetic={8} className="mt-6">
                <Link href="/contact">
                  More About Me
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
