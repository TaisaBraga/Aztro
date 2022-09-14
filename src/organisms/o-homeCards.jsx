import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../molecules/m-card";

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

  return (
    <div className={classes.root}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default SetAllCards;
