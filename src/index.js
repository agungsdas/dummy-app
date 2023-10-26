require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const basePath = process.env.BASE_PATH || '/'

const routers = express.Router()
routers.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.use(basePath, routers);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
