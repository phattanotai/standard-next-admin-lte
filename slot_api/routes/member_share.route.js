const express = require('express');
const route = express.Router();
const controller = require('../controllers/member_share.controller');

//////////////////////// tb_member_share ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/games_member_share", controller.getAllGamesMemberShare);
route.get("/games_member_share/:id", controller.getAllGamesMemberShareById);
route.get("/games_member_share_byagent/:agent_code", controller.getAllGamesMemberShareByAgent);
route.post("/games_member_share", controller.createGmaesMemberShare);
route.put("/games_member_share/:id", controller.updateGmaesMemberShare);
route.delete("/games_member_share/:id", controller.deleteGamesMemberShare);
///////////////////// end tb_member_share /////////////////////

module.exports = route;