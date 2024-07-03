"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagicButton from "./ui/MagicButton";
import dynamic from "next/dynamic";
import SectionWrapper from "./../hoc/SectionWrapper";
import { FaLocationArrow } from "react-icons/fa6";

const EarthCanvas = dynamic(() => import("./canvases/EarthCanvas"), {
  ssr: false,
});

function Hero() {
  const target = useRef(null);
  const heroSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: heroSection,
    offset: ["end end", "end start"],
  });
  const divOpacity = useTransform(
    scrollYProgress2,
    [0, 0.5, 0.7, 1],
    [1, 1, 1, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.8, 0]
  );
  const marginTop = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.8],
    ["70vh", "70vh", "25vh", "0vh"]
  );
  const marginLeft = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 1],
    ["0%", "0%", "20%", "60%", "110%"]
  );

  return (
    <div className="w-full flex flex-col overflow-hidden md:h-[158vh] h-screen">
      <motion.div
        ref={heroSection}
        style={{ opacity: divOpacity }}
        className="md:fixed top-0 left-0 w-full xl:mt-[200px] md:mt-[160px] mt-[20vh] z-10 flex flex-col justify-center items-center relative"
      >
        <motion.h1
          className={
            "text-secondary md:text-5xl text-lg mb-2 mx-auto text-center mt-[2rem] md:px-0 px-2 "
          }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          <span className="md:inline hidden">Hi there!I&apos;m{"  "}</span>
          <span
            className={
              "text_gradient md:text-[5vw] text-3xl ml-3 font-extrabold"
            }
          >
            Purnadip Manna
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="mx-auto text-center mt-7 text-tertiary md:font-light md:text-lg text-xs md:mb-0 mb-5 font-extralight"
        >
          I&apos;m a Software Engineer based in Kolkata, India.
          <br /> thrive on designing robust and scalable application
          architectures,
        </motion.p>
        <a href="#work">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>
      <motion.div
        ref={target}
        className="w-full z-[1] h-[200vh] fixed md:flex items-start justify-center top-0 left-0 overflow-visible hidden "
      >
        <motion.div
          initial={{ opacity: 0, marginTop: "100vh" }}
          animate={{ opacity: 1, marginTop: "70vh" }}
          transition={{ duration: 3 }}
          className="w-full z-[1] h-screen opacity-[1] align-center overflow-visible"
          style={{
            opacity: opacity,
            marginTop: marginTop,
            marginLeft: marginLeft,
            scrollBehavior: "smooth",
          }}
        >
          <EarthCanvas />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Hero, "home");
