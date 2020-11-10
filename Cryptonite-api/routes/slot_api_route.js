//import axios from 'axios';

const axios = require('axios');
const express = require('express');
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const env = require('../env');
const multer = require('multer');
const moment = require('moment-timezone');
const { json } = require('body-parser');


const tb_alert = require('../models/tb_alert');
const tb_agent_user = require('../models/tb_agent_user');
const tb_user = require('../models/tb_user');

const tb_brands = require('../models/tb_brands');
const tb_menu = require('../models/tb_menu');
const tb_agent_menu = require('../models/tb_agent_menu');

const tb_game_list = require('../models/tb_game_list');
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
const { start } = require('repl');

var md5 = require('md5');
const { exception } = require('console');
const { resolve } = require('path');


let message = 'Success';
let status = 2000;
const route = express.Router();

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const algorithm2 = 'aes-192-cbc';
const secretKey2 = crypto.scryptSync('Teerawat@06012515', 'salt', 24);
const iv = crypto.randomBytes(16);

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

function CryptoniteEncrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    console.log(encrypted.toString('hex'));
    return {
        iv: iv.toString('hex'),
        data: encrypted.toString('hex')
    };
}

function CryptoniteDecrypt(hash) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.data, 'hex')), decipher.final()]);

    return decrpyted.toString();
}

function CryptoniteEncrypt2(text) {
    const cipher = crypto.createCipheriv(algorithm2, secretKey2, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    console.log(encrypted.toString('hex'));
    return {
        iv: iv.toString('hex'),
        data: encrypted.toString('hex')
    };
}

function CryptoniteDecrypt2(hash) {
    const decipher = crypto.createDecipheriv(algorithm2, secretKey2, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.data, 'hex')), decipher.final()]);

    return decrpyted.toString();
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

function sortByKey(jsObj) {
    var sortedArray = [];

    // Push each JSON Object entry in array by [key, value]
    for (var i in jsObj) {
        sortedArray.push([i, jsObj[i]]);
    }

    // Run native sort function and returns sorted array.
    return sortedArray.sort();
}

function CreateParams(jsObj) {
    var result = "", i;
    var obj = sortByKey(jsObj);
    for (i = 0; i < obj.length; i++) {
        if (i == 0) {
            result += obj[i][0] + "=" + obj[i][1];
        } else {
            result += "&" + obj[i][0] + "=" + obj[i][1];
        }
    }
    if (result.length == 0) {
        result = "-";
    }
    return result;
}

function webAuthen(agent_code, api_name, params, MD5) {
    //hash description
    //result value 0=false,1=true,2=missing agent_code,3=get tb_agent error,4=hash md5 error
    //md5 = agent_code + params_obj
    //params must be sort by keys in Alphabetical order. ex: params = 'key1=value1&key2=value2&key3=value3'
    //if no params please insert '-'.
    apilog('Web Authen start.');
    apilog('Get agent by agent code');
    if (params) {
        const tmp = JSON.stringify(params)
        console.log('params : ' + JSON.stringify(params));
        var params_obj = CreateParams(params);
        console.log('params obj : ' + params_obj);
        return new Promise(function (resolve, reject) {
            tb_agent.find({ agent_code: agent_code }).then(
                function (result) {
                    if (result.length > 0) {
                        //const agent_api_user = result[0].agent_api_user;
                        //const agent_api_password = result[0].agent_api_password;
                        //const agent_api_key = result[0].agent_api_key;
                        try {
                            console.log('md5 : ' + agent_code + api_name + params_obj);
                            const checked_md5 = md5(agent_code + api_name + params_obj);
                            console.log('md5 [1] : ' + checked_md5);
                            console.log('md5 [2] : ' + MD5);
                            if (checked_md5.toString() === MD5.toString()) {
                                apilog('md5 is authentications.');
                                resolve(1);
                            } else {
                                apilog('missing md5');
                                resolve(0);
                            }
                        } catch (err) {
                            apiErrorlog("hash md5 error", err);
                            resolve(4);
                        }

                    } else {
                        apilog('missing agent_code');
                        resolve(2);
                    }
                }
            ).catch(
                function (err) {
                    apiErrorlog("find agent for md5 authen error", err);
                    reject(3);
                }
            );
        })

    } else {
        apilog('no params');
        return 5;
    }
}

const loadbrand = async (agent_code) => {

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
                    return brand;

                } else {
                    apilog("find brand list (Code:2009): No Data.");
                    return [-2];
                }
            }
        ).catch(
            function (err) {
                apiErrorlog("find brand list error 2001", err);
                return [err];
            }
        );
    } else {
        apilog("find  brand list  error 2002 : No request params value.");
        return [-1];
    }
};

