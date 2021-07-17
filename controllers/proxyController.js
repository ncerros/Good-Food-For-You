const axios = require("axios");

module.exports = {
  getMealPlanData: async () => {
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${spoonApiKey}`);
    return res.json(response);
  }
};
