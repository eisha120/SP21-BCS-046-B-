const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

//router to create new order
router.post("/create", async (req, res) => {
  let order = new Order(req.body);
  await order.save();
  console.log(order);
  res.send(order);
});

//router to get single order
router.get("/:id", async (req, res) => {
  let order = await Order.findById(req.params.id);
  res.send(order);
});

//router to get all order
router.post("/fetchallorders", async (req, res) => {
  let orders = await Order.find();
  res.send(orders);
});

//router to update single order
router.put("/:id", async (req, res) => {
  let order = await Order.findById(req.params.id);
  order.fname = req.body.fname;
  order.lname = req.body.lname;
  order.address = req.body.address;
  order.city = req.body.city;
  order.number = req.body.number;
  order.email = req.body.email;
  order.order = req.body.order;
  order.time = req.body.time;
  order.date = req.body.date;
  await order.save();
  res.send(order);
});

//router to delete single order
router.delete("/:id", async (req, res) => {
  let order = await Order.findById(req.params.id);
  await order.delete();
  res.send(order);
});

module.exports = router;
