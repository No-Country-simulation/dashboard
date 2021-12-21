const axios = require("axios");
const fs = require("fs")


async function getGithubs()  {
    let githubs = [];

    const res = await axios.get("http://localhost:5000/api/members");

    githubs.push(res.data.getAllMembers.filter((m) => m.cohort === 2).map((m) => m.github))

        var file = fs.createWriteStream('github2.txt');
        file.on('error', function(err) { /* error handling */ });
        githubs.forEach(function(v) { file.write(v.join(', ') + '\n'); });
        file.end();

  
}

getGithubs();
