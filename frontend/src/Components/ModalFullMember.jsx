import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import PropTypes from "prop-types";
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
  success: {
    backgroundColor:"#0c9631",
    color: "white"
  },
  error: {
    backgroundColor:"red",
    color: "white"
  }
}));

export const ModalFullMember = ({ selectId }) => {
  let token = localStorage.getItem("token") || "";
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    reason: "",
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
    console.log(e);
    e.preventDefault();
    try {
      if (input.reason === "") {
        Swal.fire("Lo siento", "El motivo es obligatorio", "error");
        setOpen(false);
        return;
      }
      await axios.put(`http://localhost:5000/api/member/suspend/${selectId}`, 
        {reason: input.reason}, 
        {
          headers: { token: `Bearer ${token}` },
        });
      setInput({});
      setOpen(false);
      Swal.fire({
        icon: "success",
        title: "Miembro suspendido!",
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
        className={classes.success}
      >
        CARGAR ASIGNACION
      </Button>
      <p1> </p1>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        className={classes.error}
      >
        SUSPENDER
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
            <h2>Suspender Miembro</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Motivo"
                value={input.reason}
                name="reason"
                onChange={handleChange}
              />
              <br />
              {/* <TextField
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
              <br /> */}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Confirmar
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


ModalFullMember.propTypes = {
  selectId: PropTypes.array,
};
