"use client";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/Provider";
function DescriptionCard({ title, des, id }) {
  const targetDiv = useRef(null);
  const isInView = useInView(targetDiv, { margin: "-50% 0px -50% 0px" });
  const { setCardId, cardId } = useContext(GlobalContext);
  useEffect(() => {
    if (isInView) setCardId(id);
    if (!isInView && cardId === id) setCardId(null);
  }, [isInView, id, cardId]);
  const colorClass = "py-16 font-bold transition-colors ";
  return (
    <div
      className={
        isInView
          ? colorClass + "text-secondary"
          : colorClass + "text-[#383838] "
      }
      ref={targetDiv}
    >
      <p className="text-4xl ">{title}</p>
      <p className="mt-5 pr-10 font-thin ">{des}</p>
      <div className="flex items-center justify-between mt-7 mb-3 mr-2 pr-10">
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
    </div>
  );
}

export default DescriptionCard;
