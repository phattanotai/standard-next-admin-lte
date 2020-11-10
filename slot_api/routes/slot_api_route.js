const express = require('express');
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const env = require('../env');
const multer = require('multer');
//const uuidv4 = require('uuid');
//const moment = require('moment');
const moment = require('moment-timezone');
const { json } = require('body-parser');

const tb_alert = require('../models/tb_alert');
const tb_agent_user = require('../models/tb_agent_user');
const tb_user = require('../models/tb_user');

const tb_brands = require('../models/tb_brands');
const tb_menu = require('../models/tb_menu');
const tb_agent_menu = require('../models/tb_agent_menu');

const tb_game_list = require('../models/tb_game_list');
const tb_game_provider = require('../models/tb_game_provider');
const tb_services = require('../models/tb_services');
const tb_agent = require('../models/tb_agent');
const tb_user_log = require('../models/tb_user_log');
const tb_user_level = require('../models/tb_user_level');

const tb_member = require('../models/tb_member');
const tb_move_credit = require('../models/tb_move_credit');
const tb_wallets = require('../models/tb_wallets');
const tb_member_runno = require('../models/tb_member_runno');

const tb_turnover = require('../models/tb_turnover');
const tb_transections = require('../models/tb_transections');

const tb_news = require('../models/tb_news');
const tb_agent_bonus = require('../models/tb_agent_bonus');
const tb_member_bonus = require('../models/tb_member_bonus');
const tb_games_bonus = require('../models/tb_games_bonus');
const tb_gameslucky = require('../models/tb_gameslucky');
const tb_share = require('../models/tb_share');
const tb_member_share = require('../models/tb_member_share');

const { start } = require('repl');



let message = 'Success';
let status = 2000;
const route = express.Router();

// คำสั่งเชื่อม MongoDB
var mongo_uri = env.mongo_uri;
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
    () => {
        console.log("[success] task 2 : connected to the database ");
    },
    error => {
        console.log("[failed] task 2 " + error);
        process.exit();
    }
);

function apilog(msg) {
    if (env.showlog === 1) {
        var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
        console.log(tz + " :: " + msg);
        //console.log(moment().format('DD MMM YYYY HH:mm:ss') + " :: " + msg);
    }
}

function apiDebuglog(msg, result) {
    if (env.showDebuglog === 1) {
        msg = msg + " result : " + result;
    }
    var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
    console.log(tz + " :: " + msg);
}

function apiErrorlog(msg, err) {
    if (env.showErrorlog === 1) {
        msg = msg + " ErrorMsg => " + err;
    }
    var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
    console.log(tz + " :: " + msg);
}

function ReturnErr(err) {
    return {
        status: 2001,
        message: "Unsuccess",
        data: err
    };
}

function ReturnSuccess(status, data) {
    return {
        status: status,
        message: "Success",
        data: data
    };
}

function ReturnUnSuccess(status, data) {
    return {
        status: status,
        message: "Unsuccess",
        data: data
    };
}

function ReturnCustom(status, message, data) {
    return {
        status: status,
        message: message,
        data: data
    };
}

function sha256Encrypt(password) {
    return bcrypt.hashSync(password, 10);
}

function sha256Verify(password, hashed) {
    return bcrypt.compareSync(password, hashed);
}

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}


CheckMemToken = async (member, token) => {
    var result = false;
    await tb_member.find({ mem_username: username }).then(
        function (result) {
            apiDebuglog("found member:" + username + " in system.", result);
            if (result.length > 0) {
                const member_detail = result;
                return sha256Verify(token, member_detail[0].token);
            } else {
                return false;
            }
        }
    ).catch(
        function (err) {
            apiErrorlog("get member : " + member + " token error 2001", err);
            return false;
        }
    )
    return false;
}

route.get("/", (req, res) => {
    apilog('Get welcome');
    res.status(200).send("!!! Welcome to slot API world. !!!");
});


/////////////////////// common function ///////////////////

route.get('/backend', async (req, res) => {
    apilog('Get register ssl');
    //console.log('params::==', req.params);
    res.redirect(env.backendhost);
});

