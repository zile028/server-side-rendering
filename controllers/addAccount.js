const accounts = require("../data.json");

const addAccount = (req, res) => {
  const account = req.body;
  accounts.push(account);
  res.redirect("/accounts");
};

module.exports = addAccount;
