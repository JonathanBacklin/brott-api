const express = require('express')
const app = express()
const fetch = require('node-fetch');


app.set('view engine', 'ejs')


let cities = async () => {
    try{
      let Response = await fetch(`https://polisen.se/api/events?locationname=Stockholm;`);
      const StockholmResponse = await Response.json();
      console.log(StockholmResponse)
      let name = StockholmResponse[0].name
      let summary = StockholmResponse[0].summary
      let crime = []
      crime.push(name,summary)
      return crime
    } catch(err){
      console.log('Something went wrong')
    }
  }


  app.get('/', async (req,res) => {
    const data = await cities();
    let crime = data

    res.render('index',{crime})
})



app.listen(3000, () => {
    console.log('Up And Running')
    })


