const express = require('express')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 4000

const app = express()

app.use(cors())

app.get('/', (req, res) => 
res.json('Tentativa 1')
)

app.get('/about', (req, res) => res.send('About Page Route'));

app.listen(port, () => console.log('server is running on ' + port))