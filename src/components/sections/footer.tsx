"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { navLinks, services, site } from "@/data/site";
import { cn } from "@/lib/utils";

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "Instagram", href: site.socials.instagram, Icon: FaInstagram },
  { label: "Facebook", href: site.socials.facebook, Icon: FaFacebookF },
];

export function Footer() {
  const [visible, setVisible] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-hairline bg-white pt-20">
      <div className="container">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* brand */}
          <Reveal direction="up" className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
              <Image src="/logo.png" alt={`${site.name} logo`} width={627} height={469} className="h-10 w-auto" />
              <span className="leading-none">
                <span className="block text-[0.95rem] font-extrabold uppercase text-ink">{site.name}</span>
                <span className="mt-1 block text-[0.7rem] text-ink-muted">{site.role}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-ink-muted pretty">
              I build modern websites and web applications that help businesses grow online and reach
              more customers.
            </p>
            <ul className="mt-6 flex items-center gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-xl border border-hairline bg-white text-ink-muted transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
                  >
                    <Icon className="size-[15px]" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* quick links */}
          <Reveal direction="up" delay={0.06}>
            <h3 className="text-[0.95rem] font-bold text-ink">Quick Links</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block text-[0.88rem] text-ink-muted transition-all duration-300 hover:translate-x-1 hover:text-brand-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* services */}
          <Reveal direction="up" delay={0.12}>
            <h3 className="text-[0.95rem] font-bold text-ink">Services</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block text-[0.88rem] text-ink-muted transition-all duration-300 hover:translate-x-1 hover:text-brand-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* contact */}
          <Reveal direction="up" delay={0.18}>
            <h3 className="text-[0.95rem] font-bold text-ink">Contact Info</h3>
            <ul className="mt-5 flex flex-col gap-3.5 text-[0.88rem] text-ink-muted">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 hover:text-brand-600">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-start gap-2.5 hover:text-brand-600">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" /> {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" /> {site.location}
              </li>
            </ul>
          </Reveal>

          {/* newsletter */}
          <Reveal direction="up" delay={0.24}>
            <h3 className="text-[0.95rem] font-bold text-ink">Newsletter</h3>
            <p className="mt-5 text-[0.88rem] leading-relaxed text-ink-muted pretty">
              One short email a month: what I shipped, what broke and what I learned fixing it.
            </p>
            <form
              className="mt-5 flex flex-col gap-2.5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                (e.currentTarget as HTMLFormElement).reset();
                window.setTimeout(() => setSubscribed(false), 4000);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[0.88rem] outline-none transition-all duration-300 placeholder:text-ink-faint focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10"
              />
              <Button type="submit" size="md" className="w-full">
                {subscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </form>
            {subscribed && (
              <p role="status" className="mt-3 text-[0.8rem] font-medium text-emerald-600">
                You&apos;re on the list. Check your inbox to confirm.
              </p>
            )}
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline py-7 text-[0.82rem] text-ink-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a href="/privacy" className="transition-colors hover:text-brand-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="transition-colors hover:text-brand-600">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-brand-gradient text-white shadow-lift transition-all duration-500 ease-premium hover:scale-110",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp className="size-5" />
      </button>
    </footer>
  );
}
