const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const jsonWT = require("jsonwebtoken");
const { authLogin } = require("../../middleware/auth");
require('dotenv').config();
// const verify = require("../../verifyToken");

// register user 4th
router
  .post("/register", async (req, res) => {
    const { fname, lname, email, zipcode, password } = req.body;
    // console.log(req.body)
    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(409).json({ error: "This email address is not available to register!" });
      }
      const hashPwd = await bcrypt.hash(password, 12)
      user = new User({
        fname,
        lname,
        email,
        zipcode,
        password: hashPwd,
      })
      await user.save();
      
      return res.status(201).json({ message: `Your account has been successfully created.` });
    } catch (error) {
      // console.log(error)
      return res.status(400).json({ error: error.message });
    }

  });

// user login 5th
router
  .post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "There are problems with your login!" });
      }

      const thaPwd = await bcrypt.compare(password, user.password);
      if (!thaPwd) {
        return res.status(401).json({ error: "There are problems with your login!" });
      }

      // add SECRET variable to your .env
      const token = jsonWT.sign({ _id: user._id }, process.env.SECRET, {
        expiresIn: "1800000",
      });
      req.session.user = user
      // await req.session.save(() => {
      //   req.session.user._id = user.id;
      //   req.session.logged_in = true;
      // });
      return res.json({
        token,
        user: {
          _id: user._id,
          fname: user.fname,
          lname: user.fname,
          email: user.email,
          zipcode: user.zipcode,
        },
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  });

// *** Make a protected route must be logged in to access route 8th *** /
router
  .get("/", authLogin, async (req, res) => {
    // console.log(req.user);
    try {
      const user = await User.findById(req.user._id).select("-password -__v");
      // console.log("Status of current logged on user: ", user)
      const userData = {
        user,
        token: req.user
      }
      // console.log(userData)
      res.json(userData);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  });

  //Update User with jsWT
  router.put("/:id", authLogin, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {console.log (req.body.password)
        req.body.password = await bcrypt.hash(password, 12);
      }
  
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not authorized to update this account");
    }
  });


module.exports = router;

 // update user without jsonWT
// router
//   .put("/:id", async (req, res) => {
//     if (req.body.user._id === req.params.id) {
//       if (req.body.password) {
//         console.log(req.user)
//         const salt = await bcrypt.genSalt(12);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//       }
//       try {
//         const updatedUser = await user.findByIdAndUpdate(req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedUser);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("This is not your account to update");
//     }
//   });
  
 

