const router = require("express").Router();
const productRoutes = require("./product");
const authRoutes = require("./auth");

// Product routes
router.use("/product", productRoutes);

// Authorization routes
router.use("/auth", authRoutes);

module.exports = router;
