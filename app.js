const http = require('http');
const server = http.createServer((req , res) => res.end('deneme'))
server.listen(process.env.PORT)
