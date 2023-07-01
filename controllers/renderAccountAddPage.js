const renderAccountAddPage = (req, res) => {
    res.render("addAccountPage", {user: req.session.user});
};

module.exports = renderAccountAddPage;
