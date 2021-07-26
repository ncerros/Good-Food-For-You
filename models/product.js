const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: String, required: false },
  description: { type: String, required: false },
  ingredientList: { type: String, required: false },
  date: {type: Date, default: Date.now},
  user_id: { 
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
