import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  dot = true,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  /** Replaces the pulsing dot with a custom icon, e.g. a star for a "premium" badge. */
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600",
        className
      )}
    >
      {icon}
      {!icon && dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-brand-500" />
        </span>
      )}
      {children}
    </span>
  );
}

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5 text-amber-400", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden>
          <path d="M10 1.6l2.47 5.3 5.53.66-4.1 3.94 1.09 5.9L10 14.6l-4.99 2.8 1.09-5.9-4.1-3.94 5.53-.66L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}
