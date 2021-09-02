//importing modules-->
const express = require("express");
const User = require("../models/userModel");
//user handlers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      msg: "success",
      length: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({ msg: "Cannot get all users", error });
  }
};
exports.getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      msg: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ msg: "Cannot get user", error });
  }
};
exports.addMovie = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $push: { comments: req.body.comments },
    });
    console.log(user.comments);
    /* {
      new: true,
      runValidators: true,
    } */
    res.status(200).json({
      msg: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ msg: "Cannot add movie", error });
  }
};
