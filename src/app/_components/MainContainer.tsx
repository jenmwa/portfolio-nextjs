interface IMainContainerProps {
  heading: string;
  text: string;
}

export const MainContainer = ({ heading, text }: IMainContainerProps) => {
  return (
    <>
      <div className="relative p-4 bg-white bg-opacity-75 border-4 rounded max-w-screen-md">
        <h1 className="text-8xl">{heading}</h1>
        <p className="font-paragraph">
          {text}
          <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
        </p>
      </div>
    </>
  );
};
