const Tshirt = require("../models/tshirt");
const tshirts = require("../../../tshirts.json");

const insertManyTshirts = async (req, res, next) => {
  try {
    const tshirtsData = await Tshirt.insertMany(tshirts);

    return res.status(201).json(tshirtsData);
  } catch (error) {
    return res.status(400).json("Error to insertManyTshirts");
  }
};

const getTshirts = async (req, res, next) => {
  try {
    const tshirts = await Tshirt.find();

    return res.status(200).json(tshirts);
  } catch (error) {
    return res.status(400).json("Error to getTshirts");
  }
};

const deleteTshirts = async (req, res, next) => {
  try {
    const tshirts = await Tshirt.deleteMany();

    return res.status(200).json(tshirts);
  } catch (error) {
    return res.status(400).json("Error to deleteTshirts");
  }
};

module.exports = {
  insertManyTshirts,
  getTshirts,
  deleteTshirts
};
