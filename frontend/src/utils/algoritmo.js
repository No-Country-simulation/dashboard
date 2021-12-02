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

  let jsFrontMa = [];
  let jsFrontTa = [];
  let jsFrontNo = [];
  let jsFrontFu = [];

  let jsBackMa = [];
  let jsBackTa = [];
  let jsBackNo = [];
  let jsBackFu = [];

  let jsFullMa = [];
  let jsFullTa = [];
  let jsFullNo = [];
  let jsFullFu = [];

  let pyFrontMa = [];
  let pyFrontTa = [];
  let pyFrontNo = [];
  let pyFrontFu = [];

  let pyBackMa = [];
  let pyBackTa = [];
  let pyBackNo = [];
  let pyBackFu = [];

  let pyFullMa = [];
  let pyFullTa = [];
  let pyFullNo = [];
  let pyFullFu = [];

  const res = await axios.get("http://localhost:5000/api/members");
  members.push(res.data.getAllMembers);

  membersJs.push(
    members[0].filter((member) => member.language === "Javascript")
  );

  membersPython.push(
    members[0].filter((member) => member.language === "Python")
  );

  membersJava.push(members[0].filter((member) => member.language === "Java"));

  membersTs.push(
    members[0].filter((member) => member.language === "Typescript")
  );

  membersCsharp.push(members[0].filter((member) => member.language === "C#"));

  membersPhp.push(members[0].filter((member) => member.language === "PHP"));

  //--------Filtrados de Javascript--------//

  morningJs.push(membersJs[0].filter((m) => m.availability === "Manana"));
  afternoonJs.push(membersJs[0].filter((m) => m.availability === "Tarde"));
  nightJs.push(membersJs[0].filter((m) => m.availability === "Noche"));
  fullTimeJs.push(membersJs[0].filter((m) => m.availability === "Full-time"));

  //--------Filtrados de Ordenamiento Javascript Frontend--------//

  jsFrontMa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(jsFrontMa[0].length, "jsFrontMañana");

  jsFrontTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(jsFrontTa[0].length, "jsFrontTarde");

  jsFrontNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(jsFrontNo[0].length, "jsFrontNoche");

  jsFrontFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(jsFrontFu[0].length, "jsFrontFullTime");

  //--------Filtrados de Ordenamiento Javascript Backend--------//

  jsBackMa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(jsBackMa[0].length, "jsBackMañana");

  jsBackTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(jsBackTa[0].length, "jsBackTarde");

  jsBackNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(jsBackNo[0].length, "jsBackNoche");

  jsBackFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(jsBackFu[0].length, "jsBackFullTime");

  //--------Filtrados de Ordenamiento Javascript Full-Stack--------//

  jsFullMa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(jsFullMa[0].length, "jsFullMañana");

  jsFullTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(jsFullTa[0].length, "jsFullTarde");

  jsFullNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(jsFullNo[0].length, "jsFullNoche");

  jsFullFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(jsFullFu[0].length, "jsFullFullTime");

  //--------Filtrados de Python--------//

  morningPython.push(
    membersPython[0].filter((m) => m.availability === "Manana")
  );
  afternoonPython.push(
    membersPython[0].filter((m) => m.availability === "Tarde")
  );
  nightPython.push(membersPython[0].filter((m) => m.availability === "Noche"));
  fullTimePython.push(
    membersPython[0].filter((m) => m.availability === "Full-time")
  );

  //--------Filtrados de Ordenamiento Python Frontend--------//

  pyFrontMa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(pyFrontMa[0].length, "pyFrontMañana");

  pyFrontTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(pyFrontTa[0].length, "pyFrontTarde");

  pyFrontNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(pyFrontNo[0].length, "pyFrontNoche");

  pyFrontFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(pyFrontFu[0].length, "pyFrontFullTime");

  //--------Filtrados de Ordenamiento Python Backend--------//

  pyBackMa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(pyBackMa[0].length, "pyBackMañana");

  pyBackTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(pyBackTa[0].length, "pyBackTarde");

  pyBackNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(pyBackNo[0].length, "pyBackNoche");

  pyBackFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(pyBackFu[0].length, "pyBackFullTime");

  //--------Filtrados de Ordenamiento Python Full-Stack--------//

  pyFullMa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(pyFullMa[0].length, "pyFullMañana");

  pyFullTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(pyFullTa[0].length, "pyFullTarde");

  pyFullNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(pyFullNo[0].length, "pyFullNoche");

  pyFullFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(pyFullFu[0].length, "pyFullFullTime");

  //--------Filtrados de Java--------//

  morningJava.push(membersJava[0].filter((m) => m.availability === "Manana"));
  afternoonJava.push(membersJava[0].filter((m) => m.availability === "Tarde"));
  nightJava.push(membersJava[0].filter((m) => m.availability === "Noche"));
  fullTimeJava.push(
    membersJava[0].filter((m) => m.availability === "Full-time")
  );

  //--------Filtrados de Typescript--------//

  morningTs.push(membersTs[0].filter((m) => m.availability === "Manana"));
  afternoonTs.push(membersTs[0].filter((m) => m.availability === "Tarde"));
  nightTs.push(membersTs[0].filter((m) => m.availability === "Noche"));
  fullTimeTs.push(membersTs[0].filter((m) => m.availability === "Full-time"));

  //--------Filtrados de C#--------//

  morningCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Manana")
  );
  afternoonCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Tarde")
  );
  nightCsharp.push(membersCsharp[0].filter((m) => m.availability === "Noche"));
  fullTimeCsharp.push(
    membersCsharp[0].filter((m) => m.availability === "Full-time")
  );

  //--------Filtrados de PHP--------//

  morningPhp.push(membersPhp[0].filter((m) => m.availability === "Manana"));
  afternoonPhp.push(membersPhp[0].filter((m) => m.availability === "Tarde"));
  nightPhp.push(membersPhp[0].filter((m) => m.availability === "Noche"));
  fullTimePhp.push(membersPhp[0].filter((m) => m.availability === "Full-time"));
}
getMembers();
