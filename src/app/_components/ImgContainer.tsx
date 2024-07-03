import Image from "next/image";
import placeholder from "/public/imgs/placeholder.webp";

export const ImgContainer = () => {
  return (
    <>
      <div>
        <Image
          src={placeholder}
          alt={"placeholder image"}
          width={200}
          height={100}
        ></Image>
      </div>
    </>
  );
};
