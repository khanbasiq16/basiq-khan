import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}, a ${site.role.toLowerCase()} with 2+ years of experience building fast, modern websites and web applications.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CTA />
    </>
  );
}
