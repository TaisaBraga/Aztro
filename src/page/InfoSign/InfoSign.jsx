import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { returnAllSigns } from "../../services/serviceApi";

const InfoSign = () => {
  const [sign, setSign] = useState([]);
  const { signName } = useParams();
  const todayDate = new Date().toLocaleDateString()


  useEffect(() => {
    returnAllSigns(signName).then((data) => {
      setSign(data);
    });
  }, [signName]);

  return (
    <div>
      <div>
        <h2>{signName}</h2>
        <p>{sign.date_range}</p>
      </div>
      <div>
        <p>Yesterday</p>
        <p>Today</p>
        <p>Tomorrow</p>
      </div>
      <div>
        <p>Horóscopo do dia: {todayDate}</p>
        <p>{sign.description}</p>
      </div>
    </div>
  );
}

export default InfoSign
