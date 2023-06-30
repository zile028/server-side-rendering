const AccountModel = require("../models/accountModel");

const updateAccount = (req, res) => {
  let { id, ...account } = req.body;

  AccountModel.findOneAndUpdate({ _id: id }, { $set: account }, { new: true })
    .then((result) => {
      res.redirect("/accounts/edit");
    })
    .catch((error) => {
      res.redirect("/error");
    });
};

module.exports = updateAccount;
