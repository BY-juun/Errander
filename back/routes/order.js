const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");

router.get("/", (req, res, next) => {});

module.exports = router;
