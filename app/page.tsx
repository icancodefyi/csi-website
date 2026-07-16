import HeroSection from "@/components/hero-section";
import WhyJoinCSI from "@/components/why-join-csi";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinCSI />
      <Testimonials />
      <Footer />
    </main>
  );
}
