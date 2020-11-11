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
const {tb_alert}= require('../models');

module.exports.getAllAlert = async (req, res) => {
    try{
        apilog('Get alert all');
        await tb_alert.find({}).then(
            function (result) {
                apiDebuglog("find alert result successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find alert error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAlertById = async (req, res) => {
    try{
        apilog('Get alert by id');
        apilog('params::==', req.params);
        const alertId = req.params.id
        if (alertId) {
            await tb_alert.find({ _id: alertId }).then(
                function (result) {
                    apiDebuglog("find alert id " + alertId + " successfully", result)
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find alert id " + alertId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find alert id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createAlert = async (req, res) => {
    try{
        apilog('Post create alert');
        apilog('body::==' + req.body);
    
        const alert = req.body;
    
        if (alert) {
            const Alert = new tb_alert(alert);
            await Alert.save().then(
                function (result) {
                    apiDebuglog("alert save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("alert save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("alert save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateAlert = async (req, res) => {
    try{
        apilog('Put Update alert');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const alert = req.body;
        const alertId = req.params.id
    
        if (alert && alertId) {
    
            await tb_alert.findByIdAndUpdate(alertId, { $set: alert }).then(
                function (result) {
                    apiDebuglog("alert update id " + alertId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("alert save id " + alertId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("alert update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteAlert = async (req, res) => {
    try{
        apilog('Delete alert by id');
        apilog('params::==' + req.params);
        const alertId = req.params.id
        if (alertId) {
            await tb_alert.findByIdAndDelete({ _id: alertId }).then(
                function (result) {
                    apiDebuglog("delete alert id " + alertId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("alert save id " + alertId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete alert error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
