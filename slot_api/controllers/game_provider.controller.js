const utilily_ft = require("../functions/utility.function");
const tb_game_provider = require('../models/tb_game_provider');

module.exports.getAllGameProvider = (req, res) => {
    try{
        apilog('Get game provider all');
        await tb_game_provider.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find game provider result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game provider error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGameProviderById = (req, res) => {
    try{
        apilog('Get game provider by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_game_provider.find({ _id: gId }).then(
                function (result) {
                    apiDebuglog("find game provider id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game provider id " + gId + " error 2001", err);
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

module.exports.getGameProviderByCode = (req, res) => {
    try{
        apilog('Get game provider by id');
        apilog('params::==' + req.params);
        const gId = req.params.game_code
        if (gId) {
            await tb_game_provider.find({ game_code: gId }).then(
                function (result) {
                    apiDebuglog("find game code from provider " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game code from provider" + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find game code from provider error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGameProviderBybrand = (req, res) => {
    try{
        apilog('Get game provider by id');
        apilog('params::==' + JSON.stringify(req.params));
        const brand = req.params.brand
        if (brand) {
            await tb_game_provider.find({ game_brand: brand }).then(
                function (result) {
                    apiDebuglog("find game provider brand " + brand + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game list brand " + brand + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find game provider brand error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createGameProvider = (req, res) => {
    try{
        apilog('Post create game provider');
        apilog('body::==' + req.body);
        const games = req.body;
    
        if (games) {
    
            const Games = new tb_game_provider(games);
            await Games.save().then(
                function (result) {
                    apiDebuglog("game provider save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("game provider save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("game provider save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.addGameProvider = (req, res) => {
    try{
        apilog('Post create game provider');
        apilog('body::==' + req.body);
        const games = req.body;
    
        if (games) {
            await tb_game_provider.find({ game_brand: games.game_brand, game_code: games.game_code, game_name: game_name }).then(
                function (result) {
                    apiDebuglog("find game provider brand " + games.game_brand + " successfully", result);
                    if (result.length > 0) {
                        return res.json(ReturnSuccess(2003, "Duplicate record"));
                    } else {
                        //return res.json(ReturnSuccess(2000, "No Duplicate"));
                        const Games = new tb_game_provider(games);
                        Games.save().then(
                            function (result) {
                                apiDebuglog("game provider save successfully", result);
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        ).catch(
    
                            function (err) {
                                apiErrorlog("game provider save error 2001", err);
                                return res.json(ReturnErr(err));
                            }
                        );
    
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("find game provider brand " + brand + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
    
    
        } else {
            apilog("game provider save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateGameProvider = (req, res) => {
    try{
        apilog('Put Update game provider');
        apilog('body::==' + JSON.stringify(req.body));
        apilog('params::==' + req.params);
        const games = req.body;
        const gId = req.params.id
    
        if (games && gId) {
    
            await tb_game_provider.findByIdAndUpdate(gId, { $set: games }).then(
                function (result) {
                    apiDebuglog("game provider update id " + gId + " successfully", result);
                    apiDebuglog("original_game_img => " + games.original_game_img);
                    apiDebuglog("game_img => " + games.game_img);
                    if (games.original_game_img && games.game_img && games.game_img !== games.original_game_img) {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + games.original_game_img;;
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
                                            path = __dirname + '/public/' + games.original_game_img;
                                            if (fs.existsSync(path)) {
                                                //file exists
                                                fs.unlink(__dirname + '/public/' + games.original_game_img, function (err) {
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
                    apiErrorlog("game provider update id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("game provider update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.deleteGameProvider = (req, res) => {
    try{
        apilog('Delete game provider by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_game_provider.findByIdAndDelete({ _id: gId }).then(
                function (result) {
                    apiDebuglog("delete game provider id " + gId + " successfully", result);
                    if (result.game_img && result.game_img !== '') {
                        var fs = require('fs');
                        try {
                            var path = __dirname + '/public/' + result.game_img;;
                            if (fs.existsSync(path)) {
                                //file exists
                                fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                    if (err) throw err;
                                    console.log('Image file deleted!');
                                    //return res.json(ReturnSuccess(2000, { id: result._id }));
                                    if (result.game_img_app && result.game_img_app !== '') {
                                        var fs = require('fs');
                                        try {
                                            path = __dirname + '/public/' + result.game_img_app;;
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
                    apiErrorlog("delete game provider id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete game provider id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

// module.exports.a = (req, res) => {
//     try{

//     }catch(err){
//         return res.json(ReturnErr(err));
//     }
// }
