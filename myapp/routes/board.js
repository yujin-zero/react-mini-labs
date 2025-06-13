const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("router /board 실행");
  res.send("This is Board입니다.");
});

module.exports = router;
