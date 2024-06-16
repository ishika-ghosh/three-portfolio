"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import SectionWrapper from "./../hoc/SectionWrapper";

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
    ["65vh", "65vh", "25vh", "0vh"]
  );
  const marginLeft = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 1],
    ["0%", "0%", "20%", "60%", "110%"]
  );

  return (
    <div className="w-full flex flex-col overflow-hidden h-[158vh]">
      <motion.div
        ref={heroSection}
        style={{ opacity: divOpacity }}
        className="fixed left-1/2 -translate-x-1/2 xl:mt-[200px] mt-[250px] z-10"
      >
        <motion.h1
          className={
            "text-secondary md:text-4xl text-lg mb-2 flex flex-col items-center xl:flex-row xl:items-end"
          }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          Hi there! I'm{"  "}
          <span
            className={"text_gradient md:text-6xl text-3xl ml-3 font-extrabold"}
          >
            Ishika Ghosh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="mx-auto text-center mt-7 text-secondary font-light md:text-lg text-xs"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Adipisci ducimus tempora tempore molestiae non ipsam
        </motion.p>
      </motion.div>
      <motion.div
        ref={target}
        className="w-full z-[1] h-[200vh] fixed flex items-start justify-center top-0 left-0 overflow-visible"
      >
        <motion.div
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
