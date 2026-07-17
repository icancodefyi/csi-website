import Hero from "@/components/hero";
import Events from "@/components/events";
import About from "@/components/about";
import Benefits from "@/components/benefits";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <About />
      <Benefits />
      <Gallery />
    </main>
  );
}
