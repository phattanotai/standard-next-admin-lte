const express = require('express');
const route = express.Router();
const controller = require('../controllers/wallets.controller');

//////////////////////// tb_wallets ///////////////////////
route.get("/wallets", controller.getAllwallets);
route.get("/wallets/:id", controller.getWalletsById);
route.get("/wallets_byagent/:agent", controller.getWalletsByAgent);
route.post("/wallets/get/", controller.getWallets);
route.post("/wallets/register", controller.createWallets);
route.put("/wallets/:id", controller.updateWallets);
route.delete("/wallets/:id", controller.deleteWallets);
///////////////////// end tb_wallets ////////////////////////

module.exports = route;

