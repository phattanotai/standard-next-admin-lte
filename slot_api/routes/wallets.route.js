const express = require('express');
const route = express.Router();

const tb_wallets = require('../models/tb_wallets');

const utilily_ft = require('../functions/utility.function');
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
module.exports = route;

