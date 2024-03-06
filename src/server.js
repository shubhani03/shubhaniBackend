const app = require("../index.js");
const dbConnect = require("./config/config.js");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.REACT_APP_PORT || 8080;

app.listen(port, async () => {
  await dbConnect();

  console.log("backend server running on port no : ", port);
});
