const { Router } = require('express');
const basicMiddlewares = require('./middlewares/basicMiddlewares');
const hashPass = require('./middlewares/hashPassMiddle');
const userController = require('./controllers/userController');
const contestController = require('./controllers/contestController');
const checkToken = require('./middlewares/checkToken');
const validators = require('./middlewares/validators');
const chatController = require('./controllers/chatController');
const upload = require('./utils/fileUpload');
const { contestRouter, userRouter, customerRouter, authRouter } = require('./routers');

const router = Router();

// authRouter

router.use('/', authRouter);

//userRouter

router.use('/users', userRouter);

// contestRouter
router.use('/contests', contestRouter);

//customerRouter
router.use('/customer', customerRouter);

////
router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

router.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

router.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

router.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

router.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

// chatRouter

router.post(
  '/newMessage',
  checkToken.checkToken,
  chatController.addMessage,
);

router.post(
  '/getChat',
  checkToken.checkToken,
  chatController.getChat,
);

router.post(
  '/getPreview',
  checkToken.checkToken,
  chatController.getPreview,
);

router.post(
  '/blackList',
  checkToken.checkToken,
  chatController.blackList,
);

router.post(
  '/favorite',
  checkToken.checkToken,
  chatController.favoriteChat,
);

router.post(
  '/createCatalog',
  checkToken.checkToken,
  chatController.createCatalog,
);

router.post(
  '/updateNameCatalog',
  checkToken.checkToken,
  chatController.updateNameCatalog,
);

router.post(
  '/addNewChatToCatalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog,
);

router.post(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog,
);

router.post(
  '/deleteCatalog',
  checkToken.checkToken,
  chatController.deleteCatalog,
);

router.post(
  '/getCatalogs',
  checkToken.checkToken,
  chatController.getCatalogs,
);

module.exports = router;
