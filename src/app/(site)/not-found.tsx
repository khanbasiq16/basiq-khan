import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell bg-white">
      <div className="container flex flex-col items-center text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-display-lg text-ink balance">
          Page Not <span className="text-brand-500">Found</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted pretty">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" magnetic={8}>
            <Link href="/">
              <Home className="size-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" magnetic={6}>
            <Link href="/services">
              Browse Services
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
