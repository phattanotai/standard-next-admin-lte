module.exports = (sequelize, Sequelize) => {
  const Bot_config = sequelize.define(
    'bot_config',
    {
      postId: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true
      },
      postTime_queue_available_same_mob: {
        type: Sequelize.INTEGER,
        field: 'time_queue_available_same_mob'
      },
      postTime_queue_available_other_mob: {
        type: Sequelize.INTEGER,
        field: 'time_queue_available_other_mob'
      },
      postApp_time_getqueue: {
        type: Sequelize.INTEGER,
        field: 'app_time_getqueue'
      },
      postApp_time_show_webview: {
        type: Sequelize.INTEGER,
        field: 'app_time_show_webview'
      },
      postTime_update_mobile_offline: {
        type: Sequelize.INTEGER,
        field: 'time_update_mobile_offline'
      },
      postApp_version: {
        type: Sequelize.INTEGER,
        field: 'app_version'
      },
      postUse_random_function: {
        type: Sequelize.INTEGER,
        field: 'use_random_function'
      },
      postUse_web_group: {
        type: Sequelize.INTEGER,
        field: 'use_web_group'
      },
      postApp_time_show_webview_min: {
        type: Sequelize.INTEGER,
        field: 'app_time_show_webview_min'
      },
      postUse_random_user_for_newgroup: {
        type: Sequelize.INTEGER,
        field: 'use_random_user_for_newgroup'
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return Bot_config;
};