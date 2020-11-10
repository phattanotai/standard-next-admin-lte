const utilily_ft = require("../functions/utility.function");
const tb_member_bonus = require('../models/tb_member_bonus');

module.exports.getAllMemberBonus = (req, res) => {
    try{
        apilog('Get member_bonus all');
        await tb_member_bonus.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find member_bonus result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find member_bonus error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberBonusById = (req, res) => {
    try{
        apilog('Get member_bonus by id');
        apilog('params::==', req.params);
        const member_bonus_id = req.params.id
        if (member_bonus_id) {
            await tb_member_bonus.find({ _id: member_bonus_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member_bonus id " + member_bonus_id + " successfully", member_bonus_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member_bonus id " + member_bonus_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find member_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberBonusByRedeem = (req, res) => {
    try{
        apilog('Get member_bonus by id');
        apilog('params::==', req.params);
        const member_bonus_id = req.params.redeem
        if (member_bonus_id) {
            await tb_member_bonus.find({ member_bonus_redeem: member_bonus_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member_bonus_redeem " + member_bonus_id + " successfully", member_bonus_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member_bonus_redeem " + member_bonus_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find member_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberBonusByAgent = (req, res) => {
    try{
        apilog('Get member_bonus by agent_code');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_member_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member_bonus agent_code " + agent_code + " successfully", agent_code)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member_bonus agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find member_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createMemberBonus = (req, res) => {
    try{
        apilog('Post create member_bonus');
        apilog('body::==' + req.body);
    
        const member_bonus = req.body;
    
        if (member_bonus) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            member_bonus.create_at = tz;
            member_bonus.update_at = tz;
            var r = sha256Encrypt(member_bonus.member_name + member_bonus.bonus_name + tz.toString());
            member_bonus.member_bonus_redeem = r.substr(10, 10);
            const Member_bonus = new tb_member_bonus(member_bonus);
            await Member_bonus.save().then(
                function (result) {
                    apiDebuglog("member_bonus save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id, bonus_redeem: member_bonus.member_bonus_redeem }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("member_bonus save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("member_bonus save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateMemberBonus = (req, res) => {
    try{
        apilog('Put Update member_bonus');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member_bonus = req.body;
        const member_bonusId = req.params.id
    
        if (member_bonus && member_bonusId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            member_bonus.update_at = tz;
            await tb_member_bonus.findByIdAndUpdate(member_bonusId, { $set: member_bonus }).then(
                function (result) {
                    apiDebuglog("member_bonus update id " + member_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("member_bonus save id " + member_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("member_bonus update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteMemberBonus = (req, res) => {
    try{
        apilog('Delete member_bonus by id');
        apilog('params::==' + req.params);
        const member_bonusId = req.params.id
        if (member_bonusId) {
            await tb_member_bonus.findByIdAndDelete({ _id: member_bonusId }).then(
                function (result) {
                    apiDebuglog("delete member_bonus id " + member_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete member_bonus id " + member_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete member_bonus error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}