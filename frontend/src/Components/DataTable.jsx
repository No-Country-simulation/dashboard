import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import PropTypes from "prop-types";

const columns = [
  {
    field: "fullname",
    headerName: "Nombre y apellido",
    width: 210,
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
  {
    field: "areas",
    headerName: "Areas",
    width: 160,
  },
];
export default function DataTable({ members, loading }) {
  console.log(members);
  let rows = members?.map((m) => {
    return {
      id: m._id,
      fullname: m.fullname,
      language: m.language,
      availability: m.availability,
      stack: m.stack,
      areas: m.areas,
    };
  });

  return (
    <>
      <div style={{ height: 500, width: "100%", backgroundColor: "#F5F4F4" }}>
        <DataGrid
          id={Math.random()}
          rows={rows}
          columns={columns}
          pageSize={7}
          checkboxSelection
          loading={loading}
          rowsPerPageOptions={[7]}
        />
      </div>
    </>
  );
}

DataTable.propTypes = {
  members: PropTypes.array,
  loading: PropTypes.bool,
};
