import Image from "next/image";
import computer from "/public/imgs/svg_computer.svg";

export const PresentationBlock = () => {
  return (
    <>
      {/* <div className="border-4 bg-white text-green rounded p-4 max-w-[36rem] mt-auto mb-8"> */}

      <div className="z-20 m-2 md:ml-8 border-4 bg-white text-teal rounded p-4 max-w-[36rem]">
        <div className=" relative">
          <h3 className="mr-8 text-4xl text-blue mb-4">FRONTEND DEVELOPER</h3>
          <div className="absolute left-80 bottom-1">
            <svg
              className="w-[40px] md:w-[136px]"
              height="auto"
              fill="white"
              viewBox="0 0 135 115"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.1183 87.7333V93.5018C47.1186 95.7594 46.5872 97.9949 45.5543 100.081C44.5214 102.166 43.0074 104.061 41.0987 105.657L36.8459 109.215H98.4804L94.2277 105.657C92.3189 104.061 90.8049 102.166 89.772 100.081C88.7391 97.9949 88.2077 95.7594 88.208 93.5018V87.7333M129.298 18.9926V74.8444C129.298 78.2628 127.674 81.5411 124.785 83.9583C121.895 86.3754 117.976 87.7333 113.889 87.7333H21.4373C17.3506 87.7333 13.4314 86.3754 10.5417 83.9583C7.65203 81.5411 6.02863 78.2628 6.02863 74.8444V18.9926M129.298 18.9926C129.298 15.5742 127.674 12.2959 124.785 9.87877C121.895 7.46163 117.976 6.1037 113.889 6.1037H21.4373C17.3506 6.1037 13.4314 7.46163 10.5417 9.87877C7.65203 12.2959 6.02863 15.5742 6.02863 18.9926M129.298 18.9926V57.6593C129.298 61.0776 127.674 64.3559 124.785 66.7731C121.895 69.1902 117.976 70.5481 113.889 70.5481H21.4373C17.3506 70.5481 13.4314 69.1902 10.5417 66.7731C7.65203 64.3559 6.02863 61.0776 6.02863 57.6593V18.9926"
                stroke="#F9C74F"
                strokeWidth="11.3778"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
