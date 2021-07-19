const jsonWT = require("jsonwebtoken");
require ("dotenv").config();
  
  exports.authLogin = (req, res, next) => {
    try {
      if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
          // Token Verification
          const decode = jsonWT.verify(token, process.env.SECRET)
          // Add Token to Request
          req.user = decode;
          next();
      } else {
        return res.status(401).json({message: "Your token is not valid!"});
      }
      
    } catch(error) {
        console.log("Your token is not valid!")
    }
  };