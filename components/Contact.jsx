"use client";
import SectionWrapper from "./../hoc/SectionWrapper";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";
import axios from "axios";
import { useState } from "react";
const Alien = dynamic(() => import("./canvases/Alien"), {
  ssr: false,
});
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://portfolio-backend-ishika-ghosh.vercel.app/",
        formData
      );
      console.log(data);
      alert(data);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Some Thing went wrong");
    }
    setLoading(false);
  };
  return (
    <>
      <motion.h1
        className={
          "text-secondary md:text-5xl text-lg mx-auto text-center mt-[4rem]"
        }
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        Let&apos;s get{"  "}
        <span
          className={"text_gradient md:text-[5vw] text-3xl ml-3 font-extrabold"}
        >
          In Touch
        </span>
      </motion.h1>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse lg:gap-10 overflow-hidden`}
      >
        <motion.div
          className="basis-2/3 py-8 md:px-10 px-3 rounded-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <form
            className="mt-8 flex flex-col gap-8 xl:ml-10"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-[#1e243e] py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium lg:w-[80%] w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Your email</span>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-[#1e243e] py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium lg:w-[80%] w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">
                Your Message
              </span>
              <textarea
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-[#1e243e] py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium lg:w-[80%] w-full"
              />
            </label>

            <MagicButton
              title={loading ? "Sending..." : "Let's get in touch"}
              icon={!loading && <FaLocationArrow />}
              position="right"
              type="submit"
            />
          </form>
        </motion.div>
        <div className="relative lg:basis-1/3 xl:h-auto md:h-[550px] h-[350px] xl:ml-[-10%]">
          <Alien />
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Contact, "contact");
