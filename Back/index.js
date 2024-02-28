const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
app.use(cors())
app.get('/weather',(req,res)=>{
    a = Math.floor(Math.random()*4)
    fs.readFile('./data.json',(error,data)=>{
        if(error){
            console.log(error)
            return
        }
        const Data = JSON.parse(data)
        res.json(Data.locations[a]);
    })
});

app.listen(1010)