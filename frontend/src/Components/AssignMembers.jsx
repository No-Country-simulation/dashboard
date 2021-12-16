import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const AssignMembers = ({ selectId }) => {
  let token = localStorage.getItem("token") || "";
  const [teams, setTeams] = useState([]);

  const [teamSelect, setTeamSelect] = useState({
    selected: null,
  });
  console.log(selectId);
  const getTeams = async () => {
    const res = await axios.get("http://localhost:5000/api/teams", {
      headers: { token: `Bearer ${token}` },
    });
    setTeams(res.data.getAllTeams);
  };

  useEffect(() => {
    getTeams();
  }, []);

  console.log(teamSelect);
  const handleSelect = (e) => {
    let teamSelected = { selected: e.target.value };
    setTeamSelect(teamSelected.selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/api/teams/asignar/${teamSelect}`,
      { members: selectId },
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    await axios.put(`http://localhost:5000/api/members/${selectId}`, { teamleader: true }, 
      {  headers: { token: `Bearer ${token}` }});
  };

  return (
    <div style={{ padding: "20px" }}>
      <form>
        <label>Equipo</label>
        <select value={teamSelect} onChange={handleSelect}>
          <option value="">Seleccione un equipo</option>
          {teams?.map(
            (
              team //Agregar condicion de corte en 9
            ) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            )
          )}
        </select>
        <button onClick={handleSubmit}>Agregar</button>
      </form>
    </div>
  );
};

AssignMembers.propTypes = {
  selectId: PropTypes.array,
};
