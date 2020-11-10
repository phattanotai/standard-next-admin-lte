const express = require('express');
const route = express.Router();
const controller = require('../controllers/member_runno.controller');

//////////////////////// tb_member_runno ///////////////////////
route.get("/memberRunno", controller.getAllMemberRunno);
route.get("/getmemberRunno/:agent_code", controller.getMemberRunnoByAgent);
route.get("/memberRunno/:id", controller.getMemberRunnoById);
route.post("/memberRunno", controller.createMemberRunno);
route.put("/memberRunno/:id", controller.updateMemberRunno);
route.delete("/memberRunno/:id", controller.daleteMemberRunno);
///////////////////// end tb_member_runno ////////////////////////

module.exports = route;
