import About from "@/components/About";
import Contact from "@/components/Contact";
import { Provider } from "@/components/Context/Provider";
import DemoProject from "@/components/DemoProject";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

import { navItems } from "@/components/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <Provider>
      <main className="relative bg-transparent w-full ">
        {/* <Nav /> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <WorkExperience />
        <DemoProject />
        <Contact />
      </main>
    </Provider>
  );
}
