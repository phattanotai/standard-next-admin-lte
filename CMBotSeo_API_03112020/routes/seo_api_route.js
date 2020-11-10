const express = require('express');
const db = require('../util/api_db.config');
// define variable
const sequelize = db.sequelize;
const Web = db.web;
const Mobile = db.mobile;
const Web_Queue = db.web_queue;
const Bot_config = db.bot_config;
const UserFake = db.userfake;
const Msg = db.message;
const User = db.user;
const SysRole = db.systemrole;
const History = db.history;
const UserAgent = db.useragent;
const route = express.Router();
let message = 'Success';
let status = 2000;
let status2 = 2001;
let err_msg = 'UnSuccess';
let err_status = 2009;
const { QueryTypes } = require('sequelize');
const moment = require('moment');
const bcrypt = require('bcryptjs'); // for local
//const bcrypt = require('bcrypt'); // for server

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

function sha256Encrypt(password) {
    return bcrypt.hashSync(password, 10);
}

function sha256Verify(password, hashed) {
    return bcrypt.compareSync(password, hashed);
}

//get apk new version
route.post('/web/login', async (req, res, next) => {
    status = 2000;
    message = 'Success';

    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const { username, password } = req.body;
    let user = await sequelize.query(`SELECT id,role,password as token FROM user WHERE username = '${username}'`, {
        type: QueryTypes.SELECT
    });

    if (user.length > 0) {
        console.log('user::==', user);
        const checkPassword = sha256Verify(password, user[0].token);

        if (!checkPassword) {
            status = 1003;
            message = 'Username or Password is not correct';
            user = [];
        }
    }
    else {
        return res.json({
            status: 1003,
            msg: 'User is not exist.'
        });
    }



    res.json({
        status,
        message,
        data: user
    });
});

//get apk new version
route.get('/downloadAPK/', (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    res.download(__dirname + '/apk/SpiderBot.apk');
});

//post mobile available
route.post('/mobile/findname_available/', async (req, res, next) => {
    status = 2000;
    message = 'Success';
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mob = req.body;
    let mobile_name = "No data";
    let mystatus = status;

    let mobs = {};
    if (mob) {
        mobs = await Mobile.findAll({
            where: {
                imei: mob.imei
            }
        });
        if (mobs.length == 0) {
            console.log('No Emei used in system.');
            let mob_available = await sequelize.query('select * from mobile where used = 0 and (imei Is NULL or imei = "") limit 1', {
                type: QueryTypes.SELECT
            }).catch(
                function (err) {
                    console.log("Error in (/mobile/findname_available/)(mob_available) : " + err)
                }
            );

            if (mob_available.length > 0) {
                mobile_name = mob_available[0].name;
                let result = await sequelize.query('update mobile set used = 1 , imei = :imei, mobile_number = :mob_no  where id = :id', {
                    replacements: { imei: mob.imei, mob_no: mob.mobile_number, id: mob_available[0].id },
                    type: QueryTypes.UPDATE
                }).catch(
                    function (err) {
                        console.log("Error in (/mobile/findname_available/)(update mobile available) : " + err)
                    }
                );
            }
        } else {
            console.log('Emei used in system name => ' + mobs[0].postName);
            let result = await sequelize.query('update mobile set used = 1 , imei = :imei, mobile_number = :mob_no  where id = :id', {
                replacements: { imei: mob.imei, mob_no: mob.mobile_number, id: mobs[0].postId },
                type: QueryTypes.UPDATE
            });
            mobile_name = mobs[0].postName;

        }
    }

    res.json({
        status,
        message,
        data: mobile_name
    });

});

//Get web History
// get web all
route.get('/web/history', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const sql = 'select h.id,h.created_at,h.userFake,h.ref,h.message,h.`status`'
        + ',w.`name` as web_name,w.url,w.api from history h join web w on h.web_id = w.id order by id desc';
    await sequelize.query(sql, {
        type: QueryTypes.SELECT
    }).then(
        function (history) {
            return res.json(ReturnSuccess(2000, history));
        }
    ).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
});

route.get('/web/history/:id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const HistId = req.params.id;
    const sql = 'select h.id,h.created_at,h.userFake,h.ref,h.message,h.`status`'
        + ',w.`name` as web_name,w.url,w.api,m.imei,m.description,m.`name`,m.mobile_number,m.save_place,m.`status`as mobile_status '
        + ' from history h join web w on h.web_id = w.id join mobile m on h.ref = m.name'
        + ' where h.id=:id order by id desc';
    await sequelize.query(sql, {
        replacements: { id: HistId },
        type: QueryTypes.SELECT
    }).then(
        function (history) {
            return res.json(ReturnSuccess(2000, history));
        }
    ).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
});

