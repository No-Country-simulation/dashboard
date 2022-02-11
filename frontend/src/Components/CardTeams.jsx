import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Avatar, Box, CardHeader } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
// import Swal from "sweetalert2";
// import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import axios from "axios";

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
  let token = localStorage.getItem("token") || "";
  const classes = useStyles();

  const handleDelete = async (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    // console.log(team._id);

    try{
      await axios.put(`http://localhost:5000/api/teams/remove/${team._id}`, 
        {member: e.target.id}, 
        {
          headers: { token: `Bearer ${token}` },
        }
      );

    }
    catch(err){
      console.log(err);
    }
   


    // Swal.fire({
    //   title: "Desea eliminar el miembro?",
    //   text: "¡No podrás revertir esto!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#d33",
    //   cancelButtonColor: "#3085d6",
    //   confirmButtonText: "Si, Eliminar!",
    // })
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         "Eliminado!",
    //         "El miembro ha sido eliminado del grupo.",
    //         "success"
    //       );
    //     }
    //   });
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
               
              >
                {member.fullname}{" "}
                
              </div>
              <div
                style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}
              >
                
                <button onClick={handleDelete} id={member._id} className={classes.btn} style={{color: "red", fontSize:"10px"}}>
                  {/* <DeleteOutlineOutlinedIcon
                    style={{ fontSize: "20px", color: "red" }}
                  /> */}
                  Delete
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
  team: PropTypes.object
};
