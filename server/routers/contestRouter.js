const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const upload = require('../utils/fileUpload');

const contestRouter = Router();

contestRouter
  .route('/')
  .get(checkToken.checkToken, basicMiddlewares.onlyForCreative, contestController.getContests);

contestRouter
  .route('/:contestId')
  .get(checkToken.checkToken, basicMiddlewares.canGetContest, contestController.getContestById,)
  .put(checkToken.checkToken, upload.updateContestFile, contestController.updateContest);

module.exports = contestRouter;
