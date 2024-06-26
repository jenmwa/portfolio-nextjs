import Image from "next/image";
import computer from "/public/imgs/svg_computer.svg";

export const PresentationBlock = () => {
  return (
    <>
      <div className="border bg-white text-green max-w-96 p-4 ">
        <div className="flex">
          <h3 className="text-2xl text-blue">FRONTEND DEVELOPER</h3>
          <Image src={computer} sizes="100vw" alt={""}></Image>
        </div>
        <div className="text-green font paragraph">
          <span className="font-paragraph">React</span>
          <span className="font-paragraph">Next.js</span>
          <span className="font-paragraph">Node.js</span>
          <span className="font-paragraph">Vue</span>
          <span className="font-paragraph">Git</span>
          <span className="font-paragraph">Figma</span>
        </div>
        <div className="text-blue font paragraph">
          <span className="font-paragraph">TypeScript</span>
          <span className="font-paragraph">JavaScript</span>
          <span className="font-paragraph">Tailwind</span>
          <span className="font-paragraph">SCSS</span>
          <span className="font-paragraph">Express.js</span>
          <span className="font-paragraph">Adobe</span>
        </div>
      </div>
    </>
  );
};
