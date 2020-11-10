const utilily_ft = require("../functions/utility.function");
const tb_game_list = require('../models/tb_game_list');

module.exports.getGameList = (req, res) => {
    try{
        apilog('Get game list all');
        await tb_game_list.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find game list result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game list error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGameListById = (req, res) => {
    try{
        apilog('Get game list by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_game_list.find({ _id: gId }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find game list id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game list id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find game list id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGameInfoByCode = (req, res) => {
    try{
        apilog('Get game list by id');
        apilog('params::==' + req.params);
        const gId = req.params.game_code
        if (gId) {
            await tb_game_list.find({ game_code: gId }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find game code " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game code " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find game code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGameListByBrand = (req, res) => {
    try{
        apilog('Get game list by id');
        apilog('params::==' + JSON.stringify(req.params));
        const brand = req.params.brand
        if (brand) {
            await tb_game_list.find({ game_brand: brand }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find game list brand " + brand + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game list brand " + brand + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find game list brand error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createGameList = (req, res) => {
    try{
        apilog('Post create game list');
        apilog('body::==' + req.body);
        const games = req.body;
    
        if (games) {
    
            const Games = new tb_game_list(games);
            await Games.save().then(
                function (result) {
                    apiDebuglog("game list save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("game list save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("game list save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.addGameList = (req, res) => {
    try{
        apilog('Post create game list');
        apilog('body::==' + req.body);
        const games = req.body;
    
        if (games) {
            await tb_game_list.find({ game_brand: games.game_brand, game_code: games.game_code, game_id: games.game_id, game_id2: games.game_id2 }).then(
                function (result) {
                    apiDebuglog("find game list brand " + games.game_brand + " successfully", result);
                    if (result.length > 0) {
                        return res.json(ReturnSuccess(2003, "Duplicate record"));
                    } else {
                        //return res.json(ReturnSuccess(2000, "No Duplicate"));
                        const Games = new tb_game_list(games);
                        Games.save().then(
                            function (result) {
                                apiDebuglog("game list save successfully", result);
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        ).catch(
    
                            function (err) {
                                apiErrorlog("game list save error 2001", err);
                                return res.json(ReturnErr(err));
                            }
                        );
    
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game list brand " + brand + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
    
    
        } else {
            apilog("game list save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateGameList = (req, res) => {
    try{
        apilog('Put Update game list');
        apilog('body::==' + JSON.stringify(req.body));
        apilog('params::==' + req.params);
        const games = req.body;
        const gId = req.params.id
    
        if (games && gId) {
    
            await tb_game_list.findByIdAndUpdate(gId, { $set: games }).then(
                function (result) {
                    apiDebuglog("game list update id " + gId + " successfully", result);
                    apiDebuglog("original_game_img => " + games.original_game_img);
                    apiDebuglog("game_img => " + games.game_img);
                    if (games.original_game_img && games.game_img && games.game_img !== games.original_game_img) {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + result.original_game_img;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + games.original_game_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    //return res.json(ReturnSuccess(2000, { id: result._id }));
                                    apiDebuglog("original_game_img_app => " + games.original_game_img_app);
                                    apiDebuglog("game_img => " + games.game_img_app);
                                    if (games.original_game_img_app && games.game_img_app && games.game_img_app !== games.original_game_img_app) {
                                        var fs = require('fs');
                                        try {
                                            path = __dirname + '/public/' + result.original_game_img_app;
                                            if (fs.existsSync(path)) {
                                                //file exists
                                                fs.unlink(__dirname + '/public/' + games.original_game_img_app, function (err) {
                                                    if (err) throw err;
                                                    console.log('Image file deleted!');
                                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                                });
                                            } else {
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            }
                                        } catch (err) {
                                            console.error(err);
                                            return res.json(ReturnErr(err));
                                        }
    
                                    } else {
                                        return res.json(ReturnSuccess(2000, { id: result._id }));
                                    }
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
                }
            ).catch(
                function (err) {
                    apiErrorlog("game list update id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("game list update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.deleteGameLiat = (req, res) => {
    try{
        apilog('Delete game list by id');
        apilog('params::==' + req.params);
        const gId = true;
        if (gId) {
            await tb_game_list.deleteMany().then(
                function (result) {
                    apiDebuglog("delete game list All successfully", result);
                    /* if (result.game_img && result.game_img !== '') {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + result.game_img;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    //return res.json(ReturnSuccess(2000, { id: result._id }));
                                    if (result.game_img_app && result.game_img_app !== '') {
                                        var fs = require('fs');
                                        try {
                                            path = __dirname + '/public/' + result.game_img_app;
                                            if (fs.existsSync(path)) {
                                                //file exists
                                                fs.unlink(__dirname + '/public/' + result.game_img_app, function (err) {
                                                    if (err) throw err;
                                                    console.log('Image app file deleted!');
                                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                                });
                                            } else {
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            }
                                        } catch (err) {
                                            console.error(err)
                                            return res.json(ReturnErr(err));
                                        }
    
                                    } else {
                                        return res.json(ReturnSuccess(2000, { id: result._id }));
                                    }
                                });
                            } else {
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        } catch (err) {
                            console.error(err)
                        }
    
                    } else {
                        return res.json(ReturnSuccess(2000, { id: result._id }));
                    } */
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete game list id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete game list id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}


module.exports.deleteGameLiatById = (req, res) => {
    try{
        apilog('Delete game list by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_game_list.findByIdAndDelete({ _id: gId }).then(
                function (result) {
                    apiDebuglog("delete game list id " + gId + " successfully", result);
                    if (result.game_img && result.game_img !== '') {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + result.game_img;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    //return res.json(ReturnSuccess(2000, { id: result._id }));
                                    if (result.game_img_app && result.game_img_app !== '') {
                                        var fs = require('fs');
                                        try {
                                            path = __dirname + '/public/' + result.game_img_app;
                                            if (fs.existsSync(path)) {
                                                //file exists
                                                fs.unlink(__dirname + '/public/' + result.game_img_app, function (err) {
                                                    if (err) throw err;
                                                    console.log('Image app file deleted!');
                                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                                });
                                            } else {
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            }
                                        } catch (err) {
                                            console.error(err)
                                            return res.json(ReturnErr(err));
                                        }
    
                                    } else {
                                        return res.json(ReturnSuccess(2000, { id: result._id }));
                                    }
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
                    apiErrorlog("delete game list id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete game list id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}