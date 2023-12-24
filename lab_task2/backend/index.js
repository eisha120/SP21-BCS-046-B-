const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/makeupStore";

mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/orders", require("./routes/orders"));

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
