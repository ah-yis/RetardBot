const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    user: { type: String, require: true },
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    coins: { type: Number, default: 1000 },
    bank: { type: Number },
    xp: { type: Number }
});

const model = mongoose.model("ProfileModels", profileSchema);
module.exports = model;