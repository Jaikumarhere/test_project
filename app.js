const express = require('express')
const app = express()
const port = 3000


const url = require('url');

const fs = require('fs');
const json = fs.readFileSync(`${__dirname}/data.json`,'utf-8');

const laptopData = JSON.parse(json);

console.log(__dirname);
console.log(laptopData);

app.get('/', (req, res) =>{
     res.send('Hello World!')    
});


app.get('/products',(req,res)=>{
    res.send('this is the productr page');
});

app.get('/laptop',(req,res)=>{
    res.send('this is the laptop page');
})

app.listen(port, () => console.log(`Example app listening on port port!`))