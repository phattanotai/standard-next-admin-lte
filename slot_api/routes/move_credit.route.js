const express = require('express');
const moment = require('moment-timezone');
const route = express.Router();

const tb_move_credit = require('../models/tb_move_credit');

const utilily_ft = require('../functions/utility.function');
//////////////////////// tb_move_credit ///////////////////////

route.get("/moveCredit", async (req, res) => {
    apilog('Get moveCredit all');
    await tb_move_credit.find({}).then(
        function (result) {
            apiDebuglog("find moveCredit result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find moveCredit error 2001", err);
            //return res.json(ReturnErr(err));
            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get moveCredit." }));
        }
    );
});

route.get("/moveCredit/:id", async (req, res) => {
    apilog('Get moveCredit by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_move_credit.find({ _id: uId }).then(
            function (result) {
                apiDebuglog("find moveCredit id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find moveCredit id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get moveCredit id: " + uId }));
            }
        );
    } else {
        apilog("find moveCredit id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/dashboard/agent/:agent_code", async (req, res) => {
    apilog('Get dashboard by agent_code');
    apilog('params::==' + req.params);
    apilog('body::==' + req.body);
    const dashboard = req.body;
    const agent_code = req.params.agent_code;
    let data = {};
    if (agent_code && dashboard) {
        if (dashboard.selecttime === 'All') {
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                        function (result) {
                            apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate);
                            let labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            let dep = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            let wit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            let start_date_month = [
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-01-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-02-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-03-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-04-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-05-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-06-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-07-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-08-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-09-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-10-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-11-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-12-01'), 'yyyy-mm-dd 00:00:00')))
                            ];
                            console.log('start_date_month : ' + start_date_month)
                            let end_date_month = [
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-02-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-03-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-04-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-05-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-06-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-07-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-08-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-09-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-10-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-11-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date(d.getFullYear() + '-12-01'), 'yyyy-mm-dd 00:00:00'))),
                                Number(new Date(dateFormat(new Date((d.getFullYear() + 1) + '-01-01'), 'yyyy-mm-dd 00:00:00')))
                            ];
                            console.log('end_date_month : ' + end_date_month)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                if (Number(o.ts) >= start_date_month[0] && Number(o.ts) <= end_date_month[0]) {
                                    dep[0] = dep[0] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[1] && Number(o.ts) <= end_date_month[1]) {
                                    dep[1] = dep[1] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[2] && Number(o.ts) <= end_date_month[2]) {
                                    dep[2] = dep[2] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[3] && Number(o.ts) <= end_date_month[3]) {
                                    dep[3] = dep[3] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[4] && Number(o.ts) <= end_date_month[4]) {
                                    dep[4] = dep[4] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[5] && Number(o.ts) <= end_date_month[5]) {
                                    dep[5] = dep[5] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[6] && Number(o.ts) <= end_date_month[6]) {
                                    dep[6] = dep[6] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[7] && Number(o.ts) <= end_date_month[7]) {
                                    dep[7] = dep[7] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[8] && Number(o.ts) <= end_date_month[8]) {
                                    dep[8] = dep[8] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[9] && Number(o.ts) <= end_date_month[9]) {
                                    dep[9] = dep[9] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[10] && Number(o.ts) <= end_date_month[10]) {
                                    dep[10] = dep[10] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[11] && Number(o.ts) <= end_date_month[11]) {
                                    dep[11] = dep[11] + Number(o.amount);
                                }
                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                if (Number(o.ts) >= start_date_month[0] && Number(o.ts) <= end_date_month[0]) {
                                    wit[0] = wit[0] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[1] && Number(o.ts) <= end_date_month[1]) {
                                    wit[1] = wit[1] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[2] && Number(o.ts) <= end_date_month[2]) {
                                    wit[2] = wit[2] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[3] && Number(o.ts) <= end_date_month[3]) {
                                    wit[3] = wit[3] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[4] && Number(o.ts) <= end_date_month[4]) {
                                    wit[4] = wit[4] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[5] && Number(o.ts) <= end_date_month[5]) {
                                    wit[5] = wit[5] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[6] && Number(o.ts) <= end_date_month[6]) {
                                    wit[6] = wit[6] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[7] && Number(o.ts) <= end_date_month[7]) {
                                    wit[7] = wit[7] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[8] && Number(o.ts) <= end_date_month[8]) {
                                    wit[8] = wit[8] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[9] && Number(o.ts) <= end_date_month[9]) {
                                    wit[9] = wit[9] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[10] && Number(o.ts) <= end_date_month[10]) {
                                    wit[10] = wit[10] + Number(o.amount);
                                } else if (Number(o.ts) >= start_date_month[11] && Number(o.ts) <= end_date_month[11]) {
                                    wit[11] = wit[11] + Number(o.amount);
                                }
                            })

                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        }
        else if (dashboard.selecttime === 'Today') {
            var startdate = moment().tz('Asia/Bangkok').format('YYYY-MM-DD 00:00:00');
            var startdate_stp = Number(new Date(startdate));
            console.log('start date:' + startdate_stp);

            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate);
                            let labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                                '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                //start_date.push(Number(new Date(dateFormat(d, 'yyyy-mm-dd '+labels[i]+':00'))));
                                //console.log('i : ' + i);
                                //console.log('date ' + i + ' : ' + new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i].toString() + ':00')));
                                start_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i].toString() + ':00')));
                                if (i < labels.length - 1) {
                                    end_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i + 1].toString() + ':00')));
                                    //end_date.push(Number(new Date(dateFormat(new Date(d, 'yyyy-mm-dd '+labels[i+1]+':00')))));
                                } else {
                                    end_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[0].toString() + ':00')));
                                    //end_date.push(Number(new Date(dateFormat(new Date(d, 'yyyy-mm-dd '+labels[0]+':00')))));
                                }
                            }

                            //console.log('start_date : ' + start_date)
                            //console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        } else if (dashboard.selecttime === 'Yesterday') {
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
            /* await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            ); */
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate);
                            let labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                                '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                //start_date.push(Number(new Date(dateFormat(d, 'yyyy-mm-dd '+labels[i]+':00'))));
                                //console.log('i : ' + i);
                                //console.log('date ' + i + ' : ' + new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i].toString() + ':00')));
                                start_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i].toString() + ':00')));
                                if (i < labels.length - 1) {
                                    end_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[i + 1].toString() + ':00')));
                                    //end_date.push(Number(new Date(dateFormat(new Date(d, 'yyyy-mm-dd '+labels[i+1]+':00')))));
                                } else {
                                    end_date.push(new Date(dateFormat(d, 'yyyy-mm-dd ' + labels[0].toString() + ':00')));
                                    //end_date.push(Number(new Date(dateFormat(new Date(d, 'yyyy-mm-dd '+labels[0]+':00')))));
                                }
                            }

                            //console.log('start_date : ' + start_date)
                            //console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        } else if (dashboard.selecttime === 'ThisWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(getMonday(nDate));

            console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            /* await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            ); */
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate);
                            let labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                var tmp_date = date;
                                //console.log('start_date : ' + start_date)
                                //start_date.push(Number(new Date(dateFormat(date.setDate(date.getDate() + i), 'yyyy-mm-dd 00:00:00'))));
                                //end_date.push(Number(new Date(dateFormat(tmp_date.setDate(date.getDate() + 1), 'yyyy-mm-dd 00:00:00'))));
                                start_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate()), 'yyyy-mm-dd 00:00:00')));
                                end_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + 1), 'yyyy-mm-dd 00:00:00')));

                            }

                            console.log('start_date : ' + start_date)
                            console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= Number(start_date[i]) && Number(o.ts) <= Number(end_date[i])) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        } else if (dashboard.selecttime === 'LastWeek') {
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
            /* await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            ); */
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            /* var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate); */
                            let labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                var tmp_date = date;
                                //console.log('start_date : ' + start_date)
                                //start_date.push(Number(new Date(dateFormat(date.setDate(date.getDate() + i), 'yyyy-mm-dd 00:00:00'))));
                                //end_date.push(Number(new Date(dateFormat(tmp_date.setDate(date.getDate() + 1), 'yyyy-mm-dd 00:00:00'))));
                                start_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate()), 'yyyy-mm-dd 00:00:00')));
                                end_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + 1), 'yyyy-mm-dd 00:00:00')));

                            }

                            console.log('start_date : ' + start_date)
                            console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= Number(start_date[i]) && Number(o.ts) <= Number(end_date[i])) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        } else if (dashboard.selecttime === 'LastMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var enddate = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            //enddate.setDate(enddate.getDate() - 1);
            console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            var date = new Date(d.getFullYear() + '-' + (d.getMonth()) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            console.log('end date:' + enddate_stp);
            /*  await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                 function (result) {
                     apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                     return res.json(ReturnSuccess(2000, result));
                 }
             ).catch(
                 function (err) {
                     apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                     //return res.json(ReturnErr(err));
                     return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                 }
             ); */
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    //apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            //apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            /* var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate); */
                            let labels = [];
                            var j = 0;
                            //var tmp_date = new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                            console.log('enddate_stp : ' + enddate_stp);
                            for (j = 0; j < 31; j++) {
                                var tmp_date = new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                                var dd = new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + j), 'yyyy-mm-dd 00:00:00'));
                                console.log('dd ' + j + ' : ' + dd)
                                console.log('date ' + j + ' : ' + Number(dd))
                                if (Number(dd) < enddate_stp) {
                                    labels.push((j + 1).toString());
                                } else {
                                    break;
                                }
                            }
                            console.log('labels : ' + labels)
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                var tmp_date = date;
                                //console.log('start_date : ' + start_date)
                                //start_date.push(Number(new Date(dateFormat(date.setDate(date.getDate() + i), 'yyyy-mm-dd 00:00:00'))));
                                //end_date.push(Number(new Date(dateFormat(tmp_date.setDate(date.getDate() + 1), 'yyyy-mm-dd 00:00:00'))));
                                start_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate()), 'yyyy-mm-dd 00:00:00')));
                                end_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + 1), 'yyyy-mm-dd 00:00:00')));

                            }

                            console.log('start_date : ' + start_date)
                            console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= Number(start_date[i]) && Number(o.ts) <= Number(end_date[i])) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        } else if (dashboard.selecttime === 'ThisMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            /* await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            ); */
            await tb_member.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    //apiDebuglog("find member agent code " + agent_code + " successfully", result);
                    let member_en = result.filter((o) => {
                        return (o.mem_status !== '0')
                    })
                    let member = { en: member_en.length, di: result.length - member_en.length };
                    tb_transections.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                        function (result) {
                            //apiDebuglog("find member agent code " + agent_code + " successfully", result);
                            /* var dateFormat = require('dateformat');
                            const nDate = new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Bangkok'
                            });
                            var d = new Date(nDate); */
                            let labels = [];
                            var j = 0;
                            //var tmp_date = new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                            //console.log('enddate_stp : ' + enddate_stp);
                            for (j = 0; j < 31; j++) {
                                var tmp_date = new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00'));
                                var dd = new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + j), 'yyyy-mm-dd 00:00:00'));
                                console.log('dd ' + j + ' : ' + dd)
                                console.log('date ' + j + ' : ' + Number(dd))
                                if (Number(dd) < Number(d)) {
                                    labels.push((j + 1).toString());
                                } else {
                                    break;
                                }
                            }
                            console.log('labels : ' + labels)
                            let dep = [];
                            let wit = [];
                            let start_date = [];
                            let end_date = [];
                            var i = 0;
                            for (i = 0; i < labels.length; i++) {
                                dep.push(0);
                                wit.push(0);
                                var tmp_date = date;
                                //console.log('start_date : ' + start_date)
                                /* start_date.push(Number(new Date(dateFormat(date.setDate(date.getDate() + i), 'yyyy-mm-dd 00:00:00'))));
                                end_date.push(Number(new Date(dateFormat(tmp_date.setDate(date.getDate() + 1), 'yyyy-mm-dd 00:00:00')))); */
                                start_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate()), 'yyyy-mm-dd 00:00:00')));
                                end_date.push(new Date(dateFormat(tmp_date.setDate(tmp_date.getDate() + 1), 'yyyy-mm-dd 00:00:00')));

                            }

                            console.log('start_date : ' + start_date)
                            console.log('end_date : ' + end_date)
                            let deposit = result.filter((o) => {
                                return (o.type === 'deposit')
                            })
                            let deposit_sum = 0;
                            deposit.map((o) => {
                                //console.log('amount : ' + o.amount);
                                deposit_sum = deposit_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= Number(start_date[i]) && Number(o.ts) <= Number(end_date[i])) {
                                        dep[i] = dep[i] + Number(o.amount);
                                    }
                                }

                            })
                            let withdraw = result.filter((o) => {
                                return (o.type === 'withdraw')
                            })
                            let withdraw_sum = 0;
                            withdraw.map((o) => {
                                //console.log('amount : ' + o.amount);
                                withdraw_sum = withdraw_sum + Number(o.amount);
                                var i = 0;
                                for (i = 0; i < labels.length; i++) {
                                    if (Number(o.ts) >= start_date[i] && Number(o.ts) <= end_date[i]) {
                                        wit[i] = wit[i] + Number(o.amount);
                                    }
                                }
                            })
                            let topup = result.filter((o) => {
                                return (o.type === 'topup')
                            })
                            let topup_sum = 0;
                            topup.map((o) => {
                                //console.log('amount : ' + o.amount);
                                topup_sum = topup_sum + Number(o.amount);
                            })
                            let transactions = { deposit: deposit.length, deposit_sum: deposit_sum, withdraw: withdraw.length, withdraw_sum: withdraw_sum, topup: topup.length, topup_sum: topup_sum };
                            let graph = { labels: labels, deposit: dep, withdraw: wit };
                            data = { member: member, transactions: transactions, graph: graph };
                            return res.json(ReturnSuccess(2000, data));
                        }
                    )
                }
            ).catch(
                function (err) {
                    apiErrorlog("find member agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get member agent_code: " + agent_code }));
                }
            );
        }
    } else {
        apilog("find dashboard error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }
})

