import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AssignMembersHackathon } from "./AssignMembersHackathon";
// import { AssignMembersHackathon } from "./AssignMembersHackathon";

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
    field: "score",
    headerName: "score",
    width: 100,
  },

];
export default function DataTable({ members, loading }) {
  const [selectId, setSelectId] = useState([]);
  const rows = [];

  members.forEach((m) => {
    //SELECTION

      m.hackathonMVPHistory?.map((mh) => {
        if (
          (mh.hackathon == 1) &
          (mh.assigned === false)   
          // && (mh.area == "UX/UI")
          
          // && (mh.vertical !== "Web App")
          // && (mh.area == "Front-End")
          // // (mh.vertical == "Data - BI")
          // && (mh.language !== "sPHP") 
          // && (mh.area !== "QA Tester") 
          // // &&
          // && (mh.availability == "Noche")
          // //  &&
          //  & mh.stack !== "Reasdact"
        ) {
          // mmm.push(mh);
          rows.push({
            id: m._id,
            fullname: m.fullname,
            hackathon: mh.hackathon,
            vertical: mh.vertical,
            email: m.email,
            language: mh.language,
            availability: mh.availability,
            stack: mh.stack,
            area: mh.area,
            score: m.score,
          });
        }
      });


    //MODIFCREACION
    // alert(mmm.length);
  });
  return (
    <>
      <AssignMembersHackathon selectId={selectId} />
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
