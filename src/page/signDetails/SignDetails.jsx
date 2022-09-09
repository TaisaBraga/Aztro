import React, { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import Loader from "../../component/Loader/Loader";
import { useParams } from "react-router-dom";
import { returnSignDetails } from "../../services/serviceApi";

import {
  MainSignInfo,
  InfoSignPage,
  DatesSign,
  DateSignButton,
  ExtraSignInfo,
  Icon,
} from "./styles";

const SignDetails = () => {
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState("today");
  const { signName } = useParams();

  useEffect(() => {
    returnSignDetails(signName, day).then((data) => {
      setSign(data);
      setLoading(false);
    });
  }, [signName, day]);

  const baseImageUrl =
    "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

  let listSignImage = [
    "signo-aries.png",
    "signo-touro.png",
    "signo-gemeos.png",
    "signo-cancer.png",
    "signo-leao.png",
    "signo-virgem.png",
    "signo-libra.png",
    "signo-escorpiao.png",
    "signo-sagitario.png",
    "signo-capricornio.png",
    "signo-aquario.png",
    "signo-peixes.png",
  ];
  let listSignName = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  function getSignImage(signName) {
    for (let i = 0; i < listSignImage.length; i++) {
      if (signName === listSignName[i]) {
        return `${baseImageUrl}/${listSignImage[i]}`;
      }
    }
  }

  return (
    <InfoSignPage>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainSignInfo>
            <h2>
              Daily{" "}
              <span
                style={{
                  color: "#9e0a9e",
                }}
              >
                {signName}
              </span>{" "}
              horoscope
            </h2>
            <img src={getSignImage(signName)} alt="" />
          </MainSignInfo>
          <DatesSign>
            <DateSignButton
              type="button"
              value="yesterday"
              onClick={() => setDay("yesterday")}
            />
            <DateSignButton
              type="button"
              style={{
                backgroundColor: day === "today" ? "#aa6581" : "#503850",
              }}
              value="Today"
              onClick={() => setDay("today")}
            />
            <DateSignButton
              type="button"
              value="tomorrow"
              onClick={() => setDay("tomorrow")}
            />
          </DatesSign>
          <ExtraSignInfo>
            <p>{sign.description}</p>
            <Icon>
              <StarIcon
                style={{
                  color: "#aa6581",
                }}
              />
            </Icon>
            <h3>More information about {signName} sign</h3>
            <p>Birth in: {sign.date_range}</p>
            <p>Compatibility: {sign.compatibility}</p>
            <p>Lucky Time: {sign.lucky_time}</p>
            <p>Lucky Number: {sign.lucky_number}</p>
            <p>Color: {sign.color}</p>
            <p>Mood: {sign.mood}</p>
          </ExtraSignInfo>
        </>
      )}
    </InfoSignPage>
  );
};

export default SignDetails;
