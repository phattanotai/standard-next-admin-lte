module.exports = (sequelize, Sequelize) => {
    const Web_queue = sequelize.define(
      'web_queue',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },       
        postMobile_Id: {
            type: Sequelize.INTEGER,
            field: 'mobile_id'
          },
        postCreated: {
          type: Sequelize.DATE,
          field: 'created_at'
        },
        postWebid: {
          type: Sequelize.INTEGER,
          field: 'web_id'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return Web_queue;
  };