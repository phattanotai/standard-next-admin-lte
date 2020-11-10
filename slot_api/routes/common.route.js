
const express = require('express');
const route = express.Router();
const controller = require('../controllers/common.controller');

/////////////////////// common function ///////////////////
route.get('/backend', controller.backend);
route.get('/check_mem_token/:member/:token', controller.checkMemberToken);
route.post('/login', controller.login);
route.post('/agentlogin', controller.agentLogin);
route.post('/memberlogin', controller.memberLogin);
route.post('/memberlogin1', controller.memberLogin1);
route.post('/memberlogin2', controller.memberLogin2);
route.get("/member_logoff/:id",controller.memberLogoffByid);
route.get("/gamelistbyagent/:agent_code", controller.getGamelistByAgent);
route.get("/loadgames_all_byagent/:agent_code", controller.loadAllGameByAgant);
route.get("/loadgamesbyagent/:agent_code", controller.loadGameByAgant);
route.get("/brandlistbyagent/:agent_code", controller.getBrandListByAgent);
//////////////////// end common function //////////////////

module.exports = route;
