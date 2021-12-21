const axios = require("axios");
const fs = require("fs")


async function getMails()  {
    let mails = [];

    const res = await axios.get("http://localhost:5000/api/members");

    mails.push(res.data.getAllMembers.filter((m) => m.cohort === 2).map((m) => m.email))

        var file = fs.createWriteStream('mails2.txt');
        file.on('error', function(err) { /* error handling */ });
        mails.forEach(function(v) { file.write(v.join(', ') + '\n'); });
        file.end();

   console.log(mails.length);
}

getMails()
