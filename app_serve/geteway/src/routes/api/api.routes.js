const express = require('express');

const Api = function ({ ApiController }) {
  const router = express.Router();

  router.get('/', ApiController.sayHello).get('/prueba', ApiController.getJson);

  return router;
}

module.exports = Api;