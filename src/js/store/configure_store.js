import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {searchReducer} from '../reducers/search'

export const configureStore = (initialState = {}) => {
  const store = createStore(
    searchReducer,
    initialState,
    applyMiddleware(logger)
  )

  if(module.hot) {
    //enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/search', () => {
      store.replaceReducer(searchReducer);
    })
  }

  return store;
}
