const router = require("express").Router();
const productRoutes = require("./product");
const userRoutes = require("./user");
const groceryRoutes = require("./grocery");
const mealPlanRoutes = require("./mealPlan")
//const userRoutes = require("./user");

// Product routes
router.use("/product", productRoutes);

// User Authorization routes
router.use("/user", userRoutes);

//User routes
//router.use("/user", userRoutes);

// grocery routes
router.use("/grocery", groceryRoutes);
router.use("/mealPlan", mealPlanRoutes);

module.exports = router;
