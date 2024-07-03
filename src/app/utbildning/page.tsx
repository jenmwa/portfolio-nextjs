import { Container } from "../_components/Container";
import { MainContainer } from "../_components/MainContainer";

export default function Utbildning() {
  const html = `MEDIEINSTITUTET <br></br> HERMODS <br></br> HÖGSKOLAN I SKÖVDE`;
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer heading={"UTBILDNING"} text={html}></MainContainer>
        <Container
          heading={"ANNAT"}
          text={"texttexttexttexttexttext text text"}
        ></Container>
        <Container heading={"ÖVRIGT"} text={"texttext"}></Container>
      </div>
    </>
  );
}
