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
    return axios.get("/proxy/" + pull);
  }

};

  

