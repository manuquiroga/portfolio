import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Work from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <Work />
      <Projects />
    </main>
  );
}
