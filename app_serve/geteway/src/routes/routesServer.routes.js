const express = require("express");

const mainRouter = function ({
  routesApi,
  routesUser,
  routesWeb,
}) {
  const router = express.Router();

  router.use("/api", routesApi).use("/user", routesUser).use("/", routesWeb);
  router.all("*", (req, res) => {
    return res.status(404).send("RESOURCES NOT FOUND 404");
  });

  return router;
}

module.exports = mainRouter;