const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.get("/", signin)
router.post("/signup", signup)


module.exports = router; 