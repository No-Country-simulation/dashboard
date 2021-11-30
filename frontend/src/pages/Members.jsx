import React, { useEffect, useState } from "react";
import axios from "axios";

export const Members = () => {
  const [members, setMembers] = useState([]);

  

  const getMembers = async () => {
    const res = await axios.get("http://localhost:5000/api/members");
    setMembers(res.data.getAllMembers);
    
  };


  useEffect(() => {
    getMembers();
  }, []);



  console.log(members);
 


  return (
    <div>


    </div>
  );
};
