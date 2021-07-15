const express = require("express");

require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// **Define API routes here**

//console.log(process.env);

// Add routes, both API and view
app.use(routes);
app.use("/api/auth", require("./routes/api/auth"));

// Connect to the Mongo DB


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goodfoods_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error, "Problem Connecting to MongoDB Atlas"));



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
