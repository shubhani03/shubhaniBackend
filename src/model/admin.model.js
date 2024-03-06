const mongoose = require("mongoose");
const adminschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Admin = mongoose.model("admin", adminschema);
module.exports = Admin;
