const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const chatController = require('../controllers/chatController');


const chatRouter = Router();

chatRouter.get('/:interlocutorId', checkToken.checkToken, chatController.getChat,);

chatRouter.post('/newMessage', checkToken.checkToken, chatController.addMessage);

chatRouter.post('/preview', checkToken.checkToken, chatController.getPreview);

module.exports = chatRouter;
