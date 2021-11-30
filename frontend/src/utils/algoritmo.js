var membersJs = [];
  var membersTs = [];
  var membersJava = [];
  var membersCsharp = [];
  var membersPython = [];
  
  //----------Horarios---------------//
  var fulltimeJs = [];
  var morningJs = [];
  var afternoonJs = [];

  //-----------Areas-----------------//
  var membersFrontJs = [];
  var membersBackJs = [];
  
  //--------------------------------Languages---------------------------------------------------//
  membersPython.push(members.filter(member => member.language === "Python"));
  membersJava.push(members.filter(member => member.language === "Java"));
  membersCsharp.push(members.filter(member => member.language === "C#"));
  membersTs.push(members.filter(member => member.language === "Typescript"));
  membersJs.push(members.filter(member => member.language === "Javascript"));

  //--------------------------------Horarios---------------------------------------------------//
  fulltimeJs.push(membersJs[0].filter(member => member.availability === "Full-time"));
  morningJs.push(membersJs[0].filter(member => member.availability === "Manana"));
  afternoonJs.push(membersJs[0].filter(member => member.availability === "Tarde"));

  //--------------------------------Areas---------------------------------------------------//
  membersFrontJs.push(members.filter(member => member.language === "Javascript" && member.areas === "Front-End"));
  membersBackJs.push(members.filter(member => member.language === "Javascript" && member.areas === "Back-End"));

