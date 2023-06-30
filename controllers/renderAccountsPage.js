const AccountModel = require("../models/accountModel");

const renderAccountsPage = (req, res) => {
  res.render("accountsPage", { accounts: req.locals });
};

module.exports = renderAccountsPage;
