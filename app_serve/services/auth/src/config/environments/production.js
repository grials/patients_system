const dotenv = require('dotenv');

dotenv.config({});

const config = {
  PORT: process.env.PORT || 3000,
  database: {
    name_db: process.env.DATABASE_NAME || 'production',
    port: process.env.DATABASE_PORT || 3306,
    host: process.env.HOST || 'localhost',
    username: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    key: process.env.KEY_DB,
  },
  SERVER: {
    dirname: `${process.env.PWD}`,
  },
};

module.exports = config;