route.get('/check_mem_token/:member/:token', async (req, res) => {
    apilog('check_memtoken');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const member = req.params.member;
    const token = req.params.token;

    if (member && token) {
        apilog('sId: ' + sId);
        await tb_member.find({ mem_username: member }).then(
            function (result) {
                apiDebuglog("Get info member id " + member + " successfully", result);
                if (result.length > 0) {
                    const checkToken = sha256Verify(token, result[0].token);
                    return res.json(ReturnSuccess(2000, checkToken));
                } else {
                    return res.json(ReturnUnSuccess(2001, { message: "check_memtoken :: can not find member : " + member + " in system." }));
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("check_memtoken member: " + member + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess check_memtoken member: " + member }));
            }
        );

    } else {
        apilog("check_memtoken error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }
});

route.post('/login', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;

    await tb_user.find({ user_name: username, user_status: 1 }).then(
        function (result) {
            apiDebuglog("found user:" + username + " in system.", result);
            if (result.length > 0) {
                const user_detail = result;
                const checkPassword = sha256Verify(password, user_detail[0].user_pass);

                if (checkPassword) {
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    const user = { last_login: tz };
                    tb_user.findByIdAndUpdate(user_detail[0]._id, { $set: user }).then(
                        function (result) {
                            apiDebuglog("user update login time id " + user_detail[0]._id + " successfully", result);
                            return res.json(ReturnSuccess(2000, { id: user_detail[0]._id, level: user_detail[0].user_level, username: username, email: user_detail[0].user_email }));
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("user update login time id " + user_detail[0]._id + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
                else {
                    return res.json(ReturnCustom(1003, 'Username or Password is not correct.', []));
                }
            }
            else {
                return res.json(ReturnCustom(1003, 'User is not exist.', []));

            }
        }
    ).catch(
        function (err) {
            apiErrorlog("login user:" + username + " error 2001", err);
            return res.json(ReturnErr(err));
        }
    );

});

route.post('/agentlogin', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;

    await tb_agent_user.find({ user_name: username, user_status: 1 }).then(
        function (result) {
            apiDebuglog("found user:" + username + " in system.", result);
            if (result.length > 0) {
                const user_detail = result;
                const checkPassword = sha256Verify(password, user_detail[0].user_pass);

                if (checkPassword) {
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    const user = { last_login: tz };
                    tb_agent_user.findByIdAndUpdate(user_detail[0]._id, { $set: user }).then(
                        function (result) {
                            apiDebuglog("user update login time id " + user_detail[0]._id + " successfully", result);
                            tb_agent.find({ agent_code: user_detail[0].agent_code }).then(
                                function (result) {
                                    apiDebuglog("find agent code " + user_detail[0].agent_code + " successfully", result);
                                    return res.json(ReturnSuccess(2000, { id: user_detail[0]._id, level: user_detail[0].user_level, user_name: user_detail[0].user_name, user_email: user_detail[0].user_email, agent_code: user_detail[0].agent_code, agent_type: result[0].agent_type }));
                                }
                            ).catch(
                                function (err) {
                                    apiErrorlog("find agent code " + user_detail[0].agent_code + " error 2001", err);
                                    return res.json(ReturnErr(err));
                                }
                            );

                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("user update login time id " + user_detail[0]._id + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
                else {
                    return res.json(ReturnCustom(1003, 'Username or Password is not correct.', []));
                }
            }
            else {
                return res.json(ReturnCustom(1003, 'User is not exist.', []));

            }
        }
    ).catch(
        function (err) {
            apiErrorlog("login user:" + username + " error 2001", err);
            return res.json(ReturnErr(err));
        }
    );

});

route.post('/memberlogin', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;

    await tb_member.find({ mem_username: username }).then(
        function (result) {
            apiDebuglog("found member:" + username + " in system.", result);
            if (result.length > 0) {
                const user_detail = result;
                var checkPassword = false;
                var checkstatus = true;
                console.log('mem_password => ', user_detail[0].mem_password);

                /* if (user_detail[0].mem_status == '2') {
                    checkstatus = false;
                    return res.json(ReturnCustom(2003, 'User นี้ถูกใช้งานอยู่ในเครื่องอื่น หรือคุณไม่ได้logout ถ้าคุณต้องการใช้งานในเครื่องนี้กรุณากด OK', []));
                } else if (user_detail[0].mem_status == '0') {
                    checkstatus = false;
                    return res.json(ReturnCustom(1003, 'User นี้ไม่สามารถใช้งานได้ กรุณาติดต่อadmin', []));
                }  */

                if (user_detail[0].mem_password == password) {
                    checkPassword = true;
                }
                //const checkPassword = sha256Verify(password, user_detail[0].user_pass);

                if (checkPassword) {
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    const token = sha256Encrypt(username + tz.toString());
                    const user = { last_login: tz, mem_status: 2, token: token };
                    tb_member.findByIdAndUpdate(user_detail[0]._id, { $set: user }).then(
                        function (result) {
                            apiDebuglog("member update login time id " + user_detail[0]._id + " successfully", result);
                            return res.json(ReturnSuccess(2000, { id: user_detail[0]._id, balance: user_detail[0].mem_balance, mem_username: user_detail[0].mem_username, agent_code: user_detail[0].agent_code, token: token }));

                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("user update login time id " + user_detail[0]._id + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
                else {
                    return res.json(ReturnCustom(1003, 'Username or Password is not correct.', []));
                }
            }
            else {
                return res.json(ReturnCustom(1003, 'User is not exist.', []));

            }
        }
    ).catch(
        function (err) {
            apiErrorlog("login user:" + username + " error 2001", err);
            return res.json(ReturnErr(err));
        }
    );

});

route.post('/memberlogin1', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;

    await tb_member.find({ mem_username: username }).then(
        function (result) {
            apiDebuglog("found member:" + username + " in system.", result);
            if (result.length > 0) {
                const user_detail = result;
                var checkPassword = false;
                var checkstatus = true;
                console.log('mem_password => ', user_detail[0].mem_password);

                if (user_detail[0].mem_status == '2') {
                    checkstatus = false;
                    return res.json(ReturnCustom(2003, 'User นี้ถูกใช้งานอยู่ ถ้าคุณต้องการใช้งานในเครื่องนี้กรุณากด Yes ?', []));
                } else if (user_detail[0].mem_status == '0') {
                    checkstatus = false;
                    return res.json(ReturnCustom(1003, 'User นี้ไม่สามารถใช้งานได้ กรุณาติดต่อadmin', []));
                }

                if (user_detail[0].mem_password == password) {
                    checkPassword = true;
                }
                //const checkPassword = sha256Verify(password, user_detail[0].user_pass);

                if (checkPassword) {
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    const token = sha256Encrypt(username + tz.toString());
                    const user = { last_login: tz, mem_status: 2, token: token };
                    tb_member.findByIdAndUpdate(user_detail[0]._id, { $set: user }).then(
                        function (result) {
                            apiDebuglog("member update login time id " + user_detail[0]._id + " successfully", result);
                            return res.json(ReturnSuccess(2000, { id: user_detail[0]._id, balance: user_detail[0].mem_balance, mem_username: user_detail[0].mem_username, agent_code: user_detail[0].agent_code, token: token }));

                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("user update login time id " + user_detail[0]._id + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
                else {
                    return res.json(ReturnCustom(1003, 'Username or Password is not correct.', []));
                }
            }
            else {
                return res.json(ReturnCustom(1003, 'User is not exist.', []));

            }
        }
    ).catch(
        function (err) {
            apiErrorlog("login user:" + username + " error 2001", err);
            return res.json(ReturnErr(err));
        }
    );

});

route.post('/memberlogin2', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;

    await tb_member.find({ mem_username: username }).then(
        function (result) {
            apiDebuglog("found member:" + username + " in system.", result);
            if (result.length > 0) {
                const user_detail = result;
                var checkPassword = false;
                var checkstatus = true;
                if (user_detail[0].mem_password == password) {
                    checkPassword = true;
                }
                //const checkPassword = sha256Verify(password, user_detail[0].user_pass);

                if (checkPassword) {
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    const token = sha256Encrypt(username + tz.toString());
                    const user = { last_login: tz, mem_status: 2, token: token };
                    tb_member.findByIdAndUpdate(user_detail[0]._id, { $set: user }).then(
                        function (result) {
                            apiDebuglog("member update login time id " + user_detail[0]._id + " successfully", result);
                            return res.json(ReturnSuccess(2000, { id: user_detail[0]._id, balance: user_detail[0].mem_balance, mem_username: user_detail[0].mem_username, agent_code: user_detail[0].agent_code, token: token }));
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("user update login time id " + user_detail[0]._id + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
                else {
                    return res.json(ReturnCustom(1003, 'Username or Password is not correct.', []));
                }
            }
            else {
                return res.json(ReturnCustom(1003, 'User is not exist.', []));

            }
        }
    ).catch(
        function (err) {
            apiErrorlog("login user:" + username + " error 2001", err);
            return res.json(ReturnErr(err));
        }
    );

});

route.get("/member_logoff/:id", async (req, res) => {
    apilog('Put Update member');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const member = { mem_status: 1 };
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
});


route.get("/gamelistbyagent/:agent_code", async (req, res) => {
    apilog('Get game list from agent code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_services.find({ agent_code: agent_code, ser_status: 'On' }).then(
            function (result) {
                if (result.length > 0) {
                    var i;
                    var brand = [];
                    var loadcomplete = false;
                    var mylength = result.length
                    for (i = 0; i < mylength; i++) {
                        brand.push(result[i].brand_code);
                    }
                    tb_game_list.find({}).then(
                        function (result) {
                            if (result.length > 0) {
                                var j, k;
                                var arr = [];
                                var arrresult = [];
                                var arrtype = [];
                                console.log('origin length : ' + result.length);
                                for (j = 0; j < result.length; j++) {
                                    //console.log('result[' + j + '].game_brand => ' + result[j].game_brand);
                                    for (k = 0; k < brand.length; k++) {
                                        //console.log('brand[' + k + '] => ' + brand[k]);
                                        //console.log((result[j].game_brand.toLowerCase() == brand[k].toLowerCase()));
                                        if (result[j].game_brand.toLowerCase() == brand[k].toLowerCase()) {
                                            arrresult.push(result[j]);
                                            if (arrtype.length > 0) {
                                                if (!arrtype.includes(result[j].game_type)) {
                                                    arrtype.push(result[j].game_type);
                                                }
                                            } else {
                                                arrtype.push(result[j].game_type);
                                            }
                                            break;
                                        }
                                    }
                                    //console.log('result : ' + arrresult);
                                }
                                console.log('game_type : ' + arrtype);
                                console.log('result length: ' + arrresult.length);
                                arr.push({ 'gametype': arrtype });
                                arr.push({ 'gamelist': arrresult });
                                return res.json(ReturnSuccess(2000, arr));
                            }
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("find alert error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );

                } else {
                    apilog("find game list (Code:2009): No Data.");
                    return res.json(ReturnSuccess(2009, "No Data"));
                }
                /* apiDebuglog("find game list successfully", result)
                return res.json(ReturnSuccess(2000, result)); */
            }
        ).catch(
            function (err) {
                apiErrorlog("find alert error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find  game list  error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/loadgames_all_byagent/:agent_code", async (req, res) => {
    apilog('Get game list from agent code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_services.find({ agent_code: agent_code, ser_status: 'On' }).then(
            function (result) {
                if (result.length > 0) {
                    var brandservice = result;
                    //var mylength = result.length;
                    console.log('brandservice length : ' + brandservice.length);
                    tb_brands.find({}).then(
                        function (result) {
                            if (result.length > 0) {
                                var i, a;
                                var brand = [];
                                var brand_slot = [];
                                var loadcomplete = false;
                                var brand_data = [];
                                var brandresult = result;
                                let data = [];
                                console.log('brand length : ' + brandresult.length);
                                tb_game_provider.find({}).then(
                                    function (result) {
                                        if (result.length > 0) {
                                            const game_provider = result;
                                            tb_brands.find({ brand_sort: { $gte: 1 } }).sort({ brand_sort: 1 }).then(
                                                function (result) {
                                                    apiDebuglog("find brands successfully", result);
                                                    var brands = result;
                                                    //return res.json(ReturnSuccess(2000, result)); 
                                                    tb_game_provider.find({}).sort({ brand_sort: 1 }).then(
                                                        function (result) {
                                                            var i;
                                                            for (i = 0; i < brands.length; i++) {
                                                                if (brands[i].brand_code != 'QTECH') {
                                                                    data.push({
                                                                        '_id': brands[i]._id, 'brand_code': brands[i].brand_code, 'brand_name': brands[i].brand_name,
                                                                        'brand_img': brands[i].brand_img, 'brand_sort': brands[i].brand_sort,'brand_status': brands[i].brand_status
                                                                    });
                                                                }
                                                            }
                                                            for (i = 0; i < result.length; i++) {
                                                                data.push({
                                                                    '_id': result[i]._id, 'brand_code': result[i].game_code, 'brand_name': result[i].game_name,
                                                                    'brand_img': result[i].game_img, 'brand_sort': result[i].brand_sort,'brand_status': result[i].game_status
                                                                });
                                                            }
                                                            //return res.json(ReturnSuccess(2000, data));
                                                            var brands_slot_sort = data;
                                                            tb_game_list.find({}).sort({ _id: -1 }).then(
                                                                function (result) {
                                                                    if (result.length > 0) {
                                                                        var j, k;
                                                                        var arr = [];
                                                                        var arr_main = [];
                                                                        var arrresult = [];
                                                                        var arr_tmp = [];
                                                                        var arrtype = ['Hits'];
                                                                        arrresult.push([]);
                                                                        for (i = 0; i < brandservice.length; i++) {
                                                                            //console.log('///////////////////////////// Start //////////////////////////');
                                                                            //console.log('brandservice code ' + i + ' : ' + brandservice[i].brand_code);
                                                                            for (a = 0; a < brandresult.length; a++) {
                                                                                if (brandservice[i].brand_code == brandresult[a].brand_code) {
                                                                                    //console.log('brandresult code ' + a + ' : ' + brandresult[a].brand_code);
                                                                                    brand.push(brandresult[a].brand_code);
                                                                                    var my_arr = [brandresult[a].brand_code, brandresult[a].brand_name, brandresult[a].brand_img];
                                                                                    brand_data.push(my_arr);
                                                                                }
                                                                            }
                                                                            //console.log('///////////////////////////// End /////////////////////////////');
                                                                        }
                                                                        console.log('brand : ' + brand.length);
                                                                        console.log('brand_data : ' + brand_data.length);
                                                                        for (j = 0; j < result.length; j++) {
                                                                            if (arrtype.length > 0) {
                                                                                if (!arrtype.includes(result[j].game_type)) {
                                                                                    arrtype.push(result[j].game_type);
                                                                                    arrresult.push([]);
                                                                                }
                                                                            } else {
                                                                                arrtype.push(result[j].game_type);
                                                                                arrresult.push([]);
                                                                            }
                                                                        }
                                                                        for (k = 0; k < brand.length; k++) {
                                                                            for (j = 0; j < result.length; j++) {
                                                                                //console.log('///////////////////////////// Start //////////////////////////');
                                                                                //console.log('result[' + j + '].game_brand => ' + result[j].game_brand);                                     
                                                                                if (result[j].game_brand.toLowerCase() == brand[k].toLowerCase()) {
                                                                                    if (result[j].game_type.toLowerCase() == 'slot') {
                                                                                        //console.log('brand[' + k + '].brand_code => ' + brand[k]);
                
                                                                                        if (brand_slot.length == 0) {
                                                                                            brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                                        } else {
                                                                                            /* if (!brand_slot.includes(brand[k])) {
                                                                                                brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                                            } */
                                                                                            var q;
                                                                                            let ins = true;
                                                                                            //console.log('=========================================================');
                                                                                            for (q = 0; q < brand_slot.length; q++) {
                                                                                                //console.log('brand_slot[' + q + '].brand_code => ' + brand_slot[q].brand_code);
                                                                                                if (brand_slot[q] && brand_slot[q].brand_code == brand[k]) {
                                                                                                    ins = false;
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (ins) {
                                                                                                brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    var z;
                                                                                    for (z = 0; z < arrtype.length; z++) {
                                                                                        //arrresult.push([]);
                                                                                        if (arrtype[z].toString().toLowerCase() == result[j].game_type.toString().toLowerCase()) {
                                                                                            arrresult[z].push(result[j]);
                                                                                        }
                                                                                        if (arrtype[z].toString().toLowerCase() == 'hits' && result[j].game_new.toString().toLowerCase() == 'yes') {
                                                                                            arrresult[z].push(result[j]);
                                                                                        }
                                                                                    }
                                                                                }
                                                                                //console.log('///////////////////////////// End /////////////////////////////');
                                                                            }
                                                                            //arr_tmp.push()
                                                                        }
                                                                        var z;
                                                                        for (z = 0; z < arrtype.length; z++) {
                                                                            if (arrtype[z].toLowerCase() != 'slot') {
                                                                                var str = arrtype[z];
                                                                                //console.log('arrtype[' + z + '] : ' + str);
                                                                                var v = {};
                                                                                v[str] = arrresult[z];
                                                                                arr_main.push(v);
                                                                            } else {
                                                                                var s;
                                                                                var str = arrtype[z];
                                                                                var games_brand = [];
                                                                                for (s = 0; s < brands_slot_sort.length; s++) {
                                                                                    var v = {};
                                                                                    var y = {};
                                                                                    var k = {};
                                                                                    var r;
                                                                                    var tmp = [];
                                                                                    for (r = 0; r < arrresult[z].length; r++) {
                                                                                        if (arrresult[z][r].game_brand.toLowerCase() == brands_slot_sort[s].brand_code.toLowerCase() || arrresult[z][r].game_provider.toLowerCase() == brands_slot_sort[s].brand_code.toLowerCase()) {
                                                                                            tmp.push(arrresult[z][r]);
                                                                                        }
                                                                                    }
                                                                                                
                                                                                    //k["provider"] = false;
                                                                                    k["img"] = brands_slot_sort[s].brand_img;
                                                                                    k["data"] = tmp;
            
                                                                                    y[brands_slot_sort[s].brand_code] = k;
            
                                                                                    games_brand.push(y);
                                                                                }
                                                                                /* for (s = 0; s < brands_slot_sort.length; s++) {
                                                                                    if (brand_slot[s].brand_code.toLowerCase() != 'qtech') {
                                                                                        var v = {};
                                                                                        var y = {};
                                                                                        var k = {};
                                                                                        var r;
                                                                                        var tmp = [];
                                                                                        for (r = 0; r < arrresult[z].length; r++) {
                                                                                            if (arrresult[z][r].game_brand.toLowerCase() == brand_slot[s].brand_code.toLowerCase()) {
                                                                                                tmp.push(arrresult[z][r]);
                                                                                            }
                                                                                        }
                
                                                                                        //k["provider"] = false;
                                                                                        k["img"] = brand_slot[s].brand_img;
                                                                                        k["data"] = tmp;
                
                                                                                        y[brand_slot[s].brand_code] = k;
                
                                                                                        games_brand.push(y);
                                                                                    } else {
                                                                                        var v = {};
                                                                                        var y = {};
                                                                                        var k = {};
                                                                                        var x = {};
                                                                                        var n;
                                                                                        for (n = 0; n < game_provider.length; n++) {
                
                                                                                            var b = {};
                                                                                            var r;
                                                                                            var tmp = [];
                                                                                            for (r = 0; r < arrresult[z].length; r++) {
                                                                                                if (arrresult[z][r].game_provider.toLowerCase() == game_provider[n].game_code.toLowerCase()) {
                                                                                                    tmp.push(arrresult[z][r]);
                                                                                                }
                                                                                            }
                                                                                            b["img"] = game_provider[n].game_img;
                                                                                            b["data"] = tmp;
                
                                                                                            x["provider"] = true;
                                                                                            x["img"] = brand_slot[s].brand_img;
                                                                                            x[game_provider[n].game_code] = b;
                
                                                                                        }
                
                
                                                                                        y[brand_slot[s].brand_code] = x;
                
                                                                                        games_brand.push(y);
                                                                                    }
                                                                                } */
                                                                                v[str] = games_brand;
                                                                                arr_main.push(v);
                                                                            }
                
                                                                        }
                                                                        console.log('game_type : ' + arrtype);
                                                                        console.log('result length: ' + arrresult.length);
                                                                        arr.push({ 'brand_all': brand });
                                                                        arr.push({ 'brand_slot': brand_slot });
                                                                        arr.push({ 'brand_slot_sort': brands_slot_sort });
                                                                        arr.push({ 'gametype': arrtype });5
                                                                        arr.push({ 'gameprovider': game_provider });
                                                                        arr.push({ 'gamelist': arr_main });
                                                                        return res.json(ReturnSuccess(2000, arr));
                                                                    }
                                                                }
                                                            ).catch(
                                                                function (err) {
                                                                    apiErrorlog("find alert error 2001", err);
                                                                    return res.json(ReturnErr(err));
                                                                }
                                                            );

                                                        }
                                                    ).catch(
                                                        function (err) {
                                                            apiErrorlog("find brands error 2001", err);
                                                            return res.json(ReturnErr(err));
                                                        }
                                                    );
                                        
                                                }
                                            ).catch(
                                                function (err) {
                                                    apiErrorlog("find brands error 2001", err);
                                                    return res.json(ReturnErr(err));
                                                }
                                            );                                            
                                            
                                        }
                                    }
                                )

                            }
                        }
                    )


                } else {
                    apilog("find game list (Code:2009): No Data.");
                    return res.json(ReturnSuccess(2009, "No Data"));
                }
                /* apiDebuglog("find game list successfully", result)
                return res.json(ReturnSuccess(2000, result)); */
            }
        ).catch(
            function (err) {
                apiErrorlog("find alert error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find  game list  error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/loadgamesbyagent/:agent_code", async (req, res) => {
    apilog('Get game list from agent code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_services.find({ agent_code: agent_code, ser_status: 'On' }).then(
            function (result) {
                if (result.length > 0) {
                    var brandservice = result;
                    //var mylength = result.length;
                    console.log('brandservice length : ' + brandservice.length);
                    tb_brands.find({}).then(
                        function (result) {
                            if (result.length > 0) {
                                var i, a;
                                var brand = [];
                                var brand_slot = [];
                                var loadcomplete = false;
                                var brand_data = [];
                                var brandresult = result;
                                console.log('brand length : ' + brandresult.length);
                                tb_game_provider.find({}).then(
                                    function (result) {
                                        if (result.length > 0) {
                                            const game_provider = result;
                                            tb_game_list.find({}).then(
                                                function (result) {
                                                    if (result.length > 0) {
                                                        var j, k;
                                                        var arr = [];
                                                        var arr_main = [];
                                                        var arrresult = [];
                                                        var arr_tmp = [];
                                                        var arrtype = ['Hits'];
                                                        arrresult.push([]);
                                                        for (i = 0; i < brandservice.length; i++) {
                                                            //console.log('///////////////////////////// Start //////////////////////////');
                                                            //console.log('brandservice code ' + i + ' : ' + brandservice[i].brand_code);
                                                            for (a = 0; a < brandresult.length; a++) {
                                                                if (brandservice[i].brand_code == brandresult[a].brand_code) {
                                                                    //console.log('brandresult code ' + a + ' : ' + brandresult[a].brand_code);
                                                                    brand.push(brandresult[a].brand_code);
                                                                    var my_arr = [brandresult[a].brand_code, brandresult[a].brand_name, brandresult[a].brand_img];
                                                                    brand_data.push(my_arr);
                                                                }
                                                            }
                                                            //console.log('///////////////////////////// End /////////////////////////////');
                                                        }
                                                        console.log('brand : ' + brand.length);
                                                        console.log('brand_data : ' + brand_data.length);
                                                        for (j = 0; j < result.length; j++) {
                                                            if (arrtype.length > 0) {
                                                                if (!arrtype.includes(result[j].game_type)) {
                                                                    arrtype.push(result[j].game_type);
                                                                    arrresult.push([]);
                                                                }
                                                            } else {
                                                                arrtype.push(result[j].game_type);
                                                                arrresult.push([]);
                                                            }
                                                        }
                                                        for (k = 0; k < brand.length; k++) {
                                                            for (j = 0; j < result.length; j++) {
                                                                //console.log('///////////////////////////// Start //////////////////////////');
                                                                //console.log('result[' + j + '].game_brand => ' + result[j].game_brand);                                     
                                                                if (result[j].game_brand.toLowerCase() == brand[k].toLowerCase()) {
                                                                    if (result[j].game_type.toLowerCase() == 'slot') {
                                                                        //console.log('brand[' + k + '].brand_code => ' + brand[k]);

                                                                        if (brand_slot.length == 0) {
                                                                            brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                        } else {
                                                                            /* if (!brand_slot.includes(brand[k])) {
                                                                                brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                            } */
                                                                            var q;
                                                                            let ins = true;
                                                                            //console.log('=========================================================');
                                                                            for (q = 0; q < brand_slot.length; q++) {
                                                                                //console.log('brand_slot[' + q + '].brand_code => ' + brand_slot[q].brand_code);
                                                                                if (brand_slot[q] && brand_slot[q].brand_code == brand[k]) {
                                                                                    ins = false;
                                                                                    break;
                                                                                }
                                                                            }
                                                                            if (ins) {
                                                                                brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                            }
                                                                        }
                                                                    }
                                                                    var z;
                                                                    for (z = 0; z < arrtype.length; z++) {
                                                                        //arrresult.push([]);
                                                                        if (arrtype[z].toString().toLowerCase() == result[j].game_type.toString().toLowerCase()) {
                                                                            arrresult[z].push(result[j]);
                                                                        }
                                                                        if (arrtype[z].toString().toLowerCase() == 'hits' && result[j].game_new.toString().toLowerCase() == 'yes') {
                                                                            arrresult[z].push(result[j]);
                                                                        }
                                                                    }
                                                                }
                                                                //console.log('///////////////////////////// End /////////////////////////////');
                                                            }
                                                            //arr_tmp.push()
                                                        }
                                                        var z;
                                                        for (z = 0; z < arrtype.length; z++) {
                                                            if (arrtype[z].toLowerCase() != 'slot') {
                                                                var str = arrtype[z];
                                                                //console.log('arrtype[' + z + '] : ' + str);
                                                                var v = {};
                                                                v[str] = arrresult[z];
                                                                arr_main.push(v);
                                                            } else {
                                                                var s;
                                                                var str = arrtype[z];
                                                                var games_brand = [];
                                                                for (s = 0; s < brand_slot.length; s++) {
                                                                    if (brand_slot[s].brand_code.toLowerCase() != 'qtech') {
                                                                        var v = {};
                                                                        var y = {};
                                                                        var k = {};
                                                                        var r;
                                                                        var tmp = [];
                                                                        for (r = 0; r < arrresult[z].length; r++) {
                                                                            if (arrresult[z][r].game_brand.toLowerCase() == brand_slot[s].brand_code.toLowerCase()) {
                                                                                tmp.push(arrresult[z][r]);
                                                                            }
                                                                        }

                                                                        k["provider"] = false;
                                                                        k["img"] = brand_slot[s].brand_img;
                                                                        k["data"] = tmp;

                                                                        y[brand_slot[s].brand_code] = k;

                                                                        games_brand.push(y);
                                                                    } else {
                                                                        var v = {};
                                                                        var y = {};
                                                                        var k = {};
                                                                        var x = {};
                                                                        var n;
                                                                        for (n = 0; n < game_provider.length; n++) {

                                                                            var b = {};
                                                                            var r;
                                                                            var tmp = [];
                                                                            for (r = 0; r < arrresult[z].length; r++) {
                                                                                if (arrresult[z][r].game_provider.toLowerCase() == game_provider[n].game_code.toLowerCase()) {
                                                                                    tmp.push(arrresult[z][r]);
                                                                                }
                                                                            }
                                                                            b["img"] = game_provider[n].game_img;
                                                                            b["data"] = tmp;

                                                                            x["provider"] = true;
                                                                            x["img"] = brand_slot[s].brand_img;
                                                                            x[game_provider[n].game_code] = b;

                                                                        }


                                                                        y[brand_slot[s].brand_code] = x;

                                                                        games_brand.push(y);
                                                                    }
                                                                }
                                                                v[str] = games_brand;
                                                                arr_main.push(v);
                                                            }

                                                        }
                                                        console.log('game_type : ' + arrtype);
                                                        console.log('result length: ' + arrresult.length);
                                                        arr.push({ 'brand_all': brand });
                                                        arr.push({ 'brand_slot': brand_slot });
                                                        arr.push({ 'gametype': arrtype });
                                                        arr.push({ 'gameprovider': game_provider });
                                                        arr.push({ 'gamelist': arr_main });
                                                        return res.json(ReturnSuccess(2000, arr));
                                                    }
                                                }
                                            ).catch(
                                                function (err) {
                                                    apiErrorlog("find alert error 2001", err);
                                                    return res.json(ReturnErr(err));
                                                }
                                            );
                                        }
                                    }
                                )

                            }
                        }
                    )


                } else {
                    apilog("find game list (Code:2009): No Data.");
                    return res.json(ReturnSuccess(2009, "No Data"));
                }
                /* apiDebuglog("find game list successfully", result)
                return res.json(ReturnSuccess(2000, result)); */
            }
        ).catch(
            function (err) {
                apiErrorlog("find alert error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find  game list  error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/brandlistbyagent/:agent_code", async (req, res) => {
    apilog('Get brand list from agent code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_services.find({ agent_code: agent_code, ser_status: 'On' }).then(
            function (result) {
                if (result.length > 0) {
                    var i;
                    var brand = [];
                    var loadcomplete = false;
                    var mylength = result.length
                    for (i = 0; i < mylength; i++) {
                        brand.push({ 'brand_code': result[i].brand_code });
                    }
                    return res.json(ReturnSuccess(2000, brand));

                } else {
                    tb_agent.find({ agent_code: agent_code }).then(
                        function (result) {
                            apiDebuglog("find agent_code : " + agent_code + " successfully", result);
                            //return res.json(ReturnSuccess(2000, result));
                            tb_services.find({ agent_code: result[0].agent_lineup, ser_status: 'On' }).then(
                                function (result) {
                                    if (result.length > 0) {
                                        var i;
                                        var brand = [];
                                        //var loadcomplete = false;
                                        var mylength = result.length
                                        for (i = 0; i < mylength; i++) {
                                            brand.push({ 'brand_code': result[i].brand_code });
                                        }
                                        return res.json(ReturnSuccess(2000, brand));

                                    } else {
                                        apilog("find brand list (Code:2009): No Data.");
                                        return res.json(ReturnSuccess(2009, "No Data"));

                                    }
                                }
                            ).catch(
                                function (err) {
                                    apiErrorlog("find brand list error 2001", err);
                                    return res.json(ReturnErr(err));
                                }
                            );
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("find agent_code " + agent_code + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                    /*  apilog("find brand list (Code:2009): No Data.");
                     return res.json(ReturnSuccess(2009, "No Data")); */
                }
                /* apiDebuglog("find game list successfully", result)
                return res.json(ReturnSuccess(2000, result)); */
            }
        ).catch(
            function (err) {
                apiErrorlog("find brand list error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find  brand list  error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

//////////////////// end common function //////////////////


//////////////////////// tb_alert ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/alert", async (req, res) => {
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
});

route.get("/alert/:id", async (req, res) => {
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

});

route.post("/alert", async (req, res) => {
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

});

route.put("/alert/:id", async (req, res) => {
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

});

route.delete("/alert/:id", async (req, res) => {
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

});

///////////////////// end tb_alert /////////////////////

//////////////////////// tb_agent_user /////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/agent_user", async (req, res) => {
    apilog('Get agent user all');
    await tb_agent_user.find({}).then(
        function (result) {
            apiDebuglog("find agent user result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find agent user error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/agent_user/:id", async (req, res) => {
    apilog('Get agent user by id');
    apilog('params::==' + req.params);
    const auId = req.params.id
    if (auId) {
        await tb_agent_user.find({ _id: auId }).then(
            function (result) {
                apiDebuglog("find agent user id " + auId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent user id " + auId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent user id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/get_agentuser_from_agentcode/:code", async (req, res) => {
    apilog('Get agent user by agentcode');
    apilog('params::==' + req.params);
    const aCode = req.params.code
    if (aCode) {
        await tb_agent_user.find({ agent_code: aCode }).then(
            function (result) {
                apiDebuglog("find agent user by agentcode " + aCode + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent user by agentcode " + aCode + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent user by agentcode error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/agent_user", async (req, res) => {
    apilog('Post create agent user');
    apilog('body::==' + req.body);
    const agent = req.body;

    if (agent) {
        await tb_agent_user.find({ user_name: agent.user_name, agent_code: agent.agent_code }).then(
            function (result) {
                apiDebuglog("find agent user name :" + agent.user_name + " successfully", result);
                apilog('agent user dup => ' + result.length);
                if (result.length > 0) {
                    //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this user name is aleary in system.'})) 
                    return res.json(ReturnCustom(1003, 'Can not add because this user name is aleary in system.', []));
                }
                else {
                    agent.user_pass = sha256Encrypt(agent.user_pass);
                    var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
                    agent.add_date = tz;
                    const Agent = new tb_agent_user(agent);
                    Agent.save().then(
                        function (result) {
                            apiDebuglog("agent user save successfully", { id: result._id });
                            return res.json(ReturnSuccess(2000, result));
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("agent user save error 2001", err);
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
        apilog("agent user save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/agent_user/:id", async (req, res) => {
    apilog('Put Update agent user');
    apilog('body::==' + JSON.stringify(req.body));
    apilog('params::==' + req.params);
    const agent = req.body;
    const auId = req.params.id

    if (agent && auId) {
        if (agent.user_pass && agent.user_pass != "") {
            apilog('gen password');
            agent.user_pass = sha256Encrypt(agent.user_pass);
        }
        await tb_agent_user.findByIdAndUpdate(auId, { $set: agent }).then(
            function (result) {
                apiDebuglog("agent user update id " + auId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent user update id " + auId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent user update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/agent_user/:id", async (req, res) => {
    apilog('Delete alert by id');
    apilog('params::==' + req.params);
    const auId = req.params.id
    if (auId) {
        await tb_agent_user.findByIdAndDelete({ _id: auId }).then(
            function (result) {
                apiDebuglog("delete agent user id " + auId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete agent user id " + auId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete agent user id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_agent_user /////////////////

//////////////////////// tb_user ///////////////////////
//////////////////// test OK BY TOM////////////////////
route.get("/user", async (req, res) => {
    apilog('Get user all');
    await tb_user.find({}).then(
        function (result) {
            apiDebuglog("find user result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find user error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/user/:id", async (req, res) => {
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

});

route.post("/user", async (req, res) => {
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

});

route.put("/user/:id", async (req, res) => {
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

});

route.delete("/user/:id", async (req, res) => {
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

});

///////////////////// end tb_user ////////////////////////

//////////////////////// tb_games ///////////////////////
////////////////////////TEST OK BY TOM  //////////////////

route.get("/games", async (req, res) => {
    apilog('Get games all');
    await tb_games.find({}).then(
        function (result) {
            apiDebuglog("find games result successfully", result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find games error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/games/:id", async (req, res) => {
    apilog('Get games by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_games.find({ _id: gId }).then(
            function (result) {
                apiDebuglog("find games id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/games", async (req, res) => {
    apilog('Post create games');
    apilog('body::==' + req.body);
    const games = req.body;

    if (games) {

        const Brands = new tb_games(games);
        await Brands.save().then(
            function (result) {
                apiDebuglog("games save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/games/:id", async (req, res) => {
    apilog('Put Update games');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const games = req.body;
    const gId = req.params.id

    if (games && gId) {

        await tb_games.findByIdAndUpdate(gId, { $set: games }).then(
            function (result) {
                apiDebuglog("games update id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games update id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/games/:id", async (req, res) => {
    apilog('Delete games by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_games.findByIdAndDelete({ _id: gId }).then(
            function (result) {
                apiDebuglog("delete games id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete games id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete games id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_games ////////////////////////

//////////////////////// tb_game_list ///////////////////////

route.get("/gamelist", async (req, res) => {
    apilog('Get game list all');
    await tb_game_list.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find game list result successfully", result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find game list error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/gamelist/:id", async (req, res) => {
    apilog('Get game list by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_game_list.find({ _id: gId }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find game list id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game list id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game list id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/gameInfo/:game_code", async (req, res) => {
    apilog('Get game list by id');
    apilog('params::==' + req.params);
    const gId = req.params.game_code
    if (gId) {
        await tb_game_list.find({ game_code: gId }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find game code " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game code " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game code error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/gamelistwithbrand/:brand", async (req, res) => {
    apilog('Get game list by id');
    apilog('params::==' + JSON.stringify(req.params));
    const brand = req.params.brand
    if (brand) {
        await tb_game_list.find({ game_brand: brand }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find game list brand " + brand + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game list brand " + brand + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game list brand error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/gamelist", async (req, res) => {
    apilog('Post create game list');
    apilog('body::==' + req.body);
    const games = req.body;

    if (games) {

        const Games = new tb_game_list(games);
        await Games.save().then(
            function (result) {
                apiDebuglog("game list save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("game list save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("game list save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.post("/addgamelist", async (req, res) => {
    apilog('Post create game list');
    apilog('body::==' + req.body);
    const games = req.body;

    if (games) {
        await tb_game_list.find({ game_brand: games.game_brand, game_code: games.game_code, game_id: games.game_id, game_id2: games.game_id2 }).then(
            function (result) {
                apiDebuglog("find game list brand " + games.game_brand + " successfully", result);
                if (result.length > 0) {
                    return res.json(ReturnSuccess(2003, "Duplicate record"));
                } else {
                    //return res.json(ReturnSuccess(2000, "No Duplicate"));
                    const Games = new tb_game_list(games);
                    Games.save().then(
                        function (result) {
                            apiDebuglog("game list save successfully", result);
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    ).catch(

                        function (err) {
                            apiErrorlog("game list save error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );

                }
            }
        ).catch(
            function (err) {
                apiErrorlog("find game list brand " + brand + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );


    } else {
        apilog("game list save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/gamelist/:id", async (req, res) => {
    apilog('Put Update game list');
    apilog('body::==' + JSON.stringify(req.body));
    apilog('params::==' + req.params);
    const games = req.body;
    const gId = req.params.id

    if (games && gId) {

        await tb_game_list.findByIdAndUpdate(gId, { $set: games }).then(
            function (result) {
                apiDebuglog("game list update id " + gId + " successfully", result);
                apiDebuglog("original_game_img => " + games.original_game_img);
                apiDebuglog("game_img => " + games.game_img);
                if (games.original_game_img && games.game_img && games.game_img !== games.original_game_img) {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + result.original_game_img;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + games.original_game_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                //return res.json(ReturnSuccess(2000, { id: result._id }));
                                apiDebuglog("original_game_img_app => " + games.original_game_img_app);
                                apiDebuglog("game_img => " + games.game_img_app);
                                if (games.original_game_img_app && games.game_img_app && games.game_img_app !== games.original_game_img_app) {
                                    var fs = require('fs');
                                    try {
                                        path = __dirname + '/public/' + result.original_game_img_app;
                                        if (fs.existsSync(path)) {
                                            //file exists
                                            fs.unlink(__dirname + '/public/' + games.original_game_img_app, function (err) {
                                                if (err) throw err;
                                                console.log('Image file deleted!');
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            });
                                        } else {
                                            return res.json(ReturnSuccess(2000, { id: result._id }));
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        return res.json(ReturnErr(err));
                                    }

                                } else {
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                }
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("game list update id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("game list update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/gamelistAll", async (req, res) => {
    apilog('Delete game list by id');
    apilog('params::==' + req.params);
    const gId = true;
    if (gId) {
        await tb_game_list.deleteMany().then(
            function (result) {
                apiDebuglog("delete game list All successfully", result);
                /* if (result.game_img && result.game_img !== '') {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + result.game_img;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                //return res.json(ReturnSuccess(2000, { id: result._id }));
                                if (result.game_img_app && result.game_img_app !== '') {
                                    var fs = require('fs');
                                    try {
                                        path = __dirname + '/public/' + result.game_img_app;
                                        if (fs.existsSync(path)) {
                                            //file exists
                                            fs.unlink(__dirname + '/public/' + result.game_img_app, function (err) {
                                                if (err) throw err;
                                                console.log('Image app file deleted!');
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            });
                                        } else {
                                            return res.json(ReturnSuccess(2000, { id: result._id }));
                                        }
                                    } catch (err) {
                                        console.error(err)
                                        return res.json(ReturnErr(err));
                                    }

                                } else {
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                }
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                } */
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete game list id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete game list id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.delete("/gamelist/:id", async (req, res) => {
    apilog('Delete game list by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_game_list.findByIdAndDelete({ _id: gId }).then(
            function (result) {
                apiDebuglog("delete game list id " + gId + " successfully", result);
                if (result.game_img && result.game_img !== '') {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + result.game_img;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                //return res.json(ReturnSuccess(2000, { id: result._id }));
                                if (result.game_img_app && result.game_img_app !== '') {
                                    var fs = require('fs');
                                    try {
                                        path = __dirname + '/public/' + result.game_img_app;
                                        if (fs.existsSync(path)) {
                                            //file exists
                                            fs.unlink(__dirname + '/public/' + result.game_img_app, function (err) {
                                                if (err) throw err;
                                                console.log('Image app file deleted!');
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            });
                                        } else {
                                            return res.json(ReturnSuccess(2000, { id: result._id }));
                                        }
                                    } catch (err) {
                                        console.error(err)
                                        return res.json(ReturnErr(err));
                                    }

                                } else {
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                }
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
                //return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete game list id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete game list id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_game_list ////////////////////////

//////////////////////// tb_services ///////////////////////

route.get("/services", async (req, res) => {
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
});

route.get("/services/:id", async (req, res) => {
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

});

route.get("/services_agent/:agcode", async (req, res) => {
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

});

route.post("/getservices", async (req, res) => {
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

});

route.post("/services", async (req, res) => {
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

});

route.put("/services/:id", async (req, res) => {
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

});

route.delete("/services/:id", async (req, res) => {
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

});

///////////////////// end tb_services ////////////////////////


//////////////////////// tb_agent ///////////////////////

route.get("/agent", async (req, res) => {
    apilog('Get agent all');
    await tb_agent.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find agent result successfully", result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find agent error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/agent/:id", async (req, res) => {
    apilog('Get agent by id');
    apilog('params::==' + req.params);
    const agId = req.params.id
    if (agId) {
        await tb_agent.find({ _id: agId }).then(
            function (result) {
                apiDebuglog("find agent id " + agId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent id " + agId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/agentbycode/:agent_code", async (req, res) => {
    apilog('Get agent by id');
    apilog('params::==' + req.params);
    const agId = req.params.agent_code
    if (agId) {
        await tb_agent.find({ agent_code: agId }).then(
            function (result) {
                apiDebuglog("find agent_code " + agId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent_code " + agId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent_code error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/listagentmaster/:agent_code", async (req, res) => {
    apilog('Get agent by agent_code');
    apilog('params::==' + req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_agent.find({ agent_lineup: agent_code }).then(
            function (result) {
                apiDebuglog("find agent by agent_code " + agent_code + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent by agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent by agent_code error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/agent", async (req, res) => {
    apilog('Post create agent');
    apilog('body::==' + req.body);
    const agent = req.body;

    if (agent) {

        const Agent = new tb_agent(agent);
        await Agent.save().then(
            function (result) {
                apiDebuglog("agent save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/agent/:id", async (req, res) => {
    apilog('Put Update agent');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const agent = req.body;
    const agId = req.params.id

    if (agent && agId) {

        await tb_agent.findByIdAndUpdate(agId, { $set: agent }).then(
            function (result) {
                apiDebuglog("agent update id " + agId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent update id " + agId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/agent/:id", async (req, res) => {
    apilog('Delete agent by id');
    apilog('params::==' + req.params);
    const agId = req.params.id
    if (agId) {
        await tb_agent.findByIdAndDelete({ _id: agId }).then(
            function (result) {
                apiDebuglog("delete agent id " + agId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete agent id " + agId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete agent id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_agent ////////////////////////

//////////////////////// tb_user_level ///////////////////////

route.get("/user_level", async (req, res) => {
    apilog('Get user level all');
    await tb_user_level.find({}).then(
        function (result) {
            apiDebuglog("find user level result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find user level error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/user_level/:id", async (req, res) => {
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

});

route.post("/user_level", async (req, res) => {
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

});

route.put("/user_level/:id", async (req, res) => {
    apilog('Put Update user level');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const user_level = req.body;
    const uId = req.params.id

    if (user_level && uId) {

        await tb_user_level.findByIdAndUpdate(uId, { $set: user_level }).then(
            function (result) {
                //console.log("agent user update result : " + result);
                apiDebuglog("user level update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("agent user update error 2001 : " + err);
                apiErrorlog("user level update id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("user level update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/user_level/:id", async (req, res) => {
    apilog('Delete user level by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_user_level.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                //console.log("delete agent user id result : " + result);
                apiDebuglog("delete user level id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                //console.log("delete agent user id error 2001 : " + err);
                apiErrorlog("delete user level id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete user level id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_user_level ////////////////////////

//////////////////////// tb_brands ///////////////////////

const DIR = __dirname + '/public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

var upload = multer({
    storage: storage
});

var uploadlogo = multer({
    storage: storage2
});

route.get("/brands", async (req, res) => {
    apilog('Get brands all');
    await tb_brands.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find brands result successfully", result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find brands error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/brands/:id", async (req, res) => {
    apilog('Get brands by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_brands.find({ _id: gId }).then(
            function (result) {
                apiDebuglog("find brands id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find brands id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find brands id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/upload", upload.single('file'), (req, res) => {
    return res.json(ReturnSuccess(2000, req.file));
    //return res.send(req.file);
});

route.post("/uploadlogo", uploadlogo.single('file'), (req, res) => {
    return res.json(ReturnSuccess(2000, req.file));
    //return res.send(req.file);
});

route.post("/brands", async (req, res, next) => {
    apilog('Post create brands');
    apilog('body::==' + req.body);
    const brands = req.body;
    if (brands) {
        const Brands = new tb_brands(brands);
        await Brands.save().then(
            function (result) {
                apiDebuglog("brands save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id, image: result.image }));
            }
        ).catch(
            function (err) {
                apiErrorlog("brands save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("brands save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/brands/:id", async (req, res) => {
    apilog('Put Update brands');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const brands = req.body;
    const gId = req.params.id

    if (brands && gId) {

        await tb_brands.findByIdAndUpdate(gId, { $set: brands }).then(
            function (result) {
                apiDebuglog("brands update id " + gId + " successfully", result);
                apiDebuglog("original_brand_img => " + brands.original_brand_img);
                apiDebuglog("brand_img => " + brands.brand_img);
                if (brands.brand_img !== brands.original_brand_img) {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + brands.original_brand_img;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + brands.original_brand_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
                //return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("brands update id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("brands update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/brands/:id", async (req, res) => {
    apilog('Delete brands by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_brands.findByIdAndDelete({ _id: gId }).then(
            function (result) {
                apiDebuglog("delete brands id " + gId + " successfully", result);
                if (result.brand_img && result.brand_img !== '') {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + result.brand_img;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + result.brand_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                return res.json(ReturnSuccess(2000, { id: result._id }));
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err);
                        return res.json(ReturnSuccess(2002, { id: result._id }));
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("delete brands id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete brands id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/brands_sort", async (req, res) => {
    apilog('Get brands by id');
    apilog('params::==' + req.params);
    /*     const gId = req.params.id
        if (gId) { */
    let data = [];
    await tb_brands.find({ brand_sort: { $gte: 1 } }).sort({ brand_sort: 1 }).then(
        function (result) {
            apiDebuglog("find brands successfully", result);
            var brands = result;
            //return res.json(ReturnSuccess(2000, result)); 
            tb_game_provider.find({}).sort({ brand_sort: 1 }).then(
                function (result) {
                    var i;
                    for (i = 0; i < brands.length; i++) {
                        if (brands[i].brand_code != 'QTECH') {
                            data.push({
                                '_id': brands[i]._id, 'brand_code': brands[i].brand_code, 'brand_name': brands[i].brand_name,
                                'brand_img': brands[i].brand_img, 'brand_sort': brands[i].brand_sort,'brand_status': brands[i].brand_status
                            });
                        }
                    }
                    for (i = 0; i < result.length; i++) {
                        data.push({
                            '_id': result[i]._id, 'brand_code': result[i].game_code, 'brand_name': result[i].game_name,
                            'brand_img': result[i].game_img, 'brand_sort': result[i].brand_sort,'brand_status': result[i].game_status
                        });
                    }
                    return res.json(ReturnSuccess(2000, data));
                }
            ).catch(
                function (err) {
                    apiErrorlog("find brands id " + gId + " error 2001", err);
                    return res.json(ReturnErr(err));
                }
            );

        }
    ).catch(
        function (err) {
            apiErrorlog("find brands error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
    /*  } else {
         apilog("find brands id error 2002 : No request params value.");
         return res.json(ReturnSuccess(2002, "No request params value."));
     } */

});

route.get("/brands_sort_update", async (req, res) => {
    apilog('Get brands by id');
    apilog('params::==' + req.params);

    let data = [];
    let gamelist = await tb_game_list.find({ game_type: 'Slot' });
    let brands_slot = [];
    gamelist.forEach((game) => {
        //console.log(game);
        if (!brands_slot.includes(game.game_brand)) {
            brands_slot.push(game.game_brand);
        }
    })
    console.log('brands_slot : ' + brands_slot);
    let brands = await tb_brands.find({});
    let provider = await tb_game_provider.find({});
    var i, j = 1, k;
    for (i = 0; i < brands.length; i++) {
        var a;
        if (brands_slot.includes(brands[i].brand_code)) {
            if (brands[i].brand_code != 'QTECH') {
                a = { 'brand_sort': j };
                j++;
            } else {
                a = { 'brand_sort': 0 };
            }
        }
        else {
            a = { 'brand_sort': 0 };
        }
        await tb_brands.update({ _id: brands[i]._id }, { $set: a });
        console.log('brands : ' + brands[i].brand_code + ' edit success.');

    }
    for (k = 0; k < provider.length; k++) {
        var a = { 'brand_sort': j };
        await tb_game_provider.update({ _id: provider[k]._id }, { $set: a });
        console.log('provider : ' + provider[k].game_code + ' edit success.');
        j++;
    }
    return res.json(ReturnSuccess(2000, 'success'));

});

route.post("/brands_sort_update", async (req, res) => {
    apilog('Get brands by id');
    apilog('params::==' + req.params);
    apilog('body::==' + req.body);
    const body_brands = req.body;

    const { data } = body_brands;
    console.log('data : ' + JSON.stringify(data));

    let gamelist = await tb_game_list.find({ game_type: 'Slot' });
    let brands_slot = [];
    gamelist.forEach((game) => {
        if (!brands_slot.includes(game.game_brand)) {
            brands_slot.push(game.game_brand);
        }
    })
    let brands = await tb_brands.find({});
    let provider = await tb_game_provider.find({});
    var i, k, m;
    for (i = 0; i < brands.length; i++) {
        var a;
        if (brands_slot.includes(brands[i].brand_code)) {
            if (brands[i].brand_code != 'QTECH') {
                for (m = 0; m < data.length; m++) {
                    if (data[m].brand_code == brands[i].brand_code) {
                        a = { 'brand_sort': data[m].brand_sort };
                        await tb_brands.update({ _id: data[m]._id }, { $set: a });
                        console.log('brands : ' + data[m].brand_code + ' edit success.');
                        break;
                    }
                }
            }
        }
    }
    for (k = 0; k < provider.length; k++) {
        for (m = 0; m < data.length; m++) {
            if (data[m].brand_code == provider[k].game_code) {
                a = { 'brand_sort': data[m].brand_sort };
                await tb_game_provider.update({ _id: data[m]._id }, { $set: a });
                console.log('provider : ' + data[m].brand_code + ' edit success.');
                break;
            }
        }
    }
    return res.json(ReturnSuccess(2000, 'success'));

});

///////////////////// end tb_brands ////////////////////////

//////////////////////// tb_menu ///////////////////////

route.get("/menu", async (req, res) => {
    apilog('Get menu all');
    await tb_menu.find({}).then(
        function (result) {
            apiDebuglog("find menu result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find menu error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/menu/:id", async (req, res) => {
    apilog('Get menu by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_menu.find({ _id: uId }).then(
            function (result) {
                apiDebuglog("find menu id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find menu id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find menu id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/menu", async (req, res) => {
    apilog('Post create menu');
    apilog('body::==' + JSON.stringify(req.body));
    const menu = req.body;

    if (menu) {
        await tb_menu.find({ menu_name: menu.menu_name }).then(
            function (result) {
                apiDebuglog("find menu name :" + menu.menu_name + " successfully", result);
                apilog('menu dup => ' + result.length);
                if (result.length > 0) {
                    //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'})) 
                    return res.json(ReturnCustom(1003, 'Can not add because this menu name is aleary in system.', []));
                }
                else {
                    tb_menu.find({ menu_id: menu.menu_id }).then(
                        function (result) {
                            apiDebuglog("find menu id :" + menu.menu_id + " successfully", result);
                            apilog('menu dup => ' + result.length);
                            if (result.length > 0) {
                                //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'})) 
                                return res.json(ReturnCustom(1003, 'Can not add because this menu id is aleary in system.', []));
                            }
                            else {
                                const Menu = new tb_menu(menu);
                                Menu.save().then(
                                    function (result) {
                                        apiDebuglog("menu save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("menu save error 2001", err);
                                        return res.json(ReturnErr(err));
                                    }
                                );
                            }
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("find menu name : " + menu.menu_name + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("find menu name : " + menu.menu_name + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );

    } else {
        apilog("menu save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/menu/:id", async (req, res) => {
    apilog('Put Update menu');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const menu = req.body;
    const uId = req.params.id

    if (menu && uId) {
        await tb_menu.findByIdAndUpdate(uId, { $set: menu }).then(
            function (result) {
                apiDebuglog("menu update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("menu update id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("menu update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/menu/:id", async (req, res) => {
    apilog('Delete menu by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_menu.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                apiDebuglog("delete menu id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete menu id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete menu id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_menu ////////////////////////

//////////////////////// tb_agent_menu ///////////////////////

route.get("/agent_menu", async (req, res) => {
    apilog('Get menu all');
    await tb_agent_menu.find({}).then(
        function (result) {
            apiDebuglog("find agent menu result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find agent menu error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/agent_menu/:id", async (req, res) => {
    apilog('Get agent menu by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_agent_menu.find({ _id: uId }).then(
            function (result) {
                apiDebuglog("find agent menu id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent menu id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent menu id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/agent_menu", async (req, res) => {
    apilog('Post create agent menu');
    apilog('body::==' + JSON.stringify(req.body));
    const menu = req.body;

    if (menu) {
        await tb_agent_menu.find({ menu_name: menu.menu_name }).then(
            function (result) {
                apiDebuglog("find agent menu name :" + menu.menu_name + " successfully", result);
                apilog('agent menu dup => ' + result.length);
                if (result.length > 0) {
                    //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'})) 
                    return res.json(ReturnCustom(1003, 'Can not add because this agent menu name is aleary in system.', []));
                }
                else {
                    tb_agent_menu.find({ menu_id: menu.menu_id }).then(
                        function (result) {
                            apiDebuglog("find agent menu id :" + menu.menu_id + " successfully", result);
                            apilog('agent menu dup => ' + result.length);
                            if (result.length > 0) {
                                //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'})) 
                                return res.json(ReturnCustom(1003, 'Can not add because this agent menu id is aleary in system.', []));
                            }
                            else {
                                const Menu = new tb_agent_menu(menu);
                                Menu.save().then(
                                    function (result) {
                                        apiDebuglog("agent menu save successfully", result);
                                        return res.json(ReturnSuccess(2000, { id: result._id }));
                                    }
                                ).catch(
                                    function (err) {
                                        apiErrorlog("agent menu save error 2001", err);
                                        return res.json(ReturnErr(err));
                                    }
                                );
                            }
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("find agent menu name : " + menu.menu_name + " error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent menu name : " + menu.menu_name + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );

    } else {
        apilog("agent menu save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/agent_menu/:id", async (req, res) => {
    apilog('Put Update menu');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const menu = req.body;
    const uId = req.params.id

    if (menu && uId) {
        await tb_agent_menu.findByIdAndUpdate(uId, { $set: menu }).then(
            function (result) {
                apiDebuglog("agent menu update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent menu update id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent menu update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/agent_menu/:id", async (req, res) => {
    apilog('Delete agent menu by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_agent_menu.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                apiDebuglog("delete agent menu id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete agent menu id " + uId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete agent menu id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_agent_menu ////////////////////////

//////////////////////// tb_member ///////////////////////

route.get("/member", async (req, res) => {
    apilog('Get services all');
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
});

route.get("/member/foragent/:agent_code", async (req, res) => {
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

});

route.get("/member/getBalance/:id", async (req, res) => {
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

});

route.get("/member/get/:id", async (req, res) => {
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

});

route.get("/member/info/:id", async (req, res) => {
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

});

route.post("/member/register", async (req, res) => {
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

});

route.put("/member/:id", async (req, res) => {
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
});

route.put("/member/deposit/:id", async (req, res) => {
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

});

route.put("/member/topup/:id", async (req, res) => {
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

});

route.put("/member/withdraw/:id", async (req, res) => {
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

});


route.put("/member/WithdrawAll/:id", async (req, res) => {
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

});

route.delete("/member/:id", async (req, res) => {
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

});

///////////////////// end tb_member ////////////////////////

//////////////////////// tb_wallets ///////////////////////

route.get("/wallets", async (req, res) => {
    apilog('Get wallets all');
    await tb_wallets.find({}).then(
        function (result) {
            apiDebuglog("find wallets result successfully" + result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find wallets error 2001", err);
            //return res.json(ReturnErr(err));
            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get wallets." }));
        }
    );
});

route.get("/wallets/:id", async (req, res) => {
    apilog('Get wallets by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_wallets.find({ _id: uId }).then(
            function (result) {
                apiDebuglog("find wallets id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find wallets id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get wallet id: " + sId }));
            }
        );
    } else {
        apilog("find wallets id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/wallets_byagent/:agent", async (req, res) => {
    apilog('Get wallets by agent');
    apilog('params::==' + req.params);
    const agent = req.params.agent
    if (agent) {
        await tb_wallets.find({ agent_code: agent }).then(
            function (result) {
                apiDebuglog("find wallets by agent code " + agent + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find wallets by agent code " + agent + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get wallet  by agent code: " + agent }));
            }
        );
    } else {
        apilog("find wallets id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/wallets/get/", async (req, res) => {
    apilog('Get wallets');
    apilog('params::==' + req.params);
    apilog('body::==' + req.body);
    const walletdata = req.body;


    if (walletdata) {
        const mem_username = walletdata.mem_username;
        const brand_code = walletdata.brand_code;
        const agent_code = walletdata.agent_code;
        await tb_wallets.find({ mem_username: mem_username, brand_code: brand_code, agent_code: agent_code }).then(
            function (result) {
                apiDebuglog("find wallets successfully (", result.length + ")");
                if (result.length > 0) {
                    return res.json(ReturnSuccess(2000, result));
                } else {
                    return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get wallet." }));
                }

            }
        ).catch(
            function (err) {
                apiErrorlog("find wallets error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for get wallet." }));
            }
        );
    } else {
        apilog("find wallets error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/wallets/register", async (req, res) => {
    apilog('Post create wallets');
    apilog('body::==' + JSON.stringify(req.body));
    const wallets = req.body;

    if (wallets) {
        await tb_wallets.find({ mem_username: wallets.mem_username, brand_code: wallets.brand_code, agent_code: wallets.agent_code }).then(
            function (result) {
                apiDebuglog("find wallets membem name :" + wallets.mem_username + " successfully", result);
                apilog('wallets dup => ' + result.length);
                if (result.length > 0) {
                    //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'})) 
                    return res.json(ReturnCustom(1003, 'Can not add because this wallets is aleary in system.', []));
                }
                else {
                    const Wallets = new tb_wallets(wallets);
                    Wallets.save().then(
                        function (result) {
                            apiDebuglog("wallets save successfully", result);
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    ).catch(
                        function (err) {
                            apiErrorlog("save wallets error 2001", err);
                            //return res.json(ReturnErr(err));
                            return res.json(ReturnUnSuccess(2001, { message: "Unsuccess for register wallet." }));
                        }
                    );

                }
            }
        ).catch(
            function (err) {
                apiErrorlog("save wallets error 2001 ", err);
                return res.json(ReturnErr(err));
            }
        );

    } else {
        apilog("wallets save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/wallets/:id", async (req, res) => {
    apilog('Put Update wallets');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const wallets = req.body;
    const uId = req.params.id

    if (wallets && uId) {
        await tb_wallets.findByIdAndUpdate(uId, { $set: wallets }).then(
            function (result) {
                apiDebuglog("wallets update id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("wallets update id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess update wallet id: " + uId }));
            }
        );
    } else {
        apilog("wallets update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});


route.delete("/wallets/:id", async (req, res) => {
    apilog('Delete wallets by id');
    apilog('params::==' + req.params);
    const uId = req.params.id
    if (uId) {
        await tb_wallets.findByIdAndDelete({ _id: uId }).then(
            function (result) {
                apiDebuglog("delete wallets id " + uId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete wallets id " + uId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(ReturnUnSuccess(2001, { message: "Unsuccess delete wallet id: " + uId }));
            }
        );
    } else {
        apilog("delete wallets id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_wallets ////////////////////////

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

//////////////////////// tb_member_runno ///////////////////////

route.get("/memberRunno", async (req, res) => {
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
});

route.get("/getmemberRunno/:agent_code", async (req, res) => {
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

});

route.get("/memberRunno/:id", async (req, res) => {
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

});

route.post("/memberRunno", async (req, res) => {
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

});

route.put("/memberRunno/:id", async (req, res) => {
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

});

route.delete("/memberRunno/:id", async (req, res) => {
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

});

///////////////////// end tb_member_runno ////////////////////////

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

//////////////////////// tb_transections ///////////////////////

route.get("/transections", async (req, res) => {
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
});

route.get("/transections/:id", async (req, res) => {
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

});

route.get("/transections/agent/:agent_code", async (req, res) => {
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

});

route.post("/transections/agent/:agent_code", async (req, res) => {
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

});



route.post("/transections", async (req, res) => {
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

});

route.put("/transections/:id", async (req, res) => {
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

});

route.delete("/transections/:id", async (req, res) => {
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

});

///////////////////// end tb_transections ////////////////////////

//////////////////////// tb_news ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/news", async (req, res) => {
    apilog('Get news all');
    await tb_news.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find news result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find news error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/news/:id", async (req, res) => {
    apilog('Get news by id');
    apilog('params::==', req.params);
    const news_id = req.params.id
    if (news_id) {
        await tb_news.find({ _id: news_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find news id " + news_id + " successfully", news_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find news id " + news_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find news id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/newsForAgent/:agent_code", async (req, res) => {
    apilog('Get news by agent_code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_news.find({ agent_code: agent_code, news_status: 1 }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find news agent_code " + agent_code + " successfully", agent_code)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find news agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find news id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/news", async (req, res) => {
    apilog('Post create news');
    apilog('body::==' + req.body);

    const news = req.body;

    if (news) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        news.create_at = tz;
        news.update_at = tz;
        const News = new tb_news(news);
        await News.save().then(
            function (result) {
                apiDebuglog("news save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("news save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("news save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/news/:id", async (req, res) => {
    apilog('Put Update news');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const news = req.body;
    const newsId = req.params.id

    if (news && newsId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        news.update_at = tz;
        await tb_news.findByIdAndUpdate(newsId, { $set: news }).then(
            function (result) {
                apiDebuglog("alert update id " + newsId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("news save id " + newsId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("news update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/news/:id", async (req, res) => {
    apilog('Delete news by id');
    apilog('params::==' + req.params);
    const newsId = req.params.id
    if (newsId) {
        await tb_news.findByIdAndDelete({ _id: newsId }).then(
            function (result) {
                apiDebuglog("delete news id " + newsId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete news id " + newsId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete news error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_news /////////////////////

//////////////////////// tb_agent_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/agent_bonus", async (req, res) => {
    apilog('Get agent_bonus all');
    await tb_agent_bonus.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find agent_bonus result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find agent_bonus error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/agent_bonus/:id", async (req, res) => {
    apilog('Get agent_bonus by id');
    apilog('params::==', req.params);
    const agent_bonus_id = req.params.id
    if (agent_bonus_id) {
        await tb_agent_bonus.find({ _id: agent_bonus_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find agent_bonus id " + agent_bonus_id + " successfully", agent_bonus_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent_bonus id " + agent_bonus_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/agent_bonusForAgent/:agent_code", async (req, res) => {
    apilog('Get agent_bonus by agent_code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_agent_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find agent_bonus agent_code " + agent_code + " successfully", agent_code)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent_bonus agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/agent_bonusForAgent/:agent_code/:type", async (req, res) => {
    apilog('Get agent_bonus by agent_code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    const bonus_type = req.params.type
    if (agent_code) {
        await tb_agent_bonus.find({ agent_code: agent_code, bonus_type: bonus_type, bonus_status: 1 }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find agent_bonus agent_code " + agent_code + " successfully", agent_code)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find agent_bonus agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find agent_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/agent_bonus", async (req, res) => {
    apilog('Post create agent_bonus');
    apilog('body::==' + req.body);

    const agent_bonus = req.body;

    if (agent_bonus) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        agent_bonus.create_at = tz;
        agent_bonus.update_at = tz;
        const Agent_bonus = new tb_agent_bonus(agent_bonus);
        await Agent_bonus.save().then(
            function (result) {
                apiDebuglog("agent_bonus save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent_bonus save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent_bonus save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/agent_bonus/:id", async (req, res) => {
    apilog('Put Update agent_bonus');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const agent_bonus = req.body;
    const agent_bonusId = req.params.id

    if (agent_bonus && agent_bonusId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        agent_bonus.update_at = tz;
        await tb_agent_bonus.findByIdAndUpdate(agent_bonusId, { $set: agent_bonus }).then(
            function (result) {
                apiDebuglog("agent_bonus update id " + agent_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("agent_bonus save id " + agent_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("agent_bonus update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/agent_bonus/:id", async (req, res) => {
    apilog('Delete agent_bonus by id');
    apilog('params::==' + req.params);
    const agent_bonusId = req.params.id
    if (agent_bonusId) {
        await tb_agent_bonus.findByIdAndDelete({ _id: agent_bonusId }).then(
            function (result) {
                apiDebuglog("delete agent_bonus id " + agent_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete agent_bonus id " + agent_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete agent_bonus error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_agent_bonus /////////////////////

//////////////////////// tb_member_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/member_bonus", async (req, res) => {
    apilog('Get member_bonus all');
    await tb_member_bonus.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find member_bonus result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find member_bonus error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/member_bonus/:id", async (req, res) => {
    apilog('Get member_bonus by id');
    apilog('params::==', req.params);
    const member_bonus_id = req.params.id
    if (member_bonus_id) {
        await tb_member_bonus.find({ _id: member_bonus_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find member_bonus id " + member_bonus_id + " successfully", member_bonus_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find member_bonus id " + member_bonus_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find member_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/member_bonus_redeem/:agent_code/:redeem", async (req, res) => {
    apilog('Get member_bonus by id');
    apilog('params::==', req.params);
    const member_bonus_id = req.params.redeem
    if (member_bonus_id) {
        await tb_member_bonus.find({ member_bonus_redeem: member_bonus_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find member_bonus_redeem " + member_bonus_id + " successfully", member_bonus_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find member_bonus_redeem " + member_bonus_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find member_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/member_bonusForAgent/:agent_code", async (req, res) => {
    apilog('Get member_bonus by agent_code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_member_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find member_bonus agent_code " + agent_code + " successfully", agent_code)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find member_bonus agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find member_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/member_bonus", async (req, res) => {
    apilog('Post create member_bonus');
    apilog('body::==' + req.body);

    const member_bonus = req.body;

    if (member_bonus) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        member_bonus.create_at = tz;
        member_bonus.update_at = tz;
        var r = sha256Encrypt(member_bonus.member_name + member_bonus.bonus_name + tz.toString());
        member_bonus.member_bonus_redeem = r.substr(10, 10);
        const Member_bonus = new tb_member_bonus(member_bonus);
        await Member_bonus.save().then(
            function (result) {
                apiDebuglog("member_bonus save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id, bonus_redeem: member_bonus.member_bonus_redeem }));
            }
        ).catch(
            function (err) {
                apiErrorlog("member_bonus save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("member_bonus save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/member_bonus/:id", async (req, res) => {
    apilog('Put Update member_bonus');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const member_bonus = req.body;
    const member_bonusId = req.params.id

    if (member_bonus && member_bonusId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        member_bonus.update_at = tz;
        await tb_member_bonus.findByIdAndUpdate(member_bonusId, { $set: member_bonus }).then(
            function (result) {
                apiDebuglog("member_bonus update id " + member_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("member_bonus save id " + member_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("member_bonus update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/member_bonus/:id", async (req, res) => {
    apilog('Delete member_bonus by id');
    apilog('params::==' + req.params);
    const member_bonusId = req.params.id
    if (member_bonusId) {
        await tb_member_bonus.findByIdAndDelete({ _id: member_bonusId }).then(
            function (result) {
                apiDebuglog("delete member_bonus id " + member_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete member_bonus id " + member_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete member_bonus error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_member_bonus /////////////////////

//////////////////////// tb_games_bonus ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/games_bonus", async (req, res) => {
    apilog('Get games_bonus all');
    await tb_games_bonus.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find games_bonus result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find games_bonus error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/games_bonus/:id", async (req, res) => {
    apilog('Get games_bonus by id');
    apilog('params::==', req.params);
    const games_bonus_id = req.params.id
    if (games_bonus_id) {
        await tb_games_bonus.find({ _id: games_bonus_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_bonus id " + games_bonus_id + " successfully", games_bonus_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_bonus id " + games_bonus_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/games_bonusForAgent/:agent_code", async (req, res) => {
    apilog('Get games_bonus by agent_code');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_games_bonus.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_bonus agent_code " + agent_code + " successfully", agent_code)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_bonus agent_code " + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/games_bonus", async (req, res) => {
    apilog('Post create games_bonus');
    apilog('body::==' + req.body);

    const games_bonus = req.body;

    if (games_bonus) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_bonus.create_at = tz;
        games_bonus.update_at = tz;
        const Games_bonus = new tb_games_bonus(games_bonus);
        await Games_bonus.save().then(
            function (result) {
                apiDebuglog("games_bonus save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_bonus save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_bonus save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/games_bonus/:id", async (req, res) => {
    apilog('Put Update games_bonus');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const games_bonus = req.body;
    const games_bonusId = req.params.id

    if (games_bonus && games_bonusId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_bonus.update_at = tz;
        await tb_games_bonus.findByIdAndUpdate(games_bonusId, { $set: games_bonus }).then(
            function (result) {
                apiDebuglog("games_bonus update id " + games_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_bonus save id " + games_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_bonus update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/games_bonus/:id", async (req, res) => {
    apilog('Delete games_bonus by id');
    apilog('params::==' + req.params);
    const games_bonusId = req.params.id
    if (games_bonusId) {
        await tb_games_bonus.findByIdAndDelete({ _id: games_bonusId }).then(
            function (result) {
                apiDebuglog("delete games_bonus id " + games_bonusId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete games_bonus id " + games_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete games_bonus error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_games_bonus /////////////////////

//////////////////////// tb_game_list ///////////////////////

route.get("/gameprovider", async (req, res) => {
    apilog('Get game provider all');
    await tb_game_provider.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find game provider result successfully", result);
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find game provider error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/gameproviderlist/:id", async (req, res) => {
    apilog('Get game provider by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_game_provider.find({ _id: gId }).then(
            function (result) {
                apiDebuglog("find game provider id " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game provider id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game list id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/gameproviderInfo/:game_code", async (req, res) => {
    apilog('Get game provider by id');
    apilog('params::==' + req.params);
    const gId = req.params.game_code
    if (gId) {
        await tb_game_provider.find({ game_code: gId }).then(
            function (result) {
                apiDebuglog("find game code from provider " + gId + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game code from provider" + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game code from provider error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/gameproviderwithbrand/:brand", async (req, res) => {
    apilog('Get game provider by id');
    apilog('params::==' + JSON.stringify(req.params));
    const brand = req.params.brand
    if (brand) {
        await tb_game_provider.find({ game_brand: brand }).then(
            function (result) {
                apiDebuglog("find game provider brand " + brand + " successfully", result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find game list brand " + brand + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find game provider brand error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.post("/gameprovider", async (req, res) => {
    apilog('Post create game provider');
    apilog('body::==' + req.body);
    const games = req.body;

    if (games) {

        const Games = new tb_game_provider(games);
        await Games.save().then(
            function (result) {
                apiDebuglog("game provider save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("game provider save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("game provider save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.post("/addgameprovider", async (req, res) => {
    apilog('Post create game provider');
    apilog('body::==' + req.body);
    const games = req.body;

    if (games) {
        await tb_game_provider.find({ game_brand: games.game_brand, game_code: games.game_code, game_name: game_name }).then(
            function (result) {
                apiDebuglog("find game provider brand " + games.game_brand + " successfully", result);
                if (result.length > 0) {
                    return res.json(ReturnSuccess(2003, "Duplicate record"));
                } else {
                    //return res.json(ReturnSuccess(2000, "No Duplicate"));
                    const Games = new tb_game_provider(games);
                    Games.save().then(
                        function (result) {
                            apiDebuglog("game provider save successfully", result);
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    ).catch(

                        function (err) {
                            apiErrorlog("game provider save error 2001", err);
                            return res.json(ReturnErr(err));
                        }
                    );

                }
            }
        ).catch(
            function (err) {
                apiErrorlog("find game provider brand " + brand + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );


    } else {
        apilog("game provider save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/gameprovider/:id", async (req, res) => {
    apilog('Put Update game provider');
    apilog('body::==' + JSON.stringify(req.body));
    apilog('params::==' + req.params);
    const games = req.body;
    const gId = req.params.id

    if (games && gId) {

        await tb_game_provider.findByIdAndUpdate(gId, { $set: games }).then(
            function (result) {
                apiDebuglog("game provider update id " + gId + " successfully", result);
                apiDebuglog("original_game_img => " + games.original_game_img);
                apiDebuglog("game_img => " + games.game_img);
                if (games.original_game_img && games.game_img && games.game_img !== games.original_game_img) {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + games.original_game_img;;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + games.original_game_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                //return res.json(ReturnSuccess(2000, { id: result._id }));
                                apiDebuglog("original_game_img_app => " + games.original_game_img_app);
                                apiDebuglog("game_img => " + games.game_img_app);
                                if (games.original_game_img_app && games.game_img_app && games.game_img_app !== games.original_game_img_app) {
                                    var fs = require('fs');
                                    try {
                                        path = __dirname + '/public/' + games.original_game_img;
                                        if (fs.existsSync(path)) {
                                            //file exists
                                            fs.unlink(__dirname + '/public/' + games.original_game_img, function (err) {
                                                if (err) throw err;
                                                console.log('Image file deleted!');
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            });
                                        } else {
                                            return res.json(ReturnSuccess(2000, { id: result._id }));
                                        }
                                    } catch (err) {
                                        console.error(err)
                                    }

                                } else {
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                }
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("game provider update id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("game provider update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/gameprovider/:id", async (req, res) => {
    apilog('Delete game provider by id');
    apilog('params::==' + req.params);
    const gId = req.params.id
    if (gId) {
        await tb_game_provider.findByIdAndDelete({ _id: gId }).then(
            function (result) {
                apiDebuglog("delete game provider id " + gId + " successfully", result);
                if (result.game_img && result.game_img !== '') {
                    var fs = require('fs');
                    try {
                        var path = __dirname + '/public/' + result.game_img;;
                        if (fs.existsSync(path)) {
                            //file exists
                            fs.unlink(__dirname + '/public/' + result.game_img, function (err) {
                                if (err) throw err;
                                console.log('Image file deleted!');
                                //return res.json(ReturnSuccess(2000, { id: result._id }));
                                if (result.game_img_app && result.game_img_app !== '') {
                                    var fs = require('fs');
                                    try {
                                        path = __dirname + '/public/' + result.game_img_app;;
                                        if (fs.existsSync(path)) {
                                            //file exists
                                            fs.unlink(__dirname + '/public/' + result.game_img_app, function (err) {
                                                if (err) throw err;
                                                console.log('Image app file deleted!');
                                                return res.json(ReturnSuccess(2000, { id: result._id }));
                                            });
                                        } else {
                                            return res.json(ReturnSuccess(2000, { id: result._id }));
                                        }
                                    } catch (err) {
                                        console.error(err)
                                    }

                                } else {
                                    return res.json(ReturnSuccess(2000, { id: result._id }));
                                }
                            });
                        } else {
                            return res.json(ReturnSuccess(2000, { id: result._id }));
                        }
                    } catch (err) {
                        console.error(err)
                    }

                } else {
                    return res.json(ReturnSuccess(2000, { id: result._id }));
                }
                //return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("delete game provider id " + gId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete game provider id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_game_provider ////////////////////////

//////////////////////// tb_gameslucky ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/gameslucky", async (req, res) => {
    apilog('Get gameslucky all');
    await tb_gameslucky.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find gameslucky result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find gameslucky error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/gameslucky/:id", async (req, res) => {
    apilog('Get gameslucky by id');
    apilog('params::==', req.params);
    const gameslucky_id = req.params.id
    if (gameslucky_id) {
        await tb_gameslucky.find({ _id: gameslucky_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find gameslucky id " + gameslucky_id + " successfully", gameslucky_id)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find gameslucky id " + gameslucky_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_bonus id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});


route.post("/gameslucky", async (req, res) => {
    apilog('Post create gameslucky');
    apilog('body::==' + req.body);

    const gameslucky = req.body;

    if (gameslucky) {
        //var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        //games_bonus.create_at = tz;
        //games_bonus.update_at = tz;
        const Gameslucky = new tb_gameslucky(gameslucky);
        await Gameslucky.save().then(
            function (result) {
                apiDebuglog("gameslucky save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("gameslucky save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("gameslucky save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/gameslucky/:id", async (req, res) => {
    apilog('Put Update gameslucky');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const gameslucky = req.body;
    const gamesluckyId = req.params.id

    if (gameslucky && gamesluckyId) {
        //var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        //games_bonus.update_at = tz;
        await tb_gameslucky.findByIdAndUpdate(gamesluckyId, { $set: gameslucky }).then(
            function (result) {
                apiDebuglog("gameslucky update id " + gamesluckyId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("gameslucky save id " + gamesluckyId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("gameslucky update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/gameslucky/:id", async (req, res) => {
    apilog('Delete gameslucky by id');
    apilog('params::==' + req.params);
    const gamesluckyId = req.params.id
    if (gamesluckyId) {
        await tb_gameslucky.findByIdAndDelete({ _id: gamesluckyId }).then(
            function (result) {
                apiDebuglog("delete gameslucky id " + gamesluckyId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete gameslucky id " + games_bonusId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete gameslucky error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_gameslucky /////////////////////

//////////////////////// tb_share ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/games_share", async (req, res) => {
    apilog('Get games_share all');
    await tb_share.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find games_share result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find games_share error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/games_share/:id", async (req, res) => {
    apilog('Get games_share by id');
    apilog('params::==', req.params);
    const share_id = req.params.id
    if (share_id) {
        await tb_share.find({ _id: share_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_share id " + share_id + " successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_share id " + share_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_share id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/games_share_byagent/:agent_code", async (req, res) => {
    apilog('Get games_share by id');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_share.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_share agent_code " + agent_code + " successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_share agent_code" + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_share id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});


route.post("/games_share", async (req, res) => {
    apilog('Post create games_share');
    apilog('body::==' + req.body);

    const games_share = req.body;

    if (games_share) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_share.create_at = tz;
        games_share.update_at = tz;
        const Games_share = new tb_share(games_share);
        await Games_share.save().then(
            function (result) {
                apiDebuglog("games_share save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_share save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_share save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/games_share/:id", async (req, res) => {
    apilog('Put Update games_share');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const games_share = req.body;
    const games_shareId = req.params.id

    if (games_share && games_shareId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_share.update_at = tz;
        await tb_share.findByIdAndUpdate(games_shareId, { $set: games_share }).then(
            function (result) {
                apiDebuglog("games_share update id " + games_shareId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_share save id " + games_shareId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_share update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/games_share/:id", async (req, res) => {
    apilog('Delete games_share by id');
    apilog('params::==' + req.params);
    const games_shareId = req.params.id
    if (games_shareId) {
        await tb_share.findByIdAndDelete({ _id: games_shareId }).then(
            function (result) {
                apiDebuglog("delete games_share id " + games_shareId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete games_share id " + games_shareId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete games_share error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_share /////////////////////

//////////////////////// tb_member_share ///////////////////
//////////////////// test OK BY TOM//////////////////
route.get("/games_member_share", async (req, res) => {
    apilog('Get games_member_share all');
    await tb_member_share.find({}).sort({ _id: -1 }).then(
        function (result) {
            apiDebuglog("find games_member_share result successfully", result)
            return res.json(ReturnSuccess(2000, result));
        }
    ).catch(
        function (err) {
            apiErrorlog("find games_member_share error 2001", err);
            return res.json(ReturnErr(err));
        }
    );
});

route.get("/games_member_share/:id", async (req, res) => {
    apilog('Get games_member_share by id');
    apilog('params::==', req.params);
    const share_id = req.params.id
    if (share_id) {
        await tb_member_share.find({ _id: share_id }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_member_share id " + share_id + " successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_member_share id " + share_id + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_member_share id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

route.get("/games_member_share_byagent/:agent_code", async (req, res) => {
    apilog('Get games_member_share by id');
    apilog('params::==', req.params);
    const agent_code = req.params.agent_code
    if (agent_code) {
        await tb_member_share.find({ agent_code: agent_code }).sort({ _id: -1 }).then(
            function (result) {
                apiDebuglog("find games_member_share agent_code " + agent_code + " successfully", result)
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find games_member_share agent_code" + agent_code + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("find games_share id error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});


route.post("/games_member_share", async (req, res) => {
    apilog('Post create games_member_share');
    apilog('body::==' + req.body);

    const games_member_share = req.body;

    if (games_member_share) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_member_share.create_at = tz;
        games_member_share.update_at = tz;
        var r = sha256Encrypt(games_member_share.share_member + tz.toString());
        games_member_share.share_redeem = r.substr(10, 10);
        const Games_member_share = new tb_member_share(games_member_share);
        await Games_member_share.save().then(
            function (result) {
                apiDebuglog("games_member_share save successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id, share_redeem: games_member_share.share_redeem }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_member_share save error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_member_share save error 2002 : No request body value.");
        return res.json(ReturnSuccess(2002, "No request body value."));
    }

});

route.put("/games_member_share/:id", async (req, res) => {
    apilog('Put Update games_member_share');
    apilog('body::==' + req.body);
    apilog('params::==' + req.params);
    const games_member_share = req.body;
    const games_member_shareId = req.params.id

    if (games_member_share && games_member_shareId) {
        var tz = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
        games_member_share.update_at = tz;
        await tb_member_share.findByIdAndUpdate(games_member_shareId, { $set: games_member_share }).then(
            function (result) {
                apiDebuglog("games_member_share update id " + games_member_shareId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("games_member_share save id " + games_member_shareId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("games_member_share update error 2002 : No request body & params value.");
        return res.json(ReturnSuccess(2002, "No request body & params value."));
    }

});

route.delete("/games_member_share/:id", async (req, res) => {
    apilog('Delete games_member_share by id');
    apilog('params::==' + req.params);
    const games_member_shareId = req.params.id
    if (games_member_shareId) {
        await tb_member_share.findByIdAndDelete({ _id: games_member_shareId }).then(
            function (result) {
                apiDebuglog("delete games_member_share id " + games_member_shareId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
            }
        ).catch(
            function (err) {
                apiErrorlog("Delete games_member_share id " + games_member_shareId + " error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    } else {
        apilog("delete games_member_share error 2002 : No request params value.");
        return res.json(ReturnSuccess(2002, "No request params value."));
    }

});

///////////////////// end tb_member_share /////////////////////

module.exports = route;