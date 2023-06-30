const AccountModel = require("../models/accountModel");

const getAllAccounts = (req, res, next) => {
  AccountModel.find({})
    .then((accounts) => {
      req.locals = accounts;
      next();
    })
    .catch((error) => {
      res.redirect("/error");
    });
};
module.exports = getAllAccounts;
