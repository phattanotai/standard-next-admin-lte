const express = require('express');
const route = express.Router();
const controller = require('../controllers/alert.controller');
//////////////////////// tb_alert ///////////////////
//////////////////// test OK BY TOM//////////////////

route.get("/alert", controller.getAllAlert);
route.get("/alert/:id", controller.getAlertById);
route.post("/alert", controller.createAlert);
route.put("/alert/:id", controller.updateAlert);
route.delete("/alert/:id", controller.deleteAlert);

///////////////////// end tb_alert /////////////////////
module.exports = route;
