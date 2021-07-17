const router = require("express").Router();
const proxyController = require("../controllers/proxyController");

router
  .route("/proxy/:mealData")
  .get(proxyController.getMealPlanData);

module.exports = router;
