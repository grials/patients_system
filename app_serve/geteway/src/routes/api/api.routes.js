const express = require('express');

const Api = function ({ ApiController }) {
  const router = express.Router();

  router.post('/patients/add', ApiController.addPatient);
  router.post('/patients/patient', ApiController.getPatient);
  router.get('/patients/all', ApiController.allPatients);

  return router;
}

module.exports = Api;