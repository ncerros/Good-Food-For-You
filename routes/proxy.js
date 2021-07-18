const router = require("express").Router();
const proxyController = require("../controllers/proxyController");

router
  .route("/mealData/:mealData")
  .get(proxyController.getMealPlanData);

router
  .route("/productData/:productData")
  .get(proxyController.getIngredient);

module.exports = router;
