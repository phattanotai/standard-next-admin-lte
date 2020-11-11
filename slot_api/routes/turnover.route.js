const express = require('express');
const route = express.Router();
const controller = require('../controllers/turnover.controller');

//////////////////////// tb_turnover ///////////////////////
route.get("/turnover", controller.getAllTurnOver);
route.get("/turnover/:id", controller.getTurnOverById);
route.get("/turnover/foragent/:agent_code", controller.getTurnOverByAgent);
route.post("/turnover/agent/:agent_code", controller.getAgentTurnOver);
route.post("/turnover", controller.createTurnOver);
route.put("/turnover/:id", controller.updateTurnOver);
route.delete("/turnover/:id", controller.deleteTurnOver);
///////////////////// end tb_turnover ////////////////////////
module.exports = route;
