const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { register, login } = require("../Controllers/userController");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/signup", register);
router.post("/signin", authMiddleware, login);

module.exports = router;
