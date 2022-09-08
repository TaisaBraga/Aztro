import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import { useParams } from "react-router-dom";
import { returnAllSigns } from "../../services/serviceApi";

import { MainSignInfo } from "./styles";

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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainSignInfo>
            <h2>{signName}</h2>
            <p>{sign.date_range}</p>
          </MainSignInfo>
          <div>
            <p>Yesterday</p>
            <p>Today</p>
            <p>Tomorrow</p>
          </div>
          <div>
            <p>Horóscopo do dia: {todayDate}</p>
            <p>{sign.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoSign;
