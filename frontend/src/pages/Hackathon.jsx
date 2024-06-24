import React, { useEffect, useState } from "react";
import axios from "axios";
import HackathonTable from "../Components/HackathonTable";

export const Hackathon = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token") || "";

  const getMembers = async () => {
    try {
      // let members = [];  
      const res = await axios.get("http://localhost:5000/api/members/actualhackathon", {
        headers: { token: `Bearer ${token}` },
      });
      //todos los miembros con filterpassed === true
      // res.data.getAllSelectionMembers.forEach((m) => {
      //   if(m.filterPassed === true) members.push(m);
      // });
      
      // alert(res.data.getActualMembers.length);
      setMembers(res.data.getActualHackathonMembers);
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
      <h1>Hackathon</h1>
      <HackathonTable members={members} loading={loading} />
    </div>
  );
};
