const MealPlan = require("../models/mealPlan")

module.exports = {
  getAll: function(req, res) {
    // console.log('here')
    MealPlan
      .find({})
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log(req.body.meals);
    const mealPlan = {
      meals: req.body.meals,
      nutrients: req.body.nutrients,
    }
    MealPlan
      .create(mealPlan)
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  }

};
