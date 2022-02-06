const UserController = require("./controller/User.controller");
const ApiController = require("./controller/Api.controller");

const http = {
  Controller: {
    UserController,
    ApiController,
  },
  Middleware: {},
};

module.exports = http;
