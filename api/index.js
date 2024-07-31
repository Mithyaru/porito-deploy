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

const apiKey = 'RGAPI-9df4b501-dcaa-434b-ab27-dcf2fc16bab3'

function getPlayerPUUID(tagLine, gameName){
    return axios.get("https://americas.api.riotgames.com" + "/riot/account/v1/accounts/by-riot-id/" + gameName + '/' + tagLine + "?api_key=" + apiKey)
        .then(async response => {
            let accData = response.data
            return accData
            
        }).catch(err => {
            let erro = err
            return erro
            
        })
}


app.get('/gameUser', async (req, res) => {
    let tagLine = req.query.tag
    let gameName = req.query.username

    const PUUIDcall = await getPlayerPUUID(tagLine, gameName)
    const userCall = 'https://br1.api.riotgames.com' + '/lol/summoner/v4/summoners/by-puuid/' + PUUIDcall.puuid + "?api_key=" + apiKey

    const userInfo = await axios.get(userCall)
        .then(async response => {
            const userData = await response.data
            summonerID = userData.id
            console.log('con1')
            console.log(response)
            return userData
        })
        .catch(err => {
            const erro = 'error'
            console.log('con2')
            console.log(erro)
            return erro 
        })
    res.json(userInfo) 
    //console.log(userInfo)
})

app.get('/about', (req, res) => res.json('About Page Route'));



app.listen(port, () => console.log('server is running on ' + port))
