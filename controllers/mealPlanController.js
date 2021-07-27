const MealPlan = require("../models/mealPlan")

module.exports = {
  getAll: function(req, res) {
    req.query.user_id = req.session.user._id
    // console.log('here')
    MealPlan
      .find(req.query)
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
      user_id: req.session.user._id
    }
    MealPlan
      .create(mealPlan)
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  }

};
