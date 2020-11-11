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

const { tb_agent_menu } = require("../models");

module.exports.getAgentAllMenu = async (req, res) => {
  try {
    utilily_ft.apilog("Get menu all");
    await tb_agent_menu
      .find({})
      .then(function (result) {
        apiDebuglog("find agent menu result successfully", result);
        return res.json(ReturnSuccess(2000, result));
      })
      .catch(function (err) {
        apiErrorlog("find agent menu error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(utilily_ft.ReturnErr(err));
  }
};
module.exports.getAgentMenuById = async (req, res) => {
  try {
    apilog("Get agent menu by id");
    apilog("params::==" + req.params);
    const uId = req.params.id;
    if (uId) {
      await tb_agent_menu
        .find({ _id: uId })
        .then(function (result) {
          apiDebuglog("find agent menu id " + uId + " successfully", result);
          return res.json(ReturnSuccess(2000, result));
        })
        .catch(function (err) {
          apiErrorlog("find agent menu id " + uId + " error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("find agent menu id error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(utilily_ft.ReturnErr(err));
  }
};

module.exports.createAgentMenu = async (req, res) => {
  try {
    apilog("Post create agent menu");
    apilog("body::==" + JSON.stringify(req.body));
    const menu = req.body;

    if (menu) {
      await tb_agent_menu
        .find({ menu_name: menu.menu_name })
        .then(function (result) {
          apiDebuglog(
            "find agent menu name :" + menu.menu_name + " successfully",
            result
          );
          apilog("agent menu dup => " + result.length);
          if (result.length > 0) {
            //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'}))
            return res.json(
              ReturnCustom(
                1003,
                "Can not add because this agent menu name is aleary in system.",
                []
              )
            );
          } else {
            tb_agent_menu
              .find({ menu_id: menu.menu_id })
              .then(function (result) {
                apiDebuglog(
                  "find agent menu id :" + menu.menu_id + " successfully",
                  result
                );
                apilog("agent menu dup => " + result.length);
                if (result.length > 0) {
                  //return res.json(ReturnUnSuccess(2002,{message:'Can not add because this menu name is aleary in system.'}))
                  return res.json(
                    ReturnCustom(
                      1003,
                      "Can not add because this agent menu id is aleary in system.",
                      []
                    )
                  );
                } else {
                  const Menu = new tb_agent_menu(menu);
                  Menu.save()
                    .then(function (result) {
                      apiDebuglog("agent menu save successfully", result);
                      return res.json(ReturnSuccess(2000, { id: result._id }));
                    })
                    .catch(function (err) {
                      apiErrorlog("agent menu save error 2001", err);
                      return res.json(ReturnErr(err));
                    });
                }
              })
              .catch(function (err) {
                apiErrorlog(
                  "find agent menu name : " + menu.menu_name + " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          }
        })
        .catch(function (err) {
          apiErrorlog(
            "find agent menu name : " + menu.menu_name + " error 2001",
            err
          );
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("agent menu save error 2002 : No request body value.");
      return res.json(ReturnSuccess(2002, "No request body value."));
    }
  } catch (err) {
    return res.json(utilily_ft.ReturnErr(err));
  }
};
module.exports.updateAgentMenu = async (req, res) => {
  try {
    apilog("Put Update menu");
    apilog("body::==" + req.body);
    apilog("params::==" + req.params);
    const menu = req.body;
    const uId = req.params.id;
    if (menu && uId) {
      await tb_agent_menu
        .findByIdAndUpdate(uId, { $set: menu })
        .then(function (result) {
          apiDebuglog("agent menu update id " + uId + " successfully", result);
          return res.json(ReturnSuccess(2000, { id: result._id }));
        })
        .catch(function (err) {
          apiErrorlog("agent menu update id " + uId + " error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("agent menu update error 2002 : No request body & params value.");
      return res.json(ReturnSuccess(2002, "No request body & params value."));
    }
  } catch (err) {
    return res.json(utilily_ft.ReturnErr(err));
  }
};

module.exports.deleteAgentMenu = async (req, res) => {
  try {
    apilog("Delete agent menu by id");
    apilog("params::==" + req.params);
    const uId = req.params.id;
    if (uId) {
      await tb_agent_menu
        .findByIdAndDelete({ _id: uId })
        .then(function (result) {
          apiDebuglog("delete agent menu id " + uId + " successfully", result);
          return res.json(ReturnSuccess(2000, { id: result._id }));
        })
        .catch(function (err) {
          apiErrorlog("delete agent menu id " + uId + " error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("delete agent menu id error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(utilily_ft.ReturnErr(err));
  }
};
