"use client";

import { useRouter } from "next/navigation";

interface ILiNavElementProps {
  bgColor: string;
  value: string;
  hoverBgColor: string;
}

export const LiNavElement = ({
  value,
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
        className={`p-4  ${bgColor} cursor-pointer ${hoverBgColor} }`}
        onClick={() => handleMenuOnClick(value)}
      >
        {value}
      </li>
    </>
  );
};
