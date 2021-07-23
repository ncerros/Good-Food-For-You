const router = require("express").Router();
const productRoutes = require("./product");
const authRoutes = require("./auth");
const groceryRoutes = require("./grocery");

//const userRoutes = require("./user");

// Product routes
router.use("/product", productRoutes);

// Authorization routes
router.use("/auth", authRoutes);

//User routes
//router.use("/user", userRoutes);

// grocery routes
router.use("/grocery", groceryRoutes);

module.exports = router;
