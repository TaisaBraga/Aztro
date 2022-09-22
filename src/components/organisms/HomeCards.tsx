import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../molecules/Card";
import { IsignName, useSignsName } from "../../context/ListSignNames";

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

const SetAllCards= () : ReactElement => {
  const classes = useStyles();
  const { listSignName } = useSignsName();
  
  return (
    <div className={classes.root}>
      {listSignName.map((item: IsignName, index: number) => (
        <Card
          key={index}
          signName={item}
          imageName={`signo-${item.signNamePt}.png`}
        />
      ))}
    </div>
  );
};

export default SetAllCards;
