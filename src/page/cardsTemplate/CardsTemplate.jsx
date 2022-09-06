import React from "react";
import SingleCard from "../../component/SingleCard";
import "./CardsTemplate.css";

export default function CardsTemplate() {
    const baseImageUrl = "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos"


  return (
    <div className="CardsTemplate">
      <SingleCard signImage={`${baseImageUrl}/signo-aries.png`} signName={"aries"} />
      <SingleCard signImage={`${baseImageUrl}/signo-touro.png`} signName={"taurus"} />
      <SingleCard signImage={`${baseImageUrl}/signo-gemeos.png`} signName={"gemini"} />
      <SingleCard signImage={`${baseImageUrl}/signo-cancer.png`} signName={"cancer"} />
      <SingleCard signImage={`${baseImageUrl}/signo-leao.png`} signName={"leo"} />
      <SingleCard signImage={`${baseImageUrl}/signo-virgem.png`} signName={"virgo"} />
      <SingleCard signImage={`${baseImageUrl}/signo-libra.png`} signName={"libra"} />
      <SingleCard signImage={`${baseImageUrl}/signo-escorpiao.png`} signName={"scorpio"} />
      <SingleCard signImage={`${baseImageUrl}/signo-sagitario.png`} signName={"sagittarius"} />
      <SingleCard signImage={`${baseImageUrl}/signo-capricornio.png`} signName={"capricorn"} />
      <SingleCard signImage={`${baseImageUrl}/signo-aquario.png`} signName={"aquarius"} />
      <SingleCard signImage={`${baseImageUrl}/signo-peixes.png`} signName={"pisces"} />
    </div>
  );
}