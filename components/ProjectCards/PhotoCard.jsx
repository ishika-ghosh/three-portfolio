"use client";
import { useContext } from "react";
import classNames from "classnames";
import { Button } from "../ui/MovingBoeder";
import { GlobalContext } from "../Context/Provider";
import { FaGithub } from "react-icons/fa";

function PhotoCard({ children, id, color }) {
  const { cardId } = useContext(GlobalContext);
  const classes = "absolute inset-0 h-full w-full transition-opacity opacity-0";

  const bgClasses = classNames({
    "w-[200px] h-[200px] absolute -top-[30%] -right-[20%] -z-10 rounded-full blur-3xl opacity-0": true,
    "opacity-100": cardId === id,
  });
  const iconClasses = classNames({
    "absolute bottom-5 right-5 cursor-pointer bg-black p-2 rounded-full opacity-0": true,
    "opacity-100": cardId === id,
  });
  return (
    <>
      <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        containerClassName={
          cardId === id
            ? classes + " md:opacity-100"
            : classes + " md:opacity-0"
        }
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full h-full"
      >
        {children}
      </Button>
      <div className={iconClasses}>
        <a
          href="https://react-icons.github.io/react-icons/search/#q=github"
          target="_blank"
        >
          <FaGithub color={"white"} size={24} />
        </a>
      </div>
      <div className={bgClasses} style={{ background: color }} />
    </>
  );
}

export default PhotoCard;

export const FirstCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img
          className="brightness-95 w-full h-full object-contain"
          src={imageUrl}
          alt="first"
        />
      </div>
    </PhotoCard>
  );
};
export const SecondCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img
          className="brightness-95 w-full h-full object-contain "
          src={imageUrl}
          alt="first"
        />
      </div>
    </PhotoCard>
  );
};
export const ThirdCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img
          className="brightness-95 w-full h-full object-contain"
          src={imageUrl}
          alt="first"
        />
      </div>
    </PhotoCard>
  );
};
export const FourthCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden ">
        <img className="brightness-85" src={imageUrl} alt="first" />
      </div>
    </PhotoCard>
  );
};
export const FifthCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden ">
        <img className="brightness-85" src={imageUrl} alt="first" />
      </div>
    </PhotoCard>
  );
};
export const SixthCard = ({ id, color, imageUrl }) => {
  return (
    <PhotoCard id={id} color={color}>
      <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden ">
        <img className="brightness-85" src={imageUrl} alt="first" />
      </div>
    </PhotoCard>
  );
};
