const express = require("express");
const route = express.Router();
const controller = require("../controllers/news.controller");

//////////////////////// tb_news ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/news", controller.getAllNews);
route.get("/news/:id", controller.getNewsById);
route.get("/newsForAgent/:agent_code", controller.getNewsByAgent);
route.post("/news", controller.createNews);
route.put("/news/:id", controller.updateNews);
route.delete("/news/:id", controller.deleteNews);

///////////////////// end tb_news /////////////////////
module.exports = route;
