"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-shell bg-surface-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Featured work"
          title="Some Recent"
          highlight="Projects"
          description="Six builds from the last two years — each one shipped, measured and still running in production."
          action={{ label: "View All Projects", href: "/contact" }}
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.li key={project.title} variants={fadeUp} custom={i % 3}>
              <article className="card-surface group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                  <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.07]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — website preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* tags */}
                  <div className="absolute left-3 top-3 z-20 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/70 bg-white/85 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-ink backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* hover overlay */}
                  <div className="absolute inset-0 z-10 flex translate-y-3 flex-col justify-end gap-3 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent p-4 opacity-0 transition-all duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[0.82rem] leading-snug text-white/90 pretty">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.72rem] font-bold text-ink transition-colors hover:bg-brand-500 hover:text-white"
                        >
                          <ExternalLink className="size-3" /> Live Demo
                        </a>
                      )}
                      {project.links.caseStudy && (
                        <a
                          href={project.links.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/50 px-3 py-1.5 text-[0.72rem] font-bold text-white transition-colors hover:bg-white/15"
                        >
                          <FileText className="size-3" /> Case Study
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          aria-label={`${project.title} on GitHub`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/50 px-3 py-1.5 text-[0.72rem] font-bold text-white transition-colors hover:bg-white/15"
                        >
                          <Github className="size-3" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-[1rem] font-bold tracking-tight text-ink transition-colors group-hover:text-brand-600">
                      {project.title}
                    </h3>
                    <p className="mt-1 truncate text-[0.8rem] text-ink-muted">{project.stack.join(", ")}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted transition-all duration-400 ease-premium group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
