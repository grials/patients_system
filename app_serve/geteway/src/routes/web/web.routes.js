const express = require("express");


const Web = function () {
  const router = express.Router();

  router.get("/", (req, res) => {
    return res.status(200).json({ msg: "Welcome to my API!" });
  });

  return router;
}

module.exports = Web;