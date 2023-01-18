import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectionTable from "../Components/SelectionTable";

export const Selection = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token") || "";

  const getMembers = async () => {
    try {
      // let members = [];  
      const res = await axios.get("http://localhost:5000/api/selection/actual", {
        headers: { token: `Bearer ${token}` },
      });
      //todos los miembros con filterpassed === true
      // res.data.getAllSelectionMembers.forEach((m) => {
      //   if(m.filterPassed === true) members.push(m);
      // });
      
      alert(res.data.getActualMembers.length);
      setMembers(res.data.getActualMembers);
      setLoading(false);



    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <h1>Seleccionado Completo</h1>
      <SelectionTable members={members} loading={loading} />
    </div>
  );
};
