import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardTeams } from "../Components/CardTeams";

export const Teams = () => {
  const [teams, setTeams] = useState([]);
  let token = localStorage.getItem("token") || "";

  const getTeams = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teams", {
        headers: { token: `Bearer ${token}` },
      });
      setTeams(res.data.getAllTeams);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeams();
    console.log(teams);
  }, []);
  return (
    <div
      stytle={{
        paddingTop: "3rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
        gridGap: "1rem",
        gridAutoRows: "17rem",
      }}
    >
      {teams?.map((team) => (
        <CardTeams key={team.id} team={team} />
      ))}
    </div>
  );
};
