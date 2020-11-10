const express = require('express');
const route = express.Router();
const controller = require('../controllers/games_lucky.controller');

//////////////////////// tb_gameslucky ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/gameslucky", controller.getAllGamesLucky);
route.get("/gameslucky/:id", controller.getGamesLuckyById);
route.post("/gameslucky", controller.creacteGamesLucky);
route.put("/gameslucky/:id", controller.updateGamesLucky);
route.delete("/gameslucky/:id", controller.deleteGamesLucky);
///////////////////// end tb_gameslucky /////////////////////

module.exports = route;