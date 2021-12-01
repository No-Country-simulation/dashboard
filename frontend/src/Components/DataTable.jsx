import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import PropTypes from "prop-types";

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
    width: 150,
    editable: true,
  },
  {
    field: "availability",
    headerName: "Horario",
    width: 160,
  },
  {
    field: "stack",
    headerName: "Stack",
    width: 160,
  },
];
export default function DataTable({ members }) {
  console.log(members);
  let rows = members.map((m) => {
    [
      {
        fullname: m.fullname,
        language: m.language,
        availability: m.availability,
        stack: m.stack,
      },
    ];
  });

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[10, 20, 30]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

DataTable.propTypes = {
  members: PropTypes.array,
};
