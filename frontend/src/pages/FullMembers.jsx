import React, { useEffect, useState } from "react";
import axios from "axios";
import FullDataTable from "../Components/FullDataTable";


export const FullMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token") || "";

  const getMembers = async () => {

    try {
      const res = await axios.get("http://localhost:5000/api/members/", {
      // const res = await axios.get("http://localhost:5000/api/selection/", {
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
      <h1>Miembros NC</h1>

      <FullDataTable members={members} loading={loading} full={true} />
    </div>
  );
};
