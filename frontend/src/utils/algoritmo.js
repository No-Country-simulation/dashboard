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

  let nightJs = [];
  let nightPython = [];
  let nightJava = [];
  let nightTs = [];
  let nightCsharp = [];
  let nightPhp = [];

  const res = await axios.get("http://localhost:5000/api/members");
  members.push(res.data.getAllMembers);

  membersJs.push(
    members[0].filter((member) => member.language === "Javascript")
  );
  console.log(membersJs[0].length, "solo Javascript");

  membersPython.push(
    members[0].filter((member) => member.language === "Python")
  );
  console.log(membersPython[0].length, "solo Python");

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

  //--------Filtrados de Javascript--------//

  afternoonJs.push(membersJs[0].filter((m) => m.availability === "Tarde"));
  console.log(afternoonJs[0].length, "Javascript Tarde");

  morningJs.push(membersJs[0].filter((m) => m.availability === "Manana"));
  console.log(morningJs[0].length, "Javascript Mañana");

  fullTimeJs.push(membersJs[0].filter((m) => m.availability === "Full-time"));
  console.log(fullTimeJs[0].length, "Javascript Full-time");

  nightJs.push(membersJs[0].filter((m) => m.availability === "Noche"));
  console.log(nightJs[0].length, "Javascript Noche");

  //--------Filtrados de Python--------//

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

  //--------Filtrados de Java--------//

  afternoonJava.push(membersJava[0].filter((m) => m.availability === "Tarde"));
  console.log(afternoonJava[0].length, "Java Tarde");

  morningJava.push(membersJava[0].filter((m) => m.availability === "Manana"));
  console.log(morningJava[0].length, "Java Mañana");

  fullTimeJava.push(
    membersJava[0].filter((m) => m.availability === "Full-time")
  );
  console.log(fullTimeJava[0].length, "Java Full-time");

  nightJava.push(membersJava[0].filter((m) => m.availability === "Noche"));
  console.log(nightJava[0].length, "Java Noche");

  //--------Filtrados de Typescript--------//

  afternoonTs.push(membersTs[0].filter((m) => m.availability === "Tarde"));
  console.log(afternoonTs[0].length, "Typescript Tarde");

  morningTs.push(membersTs[0].filter((m) => m.availability === "Manana"));
  console.log(morningTs[0].length, "Typescript Mañana");

  fullTimeTs.push(membersTs[0].filter((m) => m.availability === "Full-time"));
  console.log(fullTimeTs[0].length, "Typescript Full-time");

  nightTs.push(membersTs[0].filter((m) => m.availability === "Noche"));
  console.log(nightTs[0].length, "Typescript Noche");

  //--------Filtrados de C#--------//

  afternoonCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Tarde")
  );
  console.log(afternoonCsharp[0].length, "C# Tarde");

  morningCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Manana")
  );
  console.log(morningCsharp[0].length, "C# Mañana");

  fullTimeCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Full-time")
  );
  console.log(fullTimeCsharp[0].length, "C# Full-time");

  nightCsharp.push(membersCsharp[0].filter((m) => m.availability === "Noche"));
  console.log(nightCsharp[0].length, "C# Noche");

  //--------Filtrados de PHP--------//

  afternoonPhp.push(membersPhp[0].filter((m) => m.availability === "Tarde"));
  console.log(afternoonPhp[0].length, "PHP Tarde");

  morningPhp.push(membersPhp[0].filter((m) => m.availability === "Manana"));
  console.log(morningPhp[0].length, "PHP Mañana");

  fullTimePhp.push(membersPhp[0].filter((m) => m.availability === "Full-time"));
  console.log(fullTimePhp[0].length, "PHP Full-time");

  nightPhp.push(membersPhp[0].filter((m) => m.availability === "Noche"));
  console.log(nightPhp[0].length, "PHP Noche");
}
getMembers();
