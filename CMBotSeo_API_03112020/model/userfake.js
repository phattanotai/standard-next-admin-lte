module.exports = (sequelize, Sequelize) => {
    const UserFake = sequelize.define(
      'userfake',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        postName: {
          type: Sequelize.STRING,
          field: 'name'
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
    return UserFake;
  };