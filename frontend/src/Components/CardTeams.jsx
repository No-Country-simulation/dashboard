import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Avatar, Box, CardHeader } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { NavLink } from "react-router-dom";


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
    link: {
      color: "black",
      textDecoration: "none",
      "&:focus": {
        color: theme.palette.primary.light,
      },
    },
  })
);

export const CardTeams = ({ team }) => {
  let token = localStorage.getItem("token") || "";
  const classes = useStyles();


  // ACA DEBERIAMOS FILTRAR POR TIPO O NOMBRE DE EQUIPO PARA TENER UNA VISUALIZACION CONDICIONAL

  const handleDelete = async (e) => {
    e.preventDefault();
  
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
      
  };



  return (
    <Box className={classes.root}>
      <Card>
        <NavLink to={`/teams/${team._id}`} className={classes.link}>
          <CardHeader
            avatar={<Avatar>{team?.name?.charAt(1)}</Avatar>}
            className={classes.cardHeader}
            title={team.name}
          />
        </NavLink>
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
