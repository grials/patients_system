class App {
   #server;

  constructor({ Server }) {
    this.server = Server;
  }

  async init() {
    await this.server.start();
  }
}

module.exports = App;
