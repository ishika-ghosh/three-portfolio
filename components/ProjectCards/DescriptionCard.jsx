"use client";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/Provider";
import { GoArrowUpRight } from "react-icons/go";
function DescriptionCard({ title, des, id, iconLists, imageUrl }) {
  const targetDiv = useRef(null);
  const isInView = useInView(targetDiv, { margin: "-50% 0px -50% 0px" });
  const { setCardId, cardId } = useContext(GlobalContext);
  useEffect(() => {
    if (isInView) setCardId(id);
    if (!isInView && cardId === id) setCardId(null);
  }, [isInView, id, cardId]);
  const colorClass = "md:ml-0 ml-10 py-16 font-bold transition-colors ";
  const borderClass =
    "flex justify-center items-center border-[0.4px] px-3 py-2 rounded-lg cursor-pointer";
  return (
    <div
      className={
        isInView ? colorClass + "text-tertiary" : colorClass + "text-[#383838] "
      }
      ref={targetDiv}
    >
      <div className="md:hidden flex items-center justify-center mb-10">
        <img src={imageUrl} alt={id} className="w-full h-auto object-contain" />
      </div>
      <p className="md:text-4xl text-2xl ">{title}</p>
      <p className="mt-5 md:pr-10 font-thin ">{des}</p>
      <div className="flex items-center justify-between mt-7 mb-3 mr-2 md:pr-10">
        <div
          className={
            !isInView
              ? "flex items-center opacity-0"
              : "flex items-center opacity-100"
          }
        >
          {iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img src={icon} alt="icon5" className="p-2" />
            </div>
          ))}
        </div>

        <div
          className={
            isInView
              ? borderClass + " border-tertiary"
              : borderClass + " border-[#383838]"
          }
        >
          <p className="flex lg:text-lg md:text-xs text-[9px] text-purple pr-2 font-medium">
            Check Live Site
          </p>
          <GoArrowUpRight
            className="ms-2"
            color={isInView ? "#ede6da" : "#383838"}
            size={24}
          />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
