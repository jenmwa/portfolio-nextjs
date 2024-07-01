import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="bg-white bg-opacity-15 w-full h-auto flex justify-center lg:justify-between px-4 lg:px-8">
        <span className="hidden text-dark lg:block text-6xl drop-shadow-md">
          JENWALLER.se
        </span>
        <Navigation></Navigation>
      </header>
    </>
  );
};
