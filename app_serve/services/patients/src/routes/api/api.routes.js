const express = require("express");
const controller = require("../../app/controllers/patients.controller");
const midAddPat = require("../../app/middlewares/addPatient.middleware");
const midGetPat = require("../../app/middlewares/getPatient.middleware");

const API = function () {
  const router = express.Router();

  router.get("/all", controller.allPatients);

  router.post("/add",  midAddPat, controller.addPatient);

  router.post("/patient", midGetPat, controller.getPatient)

  return router;
}

module.exports = API;