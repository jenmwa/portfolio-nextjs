"use client";

import { useRouter } from "next/navigation";

interface ILiNavElementProps {
  bgColor: string;
  value: string;
  hoverBgColor: string;
  svg?: JSX.Element;
}

export const LiNavElement = ({
  value,
  svg,
  bgColor,
  hoverBgColor,
}: ILiNavElementProps) => {
  const router = useRouter();

  const handleMenuOnClick = (value: string) => {
    console.log("click on:", value);
    const route = value.toUpperCase() === "HEM" ? "/" : value.toLowerCase();
    router.push(route);
  };

  return (
    <>
      <li
        className={` p-4 writing-mode-vertical-rl text-orientation-upright ${bgColor} cursor-pointer ${hoverBgColor} }`}
        onClick={() => handleMenuOnClick(value)}
      >
        <span className="flex justify-between">
          {" "}
          {value}
          {svg}{" "}
        </span>
      </li>
    </>
  );
};
