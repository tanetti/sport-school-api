const express = require("express");
const homeRouter = new express.Router();

const homeController = require("../controllers/home");

homeRouter.get("/", homeController);

module.exports = homeRouter;
