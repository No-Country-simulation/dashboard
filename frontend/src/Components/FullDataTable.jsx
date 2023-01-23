import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import { AssignMembers } from "./AssignMembers";
import { ModalFullMember } from "../Components/ModalFullMember";
// let mmm = [];
const columns = [
  {
    field: "fullname",
    headerName: "Nombre y apellido",
    width: 300,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    editable: true,
  },
  {
    field: "country",
    headerName: "Pais",
    width: 300,
  },
  {
    field: "phone",
    headerName: "Tel",
    width: 300,
  },

];
export default function DataTable({ members, loading }) {
  const [selectId, setSelectId] = useState([]);
  const rows = [];

  // alert(selectId);
  // alert(useState([]));
  // members.sort();
  members.forEach((m) => {

    // mmm.push(mh);
    rows.push({
      id: m._id,
      email: m.email,
      fullname: m.fullname,
      country: m.country,
      phone: m.phone,
    });
  });

  return (
    <>
      {/* <AssignMembers selectId={selectId} /> */}
      <ModalFullMember selectId={selectId} /> <br></br>
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
