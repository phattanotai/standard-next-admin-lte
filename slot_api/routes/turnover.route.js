const express = require('express');
const moment = require('moment-timezone');
const route = express.Router();

const tb_turnover = require('../models/tb_turnover');

const utilily_ft = require('../functions/utility.function');
//////////////////////// tb_turnover ///////////////////////

route.get("/turnover", async (req, res) => {
    apilog('Get turnover all');
    await tb_turnover.find({}).then(
        function (result) {
            apiDebuglog("find turnover result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find turnover error 2001", err);
            //return res.json(ReturnErr(err));
            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get turnover." }));
        }
    );
});

route.get("/turnover/:id", async (req, res) => {
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

});

route.get("/turnover/foragent/:agent_code", async (req, res) => {
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

});

route.post("/turnover/agent/:agent_code", async (req, res) => {
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
            console.log('tz:' + tz);
            //var startdate = tz;
            var startdate_stp = Number(new Date(tz));
            console.log('start date:' + startdate_stp);
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
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
            console.log("date::" + date.getDate());
            var enddate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
            date.setDate(dateFormat(nDate, 'dd') - 1);
            console.log('yesterday date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            //var startdate = moment().format('YYYY-MM-DD 00:00:00');
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    //apiDebuglog("find transections agent code " + agent_code + " successfully", result);
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
            console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
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
        } else if (turnover.selecttime === 'LastWeek') {
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
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
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
        } else if (turnover.selecttime === 'LastMonth') {
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
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
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
        } else if (turnover.selecttime === 'ThisMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            await tb_turnover.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).then(
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

});

route.post("/turnover", async (req, res) => {
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

});

route.put("/turnover/:id", async (req, res) => {
    apilog('Put Update turnover');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const turnover = req.body;
    const uId = req.params.id

    if (turnover && uId) {

        await tb_turnover.findByIdAndUpdate(uId, { $set: turnover }).then(
            function (result) {
                //console.log("agent user update result : " + result);
                apiDebuglog("turnover update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("agent user update error 2001 : " + err);
                apiErrorlog("turnover update id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update turnover id: " + uId }));
            }
        );
    } else {
        apilog("turnover update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/turnover/:id", async (req, res) => {
    apilog('Delete turnover by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_turnover.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                //console.log("delete agent user id result : " + result);
                apiDebuglog("delete turnover id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("delete agent user id error 2001 : " + err);
                apiErrorlog("delete turnover id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for delete turnover id: " + uId }));
            }
        );
    } else {
        apilog("delete turnover id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});
///////////////////// end tb_turnover ////////////////////////
module.exports = route;
