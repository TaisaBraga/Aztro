import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import { useParams } from "react-router-dom";
import { returnAllSigns } from "../../services/serviceApi";

import {
  MainSignInfo,
  InfoSignPage,
  DatesSign,
  DatesSignButton,
  SignsDescription,
  ExtraSignInfo,
} from "./styles";

const InfoSign = () => {
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState("today");
  const { signName } = useParams();

  useEffect(() => {
    returnAllSigns(signName, day).then((data) => {
      setSign(data);
      setLoading(false);
    });
  }, [signName, day]);

  return (
    <InfoSignPage>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SignsDescription>
            <MainSignInfo>
              <h2>{signName}</h2>
              <p>{sign.date_range}</p>
            </MainSignInfo>
            <DatesSign>
              <DatesSignButton
                type="button"
                value="yesterday"
                onClick={() => setDay("yesterday")}
              />
              <DatesSignButton
                type="button"
                value="Today"
                onClick={() => setDay("today")}
              />
              <DatesSignButton
                type="button"
                value="tomorrow"
                onClick={() => setDay("tomorrow")}
              />
            </DatesSign>
          </SignsDescription>

          {
            <ExtraSignInfo>
              <p>Day's horoscope: {sign.current_date}</p>

              <p>Compatibility: {sign.compatibility}</p>
              <p>Lucky Time: {sign.lucky_time}</p>
              <p>Lucky Number: {sign.lucky_number}</p>
              <p>Color: {sign.color}</p>
              <p>Mood: {sign.mood}</p>
              <p>Description: {sign.description}</p>
            </ExtraSignInfo>
          }
        </>
      )}
    </InfoSignPage>
  );
};

export default InfoSign;
