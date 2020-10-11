const express = require("express");
const routes = require("../routes");
const footerController = require("../controller/footerController");

const footerRouter = express.Router();

footerRouter.post(routes.addAdInquiry,footerController.addAdInquiry);

module.exports = footerRouter;
