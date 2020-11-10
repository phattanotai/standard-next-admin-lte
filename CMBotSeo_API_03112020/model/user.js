module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'user',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        postRole: {
          type: Sequelize.INTEGER,
          field: 'role'
        },
        postUsername: {
          type: Sequelize.STRING,
          field: 'username'
        },
        postPassword: {
          type: Sequelize.STRING,
          field: 'password'
        },
        postCreated_at: {
          type: Sequelize.DATE,
          field: 'created_at'
        },
        postUpdated_at: {
          type: Sequelize.DATE,
          field: 'updated_at'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return User;
  };