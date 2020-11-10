const express = require('express');
const route = express.Router();
const controller = require('../controllers/games_share.controller');

//////////////////////// tb_share ///////////////////
//////////////////// test OK BY TOM//////////////////

route.get("/games_share", controller.getAllGamesShare);
route.get("/games_share/:id", controller.getGamesShareById);
route.get("/games_share_byagent/:agent_code", controller.getGamesShareById);
route.post("/games_share", controller.getGamesShareByAgent);
route.put("/games_share/:id", controller.updateGamesShare);
route.delete("/games_share/:id", controller.daleteGamesShare);

///////////////////// end tb_share /////////////////////
module.exports = route;