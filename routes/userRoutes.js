const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
  try {
    let salt = bcrypt.genSaltSync();
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);

    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: hashedPassword,
      profile_picture: req.body.profile_picture,
    });

    res.json({
      message: "User Registered successfully",
      data: newUser,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

userRoutes.post("/login", async (req, res) => {
  try {
    // Finding the user by email sent by client
    let myUser = await User.findOne({ email: req.body.email });

    // If user doesnot exist
    if (!myUser) {
      res.status(400).json({ message: "Email doesnot exist" });
    } else {
      // Check if the passwords match
      let passwordMatched = bcrypt.compareSync(
        req.body.password,
        myUser.password
      );
      if (!passwordMatched) {
        res.status(400).json({ message: "Incorrect password" });
      } else {
        //payload, secretkey deko
        let token = jwt.sign(
          {
            _id: myUser._id,
          },
          "qqidhuiqewhfbdsbvvkjvkjl%bdbd&dndn#butyjaisanss",
          {
            expiresIn: "3d",
          }
        );
        res.json({
          message: "Login successful",
          data: myUser,
          access_token: token,
        });
      }
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = userRoutes;
