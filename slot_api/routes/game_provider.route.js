const express = require('express');
const route = express.Router();
const controller = require('../controllers/game_provider.controller');

//////////////////////// tb_game_list ///////////////////////
route.get("/gameprovider", controller.getAllGameProvider);
route.get("/gameproviderlist/:id", controller.getGameProviderById);
route.get("/gameproviderInfo/:game_code", controller.getGameProviderByCode);
route.get("/gameproviderwithbrand/:brand", controller.getGameProviderBybrand);
route.post("/gameprovider", controller.createGameProvider);
route.post("/addgameprovider", controller.addGameProvider);
route.put("/gameprovider/:id", controller.updateGameProvider);
route.delete("/gameprovider/:id", controller.deleteGameProvider);
///////////////////// end tb_game_provider ////////////////////////

module.exports = route;