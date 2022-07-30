const axios = require("axios");
const fs = require("fs")


async function getTeams()  {
    let allTeams = [];
    // let teams = []
    // let filterTeams = []

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjI2YzBiYmE4M2YzYTU5MWVmYmZiYiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDMyMTgyMDUsImV4cCI6MTY0MzQ3NzQwNX0.rhxauh4huAzINsbVIXrD3Th3mIDS4Zz4JrPX0cKBWp8';

    const res = await axios.get("http://localhost:5000/api/teams", {headers: { token: `Bearer ${token}` },});
    

    allTeams.push(res.data.getAllTeams);
    console.log(allTeams);

    // allTeams.push(res.data.getAllTeams)
    // teams.push(allTeams[0])

    
    // filterTeams.push(teams[0].map((m) => m.members.filter((m) => m.fullname )))
    // console.log(filterTeams[0])


 
    //     fs.writeFile(`./allteams.json`, JSON.stringify(teams) , (err) => {
    //     if(err) throw err ;
    //     console.log("Json file created")
    // })

}

getTeams();
