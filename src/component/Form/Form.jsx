import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { SubmitButton } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div>
        <div>
          <TextField
            label="Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
          />
          <TextField
            type="date"
            label="Birth Date"
            defaultValue="2017-05-24"
            id="outlined-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <SubmitButton type="submit" value="Verificar" />
      </div>
    </form>
  );
};

export default Form;
