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
const {tb_menu}= require('../models');

module.exports.getMenu = async (req, res) => {
    try{
        apilog('Get menu all');
        await tb_menu.find({}).then(
            function (result) {
                apiDebuglog("find menu result successfully" , result);
                return res.json(ReturnSuccess(2000, result));
            }
        ).catch(
            function (err) {
                apiErrorlog("find menu error 2001", err);
                return res.json(ReturnErr(err));
            }
        );
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.getMenuByID = async (req, res) => {
    try{
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
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.createMenu = async (req, res) => {
    try{
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
    }catch(err){
        return res.json(ReturnErr(err));
    }
}

module.exports.updateMenu = async (req, res) => {
    try{
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
    
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
module.exports.deleteMenu = async (req, res) => {
    try{
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
    }catch(err){
        return res.json(ReturnErr(err));
    }
}
