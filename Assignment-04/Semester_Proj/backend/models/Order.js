const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  order: { type: String, required: true },
  date: { type: String, default: Date },
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
