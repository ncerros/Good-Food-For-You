const axios = require("axios");
require('dotenv').config();

module.exports = {
  getMealPlanData: async (req, res) => {
    //add API_KEY variable to your .env file
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${process.env.API_KEY}`);
    return res.json(response);
  },

  getIngredient: async (req, res) => {
    //add API_KEY variable to your .env file
    const dataPull = req.params.dataPull;
    const pullResult = await axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.API_KEY}&query=` + dataPull);
    console.log(pullResult)
    //res.json(response)
    res.json(pullResult.data)
  },

};
