const accounts = require("../data.json");
const renderAccountsPage = (req, res) => {
  res.render("accountsPage", { accounts });
};

module.exports = renderAccountsPage;
