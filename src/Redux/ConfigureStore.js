import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

export const history = createHistory();

// creates the store
export default (rootReducer, rootSaga) => {
  const enhancers = [];

  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(routerMiddleware(history));

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      diff: true,
      diffPredicate: true,
      collapsed: true,
      duration: true
    });

    middlewares.push(logger);
  }

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
