const { model } = require("mongoose");
const sessionSchema = require("../schemas/SessionSchema");

const SessionModel = model("session", sessionSchema);

module.exports = SessionModel;
