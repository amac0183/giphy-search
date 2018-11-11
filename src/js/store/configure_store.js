import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {searchReducer} from '../reducers/search'
import {root} from '../sagas/';

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    searchReducer,
    initialState,
    applyMiddleware(logger, sagaMiddleware)
  )

  sagaMiddleware.run(root);

  if(module.hot) {
    //enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/search', () => {
      store.replaceReducer(searchReducer);
    })
  }

  return store;
}
