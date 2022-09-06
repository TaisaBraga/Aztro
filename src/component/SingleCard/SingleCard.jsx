import React, { useState, useEffect } from "react";
import { returnAllSigns } from "../../services/serviceApi";
import "./SingleCard.css";

export default function SingleCard({ signImage, signName }) {
  const [sign, setSign] = useState([]);

  useEffect(() => {
    returnAllSigns(signName).then((data) => {
      setSign(data);
    });
  }, []);

  return (
    <div className="SingleCard" value={sign}>
      <img src={signImage} alt="Sign" className="SingleImage" />
    </div>
  );
}
