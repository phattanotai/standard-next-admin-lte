const express = require('express');
const route = express.Router();
const controller = require('../controllers/user.controller');

//////////////////////// tb_user ///////////////////////
//////////////////// test OK BY TOM////////////////////
route.get("/user", controller.getAlluser);
route.get("/user/:id", controller.getUserById);
route.post("/user", controller.createUser);
route.put("/user/:id", controller.updateUser);
route.delete("/user/:id", controller.deleteUser);
///////////////////// end tb_user ////////////////////////

module.exports = route;
