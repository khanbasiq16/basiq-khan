"use client";

import { cn } from "@/lib/utils";

/* A pure CSS/SVG product shot — no image assets, so it stays crisp at any DPR
   and costs zero bytes of LCP payload. */

function MiniBars({ values, className }: { values: number[]; className?: string }) {
  return (
    <div className={cn("flex h-full items-end gap-1", className)} aria-hidden>
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm bg-brand-gradient opacity-90"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

function MiniLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={cn("w-full", className)} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="ml" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 32 L18 24 L34 27 L52 14 L70 19 L88 8 L104 12 L120 4" fill="none" stroke="#4F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0 32 L18 24 L34 27 L52 14 L70 19 L88 8 L104 12 L120 4 L120 40 L0 40 Z" fill="url(#ml)" />
    </svg>
  );
}

/** The dashboard rendered "inside" the laptop screen. */
function DashboardUI() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0B1020] text-white">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <div className="ml-2 h-3 w-24 rounded-full bg-white/10" />
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[18%] flex-col gap-2 border-r border-white/10 p-2.5 sm:flex">
          <div className="mb-1 h-2.5 w-10 rounded-full bg-brand-400/80" />
          {[70, 55, 62, 45, 58].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className={cn("size-2 rounded-[3px]", i === 0 ? "bg-brand-400" : "bg-white/20")} />
              <span className="h-1.5 rounded-full bg-white/12" style={{ width: `${w}%` }} />
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-2 p-3">
          <p className="max-w-[70%] text-[clamp(0.6rem,1.35vw,0.95rem)] font-bold leading-tight tracking-tight">
            SaaS Platform Built for Modern Businesses
          </p>
          <p className="hidden max-w-[65%] text-[0.5rem] leading-relaxed text-white/45 sm:block">
            Track revenue, retention and product usage in one place — with alerts that reach your team before churn does.
          </p>
          <span className="mt-0.5 w-fit rounded-full bg-brand-gradient px-2.5 py-1 text-[0.5rem] font-semibold">
            Get Started
          </span>

          <div className="mt-auto grid grid-cols-3 gap-2">
            <div className="rounded-md bg-white/[0.06] p-2">
              <div className="h-1 w-6 rounded-full bg-white/25" />
              <p className="mt-1 text-[0.55rem] font-bold">$48.2k</p>
              <div className="mt-1.5 h-4">
                <MiniBars values={[40, 65, 50, 80, 60, 95]} />
              </div>
            </div>
            <div className="rounded-md bg-white/[0.06] p-2">
              <div className="h-1 w-8 rounded-full bg-white/25" />
              <p className="mt-1 text-[0.55rem] font-bold">+24.6%</p>
              <div className="mt-1 h-5">
                <MiniLine />
              </div>
            </div>
            <div className="rounded-md bg-white/[0.06] p-2">
              <div className="h-1 w-5 rounded-full bg-white/25" />
              <div className="mt-1.5 grid place-items-center">
                <svg viewBox="0 0 36 36" className="size-8 -rotate-90" aria-hidden>
                  <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#6C63FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="94 100"
                    pathLength={100}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LaptopMockup({
  className,
  screen,
}: {
  className?: string;
  /** Overrides the default fake SaaS dashboard with custom screen content. */
  screen?: React.ReactNode;
}) {
  return (
    <div className={cn("relative w-full", className)} aria-hidden>
      {/* screen */}
      <div className="rounded-t-[14px] border border-hairline bg-[#0B1020] p-[6px] shadow-float sm:rounded-t-[18px] sm:p-[8px]">
        <div className="aspect-[16/10] overflow-hidden rounded-[8px] sm:rounded-[11px]">
          {screen ?? <DashboardUI />}
        </div>
      </div>
      {/* base */}
      <div className="relative mx-auto h-[10px] w-[112%] -translate-x-[5.35%] rounded-b-[10px] bg-gradient-to-b from-[#E8EBF3] to-[#C9CFDE] sm:h-[13px]">
        <span className="absolute left-1/2 top-0 h-[3px] w-[14%] -translate-x-1/2 rounded-b-full bg-[#AEB6C9]" />
      </div>
      <div className="mx-auto h-[6px] w-[86%] rounded-b-[40px] bg-black/[0.06] blur-[3px]" />
    </div>
  );
}

export function DesktopMockup({
  className,
  screen,
}: {
  className?: string;
  /** Overrides the default fake SaaS dashboard with custom screen content. */
  screen?: React.ReactNode;
}) {
  return (
    <div className={cn("relative mx-auto w-full", className)} aria-hidden>
      {/* screen */}
      <div className="rounded-[18px] border border-hairline bg-[#0B1020] p-[9px] shadow-float sm:rounded-[22px] sm:p-[12px]">
        <div className="aspect-[16/10] overflow-hidden rounded-[9px] sm:rounded-[12px]">
          {screen ?? <DashboardUI />}
        </div>
      </div>
      {/* stand */}
      <div
        className="relative mx-auto h-[30px] w-[84px] bg-gradient-to-b from-[#E8EBF3] to-[#C9CFDE] sm:h-[38px] sm:w-[104px]"
        style={{ clipPath: "polygon(38% 0%, 62% 0%, 76% 100%, 24% 100%)" }}
      />
      <div className="mx-auto h-[10px] w-[42%] rounded-full bg-gradient-to-b from-[#E8EBF3] to-[#C9CFDE] shadow-soft sm:h-[12px]" />
      <div className="mx-auto h-[6px] w-[34%] rounded-b-[40px] bg-black/[0.06] blur-[3px]" />
    </div>
  );
}

export function PhoneMockup({
  className,
  screen,
}: {
  className?: string;
  /** Overrides the default fake SaaS mobile screen with custom screen content. */
  screen?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "w-[74px] overflow-hidden rounded-[14px] border-[3px] border-[#141A2B] bg-[#0B1020] shadow-float sm:w-[92px] sm:rounded-[18px]",
        className
      )}
      aria-hidden
    >
      <div className="relative aspect-[9/19]">
        <span className="absolute left-1/2 top-1 z-10 h-1 w-6 -translate-x-1/2 rounded-full bg-white/20" />
        {screen ?? (
          <div className="flex h-full flex-col gap-1.5 p-2 pt-4">
            <div className="h-1.5 w-10 rounded-full bg-white/20" />
            <div className="rounded-md bg-white/[0.07] p-1.5">
              <div className="h-1 w-6 rounded-full bg-white/25" />
              <div className="mt-1 h-6">
                <MiniBars values={[45, 70, 55, 85, 62, 92]} />
              </div>
            </div>
            <div className="rounded-md bg-white/[0.07] p-1.5">
              <div className="h-5">
                <MiniLine />
              </div>
            </div>
            <div className="mt-auto space-y-1">
              {[80, 60, 70].map((w, i) => (
                <div key={i} className="h-1 rounded-full bg-white/12" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TabletMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[120px] overflow-hidden rounded-[12px] border-[3px] border-white bg-white shadow-float sm:w-[150px] sm:rounded-[16px]",
        className
      )}
      aria-hidden
    >
      <div className="aspect-[3/4] bg-white p-2">
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-[3px] bg-brand-500" />
          <span className="h-1.5 w-8 rounded-full bg-ink/10" />
        </div>
        <div className="mt-2 rounded-md border border-hairline p-1.5">
          <span className="block h-1 w-6 rounded-full bg-ink/12" />
          <div className="mt-1.5 h-8">
            <MiniBars values={[35, 60, 48, 78, 55, 88, 70]} />
          </div>
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-md border border-hairline p-1.5">
              <span className="block h-1 w-4 rounded-full bg-ink/12" />
              <span className="mt-1 block h-1.5 w-6 rounded-full bg-brand-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
