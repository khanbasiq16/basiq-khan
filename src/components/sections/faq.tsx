"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { faqs as defaultFaqs } from "@/data/site";
import { viewportOnce } from "@/lib/utils";

interface FAQProps {
  items?: readonly { question: string; answer: string }[];
}

export function FAQ({ items = defaultFaqs }: FAQProps) {
  const faqs = items;
  return (
    <section id="faq" className="section-shell bg-white">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <Reveal direction="up">
              <p className="eyebrow mb-4">Frequently asked questions</p>
            </Reveal>
            <h2 className="mb-10 font-display text-display-lg text-ink balance">
              <TextReveal text="Questions Clients Ask" />
            </h2>

            <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-8 text-[0.92rem] text-ink-muted">
                Still unsure about something?{" "}
                <Link href="/contact" className="font-semibold text-brand-500 underline-offset-4 hover:underline">
                  Ask me directly
                </Link>{" "}
                — I answer every message myself.
              </p>
            </Reveal>
          </div>

          {/* signature illustration */}
          <Reveal direction="left" delay={0.1} className="relative hidden lg:block">
            <div aria-hidden className="relative mx-auto aspect-[1377/1018] w-full max-w-[460px]">
              <div className="absolute inset-8 rounded-full bg-brand-100/50 blur-3xl" />
              <Image
                src="/quesitonmark.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1536px) 460px, 30vw"
                quality={95}
                className="relative object-contain"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline" size="md" magnetic={6}>
                <Link href="/contact">Read the full FAQ</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
