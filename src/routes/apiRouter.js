const express = require("express");
const apiRouter = new express.Router();

const requestBodyValidation = require("../middlewares/requestBodyValidation/validation");
const requestMessageTextCreation = require("../middlewares/requestMessageTextCreation");

const wakeupController = require("../controllers/wakeup");
const requestController = require("../controllers/request");

apiRouter.post("/wakeup", wakeupController);

apiRouter.post(
  "/request",
  requestBodyValidation,
  requestMessageTextCreation,
  requestController
);

module.exports = apiRouter;
