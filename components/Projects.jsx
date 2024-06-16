// "use client";
// import dynamic from "next/dynamic";
// import SmoothScroll from "./SmoothScroll";

// const MoonCanvas = dynamic(() => import("./canvases/MoonCanvas"), {
//   ssr: false,
// });

// function Projects() {
//   return (
//     <SmoothScroll>
//       <div className="w-full relative pt-12 mb-[100vh] h-[60vw] flex items-center justify-center">
//         <MoonCanvas />
//       </div>
//     </SmoothScroll>
//   );
// }

// export default Projects;

"use client";

import { projects } from "./data";
import { PinContainer } from "./ui/Pin";
import MoonCanvas from "./canvases/MoonCanvas";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "./../hoc/SectionWrapper";

const RecentProjects = () => {
  return (
    <div className="py-20 relative" id="projects">
      <motion.h1 className="heading" variants={textVariant(0.25)}>
        A small selection of{" "}
        <span className="text_gradient">recent projects</span>
      </motion.h1>
      {/* <div className="w-full relative pt-12 mb-[100vh] h-[60vw] flex items-center justify-center brightness-50">
        <MoonCanvas />{" "}
      </div> */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 pt-10 z-10">
        {projects.map((item, i) => (
          <Card item={item} key={item.id} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(RecentProjects, "projects");

const Card = ({ item, index }) => {
  return (
    <motion.div
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] px-10 z-10"
      key={item.id}
      variants={fadeIn("right", "spring", 0.7 * index, 0.9)}
    >
      <PinContainer
        title={item.title.split(" ")[0]}
        href="https://twitter.com/mannupaaji"
      >
        <div className="relative flex items-center justify-center sm:w-96 w-[60vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>
          <img src={item?.img} alt="cover" className="z-10 absolute bottom-0" />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-2">
          {item.title}
        </h1>

        <p
          className="lg:text-lg font-light text-sm line-clamp-2 px-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {/* {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))} */}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple pr-2">
              Check Live Site
            </p>
            {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
};
