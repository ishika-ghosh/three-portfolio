"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { textVariant, zoomIn } from "@/utils/motion";
import SectionWrapper from "./../hoc/SectionWrapper";
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
    <div id="about" className="h-[200vh] w-full relative">
      <motion.h1
        className="text-center font-light text-2xl"
        variants={textVariant(0.25)}
      >
        Introduction <span className="heading text_gradient">About Me</span>
      </motion.h1>

      <motion.div
        ref={target1}
        className="w-full h-[80vh] brightness-90 opacity-0 mt-[5vh] ml-[-20%]"
        style={{ opacity: opacity, marginLeft: marginLeft }}
      >
        <MoonCanvas />
        <motion.div className="absolute top-0 left-0 w-full z-20 h-[80vh] flex items-center justify-center">
          <div
            className="h-[85vh] w-[85vh] rounded-full border-[1px] border-secondary "
            style={{ opacity: opacity, marginLeft: marginLeft }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
