const axios = require("axios");
require('dotenv').config();


module.exports = {
  getMealPlanData: async (req, res) => {
    //add API_KEY variable to your .env file
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${process.env.API_KEY}`);
    return res.json(response);
  },

  getGrocery: async (req, res) => {
    const groceryPull = req.params.groceryData;
    const thaResult = await axios.get(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.API_KEY}&query=${groceryPull}&addProductInformation=true&number=1`);
    res.json(thaResult.data)
  },

  getIngredient: async (req, res) => {
   //add API_KEY variable to your .env file
    const dataPull = req.params.productData;
    //const pullResult = await axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.API_KEY}&query=${dataPull}&addProductInformation=true&number=1`);
    //res.json(pullResult.data)
    //above commented out to allow fake hardcoded data below to save hits on API
    res.json(
      {
      "type": "product",
      "products": [
        {
          "id": 192386,
          "title": "Honey Baked Pizza: Frozen Pizza Dough, 16 Oz",
          "price": "$8.52",
          "likes": 1,
          "badges": [
            "egg_free",
            "msg_free",
            "no_artificial_colors",
            "peanut_free",
            "no_artificial_flavors",
            "sugar_free",
            "sulfite_free",
            "vegetarian",
            "no_artificial_ingredients",
            "nut_free",
            "dairy_free",
            "no_preservatives"
          ],
          "importantBadges": [
            "no_preservatives",
            "no_artificial_flavors",
            "no_artificial_colors",
            "no_artificial_ingredients",
            "sulfite_free",
            "nut_free"
          ],
          "nutrition": {
            "nutrients": [
              {
                "name": "Calcium",
                "title": "Calcium",
                "amount": 10.0,
                "unit": "mg",
                "percentOfDailyNeeds": 1.0
              },
              {
                "name": "Cholesterol",
                "title": "Cholesterol",
                "amount": 0.0,
                "unit": "mg",
                "percentOfDailyNeeds": 0.0
              },
              {
                "name": "Calories",
                "title": "Calories",
                "amount": 113.0,
                "unit": "kcal",
                "percentOfDailyNeeds": 5.65
              },
              {
                "name": "Fat",
                "title": "Fat",
                "amount": 1.5,
                "unit": "g",
                "percentOfDailyNeeds": 2.31
              },
              {
                "name": "Saturated Fat",
                "title": "Saturated Fat",
                "amount": 0.5,
                "unit": "g",
                "percentOfDailyNeeds": 3.13
              },
              {
                "name": "Trans Fat",
                "title": "Trans Fat",
                "amount": 0.0,
                "unit": "g",
                "percentOfDailyNeeds": 0.0
              },
              {
                "name": "Protein",
                "title": "Protein",
                "amount": 4.0,
                "unit": "g",
                "percentOfDailyNeeds": 8.0
              },
              {
                "name": "Sodium",
                "title": "Sodium",
                "amount": 286.0,
                "unit": "mg",
                "percentOfDailyNeeds": 12.43
              },
              {
                "name": "Sugar",
                "title": "Sugar",
                "amount": 1.0,
                "unit": "g",
                "percentOfDailyNeeds": 1.11
              },
              {
                "name": "Vitamin A",
                "title": "Vitamin A",
                "amount": 0.0,
                "unit": "IU",
                "percentOfDailyNeeds": 0.0
              },
              {
                "name": "Vitamin C",
                "title": "Vitamin C",
                "amount": 0.0,
                "unit": "mg",
                "percentOfDailyNeeds": 0.0
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 54.24,
              "percentFat": 45.76,
              "percentCarbs": 0.0
            },
            "calories": 113.0,
            "fat": "1.5g",
            "protein": "4g"
          },
          "servings": {
            "number": 8.0,
            "size": 50.0,
            "unit": "g"
          },
          "spoonacularScore": 10.0,
          "breadcrumbs": [
            "pizza",
            "main dish",
            "menu item type"
          ],
          "aisle": "Frozen",
          "description": "Create a delicious dinner or lunch with Pizza Buddy Pizza Dough. It can be used to make many treats, including breadsticks, calzones, garlic knots and more. It's free of trans fat and cholesterol. Just add the toppings of your choice to your 16-oz pizza dough and experience real pizzeria taste.",
          "image": "https://spoonacular.com/productImages/192386-312x231.jpeg",
          "imageType": "jpeg",
          "images": [
            "https://spoonacular.com/productImages/192386-90x90.jpeg",
            "https://spoonacular.com/productImages/192386-312x231.jpeg",
            "https://spoonacular.com/productImages/192386-636x393.jpeg"
          ],
          "generatedText": null,
          "upc": "759008192667",
          "brand": "Pizza Buddy",
          "ingredients": [
            {
              "name": "added sugar",
              "safety_level": null,
              "description": null
            },
            {
              "name": "additive",
              "safety_level": null,
              "description": null
            },
            {
              "name": "b vitamin",
              "safety_level": null,
              "description": null
            },
            {
              "name": "cooking fat",
              "safety_level": null,
              "description": null
            },
            {
              "name": "cooking oil",
              "safety_level": null,
              "description": null
            },
            {
              "name": "diglycerides",
              "safety_level": null,
              "description": null
            },
            {
              "name": "dough conditioner",
              "safety_level": null,
              "description": null
            },
            {
              "name": "drink",
              "safety_level": null,
              "description": null
            },
            {
              "name": "enriched flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "enzyme",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "flour product",
              "safety_level": null,
              "description": null
            },
            {
              "name": "folic acid",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "gluten free flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "grains",
              "safety_level": null,
              "description": null
            },
            {
              "name": "honey",
              "safety_level": null,
              "description": null
            },
            {
              "name": "invert sugar",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "iodine",
              "safety_level": null,
              "description": null
            },
            {
              "name": "iron",
              "safety_level": null,
              "description": null
            },
            {
              "name": "l cysteine",
              "safety_level": null,
              "description": null
            },
            {
              "name": "menu item type",
              "safety_level": null,
              "description": null
            },
            {
              "name": "mineral",
              "safety_level": null,
              "description": null
            },
            {
              "name": "mono",
              "safety_level": null,
              "description": null
            },
            {
              "name": "niacin",
              "safety_level": null,
              "description": null
            },
            {
              "name": "non food item",
              "safety_level": null,
              "description": null
            },
            {
              "name": "nutrient",
              "safety_level": null,
              "description": null
            },
            {
              "name": "potassium iodate",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "reduced iron",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "riboflavin",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "salt",
              "safety_level": null,
              "description": null
            },
            {
              "name": "silicon",
              "safety_level": null,
              "description": null
            },
            {
              "name": "soy",
              "safety_level": null,
              "description": null
            },
            {
              "name": "soy flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "soybean oil",
              "safety_level": null,
              "description": null
            },
            {
              "name": "supplement",
              "safety_level": null,
              "description": null
            },
            {
              "name": "sweetener",
              "safety_level": null,
              "description": null
            },
            {
              "name": "thiamin",
              "safety_level": null,
              "description": null
            },
            {
              "name": "thiamin mononitrate",
              "safety_level": "high",
              "description": null
            },
            {
              "name": "unbleached",
              "safety_level": null,
              "description": null
            },
            {
              "name": "unbromated",
              "safety_level": null,
              "description": null
            },
            {
              "name": "unrefined sweetener",
              "safety_level": null,
              "description": null
            },
            {
              "name": "vegetable oil",
              "safety_level": null,
              "description": null
            },
            {
              "name": "vitamin",
              "safety_level": null,
              "description": null
            },
            {
              "name": "water",
              "safety_level": null,
              "description": null
            },
            {
              "name": "wheat",
              "safety_level": null,
              "description": null
            },
            {
              "name": "wheat flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "wheat flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "whole wheat flour",
              "safety_level": null,
              "description": null
            },
            {
              "name": "yeast",
              "safety_level": null,
              "description": null
            }
          ],
          "ingredientCount": 25,
          "ingredientList": "Enriched Flour (Wheat Flour, Unbleached, Unbromated , Niacin, Reduced Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Water, Yeast, Whole Wheat Flour. Contains 2% Or Less Of: Honey, Salt, Soybean Oil, Invert Sugar, Mono & Diglycerides, L Cysteine, Potassium Iodate, Enzyme, Soy Flour, Silicon. Contains Wheat, Soy"
        }
      ],
      "offset": 0,
      "number": 1,
      "totalProducts": 1356,
      "processingTimeMs": 79,
      "expires": 1626204868430
    }
    )


  }




};
