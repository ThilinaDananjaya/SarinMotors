const express = require("express");
const router = express.Router();
const userSession = require("../models/usersession.model");
const bcrypt = require("bcrypt");

app.post("/login", (req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Email cannot be blank.",
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Email cannot be blank.",
    });
  }

  User.find(
    {
      email: email,
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Server error",
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Invalid",
        });
      }
      const user = user[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Invalid Password",
        });
      }
      const userSession = new userSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error",
          });
        }
        return res.send({
          success: true,
          message: "Valid Login",
          token: doc._id,
        });
      });
    }
  );
});

// router.post("/login", async (request, response) => {
//   const saltPassword = await bcrypt.genSalt(10);
//   const securePassword = await bcrypt.hash(request.body.password, saltPassword);

//   const loggedInUser = new loginTemplateCopy({
//     fullName: request.body.fullName,
//     username: request.body.username,
//     email: request.body.email,
//     password: securePassword,
//   });
//   loggedInUser
//     .save()
//     .then((data) => {
//       response.json(data);
//     })
//     .catch((error) => {
//       response.json(error);
//     });
// });

module.exports = router;
