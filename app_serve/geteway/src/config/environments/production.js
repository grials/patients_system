const  dotenv = require('dotenv');

dotenv.config({});

const config = {
  PORT: process.env.PORT || 3000,
  SERVER: {
    dirname: `${process.env.PWD}`,
  },
};

module.exports = config;
