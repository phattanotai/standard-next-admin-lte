const moment = require("moment-timezone");
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
} = require("../functions/utility.function");
const {tb_agent_user,tb_user,tb_member,tb_services,tb_game_list,tb_agent } = require('../models');

module.exports.backend = async (req, res) => {
  try {
    apilog("Get register ssl");
    //console.log('params::==', req.params);
    res.redirect(env.backendhost);
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.checkMemberToken = async (req, res) => {
  try {
    apilog("check_memtoken");
    apilog("body::==" + req.body);
    apilog("params::==" + req.params);
    const member = req.params.member;
    const token = req.params.token;

    if (member && token) {
      apilog("sId: " + sId);
      await tb_member
        .find({ mem_username: member })
        .then(function (result) {
          apiDebuglog("Get info member id " + member + " successfully", result);
          if (result.length > 0) {
            const checkToken = sha256Verify(token, result[0].token);
            return res.json(ReturnSuccess(2000, checkToken));
          } else {
            return res.json(
              ReturnUnSuccess(2001, {
                message:
                  "check_memtoken :: can not find member : " +
                  member +
                  " in system.",
              })
            );
          }
        })
        .catch(function (err) {
          apiErrorlog("check_memtoken member: " + member + " error 2001", err);
          //return res.json(ReturnErr(err));
          return res.json(
            ReturnUnSuccess(2001, {
              message: "Unsuccess check_memtoken member: " + member,
            })
          );
        });
    } else {
      apilog("check_memtoken error 2002 : No request body & params value.");
      return res.json(ReturnSuccess(2002, "No request body & params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("body::==", req.body);
    console.log("params::==", req.params);
    const { username, password } = req.body;

    await tb_user
      .find({ user_name: username, user_status: 1 })
      .then(function (result) {
        apiDebuglog("found user:" + username + " in system.", result);
        if (result.length > 0) {
          const user_detail = result;
          const checkPassword = sha256Verify(
            password,
            user_detail[0].user_pass
          );

          if (checkPassword) {
            var tz = moment().tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss");
            const user = { last_login: tz };
            tb_user
              .findByIdAndUpdate(user_detail[0]._id, { $set: user })
              .then(function (result) {
                apiDebuglog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " successfully",
                  result
                );
                return res.json(
                  ReturnSuccess(2000, {
                    id: user_detail[0]._id,
                    level: user_detail[0].user_level,
                    username: username,
                    email: user_detail[0].user_email,
                  })
                );
              })
              .catch(function (err) {
                apiErrorlog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          } else {
            return res.json(
              ReturnCustom(1003, "Username or Password is not correct.", [])
            );
          }
        } else {
          return res.json(ReturnCustom(1003, "User is not exist.", []));
        }
      })
      .catch(function (err) {
        apiErrorlog("login user:" + username + " error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.agentLogin = async (req, res) => {
  try {
    console.log("body::==", req.body);
    console.log("params::==", req.params);
    const { username, password } = req.body;

    await tb_agent_user
      .find({ user_name: username, user_status: 1 })
      .then(function (result) {
        apiDebuglog("found user:" + username + " in system.", result);
        if (result.length > 0) {
          const user_detail = result;
          const checkPassword = sha256Verify(
            password,
            user_detail[0].user_pass
          );

          if (checkPassword) {
            var tz = moment().tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss");
            const user = { last_login: tz };
            tb_agent_user
              .findByIdAndUpdate(user_detail[0]._id, { $set: user })
              .then(function (result) {
                apiDebuglog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " successfully",
                  result
                );
                tb_agent
                  .find({ agent_code: user_detail[0].agent_code })
                  .then(function (result) {
                    apiDebuglog(
                      "find agent code " +
                        user_detail[0].agent_code +
                        " successfully",
                      result
                    );
                    return res.json(
                      ReturnSuccess(2000, {
                        id: user_detail[0]._id,
                        level: user_detail[0].user_level,
                        user_name: user_detail[0].user_name,
                        user_email: user_detail[0].user_email,
                        agent_code: user_detail[0].agent_code,
                        agent_type: result[0].agent_type,
                      })
                    );
                  })
                  .catch(function (err) {
                    apiErrorlog(
                      "find agent code " +
                        user_detail[0].agent_code +
                        " error 2001",
                      err
                    );
                    return res.json(ReturnErr(err));
                  });
              })
              .catch(function (err) {
                apiErrorlog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          } else {
            return res.json(
              ReturnCustom(1003, "Username or Password is not correct.", [])
            );
          }
        } else {
          return res.json(ReturnCustom(1003, "User is not exist.", []));
        }
      })
      .catch(function (err) {
        apiErrorlog("login user:" + username + " error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};
module.exports.memberLogin = async (req, res) => {
  try {
    console.log("body::==", req.body);
    console.log("params::==", req.params);
    const { username, password } = req.body;

    await tb_member
      .find({ mem_username: username })
      .then(function (result) {
        apiDebuglog("found member:" + username + " in system.", result);
        if (result.length > 0) {
          const user_detail = result;
          var checkPassword = false;
          var checkstatus = true;
          console.log("mem_password => ", user_detail[0].mem_password);

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
            var tz = moment().tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss");
            const token = sha256Encrypt(username + tz.toString());
            const user = { last_login: tz, mem_status: 2, token: token };
            tb_member
              .findByIdAndUpdate(user_detail[0]._id, { $set: user })
              .then(function (result) {
                apiDebuglog(
                  "member update login time id " +
                    user_detail[0]._id +
                    " successfully",
                  result
                );
                return res.json(
                  ReturnSuccess(2000, {
                    id: user_detail[0]._id,
                    balance: user_detail[0].mem_balance,
                    mem_username: user_detail[0].mem_username,
                    agent_code: user_detail[0].agent_code,
                    token: token,
                  })
                );
              })
              .catch(function (err) {
                apiErrorlog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          } else {
            return res.json(
              ReturnCustom(1003, "Username or Password is not correct.", [])
            );
          }
        } else {
          return res.json(ReturnCustom(1003, "User is not exist.", []));
        }
      })
      .catch(function (err) {
        apiErrorlog("login user:" + username + " error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};
module.exports.memberLogin1 = async (req, res) => {
  try {
    console.log("body::==", req.body);
    console.log("params::==", req.params);
    const { username, password } = req.body;

    await tb_member
      .find({ mem_username: username })
      .then(function (result) {
        apiDebuglog("found member:" + username + " in system.", result);
        if (result.length > 0) {
          const user_detail = result;
          var checkPassword = false;
          var checkstatus = true;
          console.log("mem_password => ", user_detail[0].mem_password);

          if (user_detail[0].mem_status == "2") {
            checkstatus = false;
            return res.json(
              ReturnCustom(
                2003,
                "User นี้ถูกใช้งานอยู่ ถ้าคุณต้องการใช้งานในเครื่องนี้กรุณากด Yes ?",
                []
              )
            );
          } else if (user_detail[0].mem_status == "0") {
            checkstatus = false;
            return res.json(
              ReturnCustom(
                1003,
                "User นี้ไม่สามารถใช้งานได้ กรุณาติดต่อadmin",
                []
              )
            );
          }

          if (user_detail[0].mem_password == password) {
            checkPassword = true;
          }
          //const checkPassword = sha256Verify(password, user_detail[0].user_pass);

          if (checkPassword) {
            var tz = moment().tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss");
            const token = sha256Encrypt(username + tz.toString());
            const user = { last_login: tz, mem_status: 2, token: token };
            tb_member
              .findByIdAndUpdate(user_detail[0]._id, { $set: user })
              .then(function (result) {
                apiDebuglog(
                  "member update login time id " +
                    user_detail[0]._id +
                    " successfully",
                  result
                );
                return res.json(
                  ReturnSuccess(2000, {
                    id: user_detail[0]._id,
                    balance: user_detail[0].mem_balance,
                    mem_username: user_detail[0].mem_username,
                    agent_code: user_detail[0].agent_code,
                    token: token,
                  })
                );
              })
              .catch(function (err) {
                apiErrorlog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          } else {
            return res.json(
              ReturnCustom(1003, "Username or Password is not correct.", [])
            );
          }
        } else {
          return res.json(ReturnCustom(1003, "User is not exist.", []));
        }
      })
      .catch(function (err) {
        apiErrorlog("login user:" + username + " error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};
module.exports.memberLogin2 = async (req, res) => {
  try {
    console.log("body::==", req.body);
    console.log("params::==", req.params);
    const { username, password } = req.body;

    await tb_member
      .find({ mem_username: username })
      .then(function (result) {
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
            var tz = moment().tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss");
            const token = sha256Encrypt(username + tz.toString());
            const user = { last_login: tz, mem_status: 2, token: token };
            tb_member
              .findByIdAndUpdate(user_detail[0]._id, { $set: user })
              .then(function (result) {
                apiDebuglog(
                  "member update login time id " +
                    user_detail[0]._id +
                    " successfully",
                  result
                );
                return res.json(
                  ReturnSuccess(2000, {
                    id: user_detail[0]._id,
                    balance: user_detail[0].mem_balance,
                    mem_username: user_detail[0].mem_username,
                    agent_code: user_detail[0].agent_code,
                    token: token,
                  })
                );
              })
              .catch(function (err) {
                apiErrorlog(
                  "user update login time id " +
                    user_detail[0]._id +
                    " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
          } else {
            return res.json(
              ReturnCustom(1003, "Username or Password is not correct.", [])
            );
          }
        } else {
          return res.json(ReturnCustom(1003, "User is not exist.", []));
        }
      })
      .catch(function (err) {
        apiErrorlog("login user:" + username + " error 2001", err);
        return res.json(ReturnErr(err));
      });
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.memberLogoffByid = async (req, res) => {
  try {
    apilog("Put Update member");
    apilog("body::==" + req.body);
    apilog("params::==" + req.params);
    const member = { mem_status: 1 };
    const sId = req.params.id;

    if (member && sId) {
      apilog("sId: " + sId);
      await tb_member
        .find({ mem_username: sId })
        .then(function (result) {
          apiDebuglog("Get info member id " + sId + " successfully", result);
          //return res.json(ReturnSuccess(2000, result));
          if (result.length > 0) {
            tb_member
              .findByIdAndUpdate(result[0]._id, { $set: member })
              .then(function (result) {
                apiDebuglog("update member " + sId + " successfully", result);
                return res.json(ReturnSuccess(2000, { id: result._id }));
              })
              .catch(function (err) {
                apiErrorlog("update member " + sId + " error 2001", err);
                //return res.json(ReturnErr(err));
                return res.json(
                  ReturnUnSuccess(2001, {
                    message: "Unsuccess update member : " + sId,
                  })
                );
              });
          } else {
            return res.json(
              ReturnUnSuccess(2001, {
                message: "can not find member : " + sId + " in system.",
              })
            );
          }
        })
        .catch(function (err) {
          apiErrorlog("update member " + sId + " error 2001", err);
          //return res.json(ReturnErr(err));
          return res.json(
            ReturnUnSuccess(2001, {
              message: "Unsuccess update member id: " + sId,
            })
          );
        });
    } else {
      apilog("member update error 2002 : No request body & params value.");
      return res.json(ReturnSuccess(2002, "No request body & params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.getGamelistByAgent = async (req, res) => {
  try {
    apilog("Get game list from agent code");
    apilog("params::==", req.params);
    const agent_code = req.params.agent_code;
    if (agent_code) {
      await tb_services
        .find({ agent_code: agent_code, ser_status: "On" })
        .then(function (result) {
          if (result.length > 0) {
            var i;
            var brand = [];
            var loadcomplete = false;
            var mylength = result.length;
            for (i = 0; i < mylength; i++) {
              brand.push(result[i].brand_code);
            }
            tb_game_list
              .find({})
              .then(function (result) {
                if (result.length > 0) {
                  var j, k;
                  var arr = [];
                  var arrresult = [];
                  var arrtype = [];
                  console.log("origin length : " + result.length);
                  for (j = 0; j < result.length; j++) {
                    //console.log('result[' + j + '].game_brand => ' + result[j].game_brand);
                    for (k = 0; k < brand.length; k++) {
                      //console.log('brand[' + k + '] => ' + brand[k]);
                      //console.log((result[j].game_brand.toLowerCase() == brand[k].toLowerCase()));
                      if (
                        result[j].game_brand.toLowerCase() ==
                        brand[k].toLowerCase()
                      ) {
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
                  console.log("game_type : " + arrtype);
                  console.log("result length: " + arrresult.length);
                  arr.push({ gametype: arrtype });
                  arr.push({ gamelist: arrresult });
                  return res.json(ReturnSuccess(2000, arr));
                }
              })
              .catch(function (err) {
                apiErrorlog("find alert error 2001", err);
                return res.json(ReturnErr(err));
              });
          } else {
            apilog("find game list (Code:2009): No Data.");
            return res.json(ReturnSuccess(2009, "No Data"));
          }
          /* apiDebuglog("find game list successfully", result)
                    return res.json(ReturnSuccess(2000, result)); */
        })
        .catch(function (err) {
          apiErrorlog("find alert error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("find  game list  error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.loadAllGameByAgant = async (req, res) => {
  try {
    apilog("Get game list from agent code");
    apilog("params::==", req.params);
    const agent_code = req.params.agent_code;
    if (agent_code) {
      await tb_services
        .find({ agent_code: agent_code, ser_status: "On" })
        .then(function (result) {
          if (result.length > 0) {
            var brandservice = result;
            //var mylength = result.length;
            console.log("brandservice length : " + brandservice.length);
            tb_brands.find({}).then(function (result) {
              if (result.length > 0) {
                var i, a;
                var brand = [];
                var brand_slot = [];
                var loadcomplete = false;
                var brand_data = [];
                var brandresult = result;
                let data = [];
                console.log("brand length : " + brandresult.length);
                tb_game_provider.find({}).then(function (result) {
                  if (result.length > 0) {
                    const game_provider = result;
                    tb_brands
                      .find({ brand_sort: { $gte: 1 } })
                      .sort({ brand_sort: 1 })
                      .then(function (result) {
                        apiDebuglog("find brands successfully", result);
                        var brands = result;
                        //return res.json(ReturnSuccess(2000, result));
                        tb_game_provider
                          .find({})
                          .sort({ brand_sort: 1 })
                          .then(function (result) {
                            var i;
                            for (i = 0; i < brands.length; i++) {
                              if (brands[i].brand_code != "QTECH") {
                                data.push({
                                  _id: brands[i]._id,
                                  brand_code: brands[i].brand_code,
                                  brand_name: brands[i].brand_name,
                                  brand_img: brands[i].brand_img,
                                  brand_sort: brands[i].brand_sort,
                                  brand_status: brands[i].brand_status,
                                });
                              }
                            }
                            for (i = 0; i < result.length; i++) {
                              data.push({
                                _id: result[i]._id,
                                brand_code: result[i].game_code,
                                brand_name: result[i].game_name,
                                brand_img: result[i].game_img,
                                brand_sort: result[i].brand_sort,
                                brand_status: result[i].game_status,
                              });
                            }
                            //return res.json(ReturnSuccess(2000, data));
                            var brands_slot_sort = data;
                            tb_game_list
                              .find({})
                              .sort({ _id: -1 })
                              .then(function (result) {
                                if (result.length > 0) {
                                  var j, k;
                                  var arr = [];
                                  var arr_main = [];
                                  var arrresult = [];
                                  var arr_tmp = [];
                                  var arrtype = ["Hits"];
                                  arrresult.push([]);
                                  for (i = 0; i < brandservice.length; i++) {
                                    //console.log('///////////////////////////// Start //////////////////////////');
                                    //console.log('brandservice code ' + i + ' : ' + brandservice[i].brand_code);
                                    for (a = 0; a < brandresult.length; a++) {
                                      if (
                                        brandservice[i].brand_code ==
                                        brandresult[a].brand_code
                                      ) {
                                        //console.log('brandresult code ' + a + ' : ' + brandresult[a].brand_code);
                                        brand.push(brandresult[a].brand_code);
                                        var my_arr = [
                                          brandresult[a].brand_code,
                                          brandresult[a].brand_name,
                                          brandresult[a].brand_img,
                                        ];
                                        brand_data.push(my_arr);
                                      }
                                    }
                                    //console.log('///////////////////////////// End /////////////////////////////');
                                  }
                                  console.log("brand : " + brand.length);
                                  console.log(
                                    "brand_data : " + brand_data.length
                                  );
                                  for (j = 0; j < result.length; j++) {
                                    if (arrtype.length > 0) {
                                      if (
                                        !arrtype.includes(result[j].game_type)
                                      ) {
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
                                      if (
                                        result[j].game_brand.toLowerCase() ==
                                        brand[k].toLowerCase()
                                      ) {
                                        if (
                                          result[j].game_type.toLowerCase() ==
                                          "slot"
                                        ) {
                                          //console.log('brand[' + k + '].brand_code => ' + brand[k]);

                                          if (brand_slot.length == 0) {
                                            brand_slot.push({
                                              brand_code: brand_data[k][0],
                                              brand_name: brand_data[k][1],
                                              brand_img: brand_data[k][2],
                                            });
                                          } else {
                                            /* if (!brand_slot.includes(brand[k])) {
                                                                                                brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                                            } */
                                            var q;
                                            let ins = true;
                                            //console.log('=========================================================');
                                            for (
                                              q = 0;
                                              q < brand_slot.length;
                                              q++
                                            ) {
                                              //console.log('brand_slot[' + q + '].brand_code => ' + brand_slot[q].brand_code);
                                              if (
                                                brand_slot[q] &&
                                                brand_slot[q].brand_code ==
                                                  brand[k]
                                              ) {
                                                ins = false;
                                                break;
                                              }
                                            }
                                            if (ins) {
                                              brand_slot.push({
                                                brand_code: brand_data[k][0],
                                                brand_name: brand_data[k][1],
                                                brand_img: brand_data[k][2],
                                              });
                                            }
                                          }
                                        }
                                        var z;
                                        for (z = 0; z < arrtype.length; z++) {
                                          //arrresult.push([]);
                                          if (
                                            arrtype[z]
                                              .toString()
                                              .toLowerCase() ==
                                            result[j].game_type
                                              .toString()
                                              .toLowerCase()
                                          ) {
                                            arrresult[z].push(result[j]);
                                          }
                                          if (
                                            arrtype[z]
                                              .toString()
                                              .toLowerCase() == "hits" &&
                                            result[j].game_new
                                              .toString()
                                              .toLowerCase() == "yes"
                                          ) {
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
                                    if (arrtype[z].toLowerCase() != "slot") {
                                      var str = arrtype[z];
                                      //console.log('arrtype[' + z + '] : ' + str);
                                      var v = {};
                                      v[str] = arrresult[z];
                                      arr_main.push(v);
                                    } else {
                                      var s;
                                      var str = arrtype[z];
                                      var games_brand = [];
                                      for (
                                        s = 0;
                                        s < brands_slot_sort.length;
                                        s++
                                      ) {
                                        var v = {};
                                        var y = {};
                                        var k = {};
                                        var r;
                                        var tmp = [];
                                        for (
                                          r = 0;
                                          r < arrresult[z].length;
                                          r++
                                        ) {
                                          if (
                                            arrresult[z][
                                              r
                                            ].game_brand.toLowerCase() ==
                                              brands_slot_sort[
                                                s
                                              ].brand_code.toLowerCase() ||
                                            arrresult[z][
                                              r
                                            ].game_provider.toLowerCase() ==
                                              brands_slot_sort[
                                                s
                                              ].brand_code.toLowerCase()
                                          ) {
                                            tmp.push(arrresult[z][r]);
                                          }
                                        }

                                        //k["provider"] = false;
                                        k["img"] =
                                          brands_slot_sort[s].brand_img;
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
                                  console.log("game_type : " + arrtype);
                                  console.log(
                                    "result length: " + arrresult.length
                                  );
                                  arr.push({ brand_all: brand });
                                  arr.push({ brand_slot: brand_slot });
                                  arr.push({
                                    brand_slot_sort: brands_slot_sort,
                                  });
                                  arr.push({ gametype: arrtype });
                                  5;
                                  arr.push({ gameprovider: game_provider });
                                  arr.push({ gamelist: arr_main });
                                  return res.json(ReturnSuccess(2000, arr));
                                }
                              })
                              .catch(function (err) {
                                apiErrorlog("find alert error 2001", err);
                                return res.json(ReturnErr(err));
                              });
                          })
                          .catch(function (err) {
                            apiErrorlog("find brands error 2001", err);
                            return res.json(ReturnErr(err));
                          });
                      })
                      .catch(function (err) {
                        apiErrorlog("find brands error 2001", err);
                        return res.json(ReturnErr(err));
                      });
                  }
                });
              }
            });
          } else {
            apilog("find game list (Code:2009): No Data.");
            return res.json(ReturnSuccess(2009, "No Data"));
          }
          /* apiDebuglog("find game list successfully", result)
                return res.json(ReturnSuccess(2000, result)); */
        })
        .catch(function (err) {
          apiErrorlog("find alert error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("find  game list  error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.loadGameByAgant = async (req, res) => {
  try {
    apilog("Get game list from agent code");
    apilog("params::==", req.params);
    const agent_code = req.params.agent_code;
    if (agent_code) {
      await tb_services
        .find({ agent_code: agent_code, ser_status: "On" })
        .then(function (result) {
          if (result.length > 0) {
            var brandservice = result;
            //var mylength = result.length;
            console.log("brandservice length : " + brandservice.length);
            tb_brands.find({}).then(function (result) {
              if (result.length > 0) {
                var i, a;
                var brand = [];
                var brand_slot = [];
                var loadcomplete = false;
                var brand_data = [];
                var brandresult = result;
                console.log("brand length : " + brandresult.length);
                tb_game_provider.find({}).then(function (result) {
                  if (result.length > 0) {
                    const game_provider = result;
                    tb_game_list
                      .find({})
                      .then(function (result) {
                        if (result.length > 0) {
                          var j, k;
                          var arr = [];
                          var arr_main = [];
                          var arrresult = [];
                          var arr_tmp = [];
                          var arrtype = ["Hits"];
                          arrresult.push([]);
                          for (i = 0; i < brandservice.length; i++) {
                            //console.log('///////////////////////////// Start //////////////////////////');
                            //console.log('brandservice code ' + i + ' : ' + brandservice[i].brand_code);
                            for (a = 0; a < brandresult.length; a++) {
                              if (
                                brandservice[i].brand_code ==
                                brandresult[a].brand_code
                              ) {
                                //console.log('brandresult code ' + a + ' : ' + brandresult[a].brand_code);
                                brand.push(brandresult[a].brand_code);
                                var my_arr = [
                                  brandresult[a].brand_code,
                                  brandresult[a].brand_name,
                                  brandresult[a].brand_img,
                                ];
                                brand_data.push(my_arr);
                              }
                            }
                            //console.log('///////////////////////////// End /////////////////////////////');
                          }
                          console.log("brand : " + brand.length);
                          console.log("brand_data : " + brand_data.length);
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
                              if (
                                result[j].game_brand.toLowerCase() ==
                                brand[k].toLowerCase()
                              ) {
                                if (
                                  result[j].game_type.toLowerCase() == "slot"
                                ) {
                                  //console.log('brand[' + k + '].brand_code => ' + brand[k]);

                                  if (brand_slot.length == 0) {
                                    brand_slot.push({
                                      brand_code: brand_data[k][0],
                                      brand_name: brand_data[k][1],
                                      brand_img: brand_data[k][2],
                                    });
                                  } else {
                                    /* if (!brand_slot.includes(brand[k])) {
                                                                                    brand_slot.push({ "brand_code": brand_data[k][0], "brand_name": brand_data[k][1], "brand_img": brand_data[k][2] });
                                                                                } */
                                    var q;
                                    let ins = true;
                                    //console.log('=========================================================');
                                    for (q = 0; q < brand_slot.length; q++) {
                                      //console.log('brand_slot[' + q + '].brand_code => ' + brand_slot[q].brand_code);
                                      if (
                                        brand_slot[q] &&
                                        brand_slot[q].brand_code == brand[k]
                                      ) {
                                        ins = false;
                                        break;
                                      }
                                    }
                                    if (ins) {
                                      brand_slot.push({
                                        brand_code: brand_data[k][0],
                                        brand_name: brand_data[k][1],
                                        brand_img: brand_data[k][2],
                                      });
                                    }
                                  }
                                }
                                var z;
                                for (z = 0; z < arrtype.length; z++) {
                                  //arrresult.push([]);
                                  if (
                                    arrtype[z].toString().toLowerCase() ==
                                    result[j].game_type.toString().toLowerCase()
                                  ) {
                                    arrresult[z].push(result[j]);
                                  }
                                  if (
                                    arrtype[z].toString().toLowerCase() ==
                                      "hits" &&
                                    result[j].game_new
                                      .toString()
                                      .toLowerCase() == "yes"
                                  ) {
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
                            if (arrtype[z].toLowerCase() != "slot") {
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
                                if (
                                  brand_slot[s].brand_code.toLowerCase() !=
                                  "qtech"
                                ) {
                                  var v = {};
                                  var y = {};
                                  var k = {};
                                  var r;
                                  var tmp = [];
                                  for (r = 0; r < arrresult[z].length; r++) {
                                    if (
                                      arrresult[z][
                                        r
                                      ].game_brand.toLowerCase() ==
                                      brand_slot[s].brand_code.toLowerCase()
                                    ) {
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
                                      if (
                                        arrresult[z][
                                          r
                                        ].game_provider.toLowerCase() ==
                                        game_provider[n].game_code.toLowerCase()
                                      ) {
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
                          console.log("game_type : " + arrtype);
                          console.log("result length: " + arrresult.length);
                          arr.push({ brand_all: brand });
                          arr.push({ brand_slot: brand_slot });
                          arr.push({ gametype: arrtype });
                          arr.push({ gameprovider: game_provider });
                          arr.push({ gamelist: arr_main });
                          return res.json(ReturnSuccess(2000, arr));
                        }
                      })
                      .catch(function (err) {
                        apiErrorlog("find alert error 2001", err);
                        return res.json(ReturnErr(err));
                      });
                  }
                });
              }
            });
          } else {
            apilog("find game list (Code:2009): No Data.");
            return res.json(ReturnSuccess(2009, "No Data"));
          }
          /* apiDebuglog("find game list successfully", result)
                    return res.json(ReturnSuccess(2000, result)); */
        })
        .catch(function (err) {
          apiErrorlog("find alert error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("find  game list  error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};

module.exports.getBrandListByAgent = async (req, res) => {
  try {
    apilog("Get brand list from agent code");
    apilog("params::==", req.params);
    const agent_code = req.params.agent_code;
    if (agent_code) {
      await tb_services
        .find({ agent_code: agent_code, ser_status: "On" })
        .then(function (result) {
          if (result.length > 0) {
            var i;
            var brand = [];
            var loadcomplete = false;
            var mylength = result.length;
            for (i = 0; i < mylength; i++) {
              brand.push({ brand_code: result[i].brand_code });
            }
            return res.json(ReturnSuccess(2000, brand));
          } else {
            tb_agent
              .find({ agent_code: agent_code })
              .then(function (result) {
                apiDebuglog(
                  "find agent_code : " + agent_code + " successfully",
                  result
                );
                //return res.json(ReturnSuccess(2000, result));
                tb_services
                  .find({
                    agent_code: result[0].agent_lineup,
                    ser_status: "On",
                  })
                  .then(function (result) {
                    if (result.length > 0) {
                      var i;
                      var brand = [];
                      //var loadcomplete = false;
                      var mylength = result.length;
                      for (i = 0; i < mylength; i++) {
                        brand.push({ brand_code: result[i].brand_code });
                      }
                      return res.json(ReturnSuccess(2000, brand));
                    } else {
                      apilog("find brand list (Code:2009): No Data.");
                      return res.json(ReturnSuccess(2009, "No Data"));
                    }
                  })
                  .catch(function (err) {
                    apiErrorlog("find brand list error 2001", err);
                    return res.json(ReturnErr(err));
                  });
              })
              .catch(function (err) {
                apiErrorlog(
                  "find agent_code " + agent_code + " error 2001",
                  err
                );
                return res.json(ReturnErr(err));
              });
            /*  apilog("find brand list (Code:2009): No Data.");
                         return res.json(ReturnSuccess(2009, "No Data")); */
          }
          /* apiDebuglog("find game list successfully", result)
                    return res.json(ReturnSuccess(2000, result)); */
        })
        .catch(function (err) {
          apiErrorlog("find brand list error 2001", err);
          return res.json(ReturnErr(err));
        });
    } else {
      apilog("find  brand list  error 2002 : No request params value.");
      return res.json(ReturnSuccess(2002, "No request params value."));
    }
  } catch (err) {
    return res.json(ReturnErr(err));
  }
};
