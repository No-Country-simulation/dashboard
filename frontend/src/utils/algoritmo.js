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

  let nightPython = [];

  const res = await axios.get("http://localhost:5000/api/members");
  members.push(res.data.getAllMembers);

  membersJs.push(
    members[0].filter((member) => member.language === "Javascript")
  );
  console.log(membersJs[0].length, "solo Javascript");

  membersPython.push(
    members[0].filter((member) => member.language === "Python")
  );
  console.log(membersPython[0], "solo Python");

  membersJava.push(members[0].filter((member) => member.language === "Java"));
  console.log(membersJava[0].length, "solo Java");

  membersTs.push(
    members[0].filter((member) => member.language === "Typescript")
  );
  console.log(membersTs[0].length, "solo Typescript");

  membersCsharp.push(members[0].filter((member) => member.language === "C#"));
  console.log(membersCsharp[0].length, "solo C#");

  membersPhp.push(members[0].filter((member) => member.language === "PHP"));
  console.log(membersPhp[0].length, "solo PHP");

  //------------------------------------------//

  afternoonPython.push(
    membersPython[0].filter((m) => m.availability === "Tarde")
  );
  console.log(afternoonPython[0].length, "Python Tarde");

  morningPython.push(
    membersPython[0].filter((m) => m.availability === "Manana")
  );
  console.log(morningPython[0].length, "Python Mañana");

  fullTimePython.push(
    membersPython[0].filter((m) => m.availability === "Full-time")
  );
  console.log(fullTimePython[0].length, "Python Full-time");

  nightPython.push(membersPython[0].filter((m) => m.availability === "Noche"));
  console.log(nightPython[0].length, "Python Noche");
}
getMembers();
