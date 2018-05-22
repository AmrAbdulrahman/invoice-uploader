import apisauce from 'apisauce';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { store } from 'App';
import { envConfig } from 'Services/Env';
import SnackbarActions from '../Redux/Snackbar';

const { apiBaseUrl } = envConfig;

const API = apisauce.create({
  headers: { Accept: 'application/json' },
  timeout: 30000, // ms
  baseURL: apiBaseUrl,
});

// globally dispatch LoadingBar
API.addRequestTransform(request => {
  store.dispatch(showLoading());
});

API.addResponseTransform(response => {
  store.dispatch(hideLoading());

  // show global error
  if (!response.ok) {
    store.dispatch(SnackbarActions.open('Something went wrong!', 'error'));
  }
});

export default class Api {
  static file = {
    upload: data => API.post('/file', data),
    remove: id => API.delete(`/file/${id}`),
  };

  static invoice = {
    submit: data => API.post('/invoice', data),
  };
};
