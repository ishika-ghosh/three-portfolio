"use client";
import { socialMedia } from "./data";
import SectionWrapper from "./../hoc/SectionWrapper";

const Footer = () => {
  return (
    <footer className="w-full sm:px-24 px-14 pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ishika Ghosh
        </p>

        <div className="flex items-center md:gap-3 gap-6 md:mt-0 mb-2">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <info.icon />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