route.post("/moveCredit/agent/:agent_code", async (req, res) => {
    apilog('Get moveCredit by agent_code');
    apilog('params::==' + req.params);
    apilog('body::==' + req.body);
    const movecredit = req.body;
    const agent_code = req.params.agent_code
    if (agent_code) {
        if (movecredit.selecttime === 'All') {
            await tb_move_credit.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'Today') {
            var startdate = moment().tz('Asia/Bangkok').format('YYYY-MM-DD 00:00:00');
            var startdate_stp = Number(new Date(startdate));
            console.log('start date:' + startdate_stp);
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'Yesterday') {
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
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'ThisWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(getMonday(nDate));
            console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'LastWeek') {
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
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'LastMonth') {
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
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp, $lte: enddate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        } else if (movecredit.selecttime === 'ThisMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            console.log('start date:' + startdate_stp);
            await tb_move_credit.find({ agent_code: agent_code, ts: { $gte: startdate_stp } }).sort({ _id: -1 }).then(
                function (result) {
                    apiDebuglog("find movecredit agent code " + agent_code + " successfully", result);
                    return res.json(ReturnSuccess(2000, result));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find movecredit agent_code " + agent_code + " error 2001", err);
                    //return res.json(ReturnErr(err));
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get movecredit agent_code: " + agent_code }));
                }
            );
        }

    } else {
        apilog("find movecredit agent_code error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});



route.post("/moveCredit", async (req, res) => {
    apilog('Post create moveCredit');
    apilog('body::==' + req.body);
    const moveCredit = req.body;

    if (moveCredit) {
        var tzd = moment().tz('Asia/Bangkok').format('YYYY-MM-DD');
        var tzt = moment().tz('Asia/Bangkok').format('HH:mm:ss');
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        moveCredit.move_date = tzd;
        moveCredit.move_time = tzt;
        moveCredit.ts = Number(new Date(tz));
        const MemberRunno = new tb_move_credit(moveCredit);
        await MemberRunno.save().then(
            function (result) {
                apiDebuglog("moveCredit save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("moveCredit save error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for add moveCredit." }));
            }
        );
    } else {
        apilog("moveCredit save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.get("/UpdateMoveCredit", async (req, res) => {
    apilog('Get UpdatemoveCredit all');
    await tb_move_credit.find({}).then(
        function (result) {
            apiDebuglog("find moveCredit result successfully ", result);
            console.log("find moveCredit result length : " + result.length + " records");
            var i, j = 1;
            var error = 0;
            for (i = 0; i < result.length; i++) {

                //console.log("id ( "+ i +" ) : " + result[i]._id);
                const tt = result[i].move_date + " " + result[i].move_time;
                const dt = new Date(tt);
                //var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                console.log("ts ( " + i + " ) : " + Number(dt));
                const a = { ts: Number(dt) };
                //moveCredit.ts = Number(new Date(tz));
                tb_move_credit.findByIdAndUpdate(result[i]._id, { $set: a }).then(
                    function (result) {
                        //console.log("agent user update result : " + result);
                        apiDebuglog("moveCredit update id " + result._id + " successfully", result);
                        j++;
                        //return res.json(ReturnSuccess(2000, { id: result._id }));
                    }
                ).catch(
                    function (err) {
                        //console.log("agent user update error 2001 : " + err);
                        apiErrorlog("moveCredit update id " + uId + " error 2001", err);
                        error = err;
                        //return res.json(ReturnErr(err));
                        //return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update moveCredit id: " + uId }));
                    }
                );
            }
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find moveCredit error 2001", err);
            //return res.json(ReturnErr(err));
            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get moveCredit." }));
        }
    );



});

route.put("/moveCredit/:id", async (req, res) => {
    apilog('Put Update moveCredit');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const moveCredit = req.body;
    const uId = req.params.id

    if (moveCredit && uId) {

        await tb_move_credit.findByIdAndUpdate(uId, { $set: moveCredit }).then(
            function (result) {
                //console.log("agent user update result : " + result);
                apiDebuglog("moveCredit update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("agent user update error 2001 : " + err);
                apiErrorlog("moveCredit update id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for update moveCredit id: " + uId }));
            }
        );
    } else {
        apilog("moveCredit update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/moveCredit/:id", async (req, res) => {
    apilog('Delete moveCredit by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_move_credit.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                //console.log("delete agent user id result : " + result);
                apiDebuglog("delete moveCredit id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("delete agent user id error 2001 : " + err);
                apiErrorlog("delete moveCredit id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for delete moveCredit id: " + uId }));
            }
        );
    } else {
        apilog("delete moveCredit id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }
});

///////////////////// end tb_move_credit ////////////////////////
module.exports = route;