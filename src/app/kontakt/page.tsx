import { MainContainer } from "../_components/MainContainer";

export default function Kontakt() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row">
        <MainContainer
          heading={"KONTAKT"}
          text={"Text om jenny och kontaktuuuuuuuuppgifter!"}
        ></MainContainer>
        <MainContainer heading={"..."} text={"ikoner"}></MainContainer>
      </div>
    </>
  );
}
