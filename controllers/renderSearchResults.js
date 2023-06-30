const AccountModel = require("../models/accountModel");
const accounts = require("../data.json");

const renderSearchResults = (req, res) => {
  let { term } = req.query;

  AccountModel.find({
    $or: [{ fullName: term }, { card: term }],
  })
    .then((filteredAccounts) => {
      res.render("searchResultsPage", { filteredAccounts, term });
    })
    .catch((error) => {
      res.redirect("/error");
    });
};

module.exports = renderSearchResults;
