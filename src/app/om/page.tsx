import { MainContainer } from "../_components/MainContainer";
import { Container } from "../_components/Container";

export default function Om() {
  const html = `<p>Kommer ursprungligen från Hammarö, och efter några år med plugg utomsocknes fann jag mig tillbaka i Värmland och har stannat i Karlstad sen dess. </p>Gillar kod, färg och kommunikation, och hittade till frontendutveckling under pandemin... Sagt och gjort, ingenting är omöjligt och nu är jag färdig frontendare efter Medieinstitutets YH-utbildning! 
  <br></br> När jag inte sitter med datorn så lagar jag gärna mat, är ute i skog och mark och åker gärna Sverige runt för konserter så fort jag får möjlighet!`;
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer heading={"OM"} text={html}></MainContainer>
        {/* <Container heading={"test"} text={"texttext"}></Container> */}
      </div>
    </>
  );
}
