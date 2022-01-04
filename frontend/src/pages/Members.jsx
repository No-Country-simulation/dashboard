import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../Components/DataTable";

export const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token") || "";

  const getMembers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/members", {
        headers: { token: `Bearer ${token}` },
      });
      setMembers(res.data.getAllMembers);
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
      <h1>Miembros sin Equipo</h1>
      <DataTable members={members} loading={loading} />
    </div>
  );
};
