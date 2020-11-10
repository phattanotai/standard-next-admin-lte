import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listMoveCredit = () => {
  return axios.get(`${endpoint}/moveCredit`, configHeader());
};

const getMoveCreditFromId = (id) => {
  return axios.get(`${endpoint}/moveCredit/${id}`, configHeader());
};

const getMoveCreditFromAgentCode = (data,agent_code) => {
  return axios.post(`${endpoint}/moveCredit/agent/${agent_code}` , data , configHeader());
};

const createMoveCredit = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/moveCredit/`, data, configHeader());
};

const editMoveCredit = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/moveCredit/${id}`, data, configHeader());
};

const deleteMoveCredit = (id) => {
  return axios.delete(`${endpoint}/moveCredit/${id}`, configHeader());
};

export default {
  listMoveCredit,
  getMoveCreditFromId,
  getMoveCreditFromAgentCode,
  createMoveCredit,
  editMoveCredit,
  deleteMoveCredit
};
