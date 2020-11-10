
const tb_agent_bonus = require('../models/tb_agent_bonus');
const controller = require("../controllers/agent_bonus.controller");

//////////////////////// tb_agent_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/agent_bonus", controller.getAgentAllBonus);
route.get("/agent_bonus/:id", controller.getAgentBonusById);
route.get("/agent_bonusForAgent/:agent_code", controller.getAgentBonusByCode);
route.get("/agent_bonusForAgent/:agent_code/:type", controller.getAgentBonusByType);
route.post("/agent_bonus", controller.createAgentBonus);
route.put("/agent_bonus/:id", controller.updateAgentBonus);
route.delete("/agent_bonus/:id", controller.deleteAgentBonus);
///////////////////// end tb_agent_bonus /////////////////////

module.exports = route;