import { ADD_CART, ADD_CART_SUCCESS, FETCH_CART, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from './../action/CartAction'
const initState = {
    cartItems: [],
    cartItemsTotal: 0,
    cartPrice: 0
}
export default function CartReducer(state = initState, action) {
    console.log("IN CART REducer:" + JSON.stringify(action))
    switch (action.type) {
        case ADD_CART:
        case FETCH_CART:
            return {
                ...state
            }
        case ADD_CART_SUCCESS:
            return { ...state }
        /*  const p = action.payload.product;
         const q = action.payload.quantity;
         let existing = state.cart.find(item => item.product.id === p.id);
         if (existing) {
             existing.quantity += q;
         } else {
             state.cart = [...state.cart, action.payload];
         }
         state.cartItems += q;
         state.cartPrice += action.payload.product.price * q;
         console.log("State After Cart add is" + JSON.stringify(state))
         return {
             ...state,
             cartItems: state.cartItems.concat(product.name),
 
             cartPrice: state.cartPrice + product.price
         } */
        //return state
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.data.cartItems,
                cartItemsTotal: action.data.cartItemsTotal,
                cartPrice: action.data.cartPrice
            }
        case FETCH_CART_FAILURE:
            return {
                ...state,
                cartItems: [],
                cartItemsTotal: 0,
                cartPrice: 0
            }
        default:

            return state;
    }
}