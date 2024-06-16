"use client";

import Link from "next/link";
import { namMenu } from "./data";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.div
      className="fixed top-0 w-full flex items-center justify-center py-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    >
      <HoverBorderGradient>
        {namMenu.map((menu) => (
          <Link
            key={menu.name}
            href={menu.path}
            className="mx-3 text-secondary"
          >
            {menu.name}
          </Link>
        ))}
      </HoverBorderGradient>
    </motion.div>
  );
}

export default Nav;
