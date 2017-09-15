import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import DevTools from 'molecules/DevTools';

const reducer = (state) => {
  return state;
};

const configureStore = (history, initialState) => {
  const enhancer = compose(
    applyMiddleware(
      routerMiddleware(history)
    ),
    DevTools.instrument()
  );

  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    enhancer
  );

  return store;
};

export default configureStore;