// import express & define port = 3000
const express = require('express');
const app = express();
const cors = require('cors');
//const app_timer = express();
const port = 3001;
//const port_timer = 3000;
// set use body json
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// add route
const blogRoute = require('./routes/seo_api_route');
const moment = require('moment');

//

app.use('/api', blogRoute);

const db = require('./util/api_db.config');
const sequelize = db.sequelize;
var cron = require('node-cron');
const { QueryTypes } = require('sequelize');
let time_queue = 0;
let time_queue2 = 0;
let time_queue3 = 0;
let use_random_function = 0;
let use_web_group = 0;
cron.schedule('* * * * *', function () {
    console.log('running a task every 1 minute : ' + moment().format('DD MMM YYYY HH:mm:ss'));
    let bot_config = sequelize.query('select * from bot_config limit 1', {
        type: QueryTypes.SELECT
    }).then(
        function (clientSelect) {
            console.log('clientSelect:' + JSON.stringify(clientSelect));
            time_queue = clientSelect[0].time_queue_available_other_mob / 60;
            time_queue2 = clientSelect[0].time_queue_available_same_mob / 60;
            time_queue3 = clientSelect[0].time_update_mobile_offline / 60;
            use_random_function = clientSelect[0].use_random_function;
            if (clientSelect.length > 0) {
                use_web_group = clientSelect[0].use_web_group;
                if (use_web_group != 1) {
                    if (time_queue2 > 0) {
                        console.log('time update web_queue status 0 : ' + time_queue2);
                        sequelize.query('update web_queue set `status` = :status where status = :status2 and TIMESTAMPDIFF(MINUTE, created_at,now()) >= :Time_queue', {
                            replacements: { status: 0, status2: 1, Time_queue: time_queue2 },
                            type: QueryTypes.UPDATE
                        }).then(
                            function (clientUpdateId) {
                                console.log('clientUpdateId:' + clientUpdateId);
                            }
                        );
                    }
                    if (time_queue > 0) {
                        console.log('time update web status available : ' + time_queue);
                        sequelize.query('update web set `status` = :status where status = :status2 and TIMESTAMPDIFF(MINUTE, updated_at,now()) >= :Time_queue', {
                            replacements: { status: 'available', status2: 'used', Time_queue: time_queue },
                            type: QueryTypes.UPDATE
                        }).then(
                            function (clientUpdateId) {
                                console.log('clientUpdateId:' + clientUpdateId);
                            }
                        );
                    }
                    if (time_queue3 > 0) {
                        console.log('time update mobile status off-line : ' + time_queue3);
                        sequelize.query('update mobile set `status` = :status where TIMESTAMPDIFF(MINUTE, updated_at,now()) >= :Time_queue', {
                            replacements: { status: 'off-line', Time_queue: time_queue3 },
                            type: QueryTypes.UPDATE
                        }).then(
                            function (clientUpdateId) {
                                console.log('clientUpdateId:' + clientUpdateId);
                                console.log('Update Status off-line');
                            }
                        );
                    }
                } else {
                    console.log('Use Web Group');
                    if (time_queue3 > 0) {
                        console.log('time update mobile status off-line : ' + time_queue3);
                        sequelize.query('update mobile set `status` = :status where TIMESTAMPDIFF(MINUTE, updated_at,now()) >= :Time_queue', {
                            replacements: { status: 'off-line', Time_queue: time_queue3 },
                            type: QueryTypes.UPDATE
                        }).then(
                            function (clientUpdateId) {
                                console.log('clientUpdateId:' + clientUpdateId);
                                console.log('Update Status off-line');
                            }
                        );
                    }
                }
            }
        });

});

// set port & run server
app.listen(port, () => console.log(`app listening on port ${port}!`)); 