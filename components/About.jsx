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

const MoonCanvas = dynamic(() => import("./canvases/MoonCanvas"), {
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
        className="w-full h-screen opacity-0 mt-[5vh] ml-[-20%] relative flex items-center justify-center"
        style={{ opacity: opacity, marginLeft: marginLeft }}
      >
        <MoonCanvas />
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
    <div ref={container} className="relative z-20 ">
      <div
        className="inline-block pl-[10%] "
        // onMouseOver={() => {
        //   setSelectedProject(i);
        // }}
        // onMouseLeave={() => {
        //   setSelectedProject(null);
        // }}
      >
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
  );
}
