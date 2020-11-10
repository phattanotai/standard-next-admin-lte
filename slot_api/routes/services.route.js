const express = require('express');
const route = express.Router();
const controller = require('../controllers/service.controller');

//////////////////////// tb_services ///////////////////////
route.get("/services", controller.getAllServices);
route.get("/services/:id", controller.getServicesById);
route.get("/services_agent/:agcode", controller.getServicesByAgent);
route.post("/getservices", controller.getServices);
route.post("/services", controller.createServices);
route.put("/services/:id", controller.updateServices);
route.delete("/services/:id", controller.daleteServies);
///////////////////// end tb_services ////////////////////////
module.exports = route;