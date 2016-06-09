import redux, { createStore, applyMiddleware } from 'redux';
import { photoReducer } from './reducers';
import thunk from 'redux-thunk'

var store = createStore(photoReducer, applyMiddleware(thunk));

export default store;
