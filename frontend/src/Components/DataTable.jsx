import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AssignMembers } from "./AssignMembers";
let mmm = [];
const columns = [
  {
    field: "fullname",
    headerName: "Fullname",
    width: 155,
    editable: true,
  },
  // {
  //   field: "email",
  //   headerName: "email",
  //   width: 155,
  //   editable: true,
  // },
  {
    field: "language",
    headerName: "Lenguaje",
    width: 155,
    editable: true,
  },
  {
    field: "vertical",
    headerName: "Vertical",
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
    // if(m.filterPassed === true){
    //   m.selectionHistory?.map((mh) => {
    //     if (mh.selection === 5 & mh.assigned === false
    //     // & mh.language === "Java"
    //     // & mh.area === "Back-End"
    //     // & mh.stack ==="Mern"
    //     // & mh.availability !== "Mañana"
    //     ) {
    //       mmm.push(mh);
    //       rows.push({
    //         id: m._id,
    //         fullname: m.fullname,
    //         cohort: mh.selection,
    //         language: mh.language,
    //         availability: mh.availability,
    //         stack: mh.stack,
    //         area: mh.area,
    //         experience: mh.experience,
    //       });
    //     }
    //   });}

    //MODIFCREACION
    // COHORT

    if (m.filterPassed === false) {
      m.cohortHistory?.map((mh) => {
        if (
          (mh.cohort === 19)  &&
          (mh.assigned === false)
      
          // && (mh.vertical == "Mobile")
          // && ((mh.area !== "UX/UI") && (mh.area !== "QA Tester"))
          // // && mh.stack !== "React"
          // // // && (mh.area == "Project Manager") 
          // && (mh.language !== "Jasva")
          // && (mh.availability == "Tarde")
          
          // (mh.experience === "mayor a 12 meses")
        ) {
          mmm.push(mh);
          rows.push({
            id: m._id,
            email: m.email,
            fullname: m.fullname,
            cohort: mh.cohort,
            vertical: mh.vertical,
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

    // alert(mmm.length);
  });

  return (
    <>
      <AssignMembers selectId={selectId} />
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
