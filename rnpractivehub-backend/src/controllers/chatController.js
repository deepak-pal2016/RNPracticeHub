/* eslint-disable no-unused-vars */
const Chat = require('../models/chat');

const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message, messageType, mediaUrl } = req.body;
    const chat = await Chat.create({
      senderId,
      receiverId,
      message,
      messageType,
      mediaUrl,
    });
    
    const io = req.app.get('io');
    io.to(receiverId).emit('receivemessage', chat);
    res.status(201).json({ success: true, data: chat });
  } catch (error) {
    console.log('getting error in message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getuserchats = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    
    const chats = await Chat.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 });
    if (chats) {
      res.status(200).json({ success: true, data: chats });
    }
    if (!chats) {
      res.status(404).json({ success: false, message: 'No chats found' });
    }
  } catch (err) {
    console.log('err found in chat', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { sendMessage, getuserchats };
