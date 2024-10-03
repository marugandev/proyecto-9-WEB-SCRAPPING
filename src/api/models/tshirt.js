const mongoose = require("mongoose");

const tshirtSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    price: {
      currentPrice: { type: Number, required: true },
      previousPrice: { type: Number, required: true },
      discount: { type: Number }
    }
  },
  {
    timestamps: true,
    collection: "tshirts"
  }
);

const Tshirt = mongoose.model("tshirts", tshirtSchema, "tshirts");

module.exports = Tshirt;
