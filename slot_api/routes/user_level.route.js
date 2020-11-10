const express = require('express');
const moment = require('moment-timezone');
const route = express.Router();

const tb_user_level = require('../models/tb_user_level');

const utilily_ft = require('../functions/utility.function');
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
module.exports = route;

