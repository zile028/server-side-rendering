let accounts = require("../data.json");

const deleteAccount = (req, res) => {
  let { id } = req.params;
  let foundedAccount = null;

  accounts.find((acc, index) => {
    foundedAccount = index;
    return acc.id === id;
  });
  accounts.splice(foundedAccount, 1);

  res.redirect("/accounts/delete");
};

module.exports = deleteAccount;
