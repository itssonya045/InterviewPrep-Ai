const express = require("express");

const authRouter = express.Router();
const {
  registerUserController,
  loginController,
  logoutController,
  getUser,
} = require("../controllers/auth.controller");

const { authUser } = require("../middleware/auth.middleware");

authRouter.post("/register", registerUserController);
authRouter.post("/login", loginController);
authRouter.get("/logout", logoutController);
authRouter.get("/getuser", authUser, getUser);

module.exports = authRouter;
