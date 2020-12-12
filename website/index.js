const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const app = express();
const port = 80;

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
   res.sendFile(__dirname + "/index.html") 
})
app.get('/code.js', (req, res) => {
    res.sendFile(__dirname + "/code.js") 
 })
app.post('/calculate', (req, res) => {
    fetch('http://api:3000/calculate', {
        method : "POST",
        body: JSON.stringify(req.body),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
    .then(result => {
        console.log(result);
        res.status(200).send(result)
    }).catch(err => {
        console.log(err);
        res.status(500).send(err)});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})