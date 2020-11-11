const express = require('express');
const route = express.Router();
const controller = require('../controllers/user_level.controller');

//////////////////////// tb_user_level ///////////////////////
route.get("/user_level", controller.getAllUserLevel);
route.get("/user_level/:id", controller.getUserLevelById);
route.post("/user_level", controller.createUserLevel);
route.put("/user_level/:id", controller.updateUserLevel);
route.delete("/user_level/:id", controller.deleteUserLevel);
///////////////////// end tb_user_level ////////////////////////
module.exports = route;

