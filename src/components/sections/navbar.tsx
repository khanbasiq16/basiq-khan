"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  PenTool,
  Plug,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services, site, type Service } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks
  .filter((l) => l.href.includes("#"))
  .map((l) => l.href.split("#")[1]);

const serviceIcons: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  LayoutDashboard,
  Database,
  Plug,
  Sparkles,
  Gauge,
  LifeBuoy,
};

const serviceTones: Record<Service["tone"], string> = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  sky: "bg-sky-50 text-sky-600",
  indigo: "bg-indigo-50 text-indigo-600",
  rose: "bg-rose-50 text-rose-600",
  amber: "bg-amber-50 text-amber-600",
  emerald: "bg-emerald-50 text-emerald-600",
  fuchsia: "bg-fuchsia-50 text-fuchsia-600",
  cyan: "bg-cyan-50 text-cyan-600",
  orange: "bg-orange-50 text-orange-600",
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = useActiveSection(sectionIds);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary"
            className={cn(
              "relative flex h-[60px] items-center justify-between gap-6 rounded-2xl px-4 transition-all duration-500 ease-premium sm:px-5",
              scrolled
                ? "glass shadow-glass"
                : "border border-transparent bg-transparent"
            )}
          >
            <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} — home`}>
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={627}
                height={469}
                priority
                className="h-9 w-auto"
              />
              <span className="hidden leading-none sm:block">
                <span className="block text-[0.9rem] font-extrabold uppercase tracking-[0.02em] text-ink">
                  {site.name}
                </span>
                <span className="mt-1 block text-[0.68rem] font-medium text-ink-muted">{site.role}</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-0.5 xl:flex">
              {navLinks.map((link) => {
                const hashIndex = link.href.indexOf("#");
                const isAnchor = hashIndex !== -1;
                const hash = isAnchor ? link.href.slice(hashIndex + 1) : null;
                const isActive = isAnchor
                  ? pathname === "/" && active === hash
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
                const isServices = link.href === "/services";
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={isServices ? openServices : undefined}
                    onMouseLeave={isServices ? closeServices : undefined}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      aria-expanded={isServices ? servicesOpen : undefined}
                      onFocus={isServices ? openServices : undefined}
                      className={cn(
                        "relative block rounded-full px-3.5 py-2 text-[0.85rem] font-medium transition-colors duration-300",
                        isActive ? "text-brand-600" : "text-ink-muted hover:text-ink"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  className="absolute inset-x-0 top-full z-50 mx-auto mt-3 w-[640px] max-w-[calc(100vw-2.5rem)] rounded-3xl border border-hairline bg-white p-3 shadow-card"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => {
                      const Icon = serviceIcons[service.icon] ?? Code2;
                      return (
                        <Link
                          key={service.title}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface-muted"
                        >
                          <span
                            className={cn(
                              "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                              serviceTones[service.tone]
                            )}
                          >
                            <Icon className="size-4.5" strokeWidth={2} />
                          </span>
                          <span>
                            <span className="block text-[0.85rem] font-semibold text-ink">
                              {service.title}
                            </span>
                            <span className="mt-0.5 block text-[0.75rem] leading-snug text-ink-muted">
                              {service.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="mt-2 flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3 text-[0.85rem] font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                  >
                    View all services
                    <ArrowUpRight className="size-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-2">
              <Button asChild size="sm" magnetic={5} className="hidden sm:inline-flex">
                <Link href="/contact">
                  Book a Call
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-10 place-items-center rounded-full border border-hairline bg-white text-ink transition-colors hover:border-brand-300 hover:text-brand-600 xl:hidden"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm xl:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-4 mt-[86px] rounded-3xl border border-hairline bg-white p-3 shadow-card"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-muted hover:text-brand-600"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4 text-ink-faint" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button asChild size="md" className="mt-2 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
