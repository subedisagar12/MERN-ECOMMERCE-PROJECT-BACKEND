const express = require("express");
const userRoutes = express.Router();
const { RegisterUser, LoginUser } = require("../controllers/UserController");

userRoutes.post("/register", RegisterUser);

userRoutes.post("/login", LoginUser);

module.exports = userRoutes;
