const tshirtRouter = require("express").Router();
const {
  insertManyTshirts,
  getTshirts,
  deleteTshirts
} = require("../controllers/tshirt");

tshirtRouter.post("/", insertManyTshirts);
tshirtRouter.get("/", getTshirts);
tshirtRouter.delete("/", deleteTshirts);

module.exports = { tshirtRouter };
