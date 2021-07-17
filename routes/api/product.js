const router = require("express").Router();
const productController = require("../../controllers/productController");
const proxyController = require("../../controllers/proxyController");

// const spoonProductUrl = `https://api.spoonacular.com/food/products/search?apiKey=${spoonApiKey}&query=`;

// Matches with "/api/product"
router
  .route("/")
  .get(productController.findAll)
  .post(productController.create);

// Matches with "/api/foods/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

// API Route to Spoonacular


    

module.exports = router;
