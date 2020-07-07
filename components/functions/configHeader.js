const configHeader = (token = null) => {
  // const tokenData = token ? { token: token } : {};
  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  
  return config;
};

export { configHeader };
