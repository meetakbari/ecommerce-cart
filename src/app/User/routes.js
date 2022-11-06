const router = require("express").Router();

// using controller to access data repository
const userController = require("./controller");

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);
//get user by id, delete user, update emailId methods can be added here

module.exports = router;