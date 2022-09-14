import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
}));

const SignImage = () => {
  const classes = useStyles();

  const baseImageUrl =
    "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos";

  let listSignNameImage = [
    "signo-aries.png",
    "signo-touro.png",
    "signo-gemeos.png",
    "signo-cancer.png",
    "signo-leao.png",
    "signo-virgem.png",
    "signo-libra.png",
    "signo-escorpiao.png",
    "signo-sagitario.png",
    "signo-capricornio.png",
    "signo-aquario.png",
    "signo-peixes.png",
  ];
  
  return (
    <div>
      <img src={`${baseImageUrl}/${listSignNameImage}`} alt="" className={classes.cardImage} />
    </div>
  );
};

export default SignImage;