//Update web history when post successfully
route.post('/web/history/update', async (req, res, next) => {

    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const body = req.body;
    status = 2000;
    message = 'Success';
    if (body) {
        if (body.id) {
            sequelize.query('update history set `status` = :status where id = :id', {
                replacements: { status: 2, id: body.id },
                type: QueryTypes.UPDATE
            }).then(
                function (clientUpdateId) {
                    console.log('history UpdateId:' + clientUpdateId[1]);
                    if (clientUpdateId[1] > 0) {
                        console.log('history Updated successfully.');
                        res.json({
                            status,
                            message,
                            data: []
                        });
                    } else {
                        console.log('history Updated unsuccessfully.');
                        status = 2005
                        message = "Success but no update row."
                        res.json({
                            status,
                            message,
                            data: []
                        });
                    }
                }
            );
        }
        else {
            status = 2001;
            message = 'Unsuccess';
            res.json({
                status,
                message,
                data: []
            });
        }
    }
    else {
        status = 2001;
        message = 'Unsuccess';
        res.json({
            status,
            message,
            data: []
        });
    }


});


route.post('/queue/get_queue/', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mob = req.body;
    //let mystatus = status;
    //let mymsg = msg;
    //let mydata = ""; 
    let getweb_available = {};
    let time_queue1 = 0;
    let time_queue2 = 0;
    let use_random_function = 0;
    let use_web_group = 0;
    let use_random_user_for_newgroup = 0;
    let userFake = "";
    let web_group = "";
    let postmessage = "";
    let userAgent = "";

    let web_queue = {};
    let resUserFake = {};
    //let userFake = "";
    let resPostMessage = {};
    let resUserAgent = {};
    //let userAgent = "";

    status = 2000;
    message = 'Success';

    if (mob) {
        if (mob.mobile_name) {
            console.log('Get queue start with ' + mob.mobile_name + ' at : ' + + moment().format('DD MMM YYYY HH:mm:ss'));
            let bot_config = await sequelize.query('select * from bot_config limit 1', {
                type: QueryTypes.SELECT
            });
            if (bot_config.length > 0) {
                use_random_function = bot_config[0].use_random_function;
                use_web_group = bot_config[0].use_web_group;
                use_random_user_for_newgroup = bot_config[0].use_random_user_for_newgroup;
                time_queue1 = bot_config[0].time_queue_available_same_mob / 60;
                console.log('time_queue1 : ' + time_queue1);
                time_queue2 = bot_config[0].time_queue_available_other_mob / 60;
                console.log('time_queue2 : ' + time_queue2);

                if (time_queue1 > 0 && time_queue2 > 0) {
                    let mob_data = await sequelize.query('select * from mobile where name= :mobile_name', {
                        replacements: { mobile_name: mob.mobile_name },
                        type: QueryTypes.SELECT
                    });

                    if (mob_data.length > 0) {
                        console.log('mobile_id : ' + mob_data[0].id);
                        sequelize.query('update mobile set `status` = :status where id = :id', {
                            replacements: { status: 'on-line', id: mob_data[0].id },
                            type: QueryTypes.UPDATE
                        }).then(
                            function (clientUpdateId) {
                                console.log('clientUpdateId:' + clientUpdateId);
                                console.log('Update Status ' + mob.mobile_name + ' on-line');
                            }
                        );

                        if (use_web_group == 1) {
                            getweb_available = await sequelize.query('select a.* from web a JOIN (select web_group from web GROUP BY web_group ORDER BY RAND()) b on b.web_group = a.web_group', {
                                replacements: {},
                                type: QueryTypes.SELECT
                            });
                            if (getweb_available.length > 0) {
                                console.log('Get web_id group && mobile id:' + mob_data[0].id + ' with ' + mob.mobile_name + ' at : ' + moment().format('DD MMM YYYY HH:mm:ss'));

                                let i;
                                for (i = 0; i < getweb_available.length; i++) {
                                    getweb_available[i].ref = mob.mobile_name;
                                    getweb_available[i].load_config = mob_data[0].load_config;

                                    if (i == 0) {
                                        web_group = getweb_available[i].web_group;
                                        resUserFake = await sequelize.query('select * from userfake ORDER BY RAND () limit 1', {
                                            type: QueryTypes.SELECT
                                        });

                                        if (resUserFake.length > 0) {
                                            userFake = resUserFake[0].name;
                                            console.log('userFake : ' + userFake);
                                        }

                                        resUserAgent = await sequelize.query('select * from user_agent ORDER BY RAND () limit 1', {
                                            type: QueryTypes.SELECT
                                        });

                                        if (resUserAgent.length > 0) {
                                            userAgent = resUserAgent[0].useragent;
                                            console.log('userAgent : ' + userAgent);
                                        }
                                        getweb_available[i].userFake = userFake;
                                        getweb_available[i].useragent = userAgent;
                                        resPostMessage = await sequelize.query('select * from message ORDER BY RAND () limit 1', {
                                            type: QueryTypes.SELECT
                                        });
                                        if (resPostMessage.length > 0) {
                                            postmessage = resPostMessage[0].message;
                                            console.log('postmessage : ' + postmessage);
                                            getweb_available[i].message = postmessage;
                                        }

                                        sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                            replacements: { web_id: getweb_available[i].id, mobile_id: mob_data[0].id, userFake: getweb_available[i].userFake, ref: getweb_available[i].ref, message: getweb_available[i].message, status: 1 },
                                            type: sequelize.QueryTypes.INSERT
                                        }).then(
                                            function (clientInsertId) {
                                                console.log('historyId:' + clientInsertId[0]);
                                                getweb_available[i].id = clientInsertId[0];

                                                /* res.json({
                                                    status,
                                                    message,
                                                    data: getweb_available
                                                }); */
                                            }
                                        );
                                    } else {
                                        if (use_random_user_for_newgroup == 1) {
                                            if (web_group != getweb_available[i].web_group) {
                                                resUserFake = await sequelize.query('select * from userfake ORDER BY RAND () limit 1', {
                                                    type: QueryTypes.SELECT
                                                });
                                                if (resUserFake.length > 0) {
                                                    userFake = resUserFake[0].name;
                                                    console.log('userFake : ' + userFake);
                                                }
                                                web_group = getweb_available[i].web_group;
                                                getweb_available[i].userFake = userFake;
                                                getweb_available[i].useragent = userAgent;
                                                resPostMessage = await sequelize.query('select * from message ORDER BY RAND () limit 1', {
                                                    type: QueryTypes.SELECT
                                                });
                                                if (resPostMessage.length > 0) {
                                                    postmessage = resPostMessage[0].message;
                                                    console.log('postmessage : ' + postmessage);
                                                    getweb_available[i].message = postmessage;
                                                }

                                                sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                                    replacements: { web_id: getweb_available[i].id, mobile_id: mob_data[0].id, userFake: getweb_available[i].userFake, ref: getweb_available[i].ref, message: getweb_available[i].message, status: 1 },
                                                    type: sequelize.QueryTypes.INSERT
                                                }).then(
                                                    function (clientInsertId) {
                                                        console.log('historyId:' + clientInsertId[0]);
                                                        getweb_available[i].id = clientInsertId[0];

                                                        /* res.json({
                                                            status,
                                                            message,
                                                            data: getweb_available
                                                        }); */
                                                    }
                                                );

                                            } else {
                                                web_group = getweb_available[i].web_group;
                                                getweb_available[i].userFake = userFake;
                                                getweb_available[i].useragent = userAgent;
                                                resPostMessage = await sequelize.query('select * from message ORDER BY RAND () limit 1', {
                                                    type: QueryTypes.SELECT
                                                });
                                                if (resPostMessage.length > 0) {
                                                    postmessage = resPostMessage[0].message;
                                                    console.log('postmessage : ' + postmessage);
                                                    getweb_available[i].message = postmessage;
                                                }

                                                sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                                    replacements: { web_id: getweb_available[i].id, mobile_id: mob_data[0].id, userFake: getweb_available[i].userFake, ref: getweb_available[i].ref, message: getweb_available[i].message, status: 1 },
                                                    type: sequelize.QueryTypes.INSERT
                                                }).then(
                                                    function (clientInsertId) {
                                                        console.log('historyId:' + clientInsertId[0]);
                                                        getweb_available[i].id = clientInsertId[0];

                                                        /* res.json({
                                                            status,
                                                            message,
                                                            data: getweb_available
                                                        }); */
                                                    }
                                                );
                                            }
                                        } else {
                                            web_group = getweb_available[i].web_group;
                                            getweb_available[i].userFake = userFake;
                                            getweb_available[i].useragent = userAgent;
                                            resPostMessage = await sequelize.query('select * from message ORDER BY RAND () limit 1', {
                                                type: QueryTypes.SELECT
                                            });
                                            if (resPostMessage.length > 0) {
                                                postmessage = resPostMessage[0].message;
                                                console.log('postmessage : ' + postmessage);
                                                getweb_available[i].message = postmessage;
                                            }

                                            sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                                replacements: { web_id: getweb_available[i].id, mobile_id: mob_data[0].id, userFake: getweb_available[i].userFake, ref: getweb_available[i].ref, message: getweb_available[i].message, status: 1 },
                                                type: sequelize.QueryTypes.INSERT
                                            }).then(
                                                function (clientInsertId) {
                                                    console.log('historyId:' + clientInsertId[0]);
                                                    getweb_available[i].id = clientInsertId[0];

                                                    /* res.json({
                                                        status,
                                                        message,
                                                        data: getweb_available
                                                    }); */
                                                }
                                            );
                                        }

                                    }



                                    /* sequelize.query('Insert into web_queue(mobile_id,web_id,status) values (:mobile_id,:web_id,:status)', {
                                        replacements: { mobile_id: mob_data[0].id, web_id: getweb_available[i].id, status: 1 },
                                        type: sequelize.QueryTypes.INSERT
                                    }).then(
                                        function (clientInsertId) {
                                            console.log('clientInsertId:' + clientInsertId);
                                            sequelize.query('update web set `status` = :status where id = :id', {
                                                replacements: { status: 'used', id: getweb_available[0].id },
                                                type: QueryTypes.UPDATE
                                            }).then(
                                                function (clientUpdateId) {
                                                    console.log('clientUpdateId:' + clientUpdateId[1]);
                                                }
                                            );
                                        }
                                    ); */


                                    /* sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                        replacements: { web_id: getweb_available[i].id, mobile_id: mob_data[0].id, userFake: getweb_available[i].userFake, ref: getweb_available[i].ref, message: getweb_available[i].message, status: 1 },
                                        type: sequelize.QueryTypes.INSERT
                                    }).then(
                                        function (clientInsertId) {
                                            console.log('historyId:' + clientInsertId[0]);
                                            getweb_available[i].id = clientInsertId[0];

                                            res.json({
                                                status,
                                                message,
                                                data: getweb_available
                                            });
                                        }
                                    ); */
                                }
                                res.json({
                                    status,
                                    message,
                                    data: getweb_available
                                });
                            } else {
                                status = 2001;
                                message = "No web available";
                                console.log('No web available');

                                res.json({
                                    status,
                                    message,
                                    data: getweb_available
                                });
                            }

                        } else {
                            getweb_available = await sequelize.query('select * from web where status= :status and (id not in (select web_id from web_queue where mobile_id = :mobile_id and status = 1 and (TIMESTAMPDIFF(MINUTE, created_at,now()) <= :Time_queue1)) and id not in (select web_id from web_queue where status = 1 and (TIMESTAMPDIFF(MINUTE, created_at,now()) <= :Time_queue2))) ORDER BY RAND () limit 1', {
                                replacements: { status: 'available', mobile_id: mob_data[0].id, Time_queue1: time_queue1, Time_queue2: time_queue2 },
                                type: QueryTypes.SELECT
                            });

                            if (getweb_available.length > 0) {
                                console.log('Get web_id:' + getweb_available[0].id + ' && mobile id:' + mob_data[0].id + ' with ' + mob.mobile_name + ' at : ' + moment().format('DD MMM YYYY HH:mm:ss'));
                                getweb_available[0].ref = mob.mobile_name;
                                getweb_available[0].load_config = mob_data[0].load_config;
                                resUserFake = await sequelize.query('select * from userfake ORDER BY RAND () limit 1', {
                                    type: QueryTypes.SELECT
                                });
                                if (resUserFake.length > 0) {
                                    userFake = resUserFake[0].name;
                                    console.log('userFake : ' + userFake);
                                    getweb_available[0].userFake = userFake;

                                }
                                resPostMessage = await sequelize.query('select * from message ORDER BY RAND () limit 1', {
                                    type: QueryTypes.SELECT
                                });
                                if (resPostMessage.length > 0) {
                                    postmessage = resPostMessage[0].message;
                                    console.log('postmessage : ' + postmessage);
                                    getweb_available[0].message = postmessage;
                                }
                                resUserAgent = await sequelize.query('select * from user_agent ORDER BY RAND () limit 1', {
                                    type: QueryTypes.SELECT
                                });
                                if (resUserAgent.length > 0) {
                                    userAgent = resUserAgent[0].useragent;
                                    console.log('userAgent : ' + userAgent);
                                    getweb_available[0].useragent = userAgent;
                                }

                                sequelize.query('Insert into web_queue(mobile_id,web_id,status) values (:mobile_id,:web_id,:status)', {
                                    replacements: { mobile_id: mob_data[0].id, web_id: getweb_available[0].id, status: 1 },
                                    type: sequelize.QueryTypes.INSERT
                                }).then(
                                    function (clientInsertId) {
                                        console.log('clientInsertId:' + clientInsertId);
                                        sequelize.query('update web set `status` = :status where id = :id', {
                                            replacements: { status: 'used', id: getweb_available[0].id },
                                            type: QueryTypes.UPDATE
                                        }).then(
                                            function (clientUpdateId) {
                                                console.log('clientUpdateId:' + clientUpdateId[1]);
                                            }
                                        );
                                    }
                                );


                                sequelize.query('Insert into history(web_id,mobile_id,userFake,ref,message,status) values (:web_id,:mobile_id,:userFake,:ref,:message,:status)', {
                                    replacements: { web_id: getweb_available[0].id, mobile_id: mob_data[0].id, userFake: getweb_available[0].userFake, ref: getweb_available[0].ref, message: getweb_available[0].message, status: 1 },
                                    type: sequelize.QueryTypes.INSERT
                                }).then(
                                    function (clientInsertId) {
                                        console.log('historyId:' + clientInsertId[0]);
                                        getweb_available[0].id = clientInsertId[0];

                                        res.json({
                                            status,
                                            message,
                                            data: getweb_available
                                        });
                                    }
                                );
                            } else {
                                status = 2001;
                                message = "No web available";
                                console.log('No web available');

                                res.json({
                                    status,
                                    message,
                                    data: getweb_available
                                });
                            }
                        }


                    } else {
                        status = 2002;
                        message = "Unauthorize";
                        console.log('Unauthorize');
                        res.json({
                            status,
                            message,
                            data: getweb_available
                        });
                    }
                }
            }
        }
    } else {
        status = 2001;
        message = "No web available";

        res.json({
            status,
            message,
            data: getweb_available
        });
    }

});

