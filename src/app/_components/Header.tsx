import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="bg-white bg-opacity-15 h-24 w-screen flex justify-end">
        <Navigation></Navigation>
      </header>
    </>
  );
};
