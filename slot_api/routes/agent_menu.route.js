const express = require("express");
const route = express.Router();
const controller = require("../controllers/agent_menu.controller");

//////////////////////// tb_agent_menu ///////////////////////
route.get("/agent_menu", controller.getAgentAllMenu);
route.get("/agent_menu/:id", controller.getAgentMenuById);
route.post("/agent_menu", controller.createAgentMenu);
route.put("/agent_menu/:id", controller.updateAgentMenu);
route.delete("/agent_menu/:id", controller.deleteAgentMenu);
///////////////////// end tb_agent_menu ////////////////////////

module.exports = route;
