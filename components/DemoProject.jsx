"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import { motion } from "framer-motion";
import { projects } from "./data";
import DescriptionCard from "./ProjectCards/DescriptionCard";

const DemoProject = () => {
  return (
    <div>
      <motion.h1
        className={
          "text-secondary md:text-5xl text-lg mb-2 mx-auto text-center mt-[4rem]"
        }
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        Know about my{"  "}
        <span
          className={"text_gradient md:text-[5vw] text-3xl ml-3 font-extrabold"}
        >
          Projects
        </span>
      </motion.h1>
      <div className="w-full flex mt-20 gap-20 items-start relative">
        <div className="w-full pt-[40vh] pb-[20vh]">
          <ul>
            {projects.map((project, i) => (
              <li key={project.id}>
                <DescriptionCard {...project} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="h-[50vh] w-[80%] mx-auto relative">
            {projects.map((project, i) => (
              <project.card
                key={i}
                id={project.id}
                color={project.color}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(DemoProject, "projects");
