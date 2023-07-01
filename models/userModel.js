const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: {
        type: Date, default: function () {
            return new Date().getTime()
        }
    }
})

const UserModel = model("users", UserSchema)
module.exports = UserModel