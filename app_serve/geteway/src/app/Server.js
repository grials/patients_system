const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');


class Server {
  #config;

  #router;

  #app;

  constructor({ config, router }) {
    this.#config = config;
    this.#router = router;
    this.#app = express();
    this.#app.use(morgan('dev'));
    this.#app.use(bodyParser.json());
    this.#app.use(cors());
    this.#app.use(helmet());
    this.#app.use(compression());
    this.#app.use(this.#router);
  }

  getApp() {
    return this.#app;
  }
  start() {
    return new Promise((resolve, reject) => {
      try {

        this.#app.listen(this.#config.PORT, () =>
          console.log(`server init on port ${this.#config.PORT}`)
        );

      } catch (e) {
        console.log(`ERROR ===> ${e}`);
        reject();
      }
    });
  }
}

module.exports = Server;
