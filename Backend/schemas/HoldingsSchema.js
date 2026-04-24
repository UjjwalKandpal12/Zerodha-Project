const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
});

module.exports = HoldingsSchema;
