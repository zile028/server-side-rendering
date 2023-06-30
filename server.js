const express = require("express");
const mongoose = require("mongoose");

const server = express();
const uri = "mongodb://127.0.0.1:27017/bank_app";

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({ extended: true }));

server.use("/", require("./routes"));

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
