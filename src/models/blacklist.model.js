const mongoose = require("mongoose");

const blacklisttokenschema = new mongoose.Schema(
  {
    token: {
      type: String,
      requied: [true, "token is requied to be added in blacklist."],
    },
  },
  {
    timestamps: true,
  },
);

const tokenBlacklistModel = mongoose.model(
  "blacklistTokens",
  blacklisttokenschema,
);
module.exports = tokenBlacklistModel;
