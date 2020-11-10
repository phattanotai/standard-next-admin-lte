import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const https = require('https');
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

const listGamesBonus = (agent_code) => {
  return axios.get(`${endpoint}/games_bonusForAgent/${agent_code}`, configHeader());
};

const getGamesBonusFromId = (id) => {
  return axios.get(`${endpoint}/games_bonus/${id}`, configHeader());
};
 
const createGamesBonus = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/games_bonus`, data, configHeader());
};

const editGamesBonus = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/games_bonus/${id}`, data, configHeader());
};

const deleteGamesBonus = (id) => {
  return axios.delete(`${endpoint}/games_bonus/${id}`, configHeader());
};

export default {
  listGamesBonus,
  getGamesBonusFromId,
  createGamesBonus,
  editGamesBonus,
  deleteGamesBonus,
};
