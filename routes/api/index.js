const router = require("express").Router();
const productRoutes = require("./product");
const authRoutes = require("./auth");
const ingredientRoutes = require("./ingredient");

//const userRoutes = require("./user");

// Product routes
router.use("/product", productRoutes);

// Authorization routes
router.use("/auth", authRoutes);

//User routes
//router.use("/user", userRoutes);

// Ingredient routes
router.use("/ingredient", ingredientRoutes);

module.exports = router;
