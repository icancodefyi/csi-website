import HeroSection from "@/components/hero-section";
import WhyJoinCSI from "@/components/why-join-csi";
import EventsSection from "@/components/events-section";
import GallerySection from "@/components/gallery-section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinCSI />
      <EventsSection />
      <GallerySection />
      <Testimonials />
      <Footer />
    </main>
  );
}
