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
const {tb_services} = require('../models');

module.exports.getAllServices = async (req, res) => {
    try{
        apilog('Get services all');
        await tb_services.find({}).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find services result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find services error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getServicesById = async (req, res) => {
    try{
        apilog('Get services by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_services.find({ _id: sId }).then(
                function (result) {
                    apiDebuglog("find services id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find services id " + sId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find services id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getServicesByAgent = async (req, res) => {
    try{
        apilog('Get services by agent code');
        apilog('params::==' + JSON.stringify(req.params));
        const agcode = req.params.agcode
        if (agcode) {
            await tb_services.find({ agent_code: agcode }).then(
                function (result) {
                    apiDebuglog("find services by agent code " + agcode + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find services by agent code " + agcode + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("find services by agent code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getServices = async (req, res) => {
    try{
        apilog('Get create services');
        apilog('body::==' + JSON.stringify(req.body));
        const agent_code = req.body.agent_code
        const brand_code = req.body.brand_code
        if (agent_code) {
            await tb_services.find({ agent_code: agent_code, brand_code: brand_code }).then(
                function (result) {
                    apiDebuglog("find services successfully.", result);
                    if (result.length > 0) {
                        return res.json(ReturnSuccess(2000, result));
                    } else {
                        return res.json(ReturnUnSuccess(2001, { message: "find services unsuccessfully." }));
                    }
    
                }
            ).catch(
                function (err) {
                    apiErrorlog("find services error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "find services unsuccessfully." }));
                }
            );
        } else {
            apilog("find services id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createServices = async (req, res) => {
    try{
        apilog('Post create services');
        apilog('body::==' + JSON.stringify(req.body));
        const services = req.body;
    
        if (services) {
    
            const Services = new tb_services(services);
            await Services.save().then(
                function (result) {
                    apiDebuglog("services save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("services save error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("services save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateServices = async (req, res) => {
    try{
        apilog('Put Update services');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const services = req.body;
        const sId = req.params.id
    
        if (services && sId) {
    
            await tb_services.findByIdAndUpdate(sId, { $set: services }).then(
                function (result) {
                    apiDebuglog("services update id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("services update id " + sId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("services update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.daleteServies = async (req, res) => {
    try{
        apilog('Delete services by id');
        apilog('params::==' + req.params);
        const sId = req.params.id
        if (sId) {
            await tb_services.findByIdAndDelete({ _id: sId }).then(
                function (result) {
                    apiDebuglog("delete services id " + sId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete services id " + sId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );
        } else {
            apilog("delete services id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}