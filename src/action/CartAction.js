export const ADD_CART = "ADD_CART"
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS"
export const FETCH_CART = "FETCH_CART"
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS"
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE"
export const REMOVE_CART = "REMOVE_CART"
export const REMOVE_CART_SUCCESS = "REMOVE_CART_SUCCESS"
export const addCart = (userId, productId, quantity, option, onSuccess, onFailure) => {
    console.log("addcart Cart action" + quantity)
    return {
        type: ADD_CART,

        userId,
        productId,
        quantity,
        option,
        onSuccess,
        onFailure
    };
}
export const fetchCart = userId => ({ type: FETCH_CART, userId })
export const fetchCartSuccess = data => ({ type: FETCH_CART_SUCCESS, data })
export const fetchCartFailure = () => ({ type: FETCH_CART_FAILURE })
export const addCartSuccess = data => ({ type: ADD_CART_SUCCESS, data })
export const removeCart = (userId, productId, onSuccess, onFailure) => {
    return {
        type: REMOVE_CART,
        userId,
        productId,
        onSuccess,
        onFailure
    }
}