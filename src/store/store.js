import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { ProductReducer } from './../reducer/ProductReducer'
import { UserReducer } from './../reducer/UserReducer'
import createSagaMiddleware from 'redux-saga';
import CartReducer from './../reducer/CartReducer'
import ProductSaga from './../saga/ProductSaga'
import UserSaga from './../saga/UserSaga'
import CartSaga from "../saga/CartSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    UserReducer,
    ProductReducer,
    CartReducer

})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);
sagaMiddleware.run(UserSaga)
sagaMiddleware.run(CartSaga)

export default store;
