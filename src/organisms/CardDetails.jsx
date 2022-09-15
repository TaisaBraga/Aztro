import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import Loader from "../molecules/Loader";
import { returnSignDetails } from "../services/serviceApi";

const useStyles = makeStyles(() => ({
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleHeader: {
    fontFamily: "Cinzel Decorative, cursive",
    marginBottom: "0.75rem",
  },
  signImage: {
    display: "flex",
    alignSelf: "flex-start",
    position: "absolute",
    margin: "5rem",
    width: "15.625rem",
  },
  span: {
    color: "#9e0a9e",
  },
  changeDate: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  changeDateButton: {
    backgroundColor: "#503850",
    border: "none",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.3)",
    color: "#ebebeb",
    cursor: "pointer",
    fontFamily: "Cinzel Decorative, cursive",
    padding: "0.3rem",
    margin: "0.625rem",
    width: "8rem",
    "&:hover": {
      backgroundColor: "#aa6581",
    },
    "&:focus": {
      backgroundColor: "#aa6581",
    },
  },
  extraDetailsSign: {
    alignItems: "center",
    color: "#503850",
    justifyContent: "center",
    fontSize: "1.125rem",
    margin: "0 auto",
    maxWidth: "31.25rem",
    textAlign: "justify",
  },
  iconDiv: {
    padding: "0.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitleDetails: {
    fontFamily: "Quicksand, sans-serif",
  },
  detailsDescription: {
    fontFamily: "Quicksand, sans-serif",
    textIndent: "5%",
    marginTop: "0.5em",
  },
}));

const baseImageUrl =
  "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

const SignDetails = () => {
  const classes = useStyles();
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState("today");
  const { signName } = useParams();

  useEffect(() => {
    returnSignDetails(signName, day).then((data) => {
      setSign(data);
      setLoading(false);
    });
  }, [signName, day]);

//   const listSignName = [
//     { SignNamePt: "aries", SignNameEn: "aries" },
//     { SignNamePt: "touro", SignNameEn: "taurus" },
//     { SignNamePt: "gemeos", SignNameEn: "gemini" },
//     { SignNamePt: "cancer", SignNameEn: "cancer" },
//     { SignNamePt: "leao", SignNameEn: "leo" },
//     { SignNamePt: "virgem", SignNameEn: "virgo" },
//     { SignNamePt: "libra", SignNameEn: "libra" },
//     { SignNamePt: "escorpiao", SignNameEn: "scorpio" },
//     { SignNamePt: "sagitario", SignNameEn: "sagittarius" },
//     { SignNamePt: "capricornio", SignNameEn: "capricorn" },
//     { SignNamePt: "aquario", SignNameEn: "aquarius" },
//     { SignNamePt: "peixes", SignNameEn: "pisces" },
//   ];

//   function getSignImage(signName) {
//     for (let i = 0; i < listSignName.SignNameEn.length; i++) {
//       if (signName === listSignName.SignNameEn[i]) {
//         return `${baseImageUrl}/${listSignName.SignNameEn[i]}`;
//       }
//     }
//   }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.header}>
            <h2 className={classes.titleHeader}>
              Daily <span className={classes.span}>{signName}</span> horoscope
            </h2>
            {/* <img
              src={getSignImage(signName)}
              alt=""
              className={classes.signImage}
            /> */}
          </div>
          <div className={classes.changeDate}>
            <input
              className={classes.changeDateButton}
              type="button"
              value="yesterday"
              onClick={() => setDay("yesterday")}
            />
            <input
              className={classes.changeDateButton}
              type="button"
              style={{
                backgroundColor: day === "today" ? "#aa6581" : "#503850",
              }}
              value="Today"
              onClick={() => setDay("today")}
            />
            <input
              className={classes.changeDateButton}
              type="button"
              value="tomorrow"
              onClick={() => setDay("tomorrow")}
            />
          </div>
          <div className={classes.extraDetailsSign}>
            <p className={classes.detailsDescription}>{sign.description}</p>
            <div className={classes.iconDiv}>
              <StarIcon
                style={{
                  color: "#aa6581",
                }}
              />
            </div>
            <h3 className={classes.subTitleDetails}>
              More information about {signName} sign
            </h3>
            <p className={classes.detailsDescription}>
              Birth in: {sign.date_range}
            </p>
            <p className={classes.detailsDescription}>
              Compatibility: {sign.compatibility}
            </p>
            <p className={classes.detailsDescription}>
              Lucky Time: {sign.lucky_time}
            </p>
            <p className={classes.detailsDescription}>
              Lucky Number: {sign.lucky_number}
            </p>
            <p className={classes.detailsDescription}>Color: {sign.color}</p>
            <p className={classes.detailsDescription}>Mood: {sign.mood}</p>
          </div>
        </>
      )}
    </>
  );
};

export default SignDetails;
