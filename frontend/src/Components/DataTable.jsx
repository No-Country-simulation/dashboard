import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AssignMembers } from "./AssignMembers";

const columns = [
  {
    field: "fullname",
    headerName: "Nombre y apellido",
    width: 200,
    editable: true,
  },
  {
    field: "language",
    headerName: "Lenguaje",
    width: 155,
    editable: true,
  },
  {
    field: "availability",
    headerName: "Horario",
    width: 150,
  },
  {
    field: "area",
    headerName: "Area",
    width: 155,
  },
  {
    field: "stack",
    headerName: "Stack",
    width: 155,
  },
  {
    field: "cohort",
    headerName: "cohort",
    width: 100,
  },
  {
    field: "experience",
    headerName: "experience",
    width: 200,
  },
];
export default function DataTable({ members, loading }) {
  const [selectId, setSelectId] = useState([]);
  const rows = [];

  members.forEach((m) => {
    m.cohortHistory?.map((mh) => {
      if (mh.cohort === 3 & mh.assigned === false 
      // & mh.language === "Javascript" 
      // & mh.area === "Full-Stack" 
      // & mh.stack ==="JQuery"
      // & mh.availability === "Tarde"
      ) {
        rows.push({
          id: m._id,
          fullname: m.fullname,
          cohort: mh.cohort,
          language: mh.language,
          availability: mh.availability,
          stack: mh.stack,
          area: mh.area,
          experience: mh.experience,
        });
      }
    });
  });

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
