"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { cn, viewportOnce } from "@/lib/utils";

/** Full-circle progress ring — draws itself in on scroll, number counts up alongside it. */
export function MetricRing({
  value,
  color,
  size = 96,
  trackColor = "#E5E7EB",
  textClassName = "text-2xl",
}: {
  value: number;
  color: string;
  size?: number;
  trackColor?: string;
  textClassName?: string;
}) {
  const stroke = Math.max(3, size * 0.072);
  const radius = (size - stroke) / 2;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          style={{ pathLength: 0 }}
          whileInView={{ pathLength: value / 100 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <Counter value={value} duration={1.5} className={cn("font-display font-extrabold text-ink", textClassName)} />
      </span>
    </div>
  );
}

/** Half-circle speedometer — same draw-in behaviour as MetricRing, for a "gauge" read. */
export function SemiGauge({
  value,
  color,
  size = 120,
  trackColor = "#E5E7EB",
  displayValue,
  label,
}: {
  /** 0–100, drives how much of the arc is filled. */
  value: number;
  color: string;
  size?: number;
  trackColor?: string;
  /** Overrides the number shown at center (e.g. "1.2s" instead of the raw fill value). */
  displayValue?: string | number;
  label?: string;
}) {
  const stroke = Math.max(4, size * 0.075);
  const r = size / 2 - stroke;
  const cx = size / 2;
  const cy = size / 2;
  const path = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  const height = size / 2 + stroke;

  return (
    <div className="relative shrink-0" style={{ width: size, height }}>
      <svg viewBox={`0 0 ${size} ${height}`} width={size} height={height}>
        <path d={path} fill="none" stroke={trackColor} strokeWidth={stroke} strokeLinecap="round" />
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          style={{ pathLength: 0 }}
          whileInView={{ pathLength: value / 100 }}
          viewport={viewportOnce}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center leading-none">
        <span className="font-display text-xl font-extrabold text-ink">{displayValue ?? value}</span>
        {label && <span className="mt-1.5 text-[0.6rem] font-semibold text-ink-muted">{label}</span>}
      </div>
    </div>
  );
}
