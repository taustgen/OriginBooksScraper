const axios = require('axios');
const cheerio= require('cheerio');

axios.get('http://originbooks.herokuapp.com/')
    .then(function(response){
        const html = response.data;
        const $ = cheerio.load(html)
        var JSON=[]
        var names =$(".col-xs-12 .panel-heading");
        var images =$("img");   
        var authors =$(".panel-body p");
        var prices =$(".panel-body small");
        for(i = 0; i<names.length;i++){
            JSON.push(
                {
                  "name": $(names[i]).text().trim(),
                  "image": $(images[i]).attr("src"),
                  "author": $(authors[i]).text().trim(),
                  "price": $(prices[i]).text().trim()
                }
            )
        }
        console.log(JSON);
    })