const configHeader = (token = null) => {
    // const tokenData = token ? { token: token } : {};  

    const config = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
    };

    return config;
};

const decryptonite = (d1, d2, iv, apikey) => {
    var result = [];
    var mycryptonite1 = '', mycryptonite2 = '';
    d1 = CryptoniteDecrypt({"iv":iv,"data":d1});
    d2 = CryptoniteDecrypt({"iv":iv,"data":d2});

    console.log('d1: ' + d1);
    console.log('d2: ' + d2);
    var key = apikey;
    if (key % 2 != 0) {
        key += 1;
    }
    console.log('key: ' + key);
    mycryptonite1 = d1.substring((key / 2), d1.length - key / 2);
    mycryptonite2 = d2.substring((key / 2), d2.length - key / 2);
    console.log('mycryptonite1: ' + mycryptonite1);
    console.log('mycryptonite2: ' + mycryptonite2);
    var i, j, k, tmp = '', charlength = mycryptonite1.length;
    if (mycryptonite2.length > charlength) {
        charlength = mycryptonite2.length
    }
    console.log('length: ' + charlength);
    for (i = charlength - 1; i >= 0; i--) {
        tmp += mycryptonite1[i];
        tmp += mycryptonite2[i];
    }
    console.log('tmp: ' + tmp);
    result = tmp.split('<');
    return result;
}

