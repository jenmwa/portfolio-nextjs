import { ImgContainer } from "../_components/ImgContainer";
import { MainContainer } from "../_components/MainContainer";

export default function Project() {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-lg">
        <MainContainer
          heading={"PROJEKT"}
          text={"En liten kort beskrivning gällande proooooojekten"}
        ></MainContainer>
        <div className="flex flex-wrap gap-8">
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
        </div>
      </div>
    </>
  );
}