// get web with id
route.get('/web/findbyid/:id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const webId = req.params.id;
    let webs = {};
    if (webId) {
        webs = await Web.findById(webId);
        if (webs) {
            status = 2000;
            message = 'Success';
        } else {
            status = 2001;
            message = 'Unsuccess';
        }
    }

    res.json({
        status,
        message,
        data: webs
    });
});



// get web all
route.get('/web/all', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const web = await Web.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (systemrole) {
        return res.json(ReturnSuccess(2000, systemrole));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});



// get config
route.post('/app/config/', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mob = req.body;
    let mobile_name = "";
    let mobile = {};
    let bot = {};
    status = 2000;
    message = 'Success';
    if (mob) {
        mobile_name = mob.mobile_name;
        if (mobile_name.length > 0) {
            mobile = await sequelize.query('select * from mobile where name=:name', {
                replacements: { name: mobile_name },
                type: QueryTypes.SELECT
            });
            if (mobile.length > 0) {
                bot = await Bot_config.findAll();
                sequelize.query('update mobile set `status` = :status,load_config=0 where id = :id', {
                    replacements: { status: 'on-line', id: mobile[0].id },
                    type: QueryTypes.UPDATE
                }).then(
                    function (clientUpdateId) {
                        console.log('clientUpdateId:' + clientUpdateId);
                        console.log('Update Status ' + mobile_name + ' on-line');
                    }
                );
            }
            else {
                status = 2002;
                message = "Unauthorize";
            }
        }
        else {
            status = 2001;
            message = "Unsuccess";
        }

    }
    else {
        status = 2001;
        message = "Unsuccess";
    }
    //res.json(web);
    res.json({
        status,
        message,
        data: bot
    });
});

