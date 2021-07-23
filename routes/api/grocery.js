const router = require("express").Router();
const groceryController = require("../../controllers/groceryController");

// Matches with "/api/grocery"

router
  .route("/:groceryData")
  .get(groceryController.getGrocery);
   
router
  .route("/")

  .post(groceryController.create);

// // Matches with "/api/grocery/:id"
// router
//   .route("/:id")
//   .get(groceryController.findById)
//   .put(groceryController.update)
//   .delete(groceryController.remove);

// API Route to Spoonacular
  

module.exports = router;