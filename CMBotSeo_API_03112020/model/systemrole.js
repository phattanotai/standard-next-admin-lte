module.exports = (sequelize, Sequelize) => {
    const Systemrole = sequelize.define(
      'user_role',
      {
        Id: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        Role: {
          type: Sequelize.STRING,
          field: 'role'
        },
        Name: {
          type: Sequelize.STRING,
          field: 'name'
        }        
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return Systemrole;
  };



