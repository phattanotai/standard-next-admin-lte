module.exports = (sequelize, Sequelize) => {
  const Web = sequelize.define(
    'web',
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
      postURL: {
        type: Sequelize.STRING,
        field: 'url'
      },
      postAPI: {
        type: Sequelize.STRING,
        field: 'api'
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
      postUpdated: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      postWebid: {
        type: Sequelize.STRING,
        field: 'web_id'
      },
      postRef: {
        type: Sequelize.STRING,
        field: 'ref'
      },
      postUserAgent: {
        type: Sequelize.STRING,
        field: 'useragent'
      },
      postWeb_group: {
        type: Sequelize.STRING,
        field: 'web_group'
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return Web;
};