import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardTeamsHackathon } from "../Components/CardTeamsHackathon";
import { LoadingCard } from "../Components/LoadingCard";
import { ModalTeam } from "../Components/ModalTeam";

export const TeamsHackathon = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token") || "";

  const getTeams = async () => {
    try {
      let nameTeams = [];

      // const res = await axios.get("http://localhost:5000/api/teams", {
      // const res = await axios.get("http://localhost:5000/api/teams/actual", {
      const res = await axios.get(
        "http://localhost:5000/api/teams/actualhackathon",
        {
          headers: { token: `Bearer ${token}` },
        }
      );
  
      //FILTRAR POR NOMBRE DE EQUIPO PARA TENER UNA VISUALIZACION CONDICIONAL

      //COHORT PRIMERA INSTANCIA
      // res.data.getAllTeams.map((team) => {
      //   if(team.name.indexOf("C") === 0 && team.name.indexOf("5") === 1 ){
      //     nameTeams.push(team);
      //   }
      // });
      //MODIFCREACION
      

      // res.data.getAllTeams.map((team) => {

      // res.data.getActualTeams.map((team) => {
      //   if(team.name.indexOf("S") === 0 && team.name.indexOf("5") === 1 ){
      //     nameTeams.push(team);
      //   }
      // });
      // console.log(res);
      res.data.getActualHackathonTeams.map((team) => {
        if (team.name.startsWith("H3")) {
          nameTeams.push(team);
        }
      });

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
          : teams?.map((team) => (
              <CardTeamsHackathon key={team._id} team={team} />
            ))}
      </div>
    </>
  );
};
