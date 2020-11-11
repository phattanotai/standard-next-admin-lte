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
const {tb_member_share} = require('../models');

module.exports.getAllGamesMemberShare = async (req, res) => {
    try{
        apilog('Get games_member_share all');
        await tb_member_share.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_member_share result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_member_share error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAllGamesMemberShareById = async (req, res) => {
    try{
        apilog('Get games_member_share by id');
        apilog('params::==', req.params);
        const share_id = req.params.id
        if (share_id) {
            await tb_member_share.find({ _id: share_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_member_share id " + share_id + " successfully", result)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_member_share id " + share_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find games_member_share id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAllGamesMemberShareByAgent = async (req, res) => {
    try{
        apilog('Get games_member_share by id');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_member_share.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find games_member_share agent_code " + agent_code + " successfully", result)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find games_member_share agent_code" + agent_code + " error 2001", err);
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

module.exports.createGmaesMemberShare = async (req, res) => {
    try{
        apilog('Post create games_member_share');
        apilog('body::==' + req.body);
    
        const games_member_share = req.body;
    
        if (games_member_share) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_member_share.create_at = tz;
            games_member_share.update_at = tz;
            var r = sha256Encrypt(games_member_share.share_member + tz.toString());
            games_member_share.share_redeem = r.substr(10, 10);
            const Games_member_share = new tb_member_share(games_member_share);
            await Games_member_share.save().then(
                function (result) {
                    apiDebuglog("games_member_share save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id, share_redeem: games_member_share.share_redeem }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_member_share save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_member_share save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateGmaesMemberShare = async (req, res) => {
    try{
        apilog('Put Update games_member_share');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const games_member_share = req.body;
        const games_member_shareId = req.params.id
    
        if (games_member_share && games_member_shareId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            games_member_share.update_at = tz;
            await tb_member_share.findByIdAndUpdate(games_member_shareId, { $set: games_member_share }).then(
                function (result) {
                    apiDebuglog("games_member_share update id " + games_member_shareId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("games_member_share save id " + games_member_shareId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("games_member_share update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteGamesMemberShare = async (req, res) => {
    try{
        apilog('Delete games_member_share by id');
        apilog('params::==' + req.params);
        const games_member_shareId = req.params.id
        if (games_member_shareId) {
            await tb_member_share.findByIdAndDelete({ _id: games_member_shareId }).then(
                function (result) {
                    apiDebuglog("delete games_member_share id " + games_member_shareId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete games_member_share id " + games_member_shareId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete games_member_share error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}