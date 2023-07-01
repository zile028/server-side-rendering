const UserModel = require("../models/userModel")

const login = (req, res) => {
    let {email, password} = req.body

    UserModel.findOne({email})
        .then((user) => {
            if (user) {
                if (password === user.password) {
                    console.log("User logged")
                    req.session.user = user
                    res.redirect("/accounts")
                } else {
                    console.log("Wrong email or password")
                    res.redirect("/")
                }
            } else {
                console.log("User not exist")
                res.redirect("/")
            }
        })
        .catch((error) => {
            console.log(error)
            res.redirect("/error")
        })
}

module.exports = login