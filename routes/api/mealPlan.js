const router = require("express").Router();
const mealPlanController = require("../../controllers/mealPlanController");

router
  .route("/")
  .get(mealPlanController.getAll)
  .post(mealPlanController.create);

module.exports = router;