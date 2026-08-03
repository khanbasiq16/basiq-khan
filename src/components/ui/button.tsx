"use client";

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-premium disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(79,107,255,0.65)] hover:shadow-[0_18px_44px_-12px_rgba(79,107,255,0.75)] hover:brightness-[1.06]",
        outline:
          "border border-hairline bg-white text-ink shadow-soft hover:border-brand-300 hover:text-brand-600 hover:shadow-card",
        ghost: "text-ink-muted hover:bg-brand-50 hover:text-brand-600",
        light:
          "border border-white/70 bg-white/15 text-white backdrop-blur-md hover:bg-white/25",
        white: "bg-white text-brand-600 shadow-float hover:shadow-lift",
        link: "h-auto rounded-none p-0 font-semibold text-brand-500 hover:text-brand-600",
      },
      size: {
        sm: "h-10 px-4 text-sm [&_svg]:size-4",
        md: "h-12 px-6 text-[0.95rem] [&_svg]:size-4",
        lg: "h-14 px-8 text-base [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Ripple = { id: number; x: number; y: number; size: number };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Cursor-following pull, in pixels. 0 disables it. */
  magnetic?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = 0, children, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    React.useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = innerRef.current;
      if (!el || !magnetic) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `translate3d(${x * magnetic}px, ${y * magnetic}px, 0)`;
    };

    const handleLeave = () => {
      const el = innerRef.current;
      if (el && magnetic) el.style.transform = "translate3d(0,0,0)";
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = innerRef.current;
      if (el && variant !== "link") {
        const r = el.getBoundingClientRect();
        const size = Math.max(r.width, r.height) * 2;
        const id = Date.now();
        setRipples((prev) => [...prev, { id, x: e.clientX - r.left, y: e.clientY - r.top, size }]);
        window.setTimeout(() => setRipples((prev) => prev.filter((rp) => rp.id !== id)), 650);
      }
      onClick?.(e);
    };

    return (
      <Comp
        ref={innerRef}
        className={cn(buttonVariants({ variant, size }), className)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden
            className="pointer-events-none absolute animate-[pulse-ring_0.65s_ease-out_forwards] rounded-full bg-current opacity-20"
            style={{ left: r.x - r.size / 2, top: r.y - r.size / 2, width: r.size, height: r.size }}
          />
        ))}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
