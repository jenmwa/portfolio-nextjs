import { MainContainer } from "../_components/MainContainer";
import { Container } from "../_components/Container";

export default function Om() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer
          heading={"OM"}
          text={
            "Text om jenny och portfolioooooooooooooo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ></MainContainer>
        <Container heading={"test"} text={"texttext"}></Container>
      </div>
    </>
  );
}
