const express = require("express");
const router = express.Router();
const loginTemplateCopy = require("../models/login.model");
const bcrypt = require("bcrypt");

router.post("/login", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);

  const loggedInUser = new loginTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: securePassword,
  });
  loggedInUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
