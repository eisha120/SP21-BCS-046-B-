const express = require("express");
const router = express.Router();
const Calculator = require("../models/Calculator");

router.post("/create", async (req, res) => {
  let calculator = new Calculator(req.body);
  await calculator.save();
  console.log(calculator);
  res.send(calculator);
});

router.post("/fetchAllOperation", async (req, res) => {
  let calculators = await Calculator.find();
  res.send(calculators);
});

module.exports = router;