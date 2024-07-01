"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "./data";
import SectionWrapper from "./../hoc/SectionWrapper";
import { Meteors } from "./ui/Meteors";
import dynamic from "next/dynamic";
import { fadeIn, zoomIn } from "@/utils/motion";
const Astronaut = dynamic(() => import("./canvases/Astronaut"), {
  ssr: false,
});

const WorkExperience = () => {
  const experience = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experience,
    offset: ["start end", "end start"],
  });
  const marginLeft = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["100%", "55%", "0%", "55%", "0%", "0%"]
  );
  const marginTop = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.6, 0.8],
    ["15vh", "75vh", "143vh", "200vh"]
  );
  return (
    <div className="relative overflow-x-hidden">
      <motion.h1
        className={
          "text-secondary md:text-5xl text-lg mb-2 mx-auto text-center mt-[2rem]"
        }
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        What I have done so far{" "}
        <span
          className={"text_gradient md:text-[5vw] text-3xl ml-3 font-extrabold"}
        >
          Work Experience
        </span>
      </motion.h1>
      <motion.div
        className="absolute h-full bg-transparent w-full top-25 left-0"
        ref={experience}
      >
        <motion.div
          className="w-[45%] h-[50vh] mt-[15vh]"
          style={{ marginLeft: marginLeft, marginTop: marginTop }}
        >
          <Astronaut />
        </motion.div>
      </motion.div>
      <div className="mt-20 px-20">
        {experiences.map((experience, i) => (
          <ExperienceCard {...experience} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WorkExperience, "work");
const ExperienceCard = ({ title, i, company_name, date, points, tech }) => {
  return (
    <motion.div
      className={i % 2 ? "mt-[10rem] w-full lg:ml-[55%]" : "mt-[10rem] w-full"}
      key={i}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className=" w-[45%] relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-800 to-teal-500 transform scale-[0.80] bg-tranparent rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-950 border border-gray-900 px-10 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-2xl text-tertiary mb-2 relative z-50">
            {title}
          </h1>
          <p className="flex w-full mb-2 items-center justify-between font-semibold text-lg text-tertiary">
            <span>{company_name}</span>{" "}
            <span className="font-light text-base">{date}</span>
          </p>

          <p className="font-light text-base text-secondary relative z-50 mt-2">
            {points}
          </p>
          <div className="flex items-center md:gap-2 gap-4 flex-wrap mt-10">
            {tech.map((tech, i) => (
              <div
                key={i}
                className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-[0.2px] border-tertiary rounded-2xl px-3 py-2 text-tertiary"
              >
                {tech}
              </div>
            ))}
          </div>
          <Meteors number={10} />
        </div>
      </div>
    </motion.div>
  );
};
