const  routesWeb = require('../routes/web');
const routesUser = require('../routes/user');
const  routesApi  = require('../routes/api');
const  { asClass, createContainer, asFunction, asValue } = require('awilix');
const  App = require('./App');
const  Server = require('./Server');
const  { Controller }  = require('./http/http.module');
const  Router = require('../routes/routesServer.routes');
const  Config = require('../config');



const container = createContainer();

container
  //?SERVER
  .register({
    App: asClass(App).singleton(),
    Server: asClass(Server).singleton(),
  })
  //?CONTROLLER
  .register({
    UserController: asClass(Controller.UserController).singleton(),
    ApiController: asClass(Controller.ApiController).singleton(),
  })
  //?ROUTES
  .register({
    router: asFunction(Router).singleton(),
    routesApi: asFunction(routesApi.Api).singleton(),
    routesUser: asFunction(routesUser.User).singleton(),
    routesWeb: asFunction(routesWeb.Web).singleton(),
  })

  //?SERVICE

  //?CONFIG
  .register({
    config: asValue(Config),
  });

module.exports = container;
