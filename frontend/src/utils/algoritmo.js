const axios = require("axios");

async function getMembers() {
  let members = [];

  let membersJs = [];
  let membersPython = [];
  let membersJava = [];
  let membersTs = [];
  let membersCsharp = [];
  let membersPhp = [];
  let membersRuby = [];

  let fullTimeJs = [];
  let fullTimePython = [];
  let fullTimeJava = [];
  let fullTimeTs = [];
  let fullTimeCsharp = [];
  let fullTimePhp = [];
  let fullTimeRuby = [];

  let morningJs = [];
  let morningPython = [];
  let morningJava = [];
  let morningTs = [];
  let morningCsharp = [];
  let morningPhp = [];
  let morningRuby = [];

  let afternoonJs = [];
  let afternoonPython = [];
  let afternoonJava = [];
  let afternoonTs = [];
  let afternoonCsharp = [];
  let afternoonPhp = [];
  let afternoonRuby = [];

  let nightJs = [];
  let nightPython = [];
  let nightJava = [];
  let nightTs = [];
  let nightCsharp = [];
  let nightPhp = [];
  let nightRuby = [];

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

  let rubyFrontMa = [];
  let rubyFrontTa = [];
  let rubyFrontNo = [];
  let rubyFrontFu = [];

  let rubyBackMa = [];
  let rubyBackTa = [];
  let rubyBackNo = [];
  let rubyBackFu = [];

  let rubyFullMa = [];
  let rubyFullTa = [];
  let rubyFullNo = [];
  let rubyFullFu = [];

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

  membersRuby.push(members[0].filter((member) => member.language === "Ruby"));

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

  jsFrontTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  jsFrontNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  jsFrontFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Javascript Backend--------//

  jsBackMa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  jsBackTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  jsBackNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  jsBackFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Javascript Full-Stack--------//

  jsFullMa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  jsFullTa.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  jsFullNo.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  jsFullFu.push(
    membersJs[0].filter(
      (m) =>
        m.language === "Javascript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

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

  pyFrontTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  pyFrontNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  pyFrontFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Python Backend--------//

  pyBackMa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  pyBackTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  pyBackNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  pyBackFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Python Full-Stack--------//

  pyFullMa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  pyFullTa.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  pyFullNo.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  pyFullFu.push(
    membersPython[0].filter(
      (m) =>
        m.language === "Python" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

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

  jvFrontTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  jvFrontNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  jvFrontFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Java Backend--------//

  jvBackMa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  jvBackTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  jvBackNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  jvBackFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Java Full-Stack--------//

  jvFullMa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  jvFullTa.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  jvFullNo.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  jvFullFu.push(
    membersJava[0].filter(
      (m) =>
        m.language === "Java" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

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

  tsFrontTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  tsFrontNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  tsFrontFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Typescript Backend--------//

  tsBackMa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  tsBackTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  tsBackNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  tsBackFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Typescript Full-Stack--------//

  tsFullMa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  tsFullTa.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  tsFullNo.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  tsFullFu.push(
    membersTs[0].filter(
      (m) =>
        m.language === "Typescript" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

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

  CsharpFrontTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  CsharpFrontNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  CsharpFrontFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento C# Backend--------//

  CsharpBackMa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  CsharpBackTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  CsharpBackNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  CsharpBackFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento C# Full-Stack--------//

  CsharpFullMa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  CsharpFullTa.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  CsharpFullNo.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  CsharpFullFu.push(
    membersCsharp[0].filter(
      (m) =>
        m.language === "C#" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

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

  phpFrontTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  phpFrontNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  phpFrontFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento PHP Backend--------//

  phpBackMa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  phpBackTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  phpBackNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  phpBackFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento PHP Full-Stack--------//

  phpFullMa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  phpFullTa.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  phpFullNo.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  phpFullFu.push(
    membersPhp[0].filter(
      (m) =>
        m.language === "PHP" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ruby--------//

  morningRuby.push(membersRuby[0].filter((m) => m.availability === "Manana"));
  afternoonRuby.push(membersRuby[0].filter((m) => m.availability === "Tarde"));
  nightRuby.push(membersRuby[0].filter((m) => m.availability === "Noche"));
  fullTimeRuby.push(
    membersRuby[0].filter((m) => m.availability === "Full-time")
  );

  //--------Filtrados de Ordenamiento Ruby Frontend--------//

  rubyFrontMa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Front-End" &&
        m.availability === "Manana"
    )
  );

  rubyFrontTa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Front-End" &&
        m.availability === "Tarde"
    )
  );

  rubyFrontNo.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Front-End" &&
        m.availability === "Noche"
    )
  );

  rubyFrontFu.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Front-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Ruby Backend--------//

  rubyBackMa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Back-End" &&
        m.availability === "Manana"
    )
  );

  rubyBackTa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Back-End" &&
        m.availability === "Tarde"
    )
  );

  rubyBackNo.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Back-End" &&
        m.availability === "Noche"
    )
  );

  rubyBackFu.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Back-End" &&
        m.availability === "Full-time"
    )
  );

  //--------Filtrados de Ordenamiento Ruby Full-Stack--------//

  rubyFullMa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Full-Stack" &&
        m.availability === "Manana"
    )
  );

  rubyFullTa.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Full-Stack" &&
        m.availability === "Tarde"
    )
  );

  rubyFullNo.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Full-Stack" &&
        m.availability === "Noche"
    )
  );

  rubyFullFu.push(
    membersRuby[0].filter(
      (m) =>
        m.language === "Ruby" &&
        m.areas === "Full-Stack" &&
        m.availability === "Full-time"
    )
  );
}
getMembers();
