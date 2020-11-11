const multer = require('multer');
const {
    apilog,
    apiDebuglog,
    apiErrorlog,
    ReturnErr,
    ReturnSuccess,
    ReturnUnSuccess,
    ReturnCustom,
    sha256Encrypt,
    sha256Verify,
    getMonday
} = require("../functions/utility.function");
const { tb_brands,
        tb_game_provider,
        tb_game_list } = require('../models');


const DIR = __dirname + '/public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

module.exports.upload = multer({
    storage: storage
});

module.exports.uploadlogo = multer({
    storage: storage2
});

module.exports.getAllBrands = async (req, res) => {
    try{
        apilog('Get brands all');
        await tb_brands.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find brands result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find brands error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getBrandById = async (req, res) => {
    try{
        apilog('Get brands by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_brands.find({ _id: gId }).then(
                function (result) {
                    apiDebuglog("find brands id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find brands id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find brands id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createBrand = async (req, res) => {
    try{
        apilog('Post create brands');
        apilog('body::==' + req.body);
        const brands = req.body;
        if (brands) {
            const Brands = new tb_brands(brands);
            await Brands.save().then(
                function (result) {
                    apiDebuglog("brands save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id, image: result.image }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("brands save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("brands save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateBrand = async (req, res) => {
    try{
        apilog('Put Update brands');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const brands = req.body;
        const gId = req.params.id
    
        if (brands && gId) {
    
            await tb_brands.findByIdAndUpdate(gId, { $set: brands }).then(
                function (result) {
                    apiDebuglog("brands update id " + gId + " successfully", result);
                    apiDebuglog("original_brand_img => " + brands.original_brand_img);
                    apiDebuglog("brand_img => " + brands.brand_img);
                    if (brands.brand_img !== brands.original_brand_img) {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + brands.original_brand_img;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + brands.original_brand_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                });
                            } else {
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        } catch (err) {
                            console.error(err)
                        }
    
                    } else {
                        return res.json(ReturnSuccess(2000, { id: result._id }));
                    }
                    //return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("brands update id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("brands update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteBrand = async (req, res) => {
    try{
        apilog('Delete brands by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_brands.findByIdAndDelete({ _id: gId }).then(
                function (result) {
                    apiDebuglog("delete brands id " + gId + " successfully", result);
                    if (result.brand_img && result.brand_img !== '') {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + result.brand_img;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + result.brand_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                });
                            } else {
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        } catch (err) {
                            console.error(err);
                            return res.json(ReturnSuccess(2002, { id: result._id }));
                        }
    
                    } else {
                        return res.json(ReturnSuccess(2000, { id: result._id }));
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete brands id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete brands id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.getBrandSort = async (req, res) => {
    try{
        apilog('Get brands by id');
        apilog('params::==' + req.params);
        /*     const gId = req.params.id
            if (gId) { */
        let data = [];
        await tb_brands.find({ brand_sort: { $gte: 1 } }).sort({ brand_sort: 1 }).then(
            function (result) {
                apiDebuglog("find brands successfully", result);
                var brands = result;
                //return res.json(ReturnSuccess(2000, result)); 
                tb_game_provider.find({}).sort({ brand_sort: 1 }).then(
                    function (result) {
                        var i;
                        for (i = 0; i < brands.length; i++) {
                            if (brands[i].brand_code != 'QTECH') {
                                data.push({
                                    '_id': brands[i]._id, 'brand_code': brands[i].brand_code, 'brand_name': brands[i].brand_name,
                                    'brand_img': brands[i].brand_img, 'brand_sort': brands[i].brand_sort,'brand_status': brands[i].brand_status
                                });
                            }
                        }
                        for (i = 0; i < result.length; i++) {
                            data.push({
                                '_id': result[i]._id, 'brand_code': result[i].game_code, 'brand_name': result[i].game_name,
                                'brand_img': result[i].game_img, 'brand_sort': result[i].brand_sort,'brand_status': result[i].game_status
                            });
                        }
                        return res.json(ReturnSuccess(2000, data));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find brands id " + gId + " error 2001", err);
                        return res.json(ReturnErr(err));
                    }
                );
    
            }
        ).catch(
            function (err) {
                apiErrorlog("find brands error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
        /*  } else {
             apilog("find brands id error 2002 : No request params value.");
             return res.json(ReturnSuccess(2002, "No request params value."));
         } */
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.getBrandSortUpdate = async (req, res) => {
    try{
        apilog('Get brands by id');
        apilog('params::==' + req.params);
    
        let data = [];
        let gamelist = await tb_game_list.find({ game_type: 'Slot' });
        let brands_slot = [];
        gamelist.forEach((game) => {
            //console.log(game);
            if (!brands_slot.includes(game.game_brand)) {
                brands_slot.push(game.game_brand);
            }
        })
        console.log('brands_slot : ' + brands_slot);
        let brands = await tb_brands.find({});
        let provider = await tb_game_provider.find({});
        var i, j = 1, k;
        for (i = 0; i < brands.length; i++) {
            var a;
            if (brands_slot.includes(brands[i].brand_code)) {
                if (brands[i].brand_code != 'QTECH') {
                    a = { 'brand_sort': j };
                    j++;
                } else {
                    a = { 'brand_sort': 0 };
                }
            }
            else {
                a = { 'brand_sort': 0 };
            }
            await tb_brands.update({ _id: brands[i]._id }, { $set: a });
            console.log('brands : ' + brands[i].brand_code + ' edit success.');
    
        }
        for (k = 0; k < provider.length; k++) {
            var a = { 'brand_sort': j };
            await tb_game_provider.update({ _id: provider[k]._id }, { $set: a });
            console.log('provider : ' + provider[k].game_code + ' edit success.');
            j++;
        }
        return res.json(ReturnSuccess(2000, 'success'));
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.postBrandSortUpdate = async (req, res) => {
    try{
        apilog('Get brands by id');
        apilog('params::==' + req.params);
        apilog('body::==' + req.body);
        const body_brands = req.body;
    
        const { data } = body_brands;
        console.log('data : ' + JSON.stringify(data));
    
        let gamelist = await tb_game_list.find({ game_type: 'Slot' });
        let brands_slot = [];
        gamelist.forEach((game) => {
            if (!brands_slot.includes(game.game_brand)) {
                brands_slot.push(game.game_brand);
            }
        })
        let brands = await tb_brands.find({});
        let provider = await tb_game_provider.find({});
        var i, k, m;
        for (i = 0; i < brands.length; i++) {
            var a;
            if (brands_slot.includes(brands[i].brand_code)) {
                if (brands[i].brand_code != 'QTECH') {
                    for (m = 0; m < data.length; m++) {
                        if (data[m].brand_code == brands[i].brand_code) {
                            a = { 'brand_sort': data[m].brand_sort };
                            await tb_brands.update({ _id: data[m]._id }, { $set: a });
                            console.log('brands : ' + data[m].brand_code + ' edit success.');
                            break;
                        }
                    }
                }
            }
        }
        for (k = 0; k < provider.length; k++) {
            for (m = 0; m < data.length; m++) {
                if (data[m].brand_code == provider[k].game_code) {
                    a = { 'brand_sort': data[m].brand_sort };
                    await tb_game_provider.update({ _id: data[m]._id }, { $set: a });
                    console.log('provider : ' + data[m].brand_code + ' edit success.');
                    break;
                }
            }
        }
        return res.json(ReturnSuccess(2000, 'success'));
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

