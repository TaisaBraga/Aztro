import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "../molecules/Loader";
import {
  IreturnSignDetails,
  returnSignDetails,
} from "../../services/serviceApi";
import { SignsNameContext } from "../../context/ListSignNames";

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleHeader: {
    fontFamily: "Cinzel Decorative, cursive",
    marginBottom: "0.5rem",
    marginTop: "0.5em",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0.5rem",
  },
  subTitleDetails: {
    fontFamily: "Quicksand, sans-serif",
    marginLeft: "1em",
  },
  dailyDetailsDescription: {
    fontFamily: "Quicksand, sans-serif",
    padding: "1em",
    textIndent: "5%",
  },
  detailsDescription: {
    fontFamily: "Quicksand, sans-serif",
    textIndent: "10%",
    marginTop: "0.5em",
  },
  ToBackIcon: {
    background: "#503850",
    borderRadius: "100%",
    color: "#ebebeb",
    cursor: "pointer",
    display: "flex",
    position: "absolute",
    margin: "30px",
    "&:hover": {
      backgroundColor: "#aa6581",
    },
  },
}));

const baseImageUrl =
  "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

export enum Days {
  YESTERDAY = "yesterday",
  TODAY = "today",
  TOMORROW = "tomorrow",
}

const SignDetails = () => {
  const classes = useStyles();
  const [sign, setSign] = useState<void | IreturnSignDetails>(
    Object /*OU {
    current_date: "",
    compatibility: "",
    lucky_number: "",
    lucky_time: "",
    color: "",
    date_range: "",
    mood: "",
    description: ""
  }*/
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [day, setDay] = useState(Days.TODAY);
  const { signName } = useParams<string>();
  const navigate = useNavigate();
  const { listSignName } = useContext(SignsNameContext);

  useEffect(() => {
    returnSignDetails(signName, day).then((data) => {
      setSign(data);
      setLoading(false);
    });
  }, [signName, day]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            className={classes.ToBackIcon}
          />
          <div className={classes.header}>
            <h2 className={classes.titleHeader}>
              Daily <span className={classes.span}>{signName}</span> horoscope
            </h2>
            {listSignName
              .filter((item) => item.signNameEn === signName)
              .map((setSignImage, index) => (
                <img
                  key={index}
                  src={`${baseImageUrl}/signo-${setSignImage.signNamePt}.png`}
                  alt=""
                  className={classes.signImage}
                />
              ))}
          </div>
          <div className={classes.changeDate}>
            <input
              className={classes.changeDateButton}
              type="button"
              value={Days.YESTERDAY}
              onClick={() => setDay(Days.YESTERDAY)}
            />
            <input
              className={classes.changeDateButton}
              type="button"
              style={{
                backgroundColor: day === Days.TODAY ? "#aa6581" : "#503850",
              }}
              value={Days.TODAY}
              onClick={() => setDay(Days.TODAY)}
            />
            <input
              className={classes.changeDateButton}
              type="button"
              value={Days.TOMORROW}
              onClick={() => setDay(Days.TOMORROW)}
            />
          </div>
          <div className={classes.extraDetailsSign}>
            <p className={classes.dailyDetailsDescription}>
              {sign?.description}
            </p>
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
              Birth in: {sign?.date_range}
            </p>
            <p className={classes.detailsDescription}>
              Compatibility: {sign?.compatibility}
            </p>
            <p className={classes.detailsDescription}>
              Lucky Time: {sign?.lucky_time}
            </p>
            <p className={classes.detailsDescription}>
              Lucky Number: {sign?.lucky_number}
            </p>
            <p className={classes.detailsDescription}>Color: {sign?.color}</p>
            <p className={classes.detailsDescription}>Mood: {sign?.mood}</p>
          </div>
        </>
      )}
    </>
  );
};

export default SignDetails;
