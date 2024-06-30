"use client";
import { motion } from "framer-motion";
import { experiences } from "./data";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "./../hoc/SectionWrapper";
import { Button } from "./ui/MovingBoeder";
import { Meteors } from "./ui/Meteors";

const WorkExperience = () => {
  return (
    <>
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
      <div className="mt-20 px-20">
        {experiences.map((experience, i) => (
          <ExperienceCard {...experience} i={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
const ExperienceCard = ({ title, i, company_name, date, points }) => {
  return (
    <motion.div
      className={i % 2 ? "mt-[10rem] w-full lg:ml-[52%]" : "mt-[10rem] w-full"}
      key={i}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className=" w-[45%] relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-800 to-teal-500 transform scale-[0.80] bg-tranparent rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-950 border border-gray-900  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-2xl text-tertiary mb-2 relative z-50">
            {title}
          </h1>
          <p className="flex w-full mb-2 items-center justify-between font-semibold text-lg text-tertiary">
            <span>{company_name}</span>{" "}
            <span className="font-light text-base">{date}</span>
          </p>

          <p className="font-light text-base text-secondary mb-4 relative z-50">
            {points}
          </p>

          <Meteors number={20} />
        </div>
      </div>
    </motion.div>
  );
};
