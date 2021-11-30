const axios = require("axios");

async function getMembers() {
  let members = [];

  let membersJs = [];
  let membersPython = [];
  let membersJava = [];
  let membersTs = [];
  let membersCsharp = [];
  let membersPhp = [];

  let fullTimeJs = [];
  let fullTimePython = [];
  let fullTimeJava = [];
  let fullTimeTs = [];
  let fullTimeCsharp = [];
  let fullTimePhp = [];

  let morningJs = [];
  let morningPython = [];
  let morningJava = [];
  let morningTs = [];
  let morningCsharp = [];
  let morningPhp = [];

  let afternoonJs = [];
  let afternoonPython = [];
  let afternoonJava = [];
  let afternoonTs = [];
  let afternoonCsharp = [];
  let afternoonPhp = [];

  const res = await axios.get("http://localhost:5000/api/members");
  members.push(res.data.getAllMembers);

  membersJs.push(
    members[0].filter((member) => member.language === "Javascript")
  );
  membersPython.push(members.filter((member) => member.language === "Python"));
  membersJava.push(members.filter((member) => member.language === "Java"));
  membersTs.push(members.filter((member) => member.language === "Typescript"));
  membersCsharp.push(members.filter((member) => member.language === "C#"));
  membersPhp.push(members.filter((member) => member.language === "PHP"));

  console.log(membersJs[0]);
}

getMembers();
