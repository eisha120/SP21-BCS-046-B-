const mongoose = require("mongoose");

const calculatorSchema = mongoose.Schema({
  operand1: { type: Number, required: true },
  operand2: { type: Number, required: true },
  operation: { type: String, required: true },
  result: { type: Number },
});
const Calculator = mongoose.model("Calculator", calculatorSchema);
module.exports = Calculator;