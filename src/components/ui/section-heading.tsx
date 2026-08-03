"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, TextReveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Trailing words rendered in brand blue with the signature dot. */
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        <Reveal direction="up">
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
        <h2 className="text-display-lg font-display text-ink balance">
          <TextReveal text={title} />{" "}
          {highlight && (
            <span className="text-brand-500 underline-dot">
              <TextReveal text={highlight} delay={0.1} />
            </span>
          )}
        </h2>
        {description && (
          <Reveal direction="up" delay={0.15}>
            <p className={cn("mt-5 text-lg leading-relaxed text-ink-muted pretty", align === "center" && "mx-auto")}>
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {action && (
        <Reveal direction="left" delay={0.2}>
          <Link
            href={action.href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
          >
            {action.label}
            <ArrowRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
