const utilily_ft = require("../functions/utility.function");
const tb_games_bonus = require('../models/tb_games_bonus');

module.exports.getAllGamesBonus = (req, res) => {
    try{
        apilog('Get games_bonus all');
        await tb_games_bonus.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_bonus result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_bonus error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesBonusById = (req, res) => {
    try{
        apilog('Get games_bonus by id');
        apilog('params::==', req.params);
        const games_bonus_id = req.params.id
        if (games_bonus_id) {
            await tb_games_bonus.find({ _id: games_bonus_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_bonus id " + games_bonus_id + " successfully", games_bonus_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_bonus id " + games_bonus_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesBonusByAgent = (req, res) => {
    try{
        apilog('Get games_bonus by agent_code');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_games_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_bonus agent_code " + agent_code + " successfully", agent_code)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_bonus agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createGamesBonus = (req, res) => {
    try{
        apilog('Post create games_bonus');
        apilog('body::==' + req.body);
    
        const games_bonus = req.body;
    
        if (games_bonus) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_bonus.create_at = tz;
            games_bonus.update_at = tz;
            const Games_bonus = new tb_games_bonus(games_bonus);
            await Games_bonus.save().then(
                function (result) {
                    apiDebuglog("games_bonus save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_bonus save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_bonus save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateGamesBonus = (req, res) => {
    try{
        apilog('Put Update games_bonus');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const games_bonus = req.body;
        const games_bonusId = req.params.id
    
        if (games_bonus && games_bonusId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_bonus.update_at = tz;
            await tb_games_bonus.findByIdAndUpdate(games_bonusId, { $set: games_bonus }).then(
                function (result) {
                    apiDebuglog("games_bonus update id " + games_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_bonus save id " + games_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_bonus update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteGamesBonus= (req, res) => {
    try{
        apilog('Delete games_bonus by id');
        apilog('params::==' + req.params);
        const games_bonusId = req.params.id
        if (games_bonusId) {
            await tb_games_bonus.findByIdAndDelete({ _id: games_bonusId }).then(
                function (result) {
                    apiDebuglog("delete games_bonus id " + games_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete games_bonus id " + games_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete games_bonus error 2002 : No request params value.");
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