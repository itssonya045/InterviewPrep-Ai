const express = require("express");

const authRouter = express.Router();
const { registerUserController } = require("../controllers/auth.controller");

authRouter.post("/register", registerUserController);

module.exports = authRouter;
