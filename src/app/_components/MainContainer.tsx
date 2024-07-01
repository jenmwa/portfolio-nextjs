import Image from "next/image";
import computer from "/public/imgs/svg_computer.svg";
import hello from "/public/imgs/hand-shake-svgrepo-com.svg";
import spaceship from "/public/imgs/rocket-ship-svgrepo-com.svg";
import { SVGAttributes } from "react";

interface IMainContainerProps {
  heading: string;
  text: string;
}

export const MainContainer = ({ heading, text }: IMainContainerProps) => {
  return (
    <>
      <section className="flex  ">
        <div className="hidden xl:block gap-10">
          <svg
            className="w-44 -ml-28 -mt-12 absolute z-10"
            fill={"orange"}
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>

          <svg
            className="w-[296px] xl:w-[368px] -ml-72 mt-48 -rotate-45 absolute z-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#90BE6D"
            xmlns="http://www.w3.org/2000/svg"
            // style={{ width: "296px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
            />
          </svg>
        </div>
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
