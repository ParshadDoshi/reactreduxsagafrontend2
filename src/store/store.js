import { createStore, applyMiddleware, compose } from "redux";
import {ProductReducer} from './../reducer/ProductReducer'

import createSagaMiddleware from 'redux-saga';

import ProductSaga from './../saga/ProductSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();


const store = createStore(ProductReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);


export default store;


