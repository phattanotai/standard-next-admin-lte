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
} = require("../functions/utility.function");
const {tb_member,tb_agent,tb_transections,tb_member_runno} = require('../models');

module.exports.getAllMember = async (req, res) => {
    try{
        apilog('Get member all');
        await tb_member.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find member result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find member error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get inormation member" }));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberByAgent = async (req, res) => {
    try{
        apilog('Get member foragent');
        apilog('params::==' + req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_member.find({ agent_code: agent_code }).then(
                function (result) {
                    apiDebuglog("Get member foragent " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("Get member foragent " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member foragent " + agent_code }));
                }
            );
        } else {
            apilog("Get member foragent error 2002 : No request params value.");
            return res.json(ReturnUnSuccess(2002, { message: "No request params value." }));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getBalanceByID = async (req, res) => {
    try{
        apilog('Get Balance by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get Balance member id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { mem_balance: result[0].mem_balance }));
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("Get Balance member id " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get balance member id: " + sId }));
                }
            );
        } else {
            apilog("Get Balance id error 2002 : No request params value.");
            return res.json(ReturnUnSuccess(2002, { message: "No request params value." }));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMemberById = async (req, res) => {
    try{
        apilog('Get info by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_member.find({ _id: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Get info member id " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get inormation member id: " + sId }));
                }
            );
        } else {
            apilog("Get info id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.getMemberByUsername = async (req, res) => {
    try{
        apilog('Get info by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("Get info member id " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get inormation member id: " + sId }));
                }
            );
        } else {
            apilog("Get info id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createMember = async (req, res) => {
    try{
        apilog('Post create member');
        apilog('body::==' + JSON.stringify(req.body));
        const member = req.body;
    
        if (member) {
            apilog('Post create member mem_date_add : ' + member.mem_date_add);
            await tb_agent.find({ agent_code: member.agent_code }).then(
                function (result) {
                    apiDebuglog("find agent " + member.agent_code + " successfully", result);
    
                    if (result.length > 0) {
                        tb_member_runno.find({ agent_code: member.agent_code }).then(
                            function (result) {
                                apiDebuglog("find memberRunno id " + 1 + " successfully", result);
                                if (result.length > 0) {
                                    apilog("have agent runner");
                                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                    member.mem_date_add = tz;
                                    apiDebuglog('result.running_number' + result[0].running_number);
                                    const num = result[0].running_number + 1;
                                    const uId = result[0]._id
                                    var num_str = num.toString();
                                    var tmp = '';
                                    if (num_str.length < 6) {
                                        var i;
                                        for (i = 0; i < 6 - num_str.length; i++) {
                                            tmp = tmp + '0';
                                        }
                                    }
                                    const memberRunno = { running_number: num };
                                    member.mem_username = member.agent_code + tmp + num_str;
                                    member.mem_password = sha256Encrypt(member.agent_code + tmp + num_str).substring(0, 8);
                                    const Member = new tb_member(member);
                                    Member.save().then(
                                        function (result2) {
                                            apiDebuglog("member save successfully", result);
                                            const id = result2._id;
                                            tb_member_runno.findByIdAndUpdate(uId, { $set: memberRunno }).then(
                                                function (result) {
                                                    apiDebuglog("memberRunno update id " + uId + " successfully", result);
                                                    return res.json(ReturnSuccess(2000, result2));
                                                }
                                            ).catch(
                                                function (err) {
                                                    //console.log("agent user update error 2001 : " + err);
                                                    apiErrorlog("memberRunno update id " + uId + " error 2001", err);
                                                    //return res.json(ReturnErr(err));
                                                    return res.json(ReturnUnSuccess(20014, { message: "Unsuccess for update memberRunno id: " + uId }));
                                                }
                                            );
    
                                        }
                                    ).catch(
                                        function (err) {
                                            apiErrorlog("member save error 2001", err);
                                            //return res.json(ReturnErr(err));
                                            return res.json(ReturnUnSuccess(20013, { message: "Unsuccess register member" }));
                                        }
                                    );
                                } else {
                                    apilog("don't have agent runner");
                                    const memberRunno = { agent_code: member.agent_code, running_number: 0 };
                                    const MemberRunno = new tb_member_runno(memberRunno);
                                    MemberRunno.save().then(
                                        function (result) {
                                            apiDebuglog("memberRunno save successfully", result);
                                            //return res.json(ReturnSuccess(2000, { id: result }));
                                            var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                            member.mem_date_add = tz;
                                            apiDebuglog('result.running_number' + result.running_number);
                                            const num = result.running_number + 1;
                                            const uId = result._id
                                            var num_str = num.toString();
                                            var tmp = '';
                                            if (num_str.length < 6) {
                                                var i;
                                                for (i = 0; i < 6 - num_str.length; i++) {
                                                    tmp = tmp + '0';
                                                }
                                            }
                                            const memberRunno = { running_number: num };
                                            member.mem_username = member.agent_code + tmp + num_str;
                                            member.mem_password = sha256Encrypt(member.agent_code + tmp + num_str).substring(0, 8);
                                            const Member = new tb_member(member);
                                            Member.save().then(
                                                function (result2) {
                                                    apiDebuglog("member save successfully", result);
                                                    const id = result2._id;
                                                    tb_member_runno.findByIdAndUpdate(uId, { $set: memberRunno }).then(
                                                        function (result) {
                                                            apiDebuglog("memberRunno update id " + uId + " successfully", result);
                                                            return res.json(ReturnSuccess(2000, result2));
                                                        }
                                                    ).catch(
                                                        function (err) {
                                                            //console.log("agent user update error 2001 : " + err);
                                                            apiErrorlog("memberRunno update id " + uId + " error 2001", err);
                                                            //return res.json(ReturnErr(err));
                                                            return res.json(ReturnUnSuccess(20014, { message: "Unsuccess for update memberRunno id: " + uId }));
                                                        }
                                                    );
    
                                                }
                                            ).catch(
                                                function (err) {
                                                    apiErrorlog("member save error 2001", err);
                                                    //return res.json(ReturnErr(err));
                                                    return res.json(ReturnUnSuccess(20013, { message: "Unsuccess register member" }));
                                                }
                                            );
                                        }
                                    ).catch(
                                        function (err) {
                                            apiErrorlog("memberRunno save error 2001", err);
                                            //return res.json(ReturnErr(err));
                                            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for add memberRunno." }));
                                        }
                                    );
                                }
    
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("find memberRunno id " + uId + " error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(20012, { message: "Unsuccess for register member " }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(20011, { message: "Unsuccess for register member " }));
                    }
                }
    
            ).catch(
                function (err) {
                    apiErrorlog("find agent error 2001", err);
                    return res.json(ReturnUnSuccess(2001, { message: "con not find agent code " + member.agent_code + " in system." }));
                }
            );
    
    
    
        } else {
            apilog("member save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateMember = async (req, res) => {
    try{
        apilog('Put Update member');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member = req.body;
        const sId = req.params.id
    
        if (member && sId) {
            apilog('sId: ' + sId);
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    //return res.json(ReturnSuccess(2000, result));
                    if (result.length > 0) {
                        tb_member.findByIdAndUpdate(result[0]._id, { $set: member }).then(
                            function (result) {
                                apiDebuglog("update member " + sId + " successfully", result);
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("update member " + sId + " error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess update member : " + sId }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "can not find member : " + sId + " in system." }));
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("update member " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess update member id: " + sId }));
                }
            );
    
        } else {
            apilog("member update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateMemberDeposit = async (req, res) => {
    try{
        apilog('Put Update member');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member = req.body;
        const sId = req.params.id;
        var trans_type = "api";
    
        if (member && sId) {
            if (member.trans_type) {
                trans_type = member.trans_type;
            }
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    //return res.json(ReturnSuccess(2000, result));
                    if (result.length > 0) {
                        const before_balance = result[0].mem_balance;
                        apilog('result[0].mem_point : ' + result[0].mem_point);
                        let before_point = 0;
                        if (result[0].mem_point) {
                            apilog('debug');
                            before_point = result[0].mem_point;
                        }
    
                        const agent_code = result[0].agent_code;
                        apilog('member.mem_balance :' + member.mem_balance);
                        apilog('before_balance :' + before_balance);
                        var balance = (parseFloat(before_balance) + parseFloat(member.mem_balance)).toString();
                        var mem_point = (parseFloat(before_point) + parseFloat(member.mem_balance)).toString();
                        const mem_balance = { mem_balance: balance, mem_point: mem_point };
                        apilog('balance :' + balance);
                        tb_member.findByIdAndUpdate(result[0]._id, { $set: mem_balance }).then(
                            function (result) {
                                apiDebuglog("member " + sId + " deposit successfully", result);
                                var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                const trans = {
                                    amount: member.mem_balance,
                                    type: "deposit",
                                    username: sId,
                                    before_balance: before_balance,
                                    after_balance: balance,
                                    agent_code: agent_code,
                                    ts: Number(new Date(tz)),
                                    tran_date_time: tz,
                                    note: member.note,
                                    user_admin: member.user_admin,
                                    tran_type: trans_type
                                };
    
                                const Transections = new tb_transections(trans);
                                Transections.save().then(
                                    function (result) {
                                        apiDebuglog("transections save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, deposit_balance: member.mem_balance, amount: balance }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("transections save error 2001", err);
                                        //return res.json(ReturnErr(err));
                                        //return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for deposit member id: " + sId + " => add transections." }));
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, deposit_balance: member.mem_balance, amount: balance }));
                                    }
                                );
    
    
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("member " + sId + " deposit  error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess deposit member id: " + sId }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "can not find member : " + sId + "in system." }));
                    }
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("member " + sId + " deposit error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for member : " + sId + " deposit" }));
                }
            );
    
        } else {
            apilog("member deposit error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateMemberTopupByid = async (req, res) => {
    try{
        apilog('Put Update member');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member = req.body;
        const sId = req.params.id;
        var trans_type = "api";
    
        if (member && sId) {
            if (member.trans_type) {
                trans_type = member.trans_type;
            }
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    //return res.json(ReturnSuccess(2000, result));
                    if (result.length > 0) {
                        const before_balance = result[0].mem_balance;
                        const agent_code = result[0].agent_code;
                        apilog('member.mem_balance :' + member.mem_balance);
                        apilog('before_balance :' + before_balance);
                        var balance = (parseFloat(before_balance) + parseFloat(member.mem_balance)).toString();
                        var mem_point = (parseFloat(result[0].mempo) + parseFloat(member.mem_balance)).toString();
                        const mem_balance = { mem_balance: balance };
                        apilog('balance :' + balance);
                        tb_member.findByIdAndUpdate(result[0]._id, { $set: mem_balance }).then(
                            function (result) {
                                apiDebuglog("member " + sId + " deposit successfully", result);
                                var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                const trans = {
                                    amount: member.mem_balance,
                                    type: "topup",
                                    username: sId,
                                    before_balance: before_balance,
                                    after_balance: balance,
                                    agent_code: agent_code,
                                    ts: Number(new Date(tz)),
                                    tran_date_time: tz,
                                    note: member.note,
                                    user_admin: member.user_admin,
                                    tran_type: trans_type
                                };
    
                                const Transections = new tb_transections(trans);
                                Transections.save().then(
                                    function (result) {
                                        apiDebuglog("transections save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, deposit_balance: member.mem_balance, amount: balance }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("transections save error 2001", err);
                                        //return res.json(ReturnErr(err));
                                        //return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for deposit member id: " + sId + " => add transections." }));
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, deposit_balance: member.mem_balance, amount: balance }));
                                    }
                                );
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("member " + sId + " deposit  error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess deposit member id: " + sId }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "can not find member : " + sId + "in system." }));
                    }
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("member " + sId + " deposit error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for member : " + sId + " deposit" }));
                }
            );
    
        } else {
            apilog("member deposit error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateMemberWithdrawById = async (req, res) => {
    try{
        apilog('Put Update member');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member = req.body;
        const sId = req.params.id
        var trans_type = "api";
    
        if (member && sId) {
            if (member.trans_type) {
                trans_type = member.trans_type;
            }
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    //return res.json(ReturnSuccess(2000, result));
                    if (result.length > 0) {
                        const before_balance = result[0].mem_balance;
                        const agent_code = result[0].agent_code;
                        apilog('member.mem_balance :' + member.mem_balance);
                        apilog('before_balance :' + before_balance);
                        var balance = (parseFloat(before_balance) - parseFloat(member.mem_balance)).toString();
                        const mem_balance = { mem_balance: balance };
                        apilog('balance :' + balance);
                        tb_member.findByIdAndUpdate(result[0]._id, { $set: mem_balance }).then(
                            function (result) {
                                apiDebuglog("member " + sId + " withdraw successfully", result);
                                var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                const trans = {
                                    amount: member.mem_balance,
                                    type: "withdraw",
                                    username: sId,
                                    before_balance: before_balance,
                                    after_balance: balance,
                                    agent_code: agent_code,
                                    ts: Number(new Date(tz)),
                                    tran_date_time: tz,
                                    note: member.note,
                                    user_admin: member.user_admin,
                                    tran_type: trans_type
                                };
    
                                const Transections = new tb_transections(trans);
                                Transections.save().then(
                                    function (result) {
                                        apiDebuglog("transections save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, withdraw_balance: member.mem_balance, amount: balance }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("transections save error 2001", err);
                                        //return res.json(ReturnErr(err));
                                        //return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for deposit member id: " + sId + " => add transections." }));
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, withdraw_balance: member.mem_balance, amount: balance }));
                                    }
                                );
                                //return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, deposit_balance: member.mem_balance, amount: balance }));
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("member " + sId + " withdraw error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess withdraw member : " + sId }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "can not find member : " + sId + "in system." }));
                    }
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("member " + sId + " withdraw error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for member : " + sId + " withdraw" }));
                }
            );
    
        } else {
            apilog("member deposit error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateAllMemberWithdrawById = async (req, res) => {
    try{
        apilog('Put Update member');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const member = { mem_balance: '0' };
        const sId = req.params.id
    
        if (member && sId) {
            await tb_member.find({ mem_username: sId }).then(
                function (result) {
                    apiDebuglog("Get info member id " + sId + " successfully", result);
                    //return res.json(ReturnSuccess(2000, result));
                    if (result.length > 0) {
                        const myresult = result;
                        tb_member.findByIdAndUpdate(result[0]._id, { $set: member }).then(
                            function (result) {
                                apiDebuglog("member WithdrawAll id " + sId + " successfully", result);
                                const before_balance = myresult[0].mem_balance;
                                //return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: myresult[0].mem_balance, after_balance: "0" }));
                                //apiDebuglog("member " + sId + " withdraw successfully", result);
                                var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                                const trans = {
                                    amount: member.mem_balance,
                                    type: "withdraw",
                                    username: sId,
                                    before_balance: before_balance,
                                    after_balance: balance,
                                    agent_code: agent_code,
                                    ts: Number(new Date(tz)),
                                    tran_date_time: tz,
                                    note: member.note,
                                    user_admin: member.user_admin,
                                    tran_type: trans_type
                                };
    
                                const Transections = new tb_transections(trans);
                                Transections.save().then(
                                    function (result) {
                                        apiDebuglog("transections save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, withdraw_balance: member.mem_balance, amount: balance }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("transections save error 2001", err);
                                        //return res.json(ReturnErr(err));
                                        //return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for deposit member id: " + sId + " => add transections." }));
                                        return res.json(ReturnSuccess(2000, { id: result._id, mem_username: result.mem_username, before_balance: before_balance, withdraw_balance: member.mem_balance, amount: balance }));
                                    }
                                );
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("member WithdrawAll id " + sId + " error 2001", err);
                                //return res.json(ReturnErr(err));
                                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess WithdrawAll member id: " + sId }));
                            }
                        );
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "can not find member : " + sId + "in system." }));
                    }
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("Get info member id " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get inormation member id: " + sId }));
                }
            );
    
        } else {
            apilog("member WithdrawAll error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.deleteMember = async (req, res) => {
    try{
        apilog('Delete member by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_member.findByIdAndDelete({ _id: sId }).then(
                function (result) {
                    apiDebuglog("delete member id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete member id " + sId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess delete member id: " + sId }));
                }
            );
        } else {
            apilog("delete member id error 2002 : No request params value.");
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