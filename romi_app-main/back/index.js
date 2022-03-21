
const express = require('express');
const app = express();
const chatMessage = require('./models/chat_messages')
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://gold:SARIVIA9@cluster0.eplls.mongodb.net/messages?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{useNewUrlParser:true}).then(()=>{
  console.log('connected to database')
}).catch(err => console.log(err))
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// connect websockets
io.on('connection', (socket) => {
  console.log('hello')
  chatMessage.find().then((result) =>{socket.emit('output-message',result)})
  console.log('a user connected',socket.id);
  socket.on("chat message",(msg)=>{
    const chat_message = new chatMessage({message:msg});
    chat_message.save().then(()=>{
        io.emit("chat message",msg)
    })
  
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});









