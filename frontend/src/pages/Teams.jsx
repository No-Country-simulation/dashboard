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
      const res = await axios.get("http://localhost:5000/api/teams", {
        headers: { token: `Bearer ${token}` },
      });
      setTeams(res.data.getAllTeams);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeams();
  }, [teams]);

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
          : teams?.map((team) => <CardTeams key={team._id} team={team} />)}
      </div>
    </>
  );
};
