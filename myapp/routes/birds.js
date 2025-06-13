const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("router /birds 실행");
  res.send("Birds home page");
});

router.get("/about", function (req, res, next) {
  res.send("About birds");
});

module.exports = router;
