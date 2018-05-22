const env = process.env.NODE_ENV;

const envConfig = ({
  test: {
    apiBaseUrl: 'http://localhost:8000',
  },
  development: {
    apiBaseUrl: 'http://localhost:8000',
  },
  production: {
    apiBaseUrl: 'https://invoiceuploaderapi.herokuapp.com/',
  },
})[env];

export { envConfig };
