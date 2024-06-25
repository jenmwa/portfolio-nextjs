import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="border-red bg-white  h-24 w-screen">
        <p className="font-paragraph">This is the header</p>
        <Navigation></Navigation>
      </header>
    </>
  );
};
