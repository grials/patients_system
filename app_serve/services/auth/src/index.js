const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes/routesServer.routes');
const config = require('./config');
const connection = require('./helpers/Connection.database');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(routes())

try {
    connection();
    app.listen(config.PORT, () =>
      console.log(`server init on port ${config.PORT}`)
    );

  } catch (e) {
    console.log(`ERROR ===> ${e}`);
    reject();
  }