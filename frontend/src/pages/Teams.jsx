import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardTeams } from "../Components/CardTeams";
import { LoadingCard } from "../Components/LoadingCard";
import { ModalTeam } from "../Components/ModalTeam";

export const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token") || "";


  const getTeams = async () => {
    try {
      let nameTeams = [];
      
      // const res = await axios.get("http://localhost:5000/api/teams", {
      const res = await axios.get("http://localhost:5000/api/teams/actual", {
      // const res = await axios.get("http://localhost:5000/api/teams/actualselection", {
        headers: { token: `Bearer ${token}` },
      });

      //FILTRAR POR NOMBRE DE EQUIPO PARA TENER UNA VISUALIZACION CONDICIONAL

      //COHORT PRIMERA INSTANCIA
      // res.data.getAllTeams.map((team) => {
      //   if(team.name.indexOf("C") === 0 && team.name.indexOf("5") === 1 ){
      //     nameTeams.push(team);
      //   }
      // });
      //MODIFCREACION
      //SELECTION SEGUNDA INSTANCIA

      // res.data.getAllTeams.map((team) => {

      res.data.getActualTeams.map((team) => {
        if(team.name.indexOf("C") === 0 && team.name.indexOf("9") === 1 ){
          nameTeams.push(team);
        }
      });
      // console.log(res);
      // res.data.getActualselTeams.map((team) => {
      //   if(team.name.indexOf("S") === 0 && team.name.indexOf("5") === 1 ){
      //     nameTeams.push(team);
      //   }
      // });

      // TODOS LOS EQUIPOS
      // res.data.getAllTeams.map((team) => {
      //   if(team.name.indexOf("C") === 0){
      //     nameTeams.push(team);
      //   }
      // });

      
     
      setTeams(nameTeams); 
      setLoading(true);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginLeft: "20px", marginRight: "20px" }}>
          Listado de Equipos
        </h2>
        <ModalTeam />
      </div>
      <div
        style={{
          paddingTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax( 13rem, 1fr))",
          gridGap: "20px",
          gridAutoRows: "auto",
        }}
      >
         
        {!loading
          ? Array(12).fill(<LoadingCard />)
          : teams?.map((team) => <CardTeams key={team._id} team={team}/>)}

        
      </div>
    </>
  );
};
