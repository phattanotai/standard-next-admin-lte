module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define(
      'history',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },       
        postMsg: {
          type: Sequelize.STRING,
          field: 'message'
        },
        postUserFake: {
          type: Sequelize.STRING,
          field: 'userFake'
        },
        postStatus: {
          type: Sequelize.STRING,
          field: 'status'
        },
        postCreated: {
          type: Sequelize.DATE,
          field: 'created_at'
        },
        postWebid: {
          type: Sequelize.INTEGER,
          field: 'web_id'
        },
        postRef: {
          type: Sequelize.STRING,
          field: 'ref'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return History;
  };