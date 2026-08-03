"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";

export function WhatsAppButton() {
  const digits = site.phone.replace(/[^\d]/g, "");

  return (
    <motion.a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-6 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 ease-premium hover:scale-110"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
      <FaWhatsapp className="relative size-7" />
    </motion.a>
  );
}
