import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleCard.css";

export default function SingleCard({ signImage, signName }) {
  const navigate = useNavigate();

  return (
    <div
      className="SingleCard"
      onClick={() => navigate(`/horoscopo/${signName}`)}
    >
      <img src={signImage} alt={signName} className="SingleImage" />
    </div>
  );
}
