const http = require('http');
const server = http.createServer((req , res) => res.end('asd'))
server.listen(process.env.PORT)
const axios = require('axios')

setInterval(() => axios.get('http://mee6.xyz'))
