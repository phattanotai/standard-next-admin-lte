const express = require('express');
const route = express.Router();
const controller = require('../controllers/games.controller');

//////////////////////// tb_games ///////////////////////
////////////////////////TEST OK BY TOM  //////////////////
route.get("/games", controller.getAllGames);
route.get("/games/:id", controller.getGamesById);
route.post("/games", controller.createGame);
route.put("/games/:id", controller.updateGame);
route.delete("/games/:id", controller.deleteGame);
///////////////////// end tb_games ////////////////////////

module.exports = route;