const express = require("express");
const router = express.Router();
//importing controllers-->
const usersController = require("../controllers/userController");
const authController = require("../controllers/authController");

//destructuring controllers-->
const { getAllUsers, getUserbyId, addMovie } = usersController;
const { protectRoute } = authController;

//routing requests
router.route("/").get(protectRoute, getAllUsers);
router.route("/:id").get(getUserbyId).post(protectRoute, addMovie);

module.exports = router;
