import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AssignMembers } from "./AssignMembers";

const columns = [
  {
    field: "fullname",
    headerName: "Nombre y apellido",
    width: 150,
    editable: true,
  },
  {
    field: "language",
    headerName: "Lenguaje",
    width: 100,
    editable: true,
  },
  {
    field: "availability",
    headerName: "Horario",
    width: 100,
  },
  {
    field: "areas",
    headerName: "Area",
    width: 100,
  },
  {
    field: "stack",
    headerName: "Stack",
    width: 100,
  },
  // {
  //   field: "cohort",
  //   headerName: "cohort",
  //   width: 15,
  // },
  {
    field: "experience",
    headerName: "experience",
    width: 100,
  },
];
export default function DataTable({ members, loading }) {
  const [selectId, setSelectId] = useState([]);

  let rows = members
    ?.map((m) => {
      return {
        id: m._id,
        fullname: m.fullname,
        language: m.language,
        availability: m.availability,
        stack: m.stack,
        areas: m.areas,
        cohort: m.cohort,
        teamleader: m.teamleader,
        experience: m.experience,
      };
    })
    .filter(
      (m) => m.teamleader === false && m.cohort === 2
      // m.availability === "Full-time"
      // m.areas === "Back-End"
      // m.language === "Python"
    );

  return (
    <>
      <AssignMembers selectId={selectId} />
      <div style={{ height: 700, width: "100%", backgroundColor: "#F5F4F4" }}>
        <DataGrid
          id={rows.id}
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          loading={loading}
          rowsPerPageOptions={[10]}
          onSelectionModelChange={(item) => setSelectId(item)}
        />
      </div>
    </>
  );
}

DataTable.propTypes = {
  members: PropTypes.array,
  loading: PropTypes.bool,
};
