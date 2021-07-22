// const db = require("../models");
// const bcrypt = require("bcryptjs");

// userController
// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },


// update user
// router.put("/:id", async (req, res) => {
//     if (req.body.userId === req.params.id) {
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
  
  //module.exports = router;




//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
//};


//const router = require("express").Router();



// Allows user updating of names and email
// Matches with "/api/user/:id"


