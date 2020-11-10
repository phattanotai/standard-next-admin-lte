const express = require('express');
const route = express.Router();

const agent_menu = require('./agent_menu.route');
const agent_user = require('./agent_user.route');
const agent = require('./agent.route');
const alert = require('./alert.route');
const brands = require('./brands.route');
const common = require('./common.route');
const credit = require('./credit.route');
const game_list = require('./game_list.route');
const games = require('./games.route');
const member_runno = require('./member_runno.route');
const member = require('./member.route');
const menu = require('./menu.route');
const services = require('./services.route');
const transections = require('./transections.route');
const tureover = require('./turnover.route');
const user_level = require('./user_level.route');
const user = require('./user.route');
const wallets = require('./wallets.route');

route.get("/", (req, res) => {
    apilog('Get welcome');
    res.status(200).send("!!! Welcome to slot API world. !!!");
});

module.exports = [
    route,
    agent_menu, 
    agent_user, 
    agent, 
    alert,
    brands,
    common,
    credit,
    game_list,
    games,
    member_runno,
    member,
    menu,
    services,
    transections,
    tureover,
    user_level,
    user,
    wallets,
];