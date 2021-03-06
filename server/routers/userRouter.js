const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const userController = require('../controllers/userController');
const upload = require('../utils/fileUpload');

const userRouter = Router();

//api/users

userRouter
  .route('/:userId')
  .put(checkToken.checkToken, upload.uploadAvatar, userController.updateUser,);

userRouter.get('/transactions', checkToken.checkToken, userController.getTransactions);

module.exports = userRouter;
