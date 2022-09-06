import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { returnAllSigns } from "../../services/serviceApi";

export default function InfoSign() {
  const baseImageUrl =
    "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

  const [sign, setSign] = useState([]);
  const { signName } = useParams()

  useEffect(() => {
    returnAllSigns(signName).then((data) => {
      setSign(data);
    });
  }, []);

  return (
    <div>
      <img
        src={`${baseImageUrl}/signo-aries.png`}
        className="SingleImage"
        alt=""
      />
      <p>{sign.color}</p>
    </div>
  );
}
