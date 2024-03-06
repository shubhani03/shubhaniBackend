const express = require("express");
const AdminRouters = require("./routers/AdminRouters.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.REACT_APP_PORT;
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to backend server in localhost",
    port: port,
    status: true,
  });
});

app.use("/auth", AdminRouters);

// app.use("/api/users", userRouter);
module.exports = app;
