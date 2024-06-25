import Background from "./_components/Background";
import { Header } from "./_components/Header";
import { ProfilePicture } from "./_components/ProfilePicture";

export default function Home() {
  return (
    <>
      <Background></Background>
      <main>
        <div className="flex h-screen justify-start items-start">
          <div className="relative h-full max-h-screen">
            <Header></Header>
            <ProfilePicture></ProfilePicture>
            <h1>HEJ!</h1>
          </div>
        </div>
      </main>
      <footer className="border bg-black color-white  h-24"></footer>
    </>
  );
}
