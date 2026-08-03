"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stars } from "@/components/ui/badge";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <section id="testimonials" className="section-shell bg-surface-muted">
      <div className="container">
        <SectionHeading
          eyebrow="What clients say"
          title="Client"
          highlight="Testimonials"
          description="Unedited words from the people who signed the invoices."
          align="center"
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <ul className="-ml-6 flex touch-pan-y">
              {testimonials.map((t) => (
                <li key={t.name} className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3">
                  <figure className="card-surface group relative flex h-full flex-col p-7">
                    <Quote
                      className="size-9 text-brand-200 transition-colors duration-500 group-hover:text-brand-400"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-muted pretty">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-hairline pt-5">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-[0.8rem] font-bold text-white">
                          {t.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[0.9rem] font-bold text-ink">{t.name}</p>
                          <p className="truncate text-[0.78rem] text-ink-muted">{t.title}</p>
                        </div>
                      </div>
                      <Stars count={t.rating} />
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
              className="grid size-10 place-items-center rounded-full border border-hairline bg-white text-ink-muted shadow-soft transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={selected === i}
                  className={cn(
                    "h-2 rounded-full transition-all duration-400 ease-premium",
                    selected === i ? "w-7 bg-brand-500" : "w-2 bg-brand-200 hover:bg-brand-300"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
              className="grid size-10 place-items-center rounded-full border border-hairline bg-white text-ink-muted shadow-soft transition-all duration-300 hover:translate-x-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
