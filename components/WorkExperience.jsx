"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "./data";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "./../hoc/SectionWrapper";
import { Button } from "./ui/MovingBoeder";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full visible">
          {/* <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          /> */}
        </div>
      }
    >
      <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full h-full"
      >
        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
          {/* <img
            src={card.thumbnail}
            alt={card.thumbnail}
            className="lg:w-32 md:w-20 w-16"
          /> */}
          <div className="lg:ms-5">
            <h1 className="text-start text-xl md:text-2xl font-bold">
              {experience.title}
            </h1>
            {/* <p className="text-start text-white-100 mt-3 font-semibold">
              {card.desc}
            </p> */}
          </div>
        </div>
      </Button>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <>
      <motion.h1 className="heading" variants={textVariant(0.25)}>
        What I have done so far{" "}
        <span className="text_gradient">Work Experience.</span>
      </motion.h1>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
