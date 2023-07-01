const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const server = express();
const uri = "mongodb+srv://zile028:aVEIBV8rNKwiztIm@cluster0.u2kcygo.mongodb.net/?retryWrites=true&w=majority";
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
server.use(express.urlencoded({extended: true}));
server.use(session({
    name: "bankAppSession",
    resave: false,
    secret: "bankapp",
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 6,
        sameSite: true
    }
}))

server.use("/", require("./routes"));

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
