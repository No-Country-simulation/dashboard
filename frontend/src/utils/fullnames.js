const axios = require("axios");
const fs = require("fs")


async function getFullNames()  {
    let fullnames = [];
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjI2YzBiYmE4M2YzYTU5MWVmYmZiYiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDMyMTgyMDUsImV4cCI6MTY0MzQ3NzQwNX0.rhxauh4huAzINsbVIXrD3Th3mIDS4Zz4JrPX0cKBWp8';

    const res = await axios.get("http://localhost:5000/api/members", {headers: { token: `Bearer ${token}` },});

    const members = res.data.getAllMembers;

    members.forEach((m) => {
        m.cohortHistory.map((mh) => {
            if(mh.cohort === 1){
                fullnames.push(m.fullname)
            }
        })
    })
    console.log(fullnames)

    let fullnamesWithSpace = fullnames.join('\n')

    fs.writeFileSync('fullnamesC1.txt', fullnamesWithSpace);
 

}

getFullNames();
