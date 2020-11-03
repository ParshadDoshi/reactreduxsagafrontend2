import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_CART, FETCH_CART, fetchCartSuccess, fetchCartFailure } from './../action/CartAction'
import api from './CartApi'
function* getCart(action) {
    console.log("USER ID IS getcart saga" + action.userId)
    try {
        let userId = action.userId
        const data = yield call(api.cart, userId);
        console.log("CART DATA IN SAGA IS" + JSON.stringify(data))
        let { cartItems, cartPrice } = data
        let cartItemsTotal = cartItems.map(item => item.quantity).reduce((acc, next) => acc + next);
        console.log("CartItems" + JSON.stringify(cartItems))
        console.log("cartItemsTotal" + cartItemsTotal)
        console.log("cart Price" + cartPrice)
        yield put(fetchCartSuccess({ cartItems, cartItemsTotal, cartPrice }));

    } catch (error) {
        console.log("Products Fetch Error")
        yield put(fetchCartFailure());
        console.error(error) // eslint-disable-line

    }
}
function* addCart(action) {
    console.log("Action AddCart is" + JSON.stringify(action))
    //const { onSuccess, onFailure } = action
    try {

        const { userId, quantity, productId, option } = action;
        //const productId = action.id
        console.log("API ADD CART" + userId + "PId" + productId + "QTY" + quantity)
        const { data } = yield call(api.addcart, userId, productId, quantity, option);

        //const  {data}= yield call(api.products);
        console.log("add Cart saga" + JSON.stringify(data))
        //yield put(createProductSuccess(data));
        action.onSuccess(data)

    } catch (err) {
        //yield put(createProductFailure());
        action.onFailure(err)
        console.log(err);
    }
}
export default function* CartSaga() {

    yield takeLatest(FETCH_CART, getCart);

    yield takeLatest(ADD_CART, addCart);

}