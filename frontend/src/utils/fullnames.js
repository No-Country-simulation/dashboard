const axios = require("axios");
const fs = require("fs")


async function getFullNames()  {
    let fullnames = [];

    const res = await axios.get("http://localhost:5000/api/members");

    fullnames.push(res.data.getAllMembers.filter((m) => m.cohort === 2).map((m) => m.fullname))

        var file = fs.createWriteStream('fullnames.txt');
        file.on('error', function(err) { /* error handling */ });
        fullnames.forEach(function(v) { file.write(v.join(', ') + '\n'); });
        file.end();

  
}

getFullNames();
