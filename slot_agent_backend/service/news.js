import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const https = require('https');
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

const listNews = (agent_code) => {
  return axios.get(`${endpoint}/newsForAgent/${agent_code}`, configHeader());
};

const getNewsFromId = (id) => {
  return axios.get(`${endpoint}/news/${id}`, configHeader());
};
 
const createNews = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/news`, data, configHeader());
};

const editNews = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/news/${id}`, data, configHeader());
};

const deleteNews = (id) => {
  return axios.delete(`${endpoint}/news/${id}`, configHeader());
};

export default {
  listNews,
  getNewsFromId,
  createNews,
  editNews,
  deleteNews,
};
