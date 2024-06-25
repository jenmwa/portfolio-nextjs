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
  return (
    <>
      <li className={`p-4  ${bgColor} cursor-pointer ${hoverBgColor}`}>
        {value}
      </li>
    </>
  );
};
