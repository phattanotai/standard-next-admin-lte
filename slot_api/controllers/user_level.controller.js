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
const {tb_user_level} = require('../models');

module.exports.getAllUserLevel = async (req, res) => {
    try{
        apilog('Get user level all');
        await tb_user_level.find({}).then(
            function (result) {
                apiDebuglog("find user level result successfully" , result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find user level error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getUserLevelById = async (req, res) => {
    try{
        apilog('Get user level by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_user_level.find({ _id: uId }).then(
                function (result) {
                    apiDebuglog("find user level id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find user level id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find user level id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createUserLevel = async (req, res) => {
    try{
        apilog('Post create user level');
        apilog('body::==' + req.body);
        const user_level = req.body;
    
        if (user_level) {
            const User_level = new tb_user_level(user_level);
            await User_level.save().then(
                function (result) {
                    apiDebuglog("user level save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("user level save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("user level save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateUserLevel = async (req, res) => {
    try{
        apilog('Put Update user level');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const user_level = req.body;
        const uId = req.params.id
    
        if (user_level && uId) {
    
            await tb_user_level.findByIdAndUpdate(uId, { $set: user_level }).then(
                function (result) {
                    apiDebuglog("user level update id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("user level update id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("user level update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteUserLevel = async (req, res) => {
    try{
        apilog('Delete user level by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_user_level.findByIdAndDelete({ _id: uId }).then(
                function (result) {
                    apiDebuglog("delete user level id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete user level id " + uId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete user level id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}