"use client";

import { useRouter } from "next/navigation";

interface ILiNavElementProps {
  bgColor: string;
  value: string;
  hoverBgColor: string;
  svg?: JSX.Element;
  textColor?: string;
  toggleTheme?: () => void | undefined;
}

export const LiNavElement = ({
  value,
  svg,
  bgColor,
  hoverBgColor,
  textColor,
  toggleTheme,
}: ILiNavElementProps) => {
  const router = useRouter();

  const handleMenuOnClick = (value: string) => {
    console.log("click on:", value);

    if (value.toUpperCase() === "LINKEDIN") {
      window.open("https://www.linkedin.com/in/jenny-waller", "_blank");
      return;
    } else if (value.toUpperCase() === "GITHUB") {
      window.open("https://github.com/jenmwa", "_blank");
      return;
    } else if (
      value.toUpperCase() === "DARK" ||
      value.toUpperCase() === "LIGHT"
    ) {
      toggleTheme && toggleTheme?.();
      return;
    } else {
      const route = value.toUpperCase() === "HEM" ? "/" : value.toLowerCase();
      router.push(route);
    }
  };

  return (
    <>
      <li
        tabIndex={0}
        className={`${textColor} p-4 writing-mode-vertical-rl text-orientation-upright ${bgColor} cursor-pointer ${hoverBgColor} }`}
        onClick={() => handleMenuOnClick(value)}
      >
        <span className={`flex justify-between dark:color-white `}>
          {" "}
          {value}
          {/* {svg}{" "} */}
        </span>
      </li>
    </>
  );
};
