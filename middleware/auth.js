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
        return res.status(401).json({message: "You Do Not Have Authorization!"});
      }
      
    } catch(error) {
        console.log("You Do Not Have Authorization!")
    }
  };