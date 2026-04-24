const { model } = require("mongoose");
const otpSchema = require("../schemas/OtpSchema");

const OtpModel = model("otp", otpSchema);

module.exports = OtpModel;
