import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const https = require('https');
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

const listMemberBonus = (agent_code) => {
  return axios.get(`${endpoint}/member_bonusForAgent/${agent_code}`, configHeader());
};

const getMemberBonusFromId = (id) => {
  return axios.get(`${endpoint}/member_bonus/${id}`, configHeader());
};
 
const createMemberBonus = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/member_bonus`, data, configHeader());
};

const editMemberBonus = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/member_bonus/${id}`, data, configHeader());
};

const deleteMemberBonus = (id) => {
  return axios.delete(`${endpoint}/member_bonus/${id}`, configHeader());
};

export default {
  listMemberBonus,
  getMemberBonusFromId,
  createMemberBonus,
  editMemberBonus,
  deleteMemberBonus,
};
