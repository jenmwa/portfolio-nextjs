import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="bg-transparent bg-opacity-15  w-full  flex  px-4 lg:px-8">
        <div className="hidden text-dark lg:flex content-center">
          <span className=" text-6xl drop-shadow-md">JENWALLER.se</span>
          <div className=" w-48 mt-8 rotate-12">
            <svg
              width="48"
              height="48"
              strokeWidth={0.5}
              stroke={"orangeRed"}
              fill="orangeRed"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path d="M7.285 1.942h.005-.005zm-4.133-1.942l-.765 2.412-2.359.917 2.057 1.474.144 2.527 2.038-1.501 2.447.643-.798-2.401 1.369-2.129-2.531.017-1.602-1.959zm.395 2.062l.736.901 1.162-.009-.629.978.366 1.104-1.123-.296-.937.69-.066-1.161-.945-.677 1.084-.422.352-1.108zm3.027 5.938l-3.619.469c.418 4.888-1.546 10.626-2.955 14.531 2.036-2.653 6.729-7.553 6.574-15m-1.016 1.14c-.164 3.308-1.348 6.078-2.705 8.308.69-2.563 1.225-5.419 1.152-8.107l1.553-.201zm15.269 2.436l-1.572 1.983-2.532.02 1.4 2.109-.763 2.413 2.439-.68 2.058 1.471.108-2.528 2.035-1.504-2.371-.883-.802-2.401zm-.363 2.068l.368 1.103 1.09.406-.936.691-.05 1.161-.945-.676-1.121.313.351-1.109-.643-.968 1.163-.009.723-.912zm-4.942.693c-6.271 1.285-12.065 6.879-13.919 9.663 5.435-3.695 10.819-5.736 14.592-6.001l-.673-3.662zm-.792 1.221l.287 1.563c-2.335.334-5.027 1.209-7.81 2.517 2.125-1.697 4.738-3.298 7.523-4.08m-5.805-.305c.276-.01.492-.241.483-.517-.101-2.966.579-3.95 2.91-4.211 2.769-.312 2.914-2.021 3.02-3.268.101-1.2.163-1.924 1.813-2.046 1.542-.113 2.398-.423 2.953-1.07.606-.706.791-1.771.641-3.678-.022-.275-.284-.475-.537-.459-.276.022-.482.263-.459.538.125 1.591.004 2.472-.403 2.947-.359.418-1.038.635-2.268.725-2.501.184-2.637 1.788-2.737 2.959-.105 1.241-.181 2.138-2.134 2.357-3.288.37-3.896 2.362-3.798 5.24.008.27.23.483.499.483h.017zm2.075-13.253c-1.104 0-2 .896-2 2s.896 2 2 2c1.103 0 2-.896 2-2s-.897-2-2-2m0 1c.551 0 1 .448 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.552.449-1 1-1m10.011 2.978c-1.11 0-2.011.901-2.011 2.011s.901 2.011 2.011 2.011 2.011-.901 2.011-2.011-.901-2.011-2.011-2.011m0 1c.557 0 1.011.453 1.011 1.011 0 .557-.454 1.011-1.011 1.011-.558 0-1.011-.454-1.011-1.011 0-.558.453-1.011 1.011-1.011" />
            </svg>
          </div>
        </div>
        <Navigation></Navigation>
      </header>
    </>
  );
};
