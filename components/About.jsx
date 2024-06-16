"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { fadeIn, textVariant, zoomIn } from "@/utils/motion";
import SectionWrapper from "./../hoc/SectionWrapper";
import MoonCanvas from "./canvases/MoonCanvas";

const About = () => {
  return (
    <div id="about" className="h-screen w-full relative ">
      <motion.h1
        className="text-center font-light text-2xl"
        variants={textVariant(0.25)}
      >
        Introduction <span className="heading text_gradient">About Me</span>
      </motion.h1>
      <motion.div
        variants={fadeIn("left", "spring", 0.05, 0.25)}
        className="w-full h-[80vh] brightness-75 opacity-0"
        whileInView={{ opacity: 1 }}
      >
        <MoonCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
