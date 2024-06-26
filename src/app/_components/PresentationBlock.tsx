import Image from "next/image";
import computer from "/public/imgs/svg_computer.svg";

export const PresentationBlock = () => {
  return (
    <>
      {/* <div className="border-4 bg-white text-green rounded p-4 max-w-[36rem] mt-auto mb-8"> */}

      <div className="m-2 my-8 md:ml-8 border-4 bg-white text-green rounded p-4 max-w-[36rem]  bottom-8">
        <div className=" relative">
          <h3 className="mr-8 text-4xl text-blue mb-4">FRONTEND DEVELOPER</h3>
          <div className="absolute left-80 bottom-1">
            <Image
              src={computer}
              sizes="100vw"
              alt={"datorillustration"}
              width={72}
            ></Image>
          </div>
        </div>
        <div className="flex flex-wrap text-green font paragraph mb-4 text-lg">
          <span className="pr-4">React - </span>
          <span className="pr-4">Next.js - </span>
          <span className="pr-4">Node.js - </span>
          <span className="pr-4">Vue - </span>
          <span className="pr-4">Git - </span>
          <span className="">Figma</span>
        </div>
        <div className="flex flex-wrap text-blue font-paragraph text-xs">
          <span className="pr-2">TypeScript</span>
          <span className="pr-2">JavaScript</span>
          <span className="pr-2">Tailwind</span>
          <span className="pr-2">SCSS</span>
          <span className="pr-2">Express.js</span>
          <span className="">Adobe</span>
        </div>
      </div>
    </>
  );
};
