import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../../component/Loader/Loader";
import { useParams } from "react-router-dom";
import { returnSignDetails } from "../../services/serviceApi";

import {
  MainSignInfo,
  InfoSignPage,
  DatesSign,
  DateSignButton,
  ExtraSignInfo,
} from "./styles";

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "0 auto",
    maxWidth: "43.75rem",
  },
}));

const CardDetails = () => {
  const classes = useStyles();
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

export default CardDetails;
