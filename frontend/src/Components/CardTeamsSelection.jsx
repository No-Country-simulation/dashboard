import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Avatar, Box, CardHeader } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import TeamPopUp from "./TeamPopUp";




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
    lefttext: {
      align: "left",
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

export const CardTeamsSelection = ({ team }) => {
  let token = localStorage.getItem("token") || "";
  const classes = useStyles();

  console.log(team);
  // ACA DEBERIAMOS FILTRAR POR TIPO O NOMBRE DE EQUIPO PARA TENER UNA VISUALIZACION CONDICIONAL

  const handleClick = async (e) => {
    e.preventDefault();

    let info = "";

    // info += "<tl><tr><th>Nombre</th><th>Area</th><th>Lenguaje</th>";
    let output = [];
    let front = 0;
    let back = 0;
    let design = 0;
    let pm = 0;
    let tester = 0;
    
    team.members.forEach(m => {
      
      const cohort = m.selectionHistory.find(c => c.selection == "6");
      if (cohort) {
        // info += `<li align="left"> <span> ${cohort.area}</span> &ensp; <span>${m.fullname}</span>`;
        output.push({
          area: cohort.area,
          fullname : m.fullname
        });

        switch (cohort.area) {
        case "Back-End":
          back ++;
          break;
        case "Front-End":
          front ++;
          break;
        case "Design":
          design ++;
          break;
        case "Tester":
          tester ++;
          break;
        case "PM":
          pm ++;
          break;
        default:
          break;
        }


      }
      // info += `<tr><td>${m.fullname}</td><td>${m.email}</td><td>${m.country}</td></tr>`;
      


    });

    if (output) {
      
      output.sort((a,b) => { 
        if (a.area < b.area) {
          return -1;
        }
        if (a.area > b.area) {
          return 1;
        }
        return 0;
      });
      info += "<ol>";

      for (let i = 0; i < output.length; i++) {
        
        info += `<li align="left"> <span> ${output[i].area}</span> &ensp; <span>${output[i].fullname}</span>`;
        
      }

      info += "</ol>";
      info += `<br><br>Front: ${front}<br>Back: ${back}<br>Design: ${design}<br>Tester: ${tester} <br>PM: ${pm}`;

      Swal.fire({
      // icon: "success",
      // title: `Equipo: ${team.name} Id: ${team._id}`,
        titleText: `Equipo: ${team.name} Id: ${team._id}`,
        width: "50%",
        html : info,      
        timer: 15000,
      // customClass: {
      //   popup: 'format-pre'
      // }
      });
    }

    // info += "</table>";
    

  };
  const handleDelete = async (e) => {
    e.preventDefault();
  
    try{
      //COHORT
      // await axios.put(`http://localhost:5000/api/teams/remove/${team._id}`, 
      //   {member: e.target.id}, 
      //   {
      //     headers: { token: `Bearer ${token}` },
      //   }
      // );

      // SELECTION
      await axios.put(`http://localhost:5000/api/teams/removeSelection/${team._id}`, 
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
        <NavLink to={`/teams/${team._id}`} className={classes.link} onClick={handleClick} id={team.name}>
          <CardHeader
            avatar={<Avatar>{team?.members.length}</Avatar>}
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
                      (member.area === "Full-Stack" && "#158EFA") ||
                      (member.area === "Front-End" && "#24BE02") ||
                      (member.area === "Back-End" && "#BD05AF"),
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


CardTeamsSelection.propTypes = {
  team: PropTypes.object
};
