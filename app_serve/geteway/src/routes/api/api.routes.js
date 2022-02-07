const express = require('express');

const Api = function ({ ApiController }) {
  const router = express.Router();

  router.post('/auth/login', ApiController.login);
  router.post('/auth/token/verified', ApiController.verifiedToken);
  router.post('/auth/user/add', ApiController.addUser);
  router.post('/patients/add', ApiController.addPatient);
  router.post('/patients/patient', ApiController.getPatient);
  router.get('/patients/all', ApiController.allPatients);  

  return router;
}

module.exports = Api;