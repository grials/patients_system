const express = require("express");
const routesApi = require("./api")

const mainRouter = function () {
  const router = express.Router();

  router.use("/api", routesApi());
  router.all("*", (req, res) => {
    return res.status(404).send("RESOURCES NOT FOUND 404");
  });

  return router;
}

module.exports = mainRouter;