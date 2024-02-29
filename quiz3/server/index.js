const express = require('express')
const app = express()
const port = 3000
const json = require('')
var cors = require('')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})