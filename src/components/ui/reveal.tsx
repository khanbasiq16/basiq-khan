"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { viewportOnce } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.94 },
  none: {},
};

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
}

/** Scroll-triggered entrance. One primitive so every section animates identically. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/**
 * Word-by-word text reveal for headlines. One `whileInView` observer on the
 * parent drives every word via variant propagation + staggerChildren — each
 * word used to carry its own observer, which was unreliable in practice
 * (words could get stuck permanently hidden with no error).
 */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
