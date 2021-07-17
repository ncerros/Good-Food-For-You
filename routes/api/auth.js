const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const jsonWT = require("jsonwebtoken");
const { authLogin } = require("../../middleware/auth");
require('dotenv').config();

// register user 4th
router
  .post("/register", async (req, res) => {
    const { fname, lname, email, zipcode, password } = req.body
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
      return res.status(201).json({ message: `${fname} ${lname}, your account has been successfully created.` });
    } catch (error) {
      console.log(error)
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
        expiresIn: "1h",
      });
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
    console.log(req.user);
    try {
      const user = await User.findById(req.user._id).select("-password -__v");
      res.json(user);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  });

module.exports = router;