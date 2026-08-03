"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export type GalleryProject = {
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
};

export function ProjectGallery({ projects }: { projects: GalleryProject[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % projects.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + projects.length) % projects.length));
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, projects.length]);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal direction="up" delay={0.06 * i}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="card-surface group block h-full w-full overflow-hidden text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                  <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.07]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — design preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-[1rem] font-bold tracking-tight text-ink transition-colors group-hover:text-brand-600">
                      {project.title}
                    </h3>
                    <p className="mt-1 truncate text-[0.8rem] text-ink-muted">{project.category}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted transition-all duration-400 ease-premium group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {active && (
        <div
          key={activeIndex}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — full design preview`}
          className="fixed inset-0 z-[100] overflow-y-auto bg-ink/90 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveIndex(null)}
            className="fixed right-4 top-4 z-[110] grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </button>

          {projects.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous design"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i - 1 + projects.length) % projects.length));
                }}
                className="fixed left-2 top-1/2 z-[110] grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next design"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i + 1) % projects.length));
                }}
                className="fixed right-2 top-1/2 z-[110] grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-4"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <div className="flex min-h-full justify-center px-4 py-20 sm:px-10">
            <div className="w-full max-w-[760px]" onClick={(e) => e.stopPropagation()}>
              <div className="mb-5 text-center text-white">
                <p className="text-lg font-bold tracking-tight">{active.title}</p>
                <p className="mt-0.5 text-sm text-white/60">{active.category}</p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src={active.image}
                  width={active.width}
                  height={active.height}
                  alt={`${active.title} — full design`}
                  sizes="760px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
