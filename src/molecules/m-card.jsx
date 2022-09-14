import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignImage from "../atom/a-signImage";
import SignNameCard from "../atom/a-signImage";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgba(183, 176, 176, 0.196)",
    borderRadius: "1rem",
    boxShadow: "0.125rem 0.188rem 0.313rem rgba(51, 51, 51, 0.283)",
    width: "8.125rem",
    height: "8.125rem",
    margin: "0.525rem",
    padding: "0.625rem",
  },
}));

const HomeCard = ({ signName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div
      className={classes.root}
      onClick={() => navigate(`/horoscopo/${signName}`)}
    >
      <SignImage />
      <SignNameCard />
    </div>
  );
};

export default HomeCard;
