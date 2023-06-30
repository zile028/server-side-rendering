const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  deposit: { type: Number, default: 0 },
  card: { type: String, required: true },
});

const AccountModel = mongoose.model("accounts", AccountSchema);
module.exports = AccountModel;
