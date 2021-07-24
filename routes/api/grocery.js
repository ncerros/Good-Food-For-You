const router = require("express").Router();
const groceryController = require("../../controllers/groceryController");

// Routes to grocery references

router
  .route("/:groceryData")
  .get(groceryController.getGrocery);
   
router
  .route("/")
  .get(groceryController.findAll)
  .post(groceryController.create);

router
  .route("/:id")
  .delete(groceryController.remove);



// // routes on standby"
// router
//   .route("/:id")
//   .get(groceryController.findById)
//   .put(groceryController.update)
//   .delete(groceryController.remove);
// API Route to Spoonacular
  

module.exports = router;