//////////////////// api for admin 'systemrole' ////////////////
// get role all <<<OK>>>
route.get('/web/role', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const systemrole = await SysRole.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (systemrole) {
        return res.json(ReturnSuccess(2000, systemrole));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

// get role by id <<<OK>>>
route.get('/web/role/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const Id = req.params.Id;
    const systemrole = await SysRole.findById(Id).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (systemrole) {
        return res.json(ReturnSuccess(2000, systemrole));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});
///////////////////////// end 'systemrole' api ///////////////////////////



//////////////////// api for admin 'user' ////////////////
// get user all <<<OK>>>
route.get('/web/users', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const user = await User.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (user) {
        return res.json(ReturnSuccess(2000, user));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

// get user by id <<<OK>>>
route.get('/web/users/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    const user = await User.findById(userId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (user) {
        return res.json(ReturnSuccess(2000, user));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});

// get userrole <<<OK>>>
route.get('/web/usersrole/', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    //let user = {};
    const sql = 'select u.id as id , u.username, ur.id as role, ur.`name` as rolename , mr.m1, mr.m2, mr.m3, mr.m4, mr.m5, mr.m6, mr.m7, mr.m8, mr.m9, mr.m10'
        + ' from user u join user_role ur on u.role = ur.id join menu_role mr on ur.role = mr.id ';
    await sequelize.query(sql, {
        type: QueryTypes.SELECT
    }).then(
        function (user) {
            return res.json(ReturnSuccess(2000, user));
        }
    ).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
});

// get userrole userid <<<OK>>>
route.get('/web/usersrole/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    //let user = {};
    if (userId) {
        const sql = 'select u.id as id , u.username, ur.id as role, ur.`name` as rolename , mr.m1, mr.m2, mr.m3, mr.m4, mr.m5, mr.m6, mr.m7, mr.m8, mr.m9, mr.m10'
            + ' from user u join user_role ur on u.role = ur.id join menu_role mr on ur.role = mr.id where u.id = :userId';
        await sequelize.query(sql, {
            replacements: { userId: userId },
            type: QueryTypes.SELECT
        }).then(
            function (user) {
                return res.json(ReturnSuccess(2000, user));
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }

});



//edit user with id <<<OK>>>
route.put('/web/users/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const user = req.body;
    const userId = req.params.userId;
    //let updateUser = null;
    status = 2000;
    message = 'Success';
    const result = { status: 2001, message: "Unsuccess", data: "" };
    if (user && userId) {
        const sql = 'select role from user_role where name=:name';
        await sequelize.query(sql, {
            replacements: { name: user.rolename },
            type: QueryTypes.SELECT
        }).then(
            function (user_role) {
                console.log('password:' + user.password);
                if (user.password == '') {
                    console.log('password is empty');
                    sequelize.query('UPDATE `user` SET username=:username,`role`=:role WHERE id = :id', {
                        replacements: { username: user.username, role: user_role[0].role, id: userId },
                        type: QueryTypes.UPDATE
                    }).then(
                        function (clientUpdateId) {
                            //console.log('clientUpdateId:' + clientUpdateId);
                            console.log('clientUpdateId:' + clientUpdateId[1]);
                            if (clientUpdateId[1] == 0) {
                                return res.json(ReturnSuccess(2000, "No row record update."));
                            } else {
                                return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                            }
                        }
                    ).catch(
                        function (err) {
                            console.log('Error1:' + err);
                            return res.json(ReturnErr(err));
                        }
                    )
                }
                else {
                    console.log('password is not empty');
                    sequelize.query('update `user` set username=:username,`password`=:password,`role`=:role where id = :id', {
                        replacements: { username: user.username, password: sha256Encrypt(user.password), role: user_role[0].role, id: userId },
                        type: QueryTypes.UPDATE
                    }).then(
                        function (clientUpdateId) {
                            //console.log('clientUpdateId:' + clientUpdateId);
                            console.log('clientUpdateId:' + clientUpdateId[1]);
                            if (clientUpdateId[1] == 0) {
                                return res.json(ReturnSuccess(2000, "No row record update."));
                            } else {
                                return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                            }
                        }
                    ).catch(
                        function (err) {
                            console.log('Error2:' + err);
                            return res.json(ReturnErr(err));
                        }

                    )
                }
            }
        ).catch(
            function (err) {
                console.log('Error3:' + err);
                return res.json(ReturnErr(err));
            }
        );

    }

});

//create user <<<OK>>>
route.post('/web/users/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const user = req.body;
    status = 2000;
    message = 'Success';
    if (user) {
        const sql = 'select role from user_role where name=:name';
        await sequelize.query(sql, {
            replacements: { name: user.rolename },
            type: QueryTypes.SELECT
        }).then(
            function (user_role) {
                console.log('user_role :' + user_role[0].role);
                sequelize.query('Insert into user(username,password,role) values (:username,:password,:role)', {
                    replacements: { username: user.username, password: sha256Encrypt(user.password), role: user_role[0].role },
                    type: sequelize.QueryTypes.INSERT
                }).then(
                    function (clientInsertId) {
                        console.log('clientInsertId:' + clientInsertId);
                        return res.json(ReturnSuccess(2000, clientInsertId[0]))
                    }
                ).catch(
                    function (err) {
                        return res.json(ReturnErr(err));
                    }
                );
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );

    }
});

//delete user with id <<<OK>>>
route.delete('/web/users/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    status = 2000;
    message = 'Success';
    let UserDestroy = null;
    if (userId) {
        const user = await User.findById(userId).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
        if (user) {
            UserDestroy = await user.destroy().catch(
                function (err) {
                    return res.json(ReturnErr(err));
                }
            );
            if (UserDestroy) {
                return res.json(ReturnSuccess(2000, UserDestroy));
            }
        }
        else {
            return res.json(ReturnSuccess(2002, "No row record deleted."));
        }
    }
    else {
        return res.json(ReturnErr('No parameter id found.'));
    }
    /* res.json({
        status,
        message,
        data: UserDestroy
    }); */
});
///////////////////////// end 'user' api ///////////////////////////

//////////////////// api for admin 'message' ////////////////
// get message all <<<OK>>>
route.get('/web/message', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const msg = await Msg.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (msg) {
        return res.json(ReturnSuccess(2000, msg));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
    /*  //res.json(web);
     res.json({
         status,
         message,
         data: msg
     }); */
});


// get message by id <<<OK>>>
route.get('/web/message/:msgId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const msgId = req.params.msgId;
    const msg = await Msg.findById(msgId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (msg) {
        return res.json(ReturnSuccess(2000, msg));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

//edit message with id <<<OK>>>
route.put('/web/message/:msgId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const msg = req.body;
    const msgId = req.params.msgId;
    //let updateMsg = null;
    if (msg && msgId) {

        sequelize.query('update message set message=:message where id = :id', {
            replacements: { message: msg.message, id: msgId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientUpdateId:' + clientUpdateId);
                //updateMsg = clientUpdateId;
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnErr(err));
    }

});

//create message <<<OK>>>
route.post('/web/message/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const msg = req.body;
    //let newMsg = null;
    if (msg) {
        /* newUser = await sequelize.transaction(function(t) {
        // chain all your queries here. make sure you return them.
        return User.create(user, { transaction: t }); */
        sequelize.query('Insert into message(message) values (:message)', {
            replacements: { message: msg.message },
            type: sequelize.QueryTypes.INSERT
        }).then(
            function (clientInsertId) {
                console.log('clientInsertId:' + clientInsertId);
                return res.json(ReturnSuccess(2000, clientInsertId[0]))
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }
});

//delete message with id <<<OK>>>
route.delete('/web/message/:msgId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const msgId = req.params.msgId;
    let MsgDestroy = null;
    if (msgId) {
        const msg = await Msg.findById(msgId);
        if (msg) {
            MsgDestroy = await msg.destroy();
        }
    }
    res.json({
        status,
        message,
        data: MsgDestroy
    });
});
///////////////////////// end 'message' api ///////////////////////////

//////////////////// api for admin 'userFake' ////////////////
// get userFake all <<<OK>>>
route.get('/web/userfake', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userfake = await UserFake.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (userfake) {
        return res.json(ReturnSuccess(2000, userfake));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});


// get userFake by id <<<OK>>>
route.get('/web/userfake/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    const userfake = await UserFake.findById(userId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (userfake) {
        return res.json(ReturnSuccess(2000, userfake));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

//edit userFake with id <<<OK>>>
route.put('/web/userfake/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userfake = req.body;
    const userId = req.params.userId;
    //let updateUserfake = null;
    if (userfake && userId) {

        sequelize.query('update userfake set name=:name where id = :id', {
            replacements: { name: userfake.name, id: userId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientUpdateId:' + clientUpdateId);
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnErr(err));
    }
});

//create userFake <<<OK>>>
route.post('/web/userfake/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userfake = req.body;
    //let newUserfake = null;
    if (userfake) {
        sequelize.query('Insert into userfake(name) values (:name)', {
            replacements: { name: userfake.name },
            type: sequelize.QueryTypes.INSERT
        }).then(
            function (clientInsertId) {
                console.log('clientInsertId:' + clientInsertId);
                //newUserfake = clientInsertId;
                return res.json(ReturnSuccess(2000, clientInsertId[0]))
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnSuccess(2002, "No data for create."));
    }
});

//delete userFake with id <<<OK>>>
route.delete('/web/userfake/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    let UserDestroy = null;
    if (userId) {
        const user = await UserFake.findById(userId).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
        if (user) {
            UserDestroy = await user.destroy().catch(
                function (err) {
                    return res.json(ReturnErr(err));
                }
            );
            if (UserDestroy) {
                return res.json(ReturnSuccess(2000, UserDestroy));
            }
        }
        else {
            return res.json(ReturnSuccess(2002, "No row record deleted."));
        }
    }
    else {
        return res.json(ReturnSuccess(2002, "No userfake id found."));
    }
});
///////////////////////// end 'userFake' api ///////////////////////////

//////////////////// api for admin 'mobile' ////////////////
// get mobile all <<<OK>>>
route.get('/web/mobile', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobiles = await Mobile.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (mobiles) {
        return res.json(ReturnSuccess(2000, mobiles));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});


// get mobile by id <<<OK>>>
route.get('/web/mobile/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobileId = req.params.Id;
    const mobiles = await Mobile.findById(mobileId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (mobiles) {
        return res.json(ReturnSuccess(2000, mobiles));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});

//edit mobile with id <<<OK>>>
route.put('/web/mobile/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobile = req.body;
    const mobileId = req.params.Id;
    //let updatemobile = null;
    if (mobile && mobileId) {

        sequelize.query('update mobile set name=:name,used=:used,save_place=:save_place,description=:description where id = :id', {
            replacements: { name: mobile.name, used: mobile.used, save_place: mobile.save_place, description: mobile.description, id: mobileId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientInsertId:' + clientUpdateId);
                //return res.json(ReturnSuccess(2000, clientUpdateId[1]));
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnErr(err));
    }

});
/* 
//edit mobile with id <<<OK>>>
route.put('/web/mobileReset/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobile = req.body;
    const mobileId = req.params.Id;
    //let updatemobile = null;
    if (mobile && mobileId) {

        sequelize.query('update mobile set used=:used,save_place=:save_place,description=:description where id = :id', {
            replacements: { used: '0', save_place: '', description: '', id: mobileId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientInsertId:' + clientUpdateId);
                //return res.json(ReturnSuccess(2000, clientUpdateId[1]));
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }   

}); */

//create mobile <<<OK>>>
route.post('/web/mobile/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobile = req.body;
    let newMobile = null;
    if (mobile) {

        sequelize.query('Insert into mobile(name) values (:name)', {
            replacements: { name: mobile.name },
            type: sequelize.QueryTypes.INSERT
        }).then(
            function (clientInsertId) {
                console.log('clientInsertId:' + clientInsertId);
                //newMobile = clientInsertId;
                return res.json(ReturnSuccess(2000, clientInsertId[0]))
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }
});

//delete mobile with id <<<OK>>>
route.delete('/web/mobile/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const mobileId = req.params.Id;
    let MobileDestroy = null;
    if (mobileId) {
        const mobile = await Mobile.findById(mobileId).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
        if (mobile) {
            MobileDestroy = await mobile.destroy().catch(
                function (err) {
                    return res.json(ReturnErr(err));
                }
            );
            if (MobileDestroy) {
                return res.json(ReturnSuccess(2000, MobileDestroy));
            }
        }
        else {
            return res.json(ReturnSuccess(2002, "No row record deleted."));
        }
    }
});
///////////////////////// end 'mobile' api ///////////////////////////

//////////////////// api for admin 'Web' ////////////////
// get web all <<<OK>>>
route.get('/web/web', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const webs = await Web.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (webs) {
        return res.json(ReturnSuccess(2000, webs));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});


// get web by id <<<OK>>>
route.get('/web/web/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const webId = req.params.Id;
    const webs = await Web.findById(webId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (webs) {
        return res.json(ReturnSuccess(2000, webs));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

//edit web with id <<<OK>>>
route.put('/web/web/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const web = req.body;
    const webId = req.params.Id;
    //let updateWeb = null;
    if (web && webId) {

        sequelize.query('update web set name=:name,url=:url,api=:api,web_id=:web_id where id = :id', {
            replacements: { name: web.name, url: web.url, api: web.api, web_id: web.web_id, id: webId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientUpdateId:' + clientUpdateId);
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }
});

//create web <<<OK>>>
route.post('/web/web/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const web = req.body;
    let newWeb = null;
    if (web) {
        sequelize.query('Insert into web(name,url,api,web_id) values (:name,:url,:api,:web_id)', {
            replacements: { name: web.name, url: web.url, api: web.api, web_id: web.web_id },
            type: sequelize.QueryTypes.INSERT
        }).then(
            function (clientInsertId) {
                console.log('clientInsertId:' + clientInsertId);
                return res.json(ReturnSuccess(2000, clientInsertId[0]))
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    }
});

//delete web with id <<<OK>>>
route.delete('/web/web/:Id', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const webId = req.params.Id;
    let webDestroy = null;
    if (webId) {
        const web = await Web.findById(webId).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
        if (web) {
            webDestroy = await web.destroy().catch(
                function (err) {
                    return res.json(ReturnErr(err));
                }
            );
            if (webDestroy) {
                return res.json(ReturnSuccess(2000, webDestroy));
            }
        }
        else {
            return res.json(ReturnSuccess(2002, "No row record deleted."));
        }
    }
});
///////////////////////// end 'mobile' api ///////////////////////////

//////////////////// api for admin 'userAgent' ////////////////
// get useragent all <<<OK>>>
route.get('/web/useragent', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const useragent = await UserAgent.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (useragent) {
        return res.json(ReturnSuccess(2000, useragent));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});


// get useragent by id <<<OK>>>
route.get('/web/useragent/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    const useragent = await UserAgent.findById(userId).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (useragent) {
        return res.json(ReturnSuccess(2000, useragent));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }
});

//edit useragent with id <<<OK>>>
route.put('/web/useragent/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const useragent = req.body;
    const userId = req.params.userId;
    //let updateUserfake = null;
    if (useragent && userId) {

        sequelize.query('update user_agent set useragent=:useragent where id = :id', {
            replacements: { useragent: useragent.useragent, id: userId },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientUpdateId:' + clientUpdateId);
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnErr(err));
    }
});

//create useragent <<<OK>>>
route.post('/web/useragent/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const useragent = req.body;
    //let newUserfake = null;
    if (useragent) {
        sequelize.query('Insert into user_agent(useragent) values (:useragent)', {
            replacements: { useragent: useragent.useragent },
            type: sequelize.QueryTypes.INSERT
        }).then(
            function (clientInsertId) {
                console.log('clientInsertId:' + clientInsertId);
                //newUserfake = clientInsertId;
                return res.json(ReturnSuccess(2000, clientInsertId[0]))
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnSuccess(2002, "No data for create."));
    }
});

//delete useragent with id <<<OK>>>
route.delete('/web/useragent/:userId', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const userId = req.params.userId;
    let UserDestroy = null;
    if (userId) {
        const user = await UserAgent.findById(userId).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
        if (user) {
            UserDestroy = await user.destroy().catch(
                function (err) {
                    return res.json(ReturnErr(err));
                }
            );
            if (UserDestroy) {
                return res.json(ReturnSuccess(2000, UserDestroy));
            }
        }
        else {
            return res.json(ReturnSuccess(2002, "No row record deleted."));
        }
    }
    else {
        return res.json(ReturnSuccess(2002, "No userfake id found."));
    }
});

///////////////////////// end 'useragent' api ///////////////////////////


//////////////////// api for admin 'bot_config' ////////////////
// get bot_config all <<<OK>>>
route.get('/web/bot_config', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const config = await Bot_config.findAll().catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );
    if (config) {
        return res.json(ReturnSuccess(2000, config));
    } else {
        return res.json(ReturnSuccess(2002, "No data in system."));
    }

});


// get bot_config by id <<<OK>>>
route.get('/web/bot_config/:configname', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const configname = req.params.configname;
    const sql = 'select ' + configname + ' from bot_config limit 1';
    await sequelize.query(sql, {
        type: QueryTypes.SELECT
    }).then(
        function (config) {
            return res.json(ReturnSuccess(2000, config));
        }
    ).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );


});

//edit bot_config with id <<<OK>>>
route.put('/web/bot_config/', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const config = req.body;
    const configname = config.configname;
    const configvalue = config.configvalue;
    if (config && configname && configvalue) {

        sequelize.query('update bot_config set ' + configname + '=:configvalue where id = 1', {
            replacements: { configvalue: configvalue },
            type: QueryTypes.UPDATE
        }).then(
            function (clientUpdateId) {
                console.log('clientUpdateId:' + clientUpdateId);
                if (clientUpdateId[1] == 0) {
                    return res.json(ReturnSuccess(2000, "No row record update."));
                } else {
                    return res.json(ReturnSuccess(2000, "Row updated " + clientUpdateId[0] + " record"))
                }
            }
        ).catch(
            function (err) {
                return res.json(ReturnErr(err));
            }
        );
    } else {
        return res.json(ReturnErr(err));
    }
});

//edit bot_config with id <<<OK>>>
route.put('/web/send_signal_app_loadconfig/', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    sequelize.query('update mobile set load_config=:configvalue where used=1', {
        replacements: { configvalue: 1 },
        type: QueryTypes.UPDATE
    }).then(
        function (clientUpdateId) {
            console.log('clientUpdateId:' + clientUpdateId);
            if (clientUpdateId[1] == 0) {
                return res.json(ReturnSuccess(2000, "No row record update."));
            } else {
                return res.json(ReturnSuccess(2000, "Send signal to online mobile for load new config successfully."))
            }
        }
    ).catch(
        function (err) {
            return res.json(ReturnErr(err));
        }
    );

});




///////////////////////// end 'bot_config' api ///////////////////////////

module.exports = route;
