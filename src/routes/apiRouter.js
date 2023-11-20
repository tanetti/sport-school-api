const express = require("express");
const apiRouter = new express.Router();

const debugBodyValidation = require("../middlewares/debugBodyValidation/validation");
const debugMessageTextCreation = require("../middlewares/debugMessageTextCreation");

const wakeupController = require("../controllers/wakeup");
const debugMessageController = require("../controllers/debugMessage");
const debugUserMessageController = require("../controllers/debugUserMessage");

apiRouter.post("/wakeup", wakeupController);

apiRouter.post(
  "/debug",
  debugBodyValidation,
  debugMessageTextCreation,
  debugMessageController
);

apiRouter.post("/debug-user", debugUserMessageController);

module.exports = apiRouter;
