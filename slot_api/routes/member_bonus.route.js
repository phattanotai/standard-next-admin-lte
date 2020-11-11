const express = require('express');
const route = express.Router();
const controller = require('../controllers/member_bonus.controller');

//////////////////////// tb_member_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/member_bonus", controller.getAllMemberBonus);
route.get("/member_bonus/:id", controller.getMemberBonusById);
route.get("/member_bonus_redeem/:agent_code/:redeem", controller.getMemberBonusByRedeem);
route.get("/member_bonusForAgent/:agent_code", controller.getMemberBonusByAgent);
route.post("/member_bonus", controller.createMemberBonus);
route.put("/member_bonus/:id", controller.updateMemberBonus);
route.delete("/member_bonus/:id", controller.deleteMemberBonus);
///////////////////// end tb_member_bonus /////////////////////
module.exports = route;