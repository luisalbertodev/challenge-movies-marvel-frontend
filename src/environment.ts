const dev = {
  BASE_URL: 'http://localhost:3009'
};

const prod = {
  BASE_URL: 'http://localhost:3009'
};

const config = {
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === 'dev' ? dev : prod)
};

export default config;
