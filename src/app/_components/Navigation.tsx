import { LiNavElement } from "./LiNavElement";
import Image from "next/image";
import dark from "/public/imgs/svg_moon.svg";

export const Navigation = () => {
  return (
    <>
      <ul className=" flex ">
        <LiNavElement
          bgColor={"bg-blue"}
          value={"HEM"}
          hoverBgColor={"hover:bg-green-500"}
        ></LiNavElement>
        <LiNavElement
          bgColor={"bg-teal"}
          value={"OM"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
        <LiNavElement
          bgColor={"bg-green"}
          value={"PROJEKT"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
        <LiNavElement
          bgColor={"bg-yellow"}
          value={"KONTAKT"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
        <LiNavElement
          bgColor={"bg-orange"}
          value={"GITHUB"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
        <LiNavElement
          bgColor={"bg-redOrange"}
          value={"LINKEDIN"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
        <div className="flex flex-col justify-center">
          <li className="p-4 cursor-pointer ">LIGHT DARK</li>

          <button className="border w-10 ml-auto mr-auto ">
            <Image src={dark} width={40} alt={"dark mode"}></Image>
          </button>
        </div>
      </ul>
    </>
  );
};
