const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nutrientSchema = new Schema({
  calories: Number,
  protein: Number,
  fat: Number,
  carbohydrates: Number,
})
const mealPlanSchema = new Schema({
  meals: { type: Array, required: true},
  nutrients: nutrientSchema,
  user_id: { 
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const MealPlan = mongoose.model("MealPlan", mealPlanSchema);

module.exports = MealPlan;
