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
  ImageBackgroud,
} from "./styles";

const InfoSign = () => {
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signName } = useParams();
  const todayDate = new Date().toLocaleDateString();

  useEffect(() => {
    returnAllSigns(signName).then((data) => {
      setSign(data);
      setLoading(false);
    });
  }, [signName]);

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
              <DatesSignButton type="button" value="Yesterday" />
              <DatesSignButton type="button" value="Today" />
              <DatesSignButton type="button" value="Tomorrow" />
            </DatesSign>
          </SignsDescription>

          {/* <ExtraSignInfo>
              <p>Compatibility: {sign.compatibility}</p>
              <p>Lucky Time: {sign.lucky_time}</p>
              <p>Lucky Number: {sign.lucky_number}</p>
              <p>Color: {sign.color}</p>
              <p>Mood: {sign.mood}</p>
            </ExtraSignInfo> */}
        </>
      )}
    </InfoSignPage>
  );
};

export default InfoSign;
