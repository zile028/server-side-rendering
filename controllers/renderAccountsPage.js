const renderAccountsPage = (req, res) => {
    res.render("accountsPage", {accounts: req.locals, user: req.session.user});
};

module.exports = renderAccountsPage;
