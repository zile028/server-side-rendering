const express = require("express");

const server = express();

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({ extended: true }));

server.use("/", require("./routes"));

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
