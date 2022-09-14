import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardText: {
    color: "#DF608C",
    fontFamily: "'Quicksand', sans-serif",
    textTransform: "capitalize",
    textAlign: "center",
  },
}));

const SignNameCard = ({signName}) => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.cardText}>{signName}</p>
    </div>
  );
};

export default SignNameCard;
