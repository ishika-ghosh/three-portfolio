import React from "react";
import { motion } from "framer-motion";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <motion.button
      className="relative inline-flex h-12 w-full md:w-[13rem] md:mt-5 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-tertiary backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </motion.button>
  );
};

export default MagicButton;