const cryptonite = (api, game_api, picture_api, api_key) => {
    var result = {};
    //const apikey = parseInt(api_key)
    var mycryptonite1 = '', mycryptonite2 = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters_tmp = api + '<' + game_api + '<' + picture_api;
    var charactersLength = characters.length;
    var charlength = api.length;
    if (game_api.length > charlength) {
        charlength = game_api.length;
    }
    if (picture_api.length > charlength) {
        charlength = picture_api.length;
    }
    var apikey = api_key;
    console.log('apikey: ' + apikey);
    if (apikey % 2 != 0) {
        apikey += 1;
    }
    console.log('tmp: ' + characters_tmp);
    console.log('length: ' + characters_tmp.length);
    var i, j, k;
    for (var j = 0; j < apikey / 2; j++) {
        mycryptonite1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (var k = 0; k < apikey / 2; k++) {
        mycryptonite2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (i = characters_tmp.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            mycryptonite1 += characters_tmp[i];
        } else {
            mycryptonite2 += characters_tmp[i];
        }
    }
    for (var j = 0; j < apikey / 2; j++) {
        mycryptonite1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //result.push()
    for (var k = 0; k < apikey / 2; k++) {
        mycryptonite2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('mycryptonite1: ' + mycryptonite1);
    console.log('mycryptonite2: ' + mycryptonite2);
    var c1 = CryptoniteEncrypt(mycryptonite1);
    var c2 = CryptoniteEncrypt(mycryptonite2);
    console.log('c1: ' + CryptoniteDecrypt(c1));
    console.log('c2: ' + JSON.stringify(c2));
    result = { "cryptonite1": c1.data, "cryptonite2": c2.data, "hash": c1.iv, "apikey": api_key.toString() };
    return result;
}

function getAllData(URLs) {
    return Promise.all(URLs.map(fetchData));
}

function fetchData(URL) {
    return axios.get(URL).then((response) => {
        return {
            success: true,
            amount: response.data.amount
        };
    }).catch((err) => {
        return {
            success: false
        };
    });
}

route.get("/", (req, res) => {
    apilog('Get Cryptonite API Integration welcome');
    res.status(200).send("!!! Welcome to Cryptonite API External Integration. !!!");
});

route.get("/MD5/:Msg", (req, res) => {
    apilog('Get MD5 for Msg : ' + req.params.Msg);
    apilog("Msg MD5 : " + md5(req.params.Msg));
    res.status(200).send(md5(req.params.Msg));
});

route.post("/encrypt", (req, res) => {
    apilog('encrypt for Msg : ' + req.body.Msg);
    //apilog("Msg CryptoniteEncrypt : " + CryptoniteEncrypt(req.body.Msg));
    //res.status(200).send(CryptoniteEncrypt(req.body.Msg));
    return res.json(ReturnSuccess(2000, CryptoniteEncrypt2(req.body.Msg)));
});

route.post("/decrypt", (req, res) => {
    apilog('decrypt for data : ' + req.body.data);
    //apilog("Msg MD5 : " + md5(req.params.Msg));
    const data = req.body.data;
    const iv = req.body.iv;
    //res.status(200).send(CryptoniteDecrypt({"iv":iv,"data":data}));
    return res.json(ReturnSuccess(2000, CryptoniteDecrypt2({"iv":iv,"data":data})));
});

route.post("/decryptonite/:agent_code/:hash", async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    console.log('body::==', req.body);
    const agent_code = req.params.agent_code;
    const hash = req.params.hash;
    const app_config = req.body;

    const check_authen = await webAuthen(agent_code, "checkauthen", app_config, hash)
    //result value 0=false,1=true,2=missing agent_code,3=get tb_agent error,4=hash md5 error
    //console.log(check_authen);
    if (check_authen == 1) {
        //return res.json(ReturnSuccess(2000, { message: "Success" }));
        if (app_config.cryptonite1 !== undefined && app_config.cryptonite2 !== undefined && app_config.hash !== undefined && app_config.apikey !== undefined) {
            console.log('agent_code : ' + agent_code);
            console.log('mycryptonite1 : ' + app_config.mycryptonite1);
            console.log('mycryptonite2 : ' + app_config.mycryptonite2);
            console.log('hash : ' + app_config.hash);
            console.log('apikey : ' + app_config.apikey);
            var cryps = decryptonite(app_config.cryptonite1, app_config.cryptonite2,app_config.hash, parseInt(app_config.apikey));

            if (cryps.length > 0 && cryps.length == 3) {
                return res.json(ReturnSuccess(2000, { "API": cryps[0], "GAME_API": cryps[1], "PICTURE_API": cryps[2] }));
            } else {
                return res.json(ReturnUnSuccess(2001, "No app config."));
            }
        } else {
            apilog("app_config error 2002 : No request body value.");
            return res.json(ReturnUnSuccess(2002, "No request body value."));
        }
    } else {
        switch (check_authen) {
            case 0:
                return res.json(ReturnUnSuccess(20011, { message: "UnAutorize Hash Md5" }));
                break;
            case 2:
                return res.json(ReturnUnSuccess(20011, { message: "Missing agent code" }));
                break;
            case 3:
                return res.json(ReturnUnSuccess(20011, { message: "Cannot get agent in system" }));
                break;
            case 3:
                return res.json(ReturnUnSuccess(20011, { message: "Missing Hash Md5" }));
                break;
            default:
                return res.json(ReturnUnSuccess(20011, { message: "UnAutorize Hash Md5" }));
        }
    }
});

route.post("/cryptonite/:agent_code/:hash", async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    console.log('body::==', req.body);
    const agent_code = req.params.agent_code;
    const hash = req.params.hash;
    const app_config = req.body;

    const check_authen = await webAuthen(agent_code, "checkauthen", app_config, hash)
    //result value 0=false,1=true,2=missing agent_code,3=get tb_agent error,4=hash md5 error
    //console.log(check_authen);
    if (check_authen == 1) {
        //return res.json(ReturnSuccess(2000, { message: "Success" }));

        if (app_config.API !== undefined && app_config.GAME_API !== undefined && app_config.PICTURE_API !== undefined && app_config.apikey !== undefined) {
            console.log('agent_code : ' + agent_code);
            console.log('API : ' + app_config.API);
            console.log('GAME_API : ' + app_config.GAME_API);
            console.log('PICTURE_API : ' + app_config.PICTURE_API);
            console.log('apikey : ' + app_config.apikey);
            var cryps = cryptonite(app_config.API, app_config.GAME_API, app_config.PICTURE_API, parseInt(app_config.apikey));
            console.log('cryps : ' + JSON.stringify(cryps));
            if (cryps.cryptonite1 !== undefined && cryps.cryptonite2 !== undefined && cryps.hash !== undefined && cryps.apikey !== undefined) {
                return res.json(ReturnSuccess(2000, cryps));
            } else {
                return res.json(ReturnUnSuccess(2001, "No app config."));
            }
        } else {
            apilog("app_config error 2002 : No request body value.");
            return res.json(ReturnUnSuccess(2002, "No request body value."));
        }
    } else {
        switch (check_authen) {
            case 0:
                return res.json(ReturnUnSuccess(20011, { message: "UnAutorize Hash Md5" }));
                break;
            case 2:
                return res.json(ReturnUnSuccess(20011, { message: "Missing agent code" }));
                break;
            case 3:
                return res.json(ReturnUnSuccess(20011, { message: "Cannot get agent in system" }));
                break;
            case 3:
                return res.json(ReturnUnSuccess(20011, { message: "Missing Hash Md5" }));
                break;
            default:
                return res.json(ReturnUnSuccess(20011, { message: "UnAutorize Hash Md5" }));
        }
    }
});

module.exports = route;