const env = process.env.NODE_ENV;

const envConfig = ({
  test: {
  },
  development: {
  },
  production: {
  },
})[env];

export { envConfig };
