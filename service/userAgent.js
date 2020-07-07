import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listUserAgent = () => {
  return axios.get(`${endpoint}/web/useragent`, configHeader());
};

const getUserAgent = (id) => {
  return axios.get(`${endpoint}/web/useragent/${id}`, configHeader());
};

const createUserAgent = (data) => {
  return axios.post(`${endpoint}/web/useragent/create`, data, configHeader());
};

const editUserAgent = (data, id) => {
  return axios.put(`${endpoint}/web/useragent/${id}`, data, configHeader());
};

const deleteUserAgent = (id) => {
  return axios.delete(`${endpoint}/web/useragent/${id}`, configHeader());
};

export default {
  listUserAgent,
  createUserAgent,
  editUserAgent,
  deleteUserAgent,
  getUserAgent
};
