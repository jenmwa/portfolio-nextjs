import Background from "./_components/Background";
import { Header } from "./_components/Header";
import { MainContainer } from "./_components/MainContainer";
import { PresentationBlock } from "./_components/PresentationBlock";

export default function Home() {
  return (
    <>
      {/* <Background></Background>
      <main className="h-screen">
        <div className="">
          <div className="relative">
            <Header></Header> */}

      <div className="flex justify-center md:justify-end xl:justify-center">
        {/* <ProfilePicture></ProfilePicture> */}
        {/* <div className="mt-16 p-2 md:p-8 h-full flex flex-col content-between gap-12 md:gap-36"> */}

        <div className="mt-16 p-2 md:p-8 h-full">
          <MainContainer></MainContainer>
          {/* <PresentationBlock></PresentationBlock> */}
        </div>
      </div>
      {/* </div>
        </div>
      </main> */}
    </>
  );
}
