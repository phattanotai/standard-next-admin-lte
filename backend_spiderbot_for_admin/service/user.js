import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const login = (data) => {
  console.log('endpoint : ' + endpoint)
  return axios.post(`${endpoint}/web/login`, data, configHeader());
};

const listUser = () => {
  return axios.get(`${endpoint}/web/users`, configHeader());
};

const getUserFromId = (id) => {
  return axios.get(`${endpoint}/web/users/${id}`, configHeader());
};

const listSystemRole = () => {
  return axios.get(`${endpoint}/web/role`, configHeader());
};

const getSystemRole = (id) => {
  console.log("uid : " + id);
  return axios.get(`${endpoint}/web/role/${id}`, configHeader());
};

const getUserrole = (id) => {
  console.log("uid : " + id);
  return axios.get(`${endpoint}/web/usersrole/${id}`, configHeader());
};

const listUserrole = () => {
  return axios.get(`${endpoint}/web/usersrole`, configHeader());
};

const createUser = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/web/users/create`, data, configHeader());
};

const editUser = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/web/users/${id}`, data, configHeader());
};

const deleteUser = (id) => {
  return axios.delete(`${endpoint}/web/users/${id}`, configHeader());
};

export default {
  login,
  listUser,
  getUserrole,
  listUserrole,
  createUser,
  editUser,
  deleteUser,
  getSystemRole,
  listSystemRole,
  getUserFromId
};
