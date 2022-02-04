import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Avatar, Box, CardHeader } from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(2),
        "&:hover": {
          backgroundColor: "#e909",
        },
      },
    },
    content: {
      margin: "5px",
      padding: "2px",
    },
    btn: {
      margin: "0px",
      padding: "0px",
      cursor: "pointer",
      backgroundColor: "white",
      border: "none",
      borderRadius: "3px",
      marginLeft: "5px",
    },
    cardHeader: {
      paddingTop: "6px",
      paddingBottom: "2px",
      fontSize: "20px",
    },
  })
);

export const CardTeams = ({ team }) => {
  const classes = useStyles();

  const handleDelete = async () => {
    

    Swal.fire({
      title: "Desea eliminar el miembro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, Eliminar!",
    })
      .then()
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "El miembro ha sido eliminado del grupo.",
            "success"
          );
        }
      });
  };

  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar>{team?.name?.charAt(1)}</Avatar>}
          className={classes.cardHeader}
          title={team.name}
        />
        {team?.members.map((member) => (
          <CardContent className={classes.content} key={member._id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color:
                    (member.areas === "Full-Stack" && "#158EFA") ||
                    (member.areas === "Front-End" && "#24BE02") ||
                    (member.areas === "Back-End" && "#BD05AF"),
                }}
                key={member._id}
              >
                {member.fullname}{" "}
              </div>
              <div
                style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}
              >
                <button onClick={handleDelete} className={classes.btn}>
                  <DeleteOutlineOutlinedIcon
                    style={{ fontSize: "20px", color: "red" }}
                  />
                </button>
              </div>
            </div>
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};

CardTeams.propTypes = {
  team: PropTypes.object,
};
