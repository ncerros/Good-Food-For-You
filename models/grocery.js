const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
 
  name: { type: String, required: false },
  image: { type: String, required: false }
});

const Grocery = mongoose.model("Grocery", grocerySchema);

module.exports = Grocery;
