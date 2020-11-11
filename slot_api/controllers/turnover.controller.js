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
const {tb_turnover} = require('../models');


module.exports.getAllTurnOver = async (req, res) => {
    try{
        apilog('Get turnover all');
        await tb_turnover.find({}).then(
            function (result) {
                apiDebuglog("find turnover result successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find turnover error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get turnover." }));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getTurnOverById = async (req, res) => {
    try{
        apilog('Get turnover by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_turnover.find({ _id: uId }).then(
                function (result) {
                    apiDebuglog("find turnover id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find turnover id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get turnover id: " + uId }));
                }
            );
        } else {
            apilog("find turnover id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getTurnOverByAgent = async (req, res) => {
    try{
        apilog('Get turnover by id');
        apilog('params::==' + req.params);
        const agent_code = req.params.agent_code
        if (agent_code) {
            await tb_turnover.find({ agent_code: agent_code }).then(
                function (result) {
                    apiDebuglog("find turnover agent_code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find turnover agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get turnover agent_code: " + agent_code }));
                }
            );
        } else {
            apilog("find turnover id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getAgentTurnOver = async (req, res) => {
    try{
        apilog('Get turnover by agent_code');
        apilog('params::==' + req.params);
        apilog('body::==' + req.body);
        const turnover = req.body;
        const agent_code = req.params.agent_code
        if (agent_code) {
            if (turnover.selecttime === 'All') {
                await tb_turnover.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                    function (result) {
                        apiDebuglog("find tb_turnover agent code " + agent_code + " successfully", result);
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find tb_turnover agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get tb_turnover agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'Today') {
                var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD 00:00:00');
                apilog('tz:' + tz);
                //var startdate = tz;
                var startdate_stp = Number(new Date(tz));
                apilog('start date:' + startdate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find tb_turnover agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get tb_turnover agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'Yesterday') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
    
                var date = new Date();
                apilog("date::" + date.getDate());
                var enddate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                date.setDate(dateFormat(nDate, 'dd') - 1);
                apilog('yesterday date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                //var startdate = moment().format('YYYY-MM-DD 00:00:00');
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                apilog('start date:' + startdate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find tb_turnover agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get tb_turnover agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'ThisWeek') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var date = new Date(getMonday(nDate));
                //var date = new Date(getMonday(new Date()));
                apilog('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                apilog('start date:' + startdate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'LastWeek') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var enddate = new Date(getMonday(nDate));
                var date = new Date();
                apilog('get monday:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                date.setDate(enddate.getDate() - 7);
                apilog('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                apilog('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                apilog('start date:' + startdate_stp);
                apilog('end date:' + enddate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'LastMonth') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var d = new Date(nDate);
                var enddate = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
                //enddate.setDate(enddate.getDate() - 1);
                apilog('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
                var date = new Date(d.getFullYear() + '-' + d.getMonth() + '-01');
                apilog('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
                apilog('start date:' + startdate_stp);
                apilog('end date:' + enddate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                    function (result) {
                        return res.json(ReturnSuccess(2000, result));
                    }
                ).catch(
                    function (err) {
                        apiErrorlog("find transections agent_code " + agent_code + " error 2001", err);
                        //return res.json(ReturnErr(err));
                        return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get transections agent_code: " + agent_code }));
                    }
                );
            } else if (turnover.selecttime === 'ThisMonth') {
                var dateFormat = require('dateformat');
                const nDate = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Bangkok'
                });
                var d = new Date(nDate);
                var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
                apilog('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
                apilog('start date:' + startdate_stp);
                await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).then(
                    function (result) {
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
module.exports.createTurnOver = async (req, res) => {
    try{
        apilog('Post create turnover');
        apilog('body::==' + req.body);
        const turnover = req.body;
    
        if (turnover) {
            const Turnover = new tb_turnover(turnover);
            await Turnover.save().then(
                function (result) {
                    apiDebuglog("turnover save successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("turnover save error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for add turnover." }));
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
module.exports.updateTurnOver = async (req, res) => {
    try{
        apilog('Put Update turnover');
        apilog('body::==' + req.body);
        apilog('params::==' + req.params);
        const turnover = req.body;
        const uId = req.params.id
    
        if (turnover && uId) {
    
            await tb_turnover.findByIdAndUpdate(uId, { $set: turnover }).then(
                function (result) {
                    apiDebuglog("turnover update id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("turnover update id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update turnover id: " + uId }));
                }
            );
        } else {
            apilog("turnover update error 2002 : No request body & params value.");
            return res.json(ReturnSuccess(2002, "No request body & params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteTurnOver = async (req, res) => {
    try{
        apilog('Delete turnover by id');
        apilog('params::==' + req.params);
        const uId = req.params.id
        if (uId) {
            await tb_turnover.findByIdAndDelete({ _id: uId }).then(
                function (result) {
                    apiDebuglog("delete turnover id " + uId + " successfully", result);
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            ).catch(
                function (err) {
                    apiErrorlog("delete turnover id " + uId + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for delete turnover id: " + uId }));
                }
            );
        } else {
            apilog("delete turnover id error 2002 : No request params value.");
            return res.json(ReturnSuccess(2002, "No request params value."));
        }
    }catch(err){
        return res.json(ReturnErr(err));
    }
}