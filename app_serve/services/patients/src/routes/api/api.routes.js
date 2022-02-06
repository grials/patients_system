const express = require("express");


const API = function () {
  const router = express.Router();

  router.get("/", (req, res) => {
    return res.status(200).json({ msg: "Welcome to my API!" });
  });

  return router;
}

module.exports = API;