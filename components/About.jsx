"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./../hoc/SectionWrapper";
import { data } from "./data";
import dynamic from "next/dynamic";
import { technologies } from "./data";
const MoonCanvas = dynamic(() => import("./canvases/MoonCanvas"), {
  ssr: false,
});
const BallCanvas = dynamic(() => import("./canvases/BallCanvas"), {
  ssr: false,
});

const About = () => {
  const target1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target1,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const marginLeft = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["-20%", "0%", "0%"]
  );
  return (
    <div id="about" className="h-auto w-full relative">
      <motion.div
        ref={target1}
        className="w-full md:h-screen h-[120vh] opacity-0 md:mt-[5vh] mt-0 ml-[-20%] relative flex items-center justify-center"
        style={{ opacity: opacity, marginLeft: marginLeft }}
      >
        <div className="md:flex hidden h-full w-full">
          <MoonCanvas />
        </div>
        <div className="absolute z-10 w-full top-20 left-0 brightness-90">
          <div className="w-full ">
            {data.map((project, i) => {
              return (
                <Title
                  key={i}
                  data={{ ...project, i }}

                  // setSelectedProject={setSelectedProject}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.h1
        className={
          "text-secondary md:text-5xl text-lg mx-auto text-center mt-[4rem]"
        }
      >
        Know about{"  "}
        <span
          className={"text_gradient md:text-[5vw] text-3xl ml-3 font-extrabold"}
        >
          My Skills
        </span>
      </motion.h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

function Title({ data }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>
      <div ref={container} className="relative z-20 ">
        <div className="inline-block md:pl-[10%] pl-0">
          <motion.p
            style={{ clipPath: clip }}
            className={
              i === 0 ? "title text_gradient about-heading" : "title about-me"
            }
          >
            {title}
          </motion.p>
          <p className={i == 0 ? "title about-heading" : "title about-me"}>
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
