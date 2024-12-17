const express = require("express");
const user = require("../models/users.models");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
require("dotenv").config();
const signUp = async (req, res, next) => {
  try {
    const { email, userName, password } = req.body;

    // cheking all fields are filled or not
    if (!(email && userName && password)) {
      return next(new Error("fill all fileds ", 500));
    }

    const existingUser = await user.findOne({
      $or: [{ email: email }, { userName: userName }],
    });

    if (existingUser) {
      const error =
        existingUser.email === email
          ? "Email is already in use"
          : "Username is already taken";
      return next(new Error(error));
    }

    if (password.length >= 8) {
      var hashPassword = await bycrypt.hash(password, 10);
    } else {
      return next(new Error("password must be 8 digit", 500));
    }

    const userDb = new user({
      email,
      userName,
      password: hashPassword,
    });

    await userDb.save();

    // generating a token using a userId

    const token = jwt.sign(
      // payload             //  secret
      { userId: userDb._id },
      process.env.tokenSecret,
      { expiresIn: "1h" }
    );

    // setting up token to the cookie using cookie parser

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, userName, password } = req.body;

    // user can give the email or userName for their login
    if (!(email && password)) {
      return next(new Error("fill all fileds ", 500));
    }

    const userFound = await user.findOne({ email });

    if (!userFound) {
      return next(new Error("user is not found"));
    }

    if (userFound && (await bycrypt.compare(password, userFound.password))) {
      var token = jwt.sign(
        {
          userId: user._id, // payload for generating a token
        },

        process.env.tokenSecret, // a secret is used for generating token
        {
          expiresIn: "1h", // expiry of token
        }
      );
    }

    // setting up cookie to
    res.cookie("token", token, {
      httpOnly: true,
      secure :true
    });



    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req , res ) =>{
  res.clearCookie('token')
  .json('logout sucessfully')
}

const userPayemnt = async (req, res, next) => {
  try {
  } catch (error) {}
};
module.exports = { signUp, login , logout };
