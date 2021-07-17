const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema ({
  fname: { type: String, required: true },
  lname: { type: String, required: false },
  email: { type: String, required: true },
  zipcode: { type: String, required: true },
  password: { type: String, required: true },
  regdate: { type: Date, default: Date.now}
   
});

const User = mongoose.model("User", userSchema);
module.exports = User;
