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
const {tb_transections} = require('../models');

module.exports.getAllTransections = async (req, res) => {
    try{
        apilog('Get transections all');
        await tb_transections.find({}).then(
            function (result) {
                apiDebuglog("find transections result successfully" + result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find transections error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections." }));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getTransectionsById = async (req, res) => {
    try{
        apilog('Get transections by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_transections.find({ _id: uId }).then(
                function (result) {
                    apiDebuglog("find transections id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find transections id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections id: " + uId }));
                }
            );
        } else {
            apilog("find transections id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getTransectionsByAgent = async (req, res) => {
    try{
        apilog('Get transections by agent_code');
        apilog('params::==' + req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_transections.find({ agent_code: agent_code }).then(
                function (result) {
                    apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                }
            );
        } else {
            apilog("find transections agent_code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentTransections = async (req, res) => {
    try{
        apilog('Get transections by agent_code');
        apilog('params::==' + req.params);
        apilog('body::==' + req.body);
        const transections = req.body;
        const agent_code = req.params.agent_code
        if (agent_code) {
            if (transections.selecttime === 'All') {
                await tb_transections.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                    function (result) {
                        apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'Today') {
                var startdate = moment().tz('Asia/Bangkok').format('YYYY-MM-DD 00:00:00');
                var startdate_stp = Number(new Date(startdate));
                console.log('start date:' + startdate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'Yesterday') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var date = new Date(nDate);
                var enddate = new Date(nDate);
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                date.setDate(date.getDate() - 1);
                console.log('yesterday date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                //var startdate = moment().format('YYYY-MM-DD 00:00:00');
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
    
                console.log('start date:' + startdate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'ThisWeek') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var date = new Date(getMonday(nDate));
                console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                console.log('start date:' + startdate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'LastWeek') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var enddate = new Date(getMonday(nDate));
                var date = new Date();
                console.log('get monday:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                //console.log('start date:' + startdate_stp);
                date.setDate(enddate.getDate() - 7);
                console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                console.log('start date:' + startdate_stp);
                console.log('end date:' + enddate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'LastMonth') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var d = new Date(nDate);
                var enddate = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
                //enddate.setDate(enddate.getDate() - 1);
                console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                var date = new Date(d.getFullYear() + '-' + d.getMonth() + '-01');
                console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                console.log('start date:' + startdate_stp);
                console.log('end date:' + enddate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (transections.selecttime === 'ThisMonth') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var d = new Date(nDate);
                var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
                console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                console.log('start date:' + startdate_stp);
                await tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            }
    
        } else {
            apilog("find transections agent_code error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.createTransections = async (req, res) => {
    try{
        apilog('Post create transections');
        apilog('body::==' + req.body);
        const transections = req.body;
    
        if (transections) {
            const Transections = new tb_transections(transections);
            await Transections.save().then(
                function (result) {
                    apiDebuglog("transections save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("transections save error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for add transections." }));
                }
            );
        } else {
            apilog("turnover save error 2002 : No request body value.");
            return res.json(ReturnSuccess(2002, "No request body value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.updateTransections = async (req, res) => {
    try{
        apilog('Put Update transections');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const transections = req.body;
        const uId = req.params.id
    
        if (transections && uId) {
    
            await tb_transections.findByIdAndUpdate(uId, { $set: transections }).then(
                function (result) {
                    //console.log("agent user update result : " + result);
                    apiDebuglog("transections update id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    //console.log("agent user update error 2001 : " + err);
                    apiErrorlog("transections update id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update transections id: " + uId }));
                }
            );
        } else {
            apilog("transections update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteTransections = async (req, res) => {
    try{
        apilog('Delete transections by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_transections.findByIdAndDelete({ _id: uId }).then(
                function (result) {
                    //console.log("delete agent user id result : " + result);
                    apiDebuglog("delete transections id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    //console.log("delete agent user id error 2001 : " + err);
                    apiErrorlog("delete transections id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for delete transections id: " + uId }));
                }
            );
        } else {
            apilog("delete transections id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}