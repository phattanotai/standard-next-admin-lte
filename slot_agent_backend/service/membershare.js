import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listShare = () => {
  return axios.get(`${endpoint}/games_member_share`, configHeader());
};

const getShare = (id) => {
  return axios.get(`${endpoint}/games_member_share/${id}`, configHeader());
};

const getShareAgent = (agent_code) => {
  return axios.get(`${endpoint}/games_member_share_byagent/${agent_code}`, configHeader());
};

const createShare = (data) => {
  return axios.post(`${endpoint}/games_member_share`, data, configHeader());
};

const editShare = (data, id) => {
  return axios.put(`${endpoint}/games_member_share/${id}`, data, configHeader());
};

const deleteShare = (id) => {
  return axios.delete(`${endpoint}/games_member_share/${id}`, configHeader());
};

export default {
  listShare,
  getShare,
  getShareAgent,
  createShare,
  editShare,
  deleteShare, 
};
