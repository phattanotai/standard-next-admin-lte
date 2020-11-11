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
const {tb_share} = require('../models');

module.exports.getAllGamesShare = async (req, res) => {
    try{
        apilog('Get games_share all');
        await tb_share.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_share result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_share error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesShareById = async (req, res) => {
    try{
        apilog('Get games_share by id');
        apilog('params::==', req.params);
        const share_id = req.params.id
        if (share_id) {
            await tb_share.find({ _id: share_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_share id " + share_id + " successfully", result)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_share id " + share_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games_share id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesShareById = async (req, res) => {
    try{
        apilog('Get games_share by id');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_share.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_share agent_code " + agent_code + " successfully", result)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_share agent_code" + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games_share id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getGamesShareByAgent = async (req, res) => {
    try{
        apilog('Post create games_share');
        apilog('body::==' + req.body);
    
        const games_share = req.body;
    
        if (games_share) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_share.create_at = tz;
            games_share.update_at = tz;
            const Games_share = new tb_share(games_share);
            await Games_share.save().then(
                function (result) {
                    apiDebuglog("games_share save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_share save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_share save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateGamesShare = async (req, res) => {
    try{
        apilog('Put Update games_share');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const games_share = req.body;
        const games_shareId = req.params.id
    
        if (games_share && games_shareId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_share.update_at = tz;
            await tb_share.findByIdAndUpdate(games_shareId, { $set: games_share }).then(
                function (result) {
                    apiDebuglog("games_share update id " + games_shareId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_share save id " + games_shareId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_share update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.daleteGamesShare = async (req, res) => {
    try{
        apilog('Delete games_share by id');
        apilog('params::==' + req.params);
        const games_shareId = req.params.id
        if (games_shareId) {
            await tb_share.findByIdAndDelete({ _id: games_shareId }).then(
                function (result) {
                    apiDebuglog("delete games_share id " + games_shareId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete games_share id " + games_shareId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete games_share error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}