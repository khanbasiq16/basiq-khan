"use client";

import { Boxes } from "lucide-react";
import { clientLogos } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

/** Infinite marquee. The list is duplicated so the -50% translation loops seamlessly. */
export function TrustedBy() {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section aria-label="Clients I have worked with" className="border-y border-hairline bg-surface-muted py-12">
      <div className="container">
        <Reveal direction="up">
          <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
            Trusted by ambitious businesses
          </p>
        </Reveal>
      </div>

      <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
        <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
          {track.map((logo, i) => (
            <li
              key={`${logo}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-ink-faint grayscale transition-all duration-500 ease-premium hover:text-brand-500 hover:grayscale-0"
              aria-hidden={i >= clientLogos.length}
            >
              <Boxes className="size-5" />
              <span className="text-lg font-semibold tracking-tight">{logo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
