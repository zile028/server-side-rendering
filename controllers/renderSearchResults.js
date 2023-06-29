const accounts = require("../data.json")

const renderSearchResults = (req, res) => {
    let { term } = req.query

    let filteredAccounts = []

    filteredAccounts = accounts.filter(account => account.fullName.toLowerCase().includes(term.toLowerCase()))

    res.render("searchResultsPage", {filteredAccounts, term})
}

module.exports = renderSearchResults