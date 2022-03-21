const mongoose = require('mongoose');
const chatMessageSchema = new mongoose.Schema({
    message: { type: 'String',
required:true}
})

const chatMessage = mongoose.model('chatroom-message',chatMessageSchema);
module.exports = chatMessage
