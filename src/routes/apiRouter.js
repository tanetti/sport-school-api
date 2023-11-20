const express = require("express");
const apiRouter = new express.Router();

const requestBodyValidation = require("../middlewares/requestBodyValidation/validation");
const debugMessageTextCreation = require("../middlewares/debugMessageTextCreation");

const wakeupController = require("../controllers/wakeup");
const requestController = require("../controllers/request");

apiRouter.post("/wakeup", wakeupController);

apiRouter.post(
  "/request",
  requestBodyValidation,
  debugMessageTextCreation,
  requestController
);

module.exports = apiRouter;
