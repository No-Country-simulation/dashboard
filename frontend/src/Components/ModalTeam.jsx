import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: "10px",
  },
}));

export const ModalTeam = () => {
  let token = localStorage.getItem("token") || "";
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    name: "",
    stack: "",
    project: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (input.name === "") {
        Swal.fire("Lo siento", "El nombre del equipo es obligatorio!", "error");
        setOpen(false);
        return;
      }
      await axios.post("http://localhost:5000/api/teams", input, {
        headers: { token: `Bearer ${token}` },
      });
      setInput({});
      setOpen(false);
      Swal.fire({
        icon: "success",
        title: "Equipo Creado Correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        Crear Equipo
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Crear Equipo</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              <br />
              <TextField
                label="Stack"
                value={input.stack}
                name="stack"
                onChange={handleChange}
              />
              <br />
              <TextField
                label="Proyecto"
                value={input.project}
                name="project"
                onChange={handleChange}
              />
              <br />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Crear
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secundary"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
