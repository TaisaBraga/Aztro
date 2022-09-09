import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import { useParams } from "react-router-dom";
import { returnSignInfo } from "../../services/serviceApi";

import {
  MainSignInfo,
  InfoSignPage,
  DatesSign,
  DateSignButton,
  SignsDescription,
  ExtraSignInfo,
} from "./styles";

const InfoSign = () => {
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState("today");
  const { signName } = useParams();

  useEffect(() => {
    returnSignInfo(signName, day).then((data) => {
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
              <DateSignButton
                type="button"
                value="yesterday"
                onClick={() => setDay("yesterday")}
              />
              <DateSignButton
                type="button"
                style={{
                  backgroundColor: day === "today" ? '#aa6581' : '#503850'
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
          </SignsDescription>

          <ExtraSignInfo>
            <p>Daily horoscope {sign.current_date}: {sign.description}</p>
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

export default InfoSign;
