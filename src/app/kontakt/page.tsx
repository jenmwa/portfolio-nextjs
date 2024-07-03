import { MainContainer } from "../_components/MainContainer";

export default function Kontakt() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer
          heading={"KONTAKT"}
          text={
            "Text om jenny och kontaktuuuuuuuuppgifter! Allra bäst så når ni mig på mail eller via lur: sociala kanaler givetvis"
          }
        ></MainContainer>
        <MainContainer heading={"..."} text={" sociala ikoner"}></MainContainer>
      </div>
    </>
  );
}
