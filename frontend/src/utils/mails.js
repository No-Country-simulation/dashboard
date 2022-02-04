const axios = require("axios");
const fs = require("fs")


async function getMails()  {
    let mails = [];
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjI2YzBiYmE4M2YzYTU5MWVmYmZiYiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDMyMTgyMDUsImV4cCI6MTY0MzQ3NzQwNX0.rhxauh4huAzINsbVIXrD3Th3mIDS4Zz4JrPX0cKBWp8';

    const res = await axios.get("http://localhost:5000/api/members", {headers: { token: `Bearer ${token}` },});

    const members = res.data.getAllMembers;

    //cambiar a: member.foreach map.cohorthistory (DataTAble)
    //necesitamos los mails de un determinado cohorte
    
    members.forEach((m) => {
        m.cohortHistory.map((mh) => {
            if(mh.cohort === 1){
                mails.push(m.email)
            }
        })
    })
    console.log(mails)

    let mailsWithSpace = mails.join('\n')

    fs.writeFileSync('mailsC1.txt', mailsWithSpace);
   
}

getMails()
