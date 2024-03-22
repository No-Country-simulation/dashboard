import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AssignMembersSelection } from "./AssignMembersSelection";

const columns = [
  {
    field: "fullname",
    headerName: "Fullname",
    width: 185,
    editable: true,
  },
  // {
  //   field: "email",
  //   headerName: "email",
  //   width: 215,
  //   editable: true,
  // },
  {
    field: "vertical",
    headerName: "Vertical",
    width: 155,
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
    field: "number",
    headerName: "number",
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
    //SELECTION
    if (m.filterPassed === true) {
      m.selectionHistory?.map((mh) => {
        if (
          (mh.selection === 14) &
          (mh.assigned === false)   
          // && (mh.area == "Back-End")
          // && (mh.vertical == "Web App")
          // && (mh.area == "Front-End")
          // // (mh.vertical == "Data - BI")
          // && (mh.language !== "sJava") 
          // // (mh.area !== "UX/UI") 
          // // &&
          // && (mh.availability == "Noche")
          // //  &&
          // & mh.stack =="React"
        ) {
          // mmm.push(mh);
          rows.push({
            id: m._id,
            fullname: m.fullname,
            cohort: mh.selection,
            vertical: mh.vertical,
            email: m.email,
            language: mh.language,
            availability: mh.availability,
            stack: mh.stack,
            area: mh.area,
            number: m.number,
            experience: mh.experience,
          });
        }
      });
    }

    //MODIFCREACION
    // alert(mmm.length);
  });
  return (
    <>
      <AssignMembersSelection selectId={selectId} />
      <div style={{ height: 700, width: "100%", backgroundColor: "#F5F4F4" }}>
        <DataGrid
          id={rows.id}
          rows={rows}
          columns={columns}
          pageSize={100}
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
