import Image from "next/image";
import computer from "/public/imgs/svg_computer.svg";
import hello from "/public/imgs/hand-shake-svgrepo-com.svg";
import spaceship from "/public/imgs/rocket-ship-svgrepo-com.svg";
import { SVGAttributes } from "react";

interface IMainContainerProps {
  heading: string;
  text: string;
}

export const Container = ({ heading, text }: IMainContainerProps) => {
  return (
    <>
      <section className="flex mt-8 md:mt-0  ">
        <div className="relative p-4 bg-white bg-opacity-75 border-4 rounded md:max-w-screen-md xl:max-w-screen-lg overflow-y-auto max-h-full">
          <h1 className="text-8xl">{heading}</h1>
          <p className="font-paragraph">
            {text}
            <br></br>
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br>
          </p>
        </div>
      </section>
    </>
  );
};
