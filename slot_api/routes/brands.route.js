const express = require('express');
const route = express.Router();

const controller = require('../controllers/brands.controller');

//////////////////////// tb_brands ///////////////////////
route.post("/upload", controller.upload.single('file'), (req, res) => {
    return res.json(ReturnSuccess(2000, req.file));
    //return res.send(req.file);
});
route.post("/uploadlogo", controller.uploadlogo.single('file'), (req, res) => {
    return res.json(ReturnSuccess(2000, req.file));
    //return res.send(req.file);
});
route.get("/brands", controller.getAllBrands);
route.get("/brands/:id", controller.getBrandById);
route.post("/brands", controller.createBrand);
route.put("/brands/:id", controller.updateBrand);
route.delete("/brands/:id", controller.deleteBrand);
route.get("/brands_sort", controller.getBrandSort);
route.get("/brands_sort_update", controller.getBrandSortUpdate);
route.post("/brands_sort_update", controller.postBrandSortUpdate);

///////////////////// end tb_brands ////////////////////////
module.exports = route;