const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const userController = require('../controllers/userController');
const upload = require('../utils/fileUpload');

const userRouter = Router();

//api/users

userRouter
  .route('/:userId')
  .put(checkToken.checkToken, upload.uploadAvatar, userController.updateUser,);

userRouter
  .get('/authUser',  checkToken.checkAuth);

module.exports = userRouter;
