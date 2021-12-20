import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <TextField label="Nombre" />
            <br />
            <TextField label="Stack" />
            <br />
            <TextField label="Proyecto" />
            <br />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
