const express = require('express')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 4000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    let tagLine = req.query.tag
    let gameName = req.query.username
res.send('Tentativa 2', tagLine, gameName)
}
)

app.get('/about', (req, res) => res.send('About Page Route'));


app.listen(port, () => console.log('server is running on ' + port))
