const express = require('express');

const User = function ({ UserController }) {
  const router = express.Router();

  router.get('/', UserController.sayHello);

  return router;
}

module.exports = User;