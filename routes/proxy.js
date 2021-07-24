const router = require("express").Router();
const proxyController = require("../controllers/proxyController");

router
  .route("/mealData/:mealData")
  .get(proxyController.getMealPlanData);


router
  .route("/productData/:productData")
  .get(proxyController.getIngredient);
  //This is the route for the products
router
  .route("/:query")
  .get(proxyController.generateMealPlan);

// router
//   .route("/groceryData/:groceryData")
//   .get(proxyController.getGrocery)

module.exports = router;
