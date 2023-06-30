const AccountModel = require("../models/accountModel");

const addAccount = async (req, res) => {
  try {
    const account = req.body;
    let newAccount = new AccountModel(account);
    let saved = await newAccount.save();
    console.log(saved);
    res.redirect("/accounts");
  } catch (error) {
    res.redirect("/error");
  }
};

module.exports = addAccount;
