const utilily_ft = require("../functions/utility.function");
const tb_member_runno = require('../models/tb_member_runno');

module.exports.getAllMemberRunno = (req, res) => {
    try{
        apilog('Get memberRunno all');
        await tb_member_runno.find({}).then(
            function (result) {
                apiDebuglog("find memberRunno result successfully" + result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find memberRunno error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get memberRunno." }));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberRunnoByAgent = (req, res) => {
    try{
        apilog('Get memberRunno by id');
        apilog('params::==' + req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_member_runno.find({ agent_code: agent_code }).then(
                function (result) {
                    apiDebuglog("find memberRunno agent_code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find memberRunno agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get memberRunno agent_code: " + agent_code }));
                }
            );
        } else {
            apilog("find memberRunno id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberRunnoById = (req, res) => {
    try{
        apilog('Get memberRunno by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_member_runno.find({ running_id: uId }).then(
                function (result) {
                    apiDebuglog("find memberRunno id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find memberRunno id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get memberRunno id: " + uId }));
                }
            );
        } else {
            apilog("find memberRunno id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createMemberRunno = (req, res) => {
    try{
        apilog('Post create memberRunno');
        apilog('body::==' + req.body);
        const memberRunno = req.body;
    
        if (memberRunno) {
            const MemberRunno = new tb_member_runno(memberRunno);
            await MemberRunno.save().then(
                function (result) {
                    apiDebuglog("memberRunno save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("memberRunno save error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for add memberRunno." }));
                }
            );
        } else {
            apilog("memberRunno save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateMemberRunno = (req, res) => {
    try{
        apilog('Put Update memberRunno');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const memberRunno = req.body;
        const uId = req.params.id
    
        if (memberRunno && uId) {
    
            await tb_member_runno.findByIdAndUpdate(uId, { $set: memberRunno }).then(
                function (result) {
                    //console.log("agent user update result : " + result);
                    apiDebuglog("memberRunno update id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    //console.log("agent user update error 2001 : " + err);
                    apiErrorlog("memberRunno update id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update memberRunno id: " + uId }));
                }
            );
        } else {
            apilog("memberRunno update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.daleteMemberRunno = (req, res) => {
    try{
        apilog('Delete memberRunno by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_member_runno.findByIdAndDelete({ _id: uId }).then(
                function (result) {
                    //console.log("delete agent user id result : " + result);
                    apiDebuglog("delete memberRunno id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    //console.log("delete agent user id error 2001 : " + err);
                    apiErrorlog("delete memberRunno id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for delete memberRunno id: " + uId }));
                }
            );
        } else {
            apilog("delete memberRunno id error 2002 : No request params value.");
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