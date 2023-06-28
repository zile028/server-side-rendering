const accounts = require("../data.json");

const renderEditFromPage = (req, res) => {
  let { id } = req.params;

  let account = accounts.find((acc) => {
    return acc.id === id;
  });

  res.render("editFormPage", { account });
};

module.exports = renderEditFromPage;
