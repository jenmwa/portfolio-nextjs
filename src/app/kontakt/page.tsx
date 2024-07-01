import { MainContainer } from "../_components/MainContainer";

export default function Kontakt() {
  return (
    <>
      <div className="flex gap-4">
        <MainContainer
          heading={"KONTAKT"}
          text={"Text om jenny och kontaktuuuuuuuuppgifter!"}
        ></MainContainer>
        <MainContainer heading={"..."} text={"ikoner"}></MainContainer>
      </div>
    </>
  );
}
