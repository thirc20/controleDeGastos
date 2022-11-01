require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express()
const port = process.env.API_HOST

app.use(express.static(path.join(__dirname,'src')))

app.get('/', (req, res) => {
  res.sendFile("index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
