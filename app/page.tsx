import Opening from "@/components/opening";
import Story from "@/components/story";
import CommunityWall from "@/components/community-wall";
import EventsShowcase from "@/components/events-showcase";
import ProjectsReveal from "@/components/projects-reveal";
import NumbersImpact from "@/components/numbers-impact";
import GalleryPlayful from "@/components/gallery-playful";
import Finale from "@/components/finale";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Opening />
      <Story />
      <CommunityWall />
      <EventsShowcase />
      <ProjectsReveal />
      <NumbersImpact />
      <GalleryPlayful />
      <Finale />
      <Footer />
    </main>
  );
}
