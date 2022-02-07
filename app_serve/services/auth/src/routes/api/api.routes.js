const express = require("express");
const controller = require("../../app/controllers/api.controller");
const addUserMid = require('../../app/middlewares/addUser.middleware');

const API = function () {
  const router = express.Router();

  // router.get("/logout", controller.logout);
  router.post("/login", controller.login);
  router.post("/token/verified", controller.verifiedToken);
  router.post("/user/add", addUserMid, controller.addUser);

  return router;
}

module.exports = API;