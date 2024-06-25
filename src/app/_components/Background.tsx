import Image from "next/image";
import backgroundDots from "/public/imgs/bg.jpg";

export default function Background() {
  return (
    <Image
      alt="dots"
      src={backgroundDots}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
