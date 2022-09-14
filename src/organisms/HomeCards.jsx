import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../molecules/Card";

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

const listSignName = [
  { SignNamePt: "aries", SignNameEn: "aries" },
  { SignNamePt: "touro", SignNameEn: "taurus" },
  { SignNamePt: "gemeos", SignNameEn: "gemini" },
  { SignNamePt: "cancer", SignNameEn: "cancer" },
  { SignNamePt: "leao", SignNameEn: "leo" },
  { SignNamePt: "virgem", SignNameEn: "virgo" },
  { SignNamePt: "libra", SignNameEn: "libra" },
  { SignNamePt: "escorpiao", SignNameEn: "scorpio" },
  { SignNamePt: "sagitario", SignNameEn: "sagittarius" },
  { SignNamePt: "capricornio", SignNameEn: "capricorn" },
  { SignNamePt: "aquario", SignNameEn: "aquarius" },
  { SignNamePt: "peixes", SignNameEn: "pisces" },
];

const SetAllCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {listSignName.map((item, index) => (
        <Card
          key={index}
          signName={item}
          imageName={`signo-${item.SignNamePt}.png`}
        />
      ))}
    </div>
  );
};

export default SetAllCards;
