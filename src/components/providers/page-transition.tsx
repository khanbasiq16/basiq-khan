"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const LOADER_HOLD_MS = 1400;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, LOADER_HOLD_MS);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            aria-hidden
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] grid origin-top place-items-center bg-brand-gradient"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid size-24 place-items-center rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(17,24,39,0.45)]"
            >
              <span
                aria-hidden
                className="absolute -inset-1.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
              <Image src="/logo.png" alt="" width={627} height={469} priority className="h-9 w-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: LOADER_HOLD_MS / 1000 + 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
