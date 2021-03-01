//Import du module
const express = require('express')
const http = require('http')
const cors = require('cors');
const bodyParser = require('body-parser');

class Server{
   constructor(){
    this.users = {
      id: '',
      socketid: ''
    }
    this.app = express()
    this.app.use(bodyParser.json())
    this.app.use(cors())
    this.app.use((req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
    })
    let users = [{id: '', socketid: ''}]
    this.http = http.Server(this.app)
    this.io = require('socket.io')(this.http)
    this.io.on('connection', function(socket) {
      socket.on('message', function (message) {
        if(!isEmpty(users)){
            console.log('users[1].id')
        for(let i = 0; i < users.length; i++)
        {
          if(users[i].id == message.reciever){
            socket.to(users[i].socketid).emit('message', {message: message.message, sender: message.sender});
          }
        }}
      })
    })
    .on('disconnect', () => {
        socket.emit('disconnect', {message: "Server Down Sorry!!"});
    })
   }
   listen() {
       this.http.listen(4242, ()=> {
         console.log(`Listening on http://localhost:4242`)
       })
     }
}
const server = new Server()
server.listen()