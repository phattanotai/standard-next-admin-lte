import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const https = require('https');
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

const listBonus = (agent_code) => {
  return axios.get(`${endpoint}/agent_bonusForAgent/${agent_code}`, configHeader());
};

const getBonusFromId = (id) => {
  return axios.get(`${endpoint}/agent_bonus/${id}`, configHeader());
};
 
const createBonus = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/agent_bonus`, data, configHeader());
};

const editBonus = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/agent_bonus/${id}`, data, configHeader());
};

const deleteBonus = (id) => {
  return axios.delete(`${endpoint}/agent_bonus/${id}`, configHeader());
};

export default {
  listBonus,
  getBonusFromId,
  createBonus,
  editBonus,
  deleteBonus,
};
