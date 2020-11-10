const express = require('express');
const route = express.Router();
const controller = require('../controllers/member.controller');

//////////////////////// tb_member ///////////////////////
route.get("/member", controller.getAllMember);
route.get("/member/foragent/:agent_code", controller.getMemberByAgent);
route.get("/member/getBalance/:id", controller.getBalanceByID);
route.get("/member/get/:id", controller.getMemberById);
route.get("/member/info/:id", controller.getMemberByUsername);
route.post("/member/register", controller.createMember);
route.put("/member/:id", controller.updateMember);
route.put("/member/deposit/:id", controller.updateMemberDeposit);
route.put("/member/topup/:id", controller.updateMemberTopupByid);
route.put("/member/withdraw/:id", controller.updateMemberWithdrawById);
route.put("/member/WithdrawAll/:id", controller.updateAllMemberWithdrawById);
route.delete("/member/:id", controller.deleteMember);
///////////////////// end tb_member ////////////////////////

module.exports = route;
