import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const dashboard = (data,agent_code) => {
  return axios.post(`${endpoint}/dashboard/agent/${agent_code}`, data, configHeader());
};

export default {
  dashboard,
};
