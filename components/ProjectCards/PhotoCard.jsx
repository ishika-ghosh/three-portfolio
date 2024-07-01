"use client";
import { useContext } from "react";
import classNames from "classnames";
import { Button } from "../ui/MovingBoeder";
import { GlobalContext } from "../Context/Provider";
import { FaGithub } from "react-icons/fa";

function PhotoCard({ children, id, color }) {
  const { cardId } = useContext(GlobalContext);
  const classes = "absolute inset-0 h-full w-full transition-opacity";

  const bgClasses = classNames({
    "w-[200px] h-[200px] absolute -top-[30%] -right-[20%] -z-10 rounded-full blur-3xl opacity-0": true,
    "opacity-100": cardId === id,
  });
  const iconClasses = classNames({
    "absolute bottom-5 right-5 cursor-pointer opacity-0": true,
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
          cardId === id ? classes + " opacity-100" : classes + " opacity-0"
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

export const FirstCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      First
    </PhotoCard>
  );
};
export const SecondCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      Second
    </PhotoCard>
  );
};
export const ThirdCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      Third
    </PhotoCard>
  );
};
export const FourthCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      Fourth
    </PhotoCard>
  );
};
export const FifthCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      Fifth
    </PhotoCard>
  );
};
export const SixthCard = ({ id, color }) => {
  return (
    <PhotoCard id={id} color={color}>
      Sixth
    </PhotoCard>
  );
};
