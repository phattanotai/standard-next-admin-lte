module.exports = (sequelize, Sequelize) => {
    const Userrole = sequelize.define(
      'userrole',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        postRole: {
          type: Sequelize.STRING,
          field: 'role'
        },
        postUsername: {
          type: Sequelize.STRING,
          field: 'username'
        },
        postM1: {
          type: Sequelize.INTEGER,
          field: 'm1'
        },
        postM2: {
            type: Sequelize.INTEGER,
            field: 'm2'
        },
        postM3: {
            type: Sequelize.INTEGER,
            field: 'm3'
        },
        postM4: {
            type: Sequelize.INTEGER,
            field: 'm4'
        },
        postM5: {
            type: Sequelize.INTEGER,
            field: 'm5'
        },
        postM6: {
            type: Sequelize.INTEGER,
            field: 'm6'
        },
        postM7: {
            type: Sequelize.INTEGER,
            field: 'm7'
        },
        postM8: {
            type: Sequelize.INTEGER,
            field: 'm8'
        },
        postM9: {
            type: Sequelize.INTEGER,
            field: 'm9'
        },
        postM10: {
            type: Sequelize.INTEGER,
            field: 'm10'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return Userrole;
  };