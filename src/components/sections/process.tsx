"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardCheck,
  Code2,
  FileText,
  Headphones,
  Palette,
  Pencil,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/site";
import { viewportOnce } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Search,
  Pencil,
  Code2,
  ClipboardCheck,
  Rocket,
  Headphones,
  Palette,
  FileText,
};

/** Only counts with a matching entry get their own column count on lg+; others fall back to 6. */
const gridColsByCount: Record<number, string> = {
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-4 xl:grid-cols-7",
  8: "lg:grid-cols-4 xl:grid-cols-8",
};

interface ProcessProps {
  steps?: readonly { step: string; title: string; description: string; icon: string }[];
  description?: string;
}

export function Process({
  steps = processSteps,
  description = "Six stages, each with a deliverable you can actually look at — no black boxes between kickoff and launch.",
}: ProcessProps) {
  const ref = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLSpanElement>(null);
  const lastNodeRef = useRef<HTMLSpanElement>(null);
  const [rail, setRail] = useState<{ left: number; width: number } | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "center 45%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const gridColsClass = gridColsByCount[steps.length] ?? gridColsByCount[6];

  useLayoutEffect(() => {
    function measure() {
      const container = ref.current;
      const first = firstNodeRef.current;
      const last = lastNodeRef.current;
      if (!container || !first || !last) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      // The grid can wrap onto multiple rows at in-between breakpoints (e.g. 8
      // steps at lg-but-not-xl) — a single connecting line only makes sense
      // when every node still sits on the same row.
      if (Math.round(firstRect.top) !== Math.round(lastRect.top)) {
        setRail(null);
        return;
      }

      const left = firstRect.left + firstRect.width / 2 - containerRect.left;
      const right = lastRect.left + lastRect.width / 2 - containerRect.left;
      setRail({ left, width: right - left });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [steps.length]);

  return (
    <section id="process" className="section-shell bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="My process"
          title="My Development"
          highlight="Process"
          description={description}
          align="center"
        />

        <div ref={ref} className="relative">
          {/* the timeline rail — spans exactly from the first icon's center to
              the last icon's center, so it never overshoots past either end */}
          {rail && (
            <div
              aria-hidden
              className="absolute top-8 hidden h-px bg-hairline lg:block"
              style={{ left: rail.left, width: rail.width }}
            >
              <motion.span style={{ width: lineWidth }} className="absolute inset-y-0 left-0 block bg-brand-gradient" />
            </div>
          )}

          <ol className={`grid gap-10 sm:grid-cols-2 lg:gap-5 ${gridColsClass}`}>
            {steps.map((step, i) => {
              const Icon = icons[step.icon] ?? Search;
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative text-center lg:text-left"
                >
                  <span
                    ref={isFirst ? firstNodeRef : isLast ? lastNodeRef : undefined}
                    className="relative z-10 mx-auto grid size-16 place-items-center rounded-full border border-hairline bg-white text-brand-500 shadow-soft transition-all duration-500 ease-premium group-hover:-translate-y-1.5 group-hover:border-brand-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-lift lg:mx-0"
                  >
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>

                  <p className="mt-5 font-mono text-[0.68rem] font-bold tracking-[0.14em] text-brand-400">{step.step}</p>
                  <h3 className="mt-1.5 text-[1.05rem] font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[26ch] text-[0.85rem] leading-relaxed text-ink-muted pretty lg:mx-0">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
