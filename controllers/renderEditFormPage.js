const AccountModel = require("../models/accountModel");

const renderEditFromPage = (req, res) => {
  let { id } = req.params;
  AccountModel.findOne({ _id: id })
    .then((account) => {
      res.render("editFormPage", { account });
    })
    .catch((error) => {
      res.redirect("/error");
    });
};

module.exports = renderEditFromPage;
