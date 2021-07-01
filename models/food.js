const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;
