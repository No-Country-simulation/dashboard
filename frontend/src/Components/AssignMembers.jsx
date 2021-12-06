import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const AssignMembers = ({ selectId }) => {
  const [teams, setTeams] = useState([]);

  const [teamSelect, setTeamSelect] = useState({
    selected: null,
  });

  const getTeams = async () => {
    const res = await axios.get("http://localhost:5000/api/teams");
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

  const handleSubmit = () => {
    axios.put(
      `http://localhost:5000/api/teams/asignar/${teamSelect}`,
      selectId
    );
  };

  return (
    <div>
      <form>
        <label>Equipo</label>
        <select value={teamSelect} onChange={handleSelect}>
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
        <button onClick={handleSubmit}>Crear</button>
      </form>
    </div>
  );
};

AssignMembers.propTypes = {
  selectId: PropTypes.array,
};
