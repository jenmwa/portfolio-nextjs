import { LiNavElement } from "./LiNavElement";

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
        <LiNavElement
          bgColor={"bg-transparent"}
          value={"LIGHT DARK"}
          hoverBgColor={"hover:bg-yellow-500"}
        ></LiNavElement>
      </ul>
    </>
  );
};
