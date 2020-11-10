const https = require('https');
//const fs = require('fs');
const configHeader = (token = null) => {
  // const tokenData = token ? { token: token } : {};  

  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    },
  };

  return config;
};

export { configHeader };
