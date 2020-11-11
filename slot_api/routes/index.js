const express = require("express");
const route = express.Router();
const env = require("../env");
var mongoose = require("mongoose");
const {
  apilog,
  apiDebuglog,
  apiErrorlog,
  ReturnErr,
  ReturnSuccess,
  ReturnUnSuccess,
  ReturnCustom,
  sha256Encrypt,
  sha256Verify,
  getMonday,
} = require("../functions/utility.function");

const agent_bonus = require("./agent_bonus.route");
const agent_menu = require("./agent_menu.route");
const agent_user = require("./agent_user.route");
const agent = require("./agent.route");
const alert = require("./alert.route");
const brands = require("./brands.route");
const common = require("./common.route");
const game_list = require("./game_list.route");
const game_provider = require("./game_provider.route");
const games_bonus = require("./games_bonus.route");
const games_lucky = require("./games_lucky.route");
const games_share = require("./games_share.route");
const games = require("./games.route");
const member_bonus = require("./member_bonus.route");
const member_runno = require("./member_runno.route");
const member_share = require("./member_share.route");
const member = require("./member.route");
const menu = require("./menu.route");
const move_credit = require("./move_credit.route");
const news = require("./news.route");
const services = require("./services.route");
const transections = require("./transections.route");
const tureover = require("./turnover.route");
const user_level = require("./user_level.route");
const user = require("./user.route");
const wallets = require("./wallets.route");

// คำสั่งเชื่อม MongoDB
var mongo_uri = env.mongo_uri;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("[success] task 2 : connected to the database ");
    },
    (error) => {
      console.log("[failed] task 2 " + error);
      process.exit();
    }
  );

route.get("/", (req, res) => {
  apilog("Get welcome");
  res.status(200).send("!!! Welcome to slot API world. !!!");
});

module.exports = [
  route,
  agent_bonus,
  agent_menu,
  agent_user,
  agent,
  alert,
  brands,
  common,
  game_list,
  game_provider,
  games_bonus,
  games_lucky,
  games_share,
  games,
  member_bonus,
  member_runno,
  member_share,
  member,
  menu,
  move_credit,
  news,
  services,
  transections,
  tureover,
  user_level,
  user,
  wallets,
];
