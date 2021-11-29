import React, { useEffect } from "react";
import axios from "axios";

export const Members = () => {
  // const [member, setMember] = useState("");
  const getMembers = async () => {
    const res = await axios.get("http://localhost:5000/api/members");
    console.log(res.data.getAllMembers);
  };

  useEffect(() => {
    getMembers();
  }, []);
  return <div></div>;
};
