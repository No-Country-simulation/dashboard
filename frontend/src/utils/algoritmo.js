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

  let jvFrontMa = [];
  let jvFrontTa = [];
  let jvFrontNo = [];
  let jvFrontFu = [];

  let jvBackMa = [];
  let jvBackTa = [];
  let jvBackNo = [];
  let jvBackFu = [];

  let jvFullMa = [];
  let jvFullTa = [];
  let jvFullNo = [];
  let jvFullFu = [];

  let tsFrontMa = [];
  let tsFrontTa = [];
  let tsFrontNo = [];
  let tsFrontFu = [];

  let tsBackMa = [];
  let tsBackTa = [];
  let tsBackNo = [];
  let tsBackFu = [];

  let tsFullMa = [];
  let tsFullTa = [];
  let tsFullNo = [];
  let tsFullFu = [];

  let CsharpFrontMa = [];
  let CsharpFrontTa = [];
  let CsharpFrontNo = [];
  let CsharpFrontFu = [];

  let CsharpBackMa = [];
  let CsharpBackTa = [];
  let CsharpBackNo = [];
  let CsharpBackFu = [];

  let CsharpFullMa = [];
  let CsharpFullTa = [];
  let CsharpFullNo = [];
  let CsharpFullFu = [];

  let phpFrontMa = [];
  let phpFrontTa = [];
  let phpFrontNo = [];
  let phpFrontFu = [];

  let phpBackMa = [];
  let phpBackTa = [];
  let phpBackNo = [];
  let phpBackFu = [];

  let phpFullMa = [];
  let phpFullTa = [];
  let phpFullNo = [];
  let phpFullFu = [];

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

  //--------Filtrados de Ordenamiento Java Frontend--------//

  jvFrontMa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(jvFrontMa[0].length, "jvFrontMañana");

  jvFrontTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(jvFrontTa[0].length, "jvFrontTarde");

  jvFrontNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(jvFrontNo[0].length, "jvFrontNoche");

  jvFrontFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(jvFrontFu[0].length, "jvFrontFullTime");

  //--------Filtrados de Ordenamiento Java Backend--------//

  jvBackMa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(jvBackMa[0].length, "jvBackMañana");

  jvBackTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(jvBackTa[0].length, "jvBackTarde");

  jvBackNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(jvBackNo[0].length, "jvBackNoche");

  jvBackFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(jvBackFu[0].length, "jvBackFullTime");

  //--------Filtrados de Ordenamiento Java Full-Stack--------//

  jvFullMa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(jvFullMa[0].length, "jvFullMañana");

  jvFullTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(jvFullTa[0].length, "jvFullTarde");

  jvFullNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(jvFullNo[0].length, "jvFullNoche");

  jvFullFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(jvFullFu[0].length, "jvFullFullTime");

  //--------Filtrados de Typescript--------//

  morningTs.push(membersTs[0].filter((m) => m.availability === "Manana"));
  afternoonTs.push(membersTs[0].filter((m) => m.availability === "Tarde"));
  nightTs.push(membersTs[0].filter((m) => m.availability === "Noche"));
  fullTimeTs.push(membersTs[0].filter((m) => m.availability === "Full-time"));

  //--------Filtrados de Ordenamiento Typescript Frontend--------//

  tsFrontMa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(tsFrontMa[0].length, "tsFrontMañana");

  tsFrontTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(tsFrontTa[0].length, "tsFrontTarde");

  tsFrontNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(tsFrontNo[0].length, "tsFrontNoche");

  tsFrontFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(tsFrontFu[0].length, "tsFrontFullTime");

  //--------Filtrados de Ordenamiento Typescript Backend--------//

  tsBackMa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(tsBackMa[0].length, "tsBackMañana");

  tsBackTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(tsBackTa[0].length, "tsBackTarde");

  tsBackNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(tsBackNo[0].length, "tsBackNoche");

  tsBackFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(tsBackFu[0].length, "tsBackFullTime");

  //--------Filtrados de Ordenamiento Typescript Full-Stack--------//

  tsFullMa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(tsFullMa[0].length, "tsFullMañana");

  tsFullTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(tsFullTa[0].length, "tsFullTarde");

  tsFullNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(tsFullNo[0].length, "tsFullNoche");

  tsFullFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(tsFullFu[0].length, "tsFullFullTime");

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

  //--------Filtrados de Ordenamiento C# Frontend--------//

  CsharpFrontMa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(CsharpFrontMa[0].length, "CsharpFrontMañana");

  CsharpFrontTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(CsharpFrontTa[0].length, "CsharpFrontTarde");

  CsharpFrontNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(CsharpFrontNo[0].length, "CsharpFrontNoche");

  CsharpFrontFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(CsharpFrontFu[0].length, "CsharpFrontFullTime");

  //--------Filtrados de Ordenamiento C# Backend--------//

  CsharpBackMa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(CsharpBackMa[0].length, "CsharpBackMañana");

  CsharpBackTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(CsharpBackTa[0].length, "CsharpBackTarde");

  CsharpBackNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(CsharpBackNo[0].length, "CsharpBackNoche");

  CsharpBackFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(CsharpBackFu[0].length, "CsharpBackFullTime");

  //--------Filtrados de Ordenamiento C# Full-Stack--------//

  CsharpFullMa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(CsharpFullMa[0].length, "CsharpFullMañana");

  CsharpFullTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(CsharpFullTa[0].length, "CsharpFullTarde");

  CsharpFullNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(CsharpFullNo[0].length, "CsharpFullNoche");

  CsharpFullFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(CsharpFullFu[0].length, "CsharpFullFullTime");

  //--------Filtrados de PHP--------//

  morningPhp.push(membersPhp[0].filter((m) => m.availability === "Manana"));
  afternoonPhp.push(membersPhp[0].filter((m) => m.availability === "Tarde"));
  nightPhp.push(membersPhp[0].filter((m) => m.availability === "Noche"));
  fullTimePhp.push(membersPhp[0].filter((m) => m.availability === "Full-time"));

  //--------Filtrados de Ordenamiento PHP Frontend--------//

  phpFrontMa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );
  console.log(phpFrontMa[0].length, "phpFrontMañana");

  phpFrontTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(phpFrontTa[0].length, "phpFrontTarde");

  phpFrontNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );
  console.log(phpFrontNo[0].length, "phpFrontNoche");

  phpFrontFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(phpFrontFu[0].length, "phpFrontFullTime");

  //--------Filtrados de Ordenamiento PHP Backend--------//

  phpBackMa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );
  console.log(phpBackMa[0].length, "phpBackMañana");

  phpBackTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );
  console.log(phpBackTa[0].length, "phpBackTarde");

  phpBackNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );
  console.log(phpBackNo[0].length, "phpBackNoche");

  phpBackFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );
  console.log(phpBackFu[0].length, "phpBackFullTime");

  //--------Filtrados de Ordenamiento PHP Full-Stack--------//

  phpFullMa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );
  console.log(phpFullMa[0].length, "phpFullMañana");

  phpFullTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );
  console.log(phpFullTa[0].length, "phpFullTarde");

  phpFullNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );
  console.log(phpFullNo[0].length, "phpFullNoche");

  phpFullFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
  console.log(phpFullFu[0].length, "phpFullFullTime");
}
getMembers();
