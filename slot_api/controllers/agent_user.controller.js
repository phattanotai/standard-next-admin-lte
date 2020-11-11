const moment = require('moment-timezone');
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
const {tb_agent_user} = require('../models');

module.exports.getAgentAllUser = async (req, res) => {
    try{
        apilog('Get agent user all');
        await tb_agent_user.find({}).then(
            function (result) {
                apiDebuglog("find agent user result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent user error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentUserById = async (req, res) => {
    try{
        apilog('Get agent user by id');
        apilog('params::==' + req.params);
        const auId = req.params.id
        if (auId) {
            await tb_agent_user.find({ _id: auId }).then(
                function (result) {
                    apiDebuglog("find agent user id " + auId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent user id " + auId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent user id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentUserByCode = async (req, res) => {
    try{
        apilog('Get agent user by agentcode');
        apilog('params::==' + req.params);
        const aCode = req.params.code
        if (aCode) {
            await tb_agent_user.find({ agent_code: aCode }).then(
                function (result) {
                    apiDebuglog("find agent user by agentcode " + aCode + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent user by agentcode " + aCode + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find agent user by agentcode error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createAgentUser = async (req, res) => {
    try{
        apilog('Post create agent user');
        apilog('body::==' + req.body);
        const agent = req.body;
    
        if (agent) {
            await tb_agent_user.find({ user_name: agent.user_name, agent_code: agent.agent_code }).then(
                function (result) {
                    apiDebuglog("find agent user name :" + agent.user_name + " successfully", result);
                    apilog('agent user dup => ' + result.length);
                    if (result.length > 0) {
                        //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this user name is aleary in system.'})) 
                        return res.json(ReturnCustom(1003, 'Can not add because this user name is aleary in system.', []));
                    }
                    else {
                        agent.user_pass = sha256Encrypt(agent.user_pass);
                        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                        agent.add_date = tz;
                        const Agent = new tb_agent_user(agent);
                        Agent.save().then(
                            function (result) {
                                apiDebuglog("agent user save successfully", { id: result._id });
                                return res.json(ReturnSuccess(2000, result));
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("agent user save error 2001", err);
                                return res.json(ReturnErr(err));
                            }
                        );
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("find user name : " + user.user_name + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent user save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateAgentUser = async (req, res) => {
    try{
        apilog('Put Update agent user');
        apilog('body::==' + JSON.stringify(req.body));
        apilog('params::==' + req.params);
        const agent = req.body;
        const auId = req.params.id
    
        if (agent && auId) {
            if (agent.user_pass && agent.user_pass != "") {
                apilog('gen password');
                agent.user_pass = sha256Encrypt(agent.user_pass);
            }
            await tb_agent_user.findByIdAndUpdate(auId, { $set: agent }).then(
                function (result) {
                    apiDebuglog("agent user update id " + auId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("agent user update id " + auId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("agent user update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteAgentUser = async (req, res) => {
    try{
        apilog('Delete alert by id');
        apilog('params::==' + req.params);
        const auId = req.params.id
        if (auId) {
            await tb_agent_user.findByIdAndDelete({ _id: auId }).then(
                function (result) {
                    apiDebuglog("delete agent user id " + auId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete agent user id " + auId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete agent user id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
