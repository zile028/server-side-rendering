const AccountModel = require("../models/accountModel");

const deleteAccount = (req, res) => {
  let { id } = req.params;
  AccountModel.deleteOne({ _id: id })
    .then((result) => {
      res.redirect("/accounts/delete");
    })
    .catch((error) => {
      res.redirect("/error");
    });
};

module.exports = deleteAccount;
