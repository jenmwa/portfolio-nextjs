import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="border-red bg-white h-24 w-screen flex justify-end">
        <Navigation></Navigation>
      </header>
    </>
  );
};
