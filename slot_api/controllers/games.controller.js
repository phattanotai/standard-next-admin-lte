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
} = require("../functions");
const {tb_games} = require('../models');

module.exports.getAllGames = async (req, res) => {
    try{
        apilog('Get games all');
        await tb_games.find({}).then(
            function (result) {
                apiDebuglog("find games result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesById = async (req, res) => {
    try{
        apilog('Get games by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_games.find({ _id: gId }).then(
                function (result) {
                    apiDebuglog("find games id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createGame = async (req, res) => {
    try{
        apilog('Post create games');
        apilog('body::==' + req.body);
        const games = req.body;
    
        if (games) {
    
            const Brands = new tb_games(games);
            await Brands.save().then(
                function (result) {
                    apiDebuglog("games save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateGame = async (req, res) => {
    try{
        apilog('Put Update games');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const games = req.body;
        const gId = req.params.id
    
        if (games && gId) {
    
            await tb_games.findByIdAndUpdate(gId, { $set: games }).then(
                function (result) {
                    apiDebuglog("games update id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games update id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteGame = async (req, res) => {
    try{
        apilog('Delete games by id');
        apilog('params::==' + req.params);
        const gId = req.params.id
        if (gId) {
            await tb_games.findByIdAndDelete({ _id: gId }).then(
                function (result) {
                    apiDebuglog("delete games id " + gId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete games id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete games id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
