const axios = require("axios");
const fs = require("fs")


async function getTeams()  {
    let allTeams = [];
    let teams = []
    let filterTeams = []

    const res = await axios.get("http://localhost:5000/api/teams");

    allTeams.push(res.data.getAllTeams)
    teams.push(allTeams[0])

    
    filterTeams.push(teams[0].map((m) => m.members.filter((m) => m.fullname )))
    console.log(filterTeams[0])


 
    //     fs.writeFile(`./allteams.json`, JSON.stringify(teams) , (err) => {
    //     if(err) throw err ;
    //     console.log("Json file created")
    // })

}

getTeams();
