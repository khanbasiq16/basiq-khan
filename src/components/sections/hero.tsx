"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, CalendarCheck, LineChart, TrendingUp, Zap } from "lucide-react";
import { SiNextdotjs, SiNodedotjs, SiReact, SiShopify, SiTailwindcss, SiTypescript, SiWordpress } from "react-icons/si";
import { Badge, Stars } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["I Build Websites &", "Web Applications", "That"];

function FloatingCard({
  className,
  depth,
  parallax,
  delay,
  children,
}: {
  className?: string;
  depth: number;
  parallax: { x: number; y: number };
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
      className={cn("absolute z-20", className)}
    >
      <div style={{ transform: `translate3d(${parallax.x * depth}px, ${parallax.y * depth}px, 0)` }}>
        <div
          style={{ animationDelay: `${delay * 0.6}s` }}
          className="animate-floaty-slow rounded-[24px] border border-white bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150"
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

const techLogos = [
  { name: "React", node: <SiReact className="size-6 text-[#61DAFB]" /> },
  { name: "Next.js", node: <SiNextdotjs className="size-6 text-ink" /> },
  { name: "TypeScript", node: <SiTypescript className="size-6 text-[#3178C6]" /> },
  { name: "Node.js", node: <SiNodedotjs className="size-6 text-[#5FA04E]" /> },
  { name: "Tailwind CSS", node: <SiTailwindcss className="size-6 text-[#38BDF8]" /> },
  { name: "Shopify", node: <SiShopify className="size-6 text-[#95BF47]" /> },
  { name: "Wordpress", node: <SiWordpress className="size-6 text-[#21759B]" /> }
];

export function Hero() {
  const parallax = useMouseParallax();

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[120px] md:pb-28 md:pt-[140px] lg:pb-36 lg:pt-[152px]">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-mesh-soft" />
        <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div
          className="absolute -left-24 top-10 size-[420px] rounded-full bg-brand-400/[0.09] blur-[130px] animate-floaty-slow"
          style={{ transform: `translate3d(${parallax.x * -18}px, ${parallax.y * -18}px, 0)` }}
        />
        <div
          className="absolute -right-16 top-24 size-[460px] rounded-full bg-accent/[0.10] blur-[140px] animate-floaty"
          style={{ transform: `translate3d(${parallax.x * 22}px, ${parallax.y * 22}px, 0)` }}
        />
        {/* particles */}
        {[
          { l: "12%", t: "22%", s: 6, d: "0s" },
          { l: "58%", t: "14%", s: 5, d: "2.1s" },
          { l: "90%", t: "32%", s: 4, d: "1.8s" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand-400/30 animate-floaty"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }}
          />
        ))}
      </div>

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-20">
          {/* ── Left ───────────────────────────────── */}
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              <Badge>{site.role}</Badge>
            </motion.div>

            <h1 className="mt-7 font-display text-display-xl text-ink">
              {headline.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "108%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.12 + i * 0.09, ease }}
                  >
                    {line}
                    {i === headline.length - 1 && (
                      <>
                        {" "}
                        <span className="relative bg-brand-gradient bg-clip-text text-transparent">
                          Drive Results
                          <motion.svg
                            viewBox="0 0 240 12"
                            className="absolute -bottom-1 left-0 w-full text-brand-300"
                            fill="none"
                            aria-hidden
                          >
                            <motion.path
                              d="M2 8C40 3 120 2 238 6"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 1, ease }}
                            />
                          </motion.svg>
                        </span>
                        <span className="text-ink">.</span>
                      </>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="mt-7 max-w-[520px] text-xl leading-[1.8] text-ink-muted"
            >
              I help businesses grow online with modern, responsive websites and powerful web
              applications that turn visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" magnetic={8}>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" magnetic={6}>
                <Link href="/contact">
                  Book Free Consultation
                  <CalendarCheck className="size-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.74, ease }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
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
              <div>
                <Stars />
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  <span className="font-bold text-ink">20+ Happy Clients</span> Worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: product shot ──────────────── */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease }}
              className="relative mx-auto w-full max-w-[480px] sm:max-w-[620px] lg:ml-auto lg:max-w-[700px] xl:max-w-[820px] 2xl:max-w-[900px]"
              style={{ transform: `translate3d(${parallax.x * 6}px, ${parallax.y * 6}px, 0)` }}
            >
              {/* strong colored halo behind the devices */}
              <div aria-hidden className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
              </div>

              <div className="relative aspect-[1537/1023] w-full lg:scale-[1.03] 2xl:scale-[1.16]">
                <Image
                  src="/laptopimage.png"
                  alt="SaaS analytics dashboard shown on a laptop and phone"
                  fill
                  priority
                  sizes="(min-width: 1536px) 900px, (min-width: 1280px) 820px, (min-width: 1024px) 700px, (min-width: 640px) 620px, 90vw"
                  className="object-contain drop-shadow-[0_45px_80px_rgba(31,45,90,0.32)]"
                />
              </div>

              <FloatingCard className="-top-4 right-4 sm:-top-6 sm:right-2 lg:right-6" depth={16} parallax={parallax} delay={0.7}>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-500">
                    <LineChart className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-medium text-ink-muted">Projects Completed</p>
                    <p className="text-base font-extrabold leading-tight text-ink">50+</p>
                  </div>
                  <TrendingUp className="ml-1 size-4 text-emerald-500" />
                </div>
              </FloatingCard>

              <FloatingCard className="left-0 top-[44%] -translate-y-1/2 sm:-left-6" depth={-14} parallax={parallax} delay={0.85}>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Award className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-medium text-ink-muted">Client Satisfaction</p>
                    <p className="text-base font-extrabold leading-tight text-ink">100%</p>
                    <p className="text-[0.6rem] font-medium text-ink-faint">5 Star Reviews</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="bottom-0 right-2 sm:bottom-2 sm:right-4 lg:right-2 xl:right-6" depth={12} parallax={parallax} delay={1}>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-amber-50 text-amber-500">
                    <Zap className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-medium text-ink-muted">Years Experience</p>
                    <p className="text-base font-extrabold leading-tight text-ink">2+</p>
                    <p className="text-[0.6rem] font-medium text-ink-faint">In Development</p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease }}
              className="mt-14 text-center"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
                Technologies I work with
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
