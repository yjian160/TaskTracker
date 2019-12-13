import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/RootReducer.jsx';

export default createStore(rootReducer, applyMiddleware(thunk));