const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const validators = require('../middlewares/validators');
const contestController = require('../controllers/contestController');
const userController = require('../controllers/userController');
const upload = require('../utils/fileUpload');

const contestRouter = Router();

contestRouter
  .route('/')
  .get(checkToken.checkToken, basicMiddlewares.onlyForCreative, basicMiddlewares.convertingQueryParams, contestController.getContests);

contestRouter
  .route('/:contestId')
  .get(checkToken.checkToken, basicMiddlewares.canGetContest, contestController.getContestById,)
  .put(checkToken.checkToken, upload.updateContestFile, contestController.updateContest);


contestRouter
  .route('/payment')
  .post(checkToken.checkToken,
    basicMiddlewares.onlyForCustomer,
    upload.uploadContestFiles,
    basicMiddlewares.parseBody,
    validators.validateContestCreation,
    userController.payment);

contestRouter
  .route('/data')
  .post(checkToken.checkToken, contestController.dataForContest);

contestRouter
  .route('/:contestId/offerStatus')
  .get(checkToken.checkToken, basicMiddlewares.onlyForCustomerWhoCreateContest, contestController.setOfferStatus);

// contestRouter.post('/:contestId/offers', checkToken.checkToken, upload.uploadLogoFiles, basicMiddlewares.canSendOffer, contestController.setNewOffer);

module.exports = contestRouter;
