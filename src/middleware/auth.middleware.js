const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Token is not provided",
      });
    }

    const isblacklistTokens = await tokenBlacklistModel.findOne({ token });

    if (!isblacklistTokens) {
      return res.status(401).json("token is invalid");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid tokens",
    });
  }
};

module.exports = { authUser };
