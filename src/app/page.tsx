import Background from "./_components/Background";
import { Header } from "./_components/Header";
import { MainContainer } from "./_components/MainContainer";
import { PresentationBlock } from "./_components/PresentationBlock";
import { ProfilePicture } from "./_components/ProfilePicture";

export default function Home() {
  return (
    <>
      <Background></Background>
      <main>
        <div className="flex h-screen justify-start items-start">
          <div className="relative h-full max-h-screen">
            <Header></Header>

            <div className="flex justify-end">
              {/* <ProfilePicture></ProfilePicture> */}
              <div className="pr-8">
                <MainContainer></MainContainer>
                <PresentationBlock></PresentationBlock>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border bg-black color-white  h-24"></footer>
    </>
  );
}
