const express = require('express');
const route = express.Router();
const controller = require('../controllers/games_bonus.controller');
//////////////////////// tb_games_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/games_bonus", controller.getAllGamesBonus);
route.get("/games_bonus/:id", controller.getGamesBonusById);
route.get("/games_bonusForAgent/:agent_code", controller.getGamesBonusByAgent);
route.post("/games_bonus", controller.createGamesBonus);
route.put("/games_bonus/:id", controller.updateGamesBonus);
route.delete("/games_bonus/:id", controller.deleteGamesBonus);
///////////////////// end tb_games_bonus /////////////////////

module.exports = route;