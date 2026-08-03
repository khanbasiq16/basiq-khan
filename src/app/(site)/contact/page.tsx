import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} to discuss your website or web application project — replies within one business day.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
