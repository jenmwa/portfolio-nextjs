import Image from "next/image";
import jenwaller from "/public/imgs/jen-waller.png";

export const ProfilePicture = () => {
  return (
    <>
      <Image
        alt="jenwaller"
        src={jenwaller}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="object-contain h-screen w-auto"
      />
    </>
  );
};
