const express = require('express');
const route = express.Router();
const controller = require('../controllers/menu.controller');

//////////////////////// tb_menu ///////////////////////
route.get("/menu", controller.getMenu);
route.get("/menu/:id", controller.getMenuByID);
route.post("/menu", controller.createMenu);
route.put("/menu/:id", controller.updateMenu);
route.delete("/menu/:id", controller.deleteMenu);
///////////////////// end tb_menu ////////////////////////

module.exports = route;
