import React, {useState} from "react";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import {  TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "23ch",
      
    },
  },
  btn: {
    backgroundColor: "green"
  }
}));

export const Teams = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({
    number: ""
  });
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInput({
      number: e.target.value
    });
  };

  return (
    <div>
      <h1>Equipos</h1>
      <Button variant="contained" color ="primary" onClick ={() => setOpen(!open)}>Crear Equipo</Button>

      {
        open ? 
          <form onSubmit={handleSubmit} className={classes.root}> 

            <TextField id="outlined-basic" label="Colocar numero" variant="outlined" onChange={handleChange} value={input.number} />

            <Button type ="submit" variant="outlined" className ={classes.btn}> Crear </Button>

          </form>
          :
          null
      }


    </div>
  );
};
