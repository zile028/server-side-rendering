const accounts = require("../data.json");

const updateAccount = (req, res) => {
  let { id, ...account } = req.body;
  let foundedAccount = null;

  accounts.find((acc, index) => {
    foundedAccount = index;
    return acc.id === id;
  });
  accounts[foundedAccount] = req.body;

  res.redirect("/accounts/edit");
};

module.exports = updateAccount;
