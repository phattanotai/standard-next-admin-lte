const express = require('express');
const route = express.Router();

const controller = require('../controllers/game_list.controller');

//////////////////////// tb_game_list ///////////////////////
route.get("/gamelist", controller.getGameList);
route.get("/gamelist/:id", controller.getGameListById);
route.get("/gameInfo/:game_code", controller.getGameInfoByCode);
route.get("/gamelistwithbrand/:brand", controller.getGameListByBrand);
route.post("/gamelist", controller.createGameList);
route.post("/addgamelist", controller.addGameList);
route.put("/gamelist/:id", controller.updateGameList);
route.delete("/gamelistAll", controller.deleteGameLiat);
route.delete("/gamelist/:id", controller.deleteGameLiatById);
///////////////////// end tb_game_list ////////////////////////

module.exports = route;