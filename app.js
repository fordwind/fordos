const http = require('http');
const server = http.createServer((req , res) => res.end('asd'))
server.listen(process.env.PORT)
const axios = require('axios')
const WebSocket = require('ws');
//setInterval(() => axios.get('http://cdg.sh'))

i=0

async function makePostRequest() {

   

    axios.get('https://discord.media');

    
}


//setInterval(makePostRequest)
/*
const wss = []

let wsCount = 0;
setInterval(() => {
    
    if(wsCount < 880){
        const ws = new WebSocket('wss://eu-central7445.discord.media');
        wss.push(ws)
        wsCount++
        
    }
})
/*
for(let i = 0; i<800; i++){
    const ws = new WebSocket('wss://eu-central7445.discord.media');
    wss.push(ws)
}
*/
*/
