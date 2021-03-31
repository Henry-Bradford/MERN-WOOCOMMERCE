const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const activeSession = new Schema({
    token: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("activeSession", activeSession);