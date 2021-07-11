const mongoose = require("mongoose");
const db = require("../models");

// This must be redone to reflect our Project 3 data/information

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/goodfoods_db");

const productSeed = [
  {
    title: "Heinz Tomato Ketchup Value Size, 69 oz Bottle",
    image: "https://spoonacular.com/productImages/18742-312x231.jpeg",
    price: "$4.99",
    description: "A big bottle of Ketchup",
    ingredientList: "Tomatoes, sugar, and water."
  },
  {
    title: "Heinz Organic Tomato Ketchup, 17 Oz",
    image: "https://spoonacular.com/productImages/66586-312x231.jpeg",
    price: "$4.03",
    description: "A big 17oz bottle of Ketchup",
    ingredientList: "Tomatoes, sugar, and water."
  },
  {
    title: "Heinz Goodness  Ketchup, 15 oz",
    image: "https://spoonacular.com/productImages/111806-312x231.jpeg",
    price: "$3.23",
    description: "A small 15oz bottle of Ketchup",
    ingredientList: "Tomatoes, sugar, and water."
  },
  {
    title: "Heinz Tomato Ketchup, 2 ct Pack, 71.5 oz Bottles",
    image: "https://spoonacular.com/productImages/73829-312x231.jpeg",
    price: "$5.96",
    description: "Two 71.5oz bottles of Ketchup",
    ingredientList: "Tomatoes, sugar, and water."
  },
  {
    title: "Hungry Man Country Fried Chicken Frozen Dinner, 16 oz.",
    image: "https://spoonacular.com/productImages/15603-312x231.jpeg",
    price: "$2.99",
    description: "Try these other delicious varieties. Boneless fried chicken. Tender chicken patties with home style, mashed potatoes and, corn - includes a chocolate brownie, 1 lb of food. Salisbury steak. In home style mushroom and onion gravy with creamy mashed potatoes and tender green beans - includes a chocolate brownie, 1 lb of food. Roasted carved white meat turkey. White meat turkey with home style gravy, seasoned stuffing, creamy mashed potatoes and mixed vegetables - includes an apple cranberry dessert, 1 lb of food. Questions or comments? 1-800-719-5859. www.hungry-man.com.",
    ingredientList: "Chicken, flour, gravy, corn, and other toppings. "
  }
];

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
