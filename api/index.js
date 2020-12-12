const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.post('/calculate', (req, res) => {
  console.log(req.body)
  res.send({result: eval(req.body.exp)})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})