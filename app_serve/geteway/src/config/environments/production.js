const  dotenv = require('dotenv');

dotenv.config({});

const config = {
  PORT: process.env.PORT || 3000,
  SERVER: {
    dirname: `${process.env.PWD}`,
  },
  services:{
    patients:{
      port: process.env.SERVICE_PATIENTS_PORT,
      host: process.env.SERVICE_PATIENTS_HOST
    },
    auth:{
      port: process.env.SERVICE_AUTH_PORT,
      host: process.env.SERVICE_AUTH_HOST
    }
  }
};

module.exports = config;
