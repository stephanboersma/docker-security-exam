// Require dependencies
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')

// Initialize express app
const app = express();
const port = 3000;

// Use default cors settings
app.use(cors())
app.use(bodyParser.json())

// Get information about API
app.get('/', (req, res) => {
    res.status(200).send({
        apiVersion: 1,
        endpoints: {
            calculate: {
                type: "POST",
                payloadFormat: "JSON",
                payloadFields: [
                    {key: "exp", value: "string"}
                ],
                payloadExample: {
                    exp: "2+2"
                }
            }
        }
    })
  })

// Calculate expression
// (Using insecure eval statement)
app.post('/calculate', (req, res) => {
  res.status(200).send({result: eval(req.body.exp)})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})