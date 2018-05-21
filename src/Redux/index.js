import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import configureStore from './ConfigureStore';
import rootSaga from '../Sagas/';

import { reducer as snackbarReducer } from './Snackbar';
import { reducer as uploadsReducer } from './Uploads';
import { reducer as invoiceReducer } from './Invoice';

export default () => {
  const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    snackbar: snackbarReducer,
    router: routerReducer,
    uploads: uploadsReducer,
    invoice: invoiceReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
