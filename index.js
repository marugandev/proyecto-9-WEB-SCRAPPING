require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const { tshirtRouter } = require("./src/api/routes/tshirt");

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/tshirts", tshirtRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(PORT, () => {
  console.log(`"http://localhost:${PORT}"`);
});
