import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const defaultState = {
  todos : []
};

const store = createStore(rootReducer,defaultState,applyMiddleware(thunk));

export default store;
