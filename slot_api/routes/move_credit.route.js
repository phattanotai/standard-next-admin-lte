const express = require('express');
const route = express.Router();
const controller = require('../controllers/move_credit.controller');
//////////////////////// tb_move_credit ///////////////////////

route.get("/moveCredit", controller.getAllMoveCredit);
route.get("/moveCredit/:id", controller.getMoveCreditById);
route.post("/dashboard/agent/:agent_code", controller.getDashboardByAgent);
route.post("/moveCredit/agent/:agent_code", controller.getMoveCreditByAgent);
route.post("/moveCredit", controller.createMoveCredit);
route.get("/UpdateMoveCredit", controller.getUpdateMoveCredit);
route.put("/moveCredit/:id", controller.updateMoveCredit);
route.delete("/moveCredit/:id", controller.deleteMoveCredit);

///////////////////// end tb_move_credit ////////////////////////
module.exports = route;