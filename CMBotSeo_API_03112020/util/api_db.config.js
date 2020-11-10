const Sequelize = require('sequelize');
const env = require('./seoenv');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.web = require('../model/web.js')(sequelize, Sequelize);
db.mobile = require('../model/mobile.js')(sequelize, Sequelize);
db.message = require('../model/message.js')(sequelize, Sequelize);
db.userfake = require('../model/userfake.js')(sequelize, Sequelize);
db.history = require('../model/history.js')(sequelize, Sequelize);
db.web_queue = require('../model/web_queue.js')(sequelize, Sequelize);
db.bot_config = require('../model/bot_config')(sequelize, Sequelize);
db.useragent = require('../model/user_agent')(sequelize, Sequelize);
db.user = require('../model/user')(sequelize, Sequelize);
db.systemrole = require('../model/systemrole')(sequelize, Sequelize);

module.exports = db;