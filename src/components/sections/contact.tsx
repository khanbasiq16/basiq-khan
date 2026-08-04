"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { budgets, projectTypes, site } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[0.92rem] text-ink shadow-soft outline-none transition-all duration-300 placeholder:text-ink-faint focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10";

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location },
  // { icon: Clock, label: "Availability", value: site.availability },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="section-shell bg-surface-muted">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="up">
              <p className="eyebrow mb-4">Get in touch</p>
            </Reveal>
            <h1 className="font-display text-display-lg text-ink balance">
              <TextReveal text="Let's Build Something" />{" "}
              <span className="text-brand-500 underline-dot">
                <TextReveal text="Amazing Together" delay={0.1} />
              </span>
            </h1>
            <Reveal direction="up" delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted pretty">
                Share a few details about your project and I&apos;ll reply within one business day with
                next steps, a realistic timeline and a fixed quote.
              </p>
            </Reveal>

            <ul className="mt-10 flex flex-col gap-3">
              {details.map((d, i) => {
                const Icon = d.icon;
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-400 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.72rem] font-semibold uppercase tracking-wider text-ink-faint">
                        {d.label}
                      </span>
                      <span className="block truncate text-[0.95rem] font-semibold text-ink">{d.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={d.label} direction="up" delay={0.2 + i * 0.07}>
                    {d.href ? (
                      <a href={d.href} className="card-surface group flex items-center gap-4 p-4">
                        {content}
                      </a>
                    ) : (
                      <div className="card-surface group flex items-center gap-4 p-4">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* right: form */}
          <Reveal direction="up" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-white p-6 shadow-card md:p-9">
              <span aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-50 blur-3xl" />

              <form onSubmit={handleSubmit} className="relative grid gap-5 sm:grid-cols-2" noValidate={false}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[0.78rem] font-semibold text-ink">
                    Name <span className="text-brand-500">*</span>
                  </label>
                  <input id="name" name="name" required autoComplete="name" placeholder="Jane Cooper" className={fieldBase} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[0.78rem] font-semibold text-ink">
                    Email <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[0.78rem] font-semibold text-ink">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 234 567 8901"
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-[0.78rem] font-semibold text-ink">
                    Project Type
                  </label>
                  <select id="projectType" name="projectType" defaultValue="" className={cn(fieldBase, "appearance-none")}>
                    <option value="" disabled>
                      Choose one
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="budget" className="text-[0.78rem] font-semibold text-ink">
                    Budget
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={cn(fieldBase, "appearance-none")}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-[0.78rem] font-semibold text-ink">
                    Message <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you building, and what does success look like?"
                    className={cn(fieldBase, "resize-none")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    magnetic={6}
                    disabled={status === "sending" || status === "sent"}
                    className="w-full sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" /> Sending…
                      </>
                    ) : status === "sent" ? (
                      <>
                        <CheckCircle2 className="size-5" /> Message sent
                      </>
                    ) : (
                      <>
                        Send Message <Send className="size-5" />
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {status === "sent" && (
                      <motion.p
                        role="status"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-[0.85rem] font-medium text-emerald-700"
                      >
                        Thanks — your message is in. I&apos;ll reply to your inbox within one business day.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        role="status"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[0.85rem] font-medium text-red-700"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
