const express = require('express');
const route = express.Router();
const controller = require('../controllers/agent.controller');

//////////////////////// tb_agent ///////////////////////
route.get("/agent", controller.getAllAgent);
route.get("/agent/:id", controller.getAgentById);
route.get("/agentbycode/:agent_code", controller.getAgentByCode);
route.get("/listagentmaster/:agent_code", controller.getAgentByLineup);
route.post("/agent", controller.createAgent);
route.put("/agent/:id", controller.updateAgent);
route.delete("/agent/:id", controller.deleteAgent);
///////////////////// end tb_agent ////////////////////////

module.exports = route;