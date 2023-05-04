import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";

export const AssignMembersSelection = ({ selectId }) => {
  let token = localStorage.getItem("token") || "";
  const [teams, setTeams] = useState([]);

  const [teamSelect, setTeamSelect] = useState({
    selected: null,
  });

  const getTeams = async () => {
    let nameTeams = [];
    const res = await axios.get(
      "http://localhost:5000/api/teams/actualselection",
      {
        headers: { token: `Bearer ${token}` },
      }
    );

    //MODIFCREACION
    //FILTRAR POR NOMBRE DE EQUIPO PARA TENER UNA VISUALIZACION CONDICIONAL
    res.data.getActualselTeams.map((team) => {
      if (team.name.indexOf("S") === 0 && team.name.indexOf("8") === 1) {
        nameTeams.push(team);
      }
    });
    setTeams(nameTeams);
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

    if (teamSelect === undefined || teamSelect === null) {
      alert("holis");
    }
    try {
      //COHORTTEAM

      const idArray = selectId.toString().split(",");
      for (const id of idArray) {
        // await axios.put(
        //   `http://localhost:5000/api/teams/asignar/${teamSelect}`, // (putMemberTeam)
        //   { members: id },
        //   {
        //     headers: { token: `Bearer ${token}` },
        //   }
        // );

        // SELECTIONTEAM
        await axios.put(
          `http://localhost:5000/api/teams/selection/${teamSelect}`, // (putMemberSelectionTeam)
          { members: id },
          {
            headers: { token: `Bearer ${token}` },
          }
        );
      }

      Swal.fire({
        icon: "success",
        title: "Miembros Asignados al Equipo",
        showConfirmButton: false,
        timer: 1000,
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
              team //Agregar condicion de corte en
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

AssignMembersSelection.propTypes = {
  selectId: PropTypes.array,
};
