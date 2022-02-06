const dev = require("./environments/development");
const prod = require("./environments/production");

const { NODE_ENV } = process.env;

let currentEnv = dev;

if (NODE_ENV === "development") {
  currentEnv = dev;
} else if (NODE_ENV === "production") {
  currentEnv = prod;
}

module.exports = currentEnv;
