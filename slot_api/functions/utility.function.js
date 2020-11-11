
const env = require('../env');
const moment = require('moment-timezone');
const bcrypt = require('bcryptjs');

const apilog = (msg) => {
    if (env.showlog === 1) {
        var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
        console.log(tz + " :: " + msg);
    }
}

const apiDebuglog = (msg, result) => {
    if (env.showDebuglog === 1) {
        msg = msg + " result : " + result;
    }
    var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
    console.log(tz + " :: " + msg);
}

const apiErrorlog = (msg, err) => {
    if (env.showErrorlog === 1) {
        msg = msg + " ErrorMsg => " + err;
    }
    var tz = moment().tz('Asia/Bangkok').format('DD MMM YYYY HH:mm:ss');
    console.log(tz + " :: " + msg);
}

const ReturnErr = (err) =>{
    return {
        status: 2001,
        message: "Unsuccess",
        data: err
    };
}

const ReturnSuccess = (status, data) => {
    return {
        status: status,
        message: "Success",
        data: data
    };
}

const ReturnUnSuccess = (status, data) => {
    return {
        status: status,
        message: "Unsuccess",
        data: data
    };
}

const ReturnCustom = (status, message, data) => {
    return {
        status: status,
        message: message,
        data: data
    };
}

const sha256Encrypt = (password) =>{
    return bcrypt.hashSync(password, 10);
}

const sha256Verify = (password, hashed) => {
    return bcrypt.compareSync(password, hashed);
}

const getMonday = (d) => {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

module.exports = {
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
}