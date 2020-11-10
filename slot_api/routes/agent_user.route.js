
const express = require('express');
const route = express.Router();
const controller = require('../controllers/agent_user.controller')

//////////////////////// tb_agent_user /////////////////
//////////////////// test OK BY TOM/////////////////////
route.get("/agent_user",controller.getAgentAllUser);
route.get("/agent_user/:id",controller.getAgentUserById );
route.get("/get_agentuser_from_agentcode/:code",controller.getAgentUserByCode);
route.post("/agent_user", controller.createAgentUser);
route.put("/agent_user/:id", controller.updateAgentUser);
route.delete("/agent_user/:id", controller.deleteAgentUser);
///////////////////// end tb_agent_user /////////////////

module.exports = route;