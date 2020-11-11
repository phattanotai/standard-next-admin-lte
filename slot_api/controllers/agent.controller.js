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
const {tb_agent} = require('../models');

module.exports.getAllAgent = async (req, res) => {
    try{
        apilog('Get agent all');
        await tb_agent.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find agent result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentById = async (req, res) => {
    try{
        apilog('Get agent by id');
        apilog('params::==' + req.params);
        const agId = req.params.id
        if (agId) {
            await tb_agent.find({ _id: agId }).then(
                function (result) {
                    apiDebuglog("find agent id " + agId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent id " + agId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentByCode = async (req, res) => {
    try{
        apilog('Get agent by id');
        apilog('params::==' + req.params);
        const agId = req.params.agent_code
        if (agId) {
            await tb_agent.find({ agent_code: agId }).then(
                function (result) {
                    apiDebuglog("find agent_code " + agId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent_code " + agId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent_code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentByLineup = async (req, res) => {
    try{
        apilog('Get agent by agent_code');
        apilog('params::==' + req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_agent.find({ agent_lineup: agent_code }).then(
                function (result) {
                    apiDebuglog("find agent by agent_code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent by agent_code " + agent_code + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent by agent_code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createAgent = async (req, res) => {
    try{
        apilog('Post create agent');
        apilog('body::==' + req.body);
        const agent = req.body;
    
        if (agent) {
    
            const Agent = new tb_agent(agent);
            await Agent.save().then(
                function (result) {
                    apiDebuglog("agent save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("agent save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateAgent = async (req, res) => {
    try{
        apilog('Put Update agent');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const agent = req.body;
        const agId = req.params.id
    
        if (agent && agId) {
    
            await tb_agent.findByIdAndUpdate(agId, { $set: agent }).then(
                function (result) {
                    apiDebuglog("agent update id " + agId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("agent update id " + agId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteAgent = async (req, res) => {
    try{
        apilog('Delete agent by id');
        apilog('params::==' + req.params);
        const agId = req.params.id
        if (agId) {
            await tb_agent.findByIdAndDelete({ _id: agId }).then(
                function (result) {
                    apiDebuglog("delete agent id " + agId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete agent id " + agId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete agent id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}