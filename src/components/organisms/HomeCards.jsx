import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../molecules/Card";
import { SignsNameContext } from "../../context/ListSignNames";

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

const SetAllCards = () => {
  const classes = useStyles();
  const { listSignName } = useContext(SignsNameContext);
  
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
