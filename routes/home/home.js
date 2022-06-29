const express = require("express");
router = express.Router();

const { hello, home } = require("./home.ctrl");

router.get("/", home);
router.get("/hello", hello);

module.exports = router;
