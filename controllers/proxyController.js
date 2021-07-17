const axios = require("axios");
require('dotenv').config();

module.exports = {
  getMealPlanData: async () => {
    //add API_KEY variable to your .env file
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${API_KEY}`);
    return res.json(response);
  }
};
