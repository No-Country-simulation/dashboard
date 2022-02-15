import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";

export const AssignMembers = ({ selectId }) => {
  let token = localStorage.getItem("token") || "";
  const [teams, setTeams] = useState([]);

  // console.log(selectId.join());

  // const memberId = selectId.join();
  const [teamSelect, setTeamSelect] = useState({
    selected: null,
  });

  const getTeams = async () => {
    const res = await axios.get("http://localhost:5000/api/teams", {
      headers: { token: `Bearer ${token}` },
    });
    setTeams(res.data.getAllTeams);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const handleSelect = (e) => {
    let teamSelected = { selected: e.target.value };
    setTeamSelect(teamSelected.selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/teams/asignar/${teamSelect}`, // (putMemberTeam)
        { members: selectId },
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      
      Swal.fire({
        icon: "success",
        title: "Miembos Asignados al grupo",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "15px" }}>
      <form>
        <label style={{ fontSize: "20px" }}>Equipos</label>
        <select
          style={{
            height: "36px",
            borderRadius: "5px",
            margin: "0px 5px 0px 5px",
            fontSize: "14px",
          }}
          value={teamSelect}
          onChange={handleSelect}
        >
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Agregar
        </Button>
      </form>
    </div>
  );
};

AssignMembers.propTypes = {
  selectId: PropTypes.array,
};
