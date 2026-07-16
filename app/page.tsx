import Hero from "@/components/hero";
import WhoWeAre from "@/components/who-we-are";
import Journey from "@/components/journey";
import EventsShowcase from "@/components/events";
import Community from "@/components/community";
import Projects from "@/components/projects";
import Gallery from "@/components/gallery";
import Numbers from "@/components/numbers";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Journey />
      <EventsShowcase />
      <Community />
      <Projects />
      <Gallery />
      <Numbers />
      <CTA />
      <Footer />
    </main>
  );
}
