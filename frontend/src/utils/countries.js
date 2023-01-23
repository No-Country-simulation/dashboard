const axios = require("axios");
const fs = require("fs")


async function getMails()  {
    let countries = [];

    const res = await axios.get("http://localhost:5000/api/members");

    countries.push(res.data.getAllMembers.filter((m) => m.cohort === 2).map((m) => m.country))


    const orderedCountries = countries[0].reduce((a,b) => {
    let c = b.toLowerCase();
    return a[c] = a[c] ? ++a[c] : 1, a;
    }, {})

    console.log(orderedCountries)

    // let count = {};

    // countries[0].forEach(function(c) {
    //     count[c] = (count[c] || 0) + 1;
    // });
    
    // console.log(count);

    fs.writeFile(`countries.json`, JSON.stringify(orderedCountries) , (err) => {
        if(err) throw err ;
        console.log("Json file created")
    })
      
  
}

getMails()
