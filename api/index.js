const express = require('express')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 4000

const app = express()

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
    credentials: true,
}))

app.get('/', (req, res) => {
    let tagLine = req.query.tag
    let gameName = req.query.username
res.json('Tentativa 3' + tagLine + gameName)

}
)

app.get('/about', (req, res) => res.json('About Page Route'));


app.listen(port, () => console.log('server is running on ' + port))
