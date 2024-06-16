import About from "@/components/About";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="relative bg-transparent w-full ">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
    </main>
  );
}
