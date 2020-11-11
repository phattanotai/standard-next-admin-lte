const express = require('express');
const route = express.Router();
const controller = require('../controllers/transections.controller');
//////////////////////// tb_transections ///////////////////////

route.get("/transections", controller.getAllTransections);
route.get("/transections/:id", controller.getTransectionsById);
route.get("/transections/agent/:agent_code", controller.getTransectionsByAgent);
route.post("/transections/agent/:agent_code", controller.getAgentTransections);
route.post("/transections", controller.createTransections);
route.put("/transections/:id", controller.updateTransections);
route.delete("/transections/:id", controller.deleteTransections);

///////////////////// end tb_transections ////////////////////////
module.exports = route;
