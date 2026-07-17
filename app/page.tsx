import Opening from "@/components/opening";
import Manifesto from "@/components/manifesto";
import Timeline from "@/components/timeline";
import PeopleWall from "@/components/people-wall";
import Events from "@/components/events";
import Projects from "@/components/projects";
import Life from "@/components/life";
import Yearbook from "@/components/yearbook";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Opening />
      <Manifesto />
      <Timeline />
      <PeopleWall />
      <Events />
      <Projects />
      <Life />
      <Yearbook />
      <FinalCTA />
      <Footer />
    </main>
  );
}
