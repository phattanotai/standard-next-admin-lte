const utilily_ft = require("../functions/utility.function");
const tb_gameslucky = require('../models/tb_gameslucky');

module.exports.getAllGamesLucky = (req, res) => {
    try{
        apilog('Get gameslucky all');
        await tb_gameslucky.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find gameslucky result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find gameslucky error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesLuckyById = (req, res) => {
    try{
        apilog('Get gameslucky by id');
        apilog('params::==', req.params);
        const gameslucky_id = req.params.id
        if (gameslucky_id) {
            await tb_gameslucky.find({ _id: gameslucky_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find gameslucky id " + gameslucky_id + " successfully", gameslucky_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find gameslucky id " + gameslucky_id + " error 2001", err);
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

module.exports.creacteGamesLucky = (req, res) => {
    try{
        apilog('Post create gameslucky');
        apilog('body::==' + req.body);
    
        const gameslucky = req.body;
    
        if (gameslucky) {
            //var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            //games_bonus.create_at = tz;
            //games_bonus.update_at = tz;
            const Gameslucky = new tb_gameslucky(gameslucky);
            await Gameslucky.save().then(
                function (result) {
                    apiDebuglog("gameslucky save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("gameslucky save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("gameslucky save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateGamesLucky = (req, res) => {
    try{
        apilog('Put Update gameslucky');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const gameslucky = req.body;
        const gamesluckyId = req.params.id
    
        if (gameslucky && gamesluckyId) {
            //var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            //games_bonus.update_at = tz;
            await tb_gameslucky.findByIdAndUpdate(gamesluckyId, { $set: gameslucky }).then(
                function (result) {
                    apiDebuglog("gameslucky update id " + gamesluckyId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("gameslucky save id " + gamesluckyId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("gameslucky update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteGamesLucky = (req, res) => {
    try{
        apilog('Delete gameslucky by id');
        apilog('params::==' + req.params);
        const gamesluckyId = req.params.id
        if (gamesluckyId) {
            await tb_gameslucky.findByIdAndDelete({ _id: gamesluckyId }).then(
                function (result) {
                    apiDebuglog("delete gameslucky id " + gamesluckyId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete gameslucky id " + games_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete gameslucky error 2002 : No request params value.");
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
