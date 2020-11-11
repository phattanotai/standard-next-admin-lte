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

const { tb_agent_bonus } = require('../models');

module.exports.getAgentAllBonus = async (req, res) => {
    try{
        apilog('Get agent_bonus all');
        await tb_agent_bonus.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find agent_bonus result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent_bonus error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentBonusById = async (req, res) => {
    try{
        apilog('Get agent_bonus by id');
        apilog('params::==', req.params);
        const agent_bonus_id = req.params.id
        if (agent_bonus_id) {
            await tb_agent_bonus.find({ _id: agent_bonus_id }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find agent_bonus id " + agent_bonus_id + " successfully", agent_bonus_id)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent_bonus id " + agent_bonus_id + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentBonusByCode = async (req, res) => {
    try{
        apilog('Get agent_bonus by agent_code');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_agent_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find agent_bonus agent_code " + agent_code + " successfully", agent_code)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent_bonus agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentBonusByType = async (req, res) => {
    try{
        apilog('Get agent_bonus by agent_code');
        apilog('params::==', req.params);
        const agent_code = req.params.agent_code
        const bonus_type = req.params.type
        if (agent_code) {
            await tb_agent_bonus.find({ agent_code: agent_code, bonus_type: bonus_type, bonus_status: 1 }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find agent_bonus agent_code " + agent_code + " successfully", agent_code)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent_bonus agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent_bonus id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createAgentBonus = async (req, res) => {
    try{
        apilog('Post create agent_bonus');
        apilog('body::==' + req.body);
    
        const agent_bonus = req.body;
    
        if (agent_bonus) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            agent_bonus.create_at = tz;
            agent_bonus.update_at = tz;
            const Agent_bonus = new tb_agent_bonus(agent_bonus);
            await Agent_bonus.save().then(
                function (result) {
                    apiDebuglog("agent_bonus save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("agent_bonus save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent_bonus save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateAgentBonus = async (req, res) => {
    try{
        apilog('Put Update agent_bonus');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const agent_bonus = req.body;
        const agent_bonusId = req.params.id
    
        if (agent_bonus && agent_bonusId) {
            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
            agent_bonus.update_at = tz;
            await tb_agent_bonus.findByIdAndUpdate(agent_bonusId, { $set: agent_bonus }).then(
                function (result) {
                    apiDebuglog("agent_bonus update id " + agent_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("agent_bonus save id " + agent_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent_bonus update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteAgentBonus = async (req, res) => {
    try{
        apilog('Delete agent_bonus by id');
        apilog('params::==' + req.params);
        const agent_bonusId = req.params.id
        if (agent_bonusId) {
            await tb_agent_bonus.findByIdAndDelete({ _id: agent_bonusId }).then(
                function (result) {
                    apiDebuglog("delete agent_bonus id " + agent_bonusId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Delete agent_bonus id " + agent_bonusId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete agent_bonus error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}