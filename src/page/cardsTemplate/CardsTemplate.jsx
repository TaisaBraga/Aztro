import React from "react";
import StarIcon from "@material-ui/icons/Star";
import SingleCard from "../../component/SingleCard/SingleCard";
import { HomeTemplate, Icon, QuestionDiv } from "./styles";

const CardsTemplate = () => {
  const baseImageUrl =
    "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

  return (
    <>
      <HomeTemplate>
        <SingleCard
          signImage={`${baseImageUrl}/signo-aries.png`}
          signName={"aries"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-touro.png`}
          signName={"taurus"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-gemeos.png`}
          signName={"gemini"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-cancer.png`}
          signName={"cancer"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-leao.png`}
          signName={"leo"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-virgem.png`}
          signName={"virgo"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-libra.png`}
          signName={"libra"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-escorpiao.png`}
          signName={"scorpio"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-sagitario.png`}
          signName={"sagittarius"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-capricornio.png`}
          signName={"capricorn"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-aquario.png`}
          signName={"aquarius"}
        />
        <SingleCard
          signImage={`${baseImageUrl}/signo-peixes.png`}
          signName={"pisces"}
        />
      </HomeTemplate>
      {/* <Icon>
        <StarIcon
          style={{
            color: "#aa6581",
          }}
        />
      </Icon>
      <QuestionDiv>
        <h2>What's my sign?</h2>
        <Form/>
      </QuestionDiv> */}
    </>
  );
};

export default CardsTemplate;
