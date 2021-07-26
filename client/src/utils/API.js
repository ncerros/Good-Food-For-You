import axios from "axios";



// get all products
export default {
  getProducts: function() {
    return axios.get("/api/product");
  },

  getProduct: function(id) {
    return axios.get("/api/product/" + id);
    // return axios.get("/api/product/" + id);
  },

  deleteProduct: function(id) {
    return axios.delete("/api/product/" + id);
  },

  // save a food to the database
  saveProduct: function(productData) {
    return axios.post("/api/product", productData)
  },

  // api product data pull from spoonacular
  spoonPull: function(pull) {
    return axios.get("/proxy/productData/" + pull);
  },

  //  Looking for user status
  getCurrentUser: function() {
    return axios.get("/api/user")
  },
  // saveUser: function() {
  //   return
  // },


  // api grocery data pull from spoonacular
  getGroceries: function() {
    return axios.get("/api/grocery");
  },

  getGrocery: function(id) {
    return axios.get("/api/grocery/" + id);
    // return axios.get("/api/product/" + id);
  },

  deleteGrocery: function(id) {
    return axios.delete("/api/grocery/" + id);
  },

  // save a food to the database
  saveGrocery: function(groceryData) {
    return axios.post("/api/grocery", groceryData)
  },

  // api product data pull from spoonacular
  spoonGrocery: function(searchTerm) {
    return axios.get("/api/grocery/" + searchTerm);
  },

  getGroceryList: function() {
    return axios.get("/api/grocery");
  },
  getMealPlans: function() {
    return axios.get("/api/mealPlan/");
  },

  saveMealPlan: function(plan) {
    // console.log(plan)
    return axios.post("/api/mealPlan/", plan);
  },

  generateMealPlan: function(query) {
    return axios.get("/proxy/" + query);
  },


};

  

