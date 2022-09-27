import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const baseImageUrl =
  "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

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
  cardImage: {
    display: "flex",
    margin: "0 auto",
    width: "7em",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff0f5",
      borderRadius: "1rem",
    },
  },
  cardText: {
    color: "#DF608C",
    fontFamily: "'Quicksand', sans-serif",
    textTransform: "capitalize",
    textAlign: "center",
  },
}));

const SingleCard = ({ signName, imageName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div
      className={classes.root}
      onClick={() => navigate(`/horoscopo/${signName.signNameEn}`)}
    >
      <img
        src={`${baseImageUrl}/${imageName}`}
        alt="Sign"
        className={classes.cardImage}
      />
      <p className={classes.cardText}>{signName.signNameEn}</p>
    </div>
  );
};

export default SingleCard;
