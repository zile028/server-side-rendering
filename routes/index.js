const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/accounts", require("./accounts"));

module.exports = router;
