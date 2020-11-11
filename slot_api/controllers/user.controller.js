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
const {tb_user} = require('../models');

module.exports.getAlluser = async (req, res) => {
    try{
        apilog('Get user all');
        await tb_user.find({}).then(
            function (result) {
                apiDebuglog("find user result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find user error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getUserById = async (req, res) => {
    try{
        apilog('Get user by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_user.find({ _id: uId }).then(
                function (result) {
                    apiDebuglog("find user id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find user id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find user id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createUser = async (req, res) => {
    try{
        apilog('Post create user');
        apilog('body::==' + JSON.stringify(req.body));
        const user = req.body;
    
        if (user) {
            await tb_user.find({ user_name: user.user_name }).then(
                function (result) {
                    apiDebuglog("find user name :" + user.user_name + " successfully", result);
                    apilog('user dup => ' + result.length);
                    if (result.length > 0) {
                        //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this user name is aleary in system.'})) 
                        return res.json(ReturnCustom(1003, 'Can not add because this user name is aleary in system.', []));
                    }
                    else {
                        user.user_pass = sha256Encrypt(user.user_pass);
                        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                        user.add_date = tz;
                        const User = new tb_user(user);
                        User.save().then(
                            function (result) {
                                apiDebuglog("user save successfully", result);
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            }
                        ).catch(
                            function (err) {
                                apiErrorlog("user save error 2001", err);
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
            apilog("user save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateUser = async (req, res) => {
    try{
        apilog('Put Update user');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const user = req.body;
        const uId = req.params.id
    
        if (user && uId) {
    
            if (user.user_pass && user.user_pass != "") {
                apilog('gen password');
                user.user_pass = sha256Encrypt(user.user_pass);
            }
            await tb_user.findByIdAndUpdate(uId, { $set: user }).then(
                function (result) {
                    apiDebuglog("user update id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("user update id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("user update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteUser = async (req, res) => {
    try{
        apilog('Delete user by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_user.findByIdAndDelete({ _id: uId }).then(
                function (result) {
                    apiDebuglog("delete user id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete user id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete user id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
