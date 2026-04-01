require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/config/database.js");

connectToDB();

app.listen("3000", (req, res) => {
  console.log("server is running on 3000");
});
