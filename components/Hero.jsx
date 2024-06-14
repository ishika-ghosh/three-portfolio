"use client";
import EarthCanvas from "./canvases/EarthCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Hero() {
  useGSAP(() => {
    const t1 = gsap.timeline({ defaults: { duration: 4 } });
    t1.fromTo("#earth", { y: 50 }, { y: 0 });
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto xl:mt-[200px] mt-[250px] ">
        <motion.h1
          className={"text-white md:text-4xl text-lg mb-2 font-bold"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          Hi there! I'm{" "}
          <span className={"text_gradient md:text-6xl text-3xl"}>
            Ishika Ghosh
          </span>
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="mx-auto text-center mt-7"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /> Adipisci ducimus tempora tempore molestiae non ipsam
      </motion.p>
      <div
        className="w-full h-[53vh] overflow-hidden flex items-center justify-center"
        id="earth"
      >
        <EarthCanvas />
      </div>
    </div>
  );
}

export default Hero;
