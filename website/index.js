// Require dependencies
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

// Initialize express app
const app = express();
const port = 80;

// Use default cors settings
app.use(cors())
app.use(bodyParser.json())

// GET request to root path returns index.html
app.get('/', (req, res) => {
   res.sendFile(__dirname + "/index.html") 
})

// GET rewquest to /code.js path returns code.js
app.get('/code.js', (req, res) => {
    res.sendFile(__dirname + "/code.js") 
 })

 // POST request to /calculate path calculates user input
 // Takes body in JSON { exp: "EXPRESSION_IN_PLAIN_TEXT"}
 // Makes POST call to calculator engine in seperate container
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

// Start listening for incoming traffic
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})