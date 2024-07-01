import { MainContainer } from "../_components/MainContainer";

export default function Om() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer
          heading={"OM"}
          text={"Text om jenny och portfolioooooooooooooo"}
        ></MainContainer>
        <MainContainer heading={"test"} text={"texttext"}></MainContainer>
        <MainContainer heading={"test"} text={"texttext"}></MainContainer>
      </div>
    </>
  );
}
