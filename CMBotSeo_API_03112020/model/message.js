module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define(
      'message',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        postMessage: {
          type: Sequelize.STRING,
          field: 'message'
        },      
        postCreated: {
          type: Sequelize.DATE,
          field: 'created_at'
        },
        postUpdated: {
          type: Sequelize.DATE,
          field: 'updated_at'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return Message;
  };