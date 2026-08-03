import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageTransition } from "@/components/providers/page-transition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </PageTransition>
  );
}
