import About from "@/components/about";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
    </main>
  );
}
