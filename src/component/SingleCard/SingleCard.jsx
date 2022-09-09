import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, SingleImage } from "./styles";

const SingleCard = ({ signImage, signName }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/horoscopo/${signName}`)}>
      <SingleImage src={signImage} alt={signName} />
    </Card>
  );
};

export default SingleCard;
