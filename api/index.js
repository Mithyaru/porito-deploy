let express = require('express')
let cors = require('cors')
let axios = require('axios')
const port = process.env.PORT || 4000

let championURL = 'https://ddragon.leagueoflegends.com/cdn/14.11.1/data/pt_BR/champion.json'
let globalMaestry = []
let summonerID = ''


let app = express()

app.use(cors())

app.get('/', (req, res) => {
    let tagLine = req.query.tag
    let gameName = req.query.username
res.json('Tentativa 3' + tagLine + gameName)

}
)

app.get('/about', (req, res) => res.json('About Page Route'));



app.listen(port, () => console.log('server is running on ' + port))
