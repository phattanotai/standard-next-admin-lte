module.exports = (sequelize, Sequelize) => {
    const Mobile = sequelize.define(
      'mobile',
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
        postStatus: {
          type: Sequelize.STRING,
          field: 'status'
        },
        postCreated: {
          type: Sequelize.DATE,
          field: 'created_at'
        },
        postUpdated: {
          type: Sequelize.DATE,
          field: 'updated_at'
        },
        postDesc: {
          type: Sequelize.STRING,
          field: 'description'
        },
        postSaveplace: {
          type: Sequelize.STRING,
          field: 'save_place'
        },
        postUsed: {
            type: Sequelize.INTEGER,
            field: 'used'
          },
        postImei: {
            type: Sequelize.STRING,
            field: 'imei'
          },
        postMobileNumber: {
              type: Sequelize.STRING,
              field: 'mobile_number'
          }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return Mobile;
  };