module.exports = (sequelize, Sequelize) => {
    const User_agent = sequelize.define(
      'user_agent',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },       
        postUserAgent: {
            type: Sequelize.STRING,
            field: 'useragent'
          },
        postCreated: {
          type: Sequelize.DATE,
          field: 'created_at'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return User_agent;
  };