const UserModel = require("../models/userModel")
const register = async (req, res) => {
    let {email, password, fullName} = req.body
    let isExist = await UserModel.count({email})
    if (isExist === 0) {
        let newUser = new UserModel(req.body)
        newUser.save()
            .then((user) => {
                console.log(user)
                res.redirect("/")
            })
            .catch((error) => {
                console.log(error)
                res.redirect("/error")
            })
    } else {
        res.redirect("/")
    }

}

module.exports = register