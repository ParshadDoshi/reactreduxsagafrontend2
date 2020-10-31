import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartDetailsRows from "./CartDetailsRows"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from "../../action/CartAction";

export default function CartDetails({ match }) {
    console.log("In CART DETAILS MATCH" + JSON.stringify(match))
    const dispatch = useDispatch()
    const userId = useSelector(state => state.UserReducer.id)
    const cartItemsTotal = useSelector(state => state.CartReducer.cartItemsTotal)
    console.log("USER ID IN CART DETAILS IS" + userId)
    useEffect(() => {
        dispatch(fetchCart(match.params.id))
    }, [cartItemsTotal])
    const cartItems = useSelector(state =>
        state.CartReducer.cartItems
    )
    const cartPrice = useSelector(state => state.CartReducer.cartPrice)

    const getLinkClasses = () => `btn btn-secondary m-1 ${cartItemsTotal === 0 ? "disabled" : ""}`;
    return <div className="m-3">
        {/* {console.log("cart", cart)} */}
        <h2 className="text-center">Your Cart</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Product</th>

                    <th className="text-right">Subtotal</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <CartDetailsRows cart={cartItems}
                    cartPrice={cartPrice} userId={match.params.id}
                />
            </tbody>
        </table>
        <div className="text-center">
            <Link className="btn btn-primary m-1" to="/products">
                Continue Shopping
            </Link>
            <Link className={getLinkClasses()} to="/payment">
                Checkout
            </Link>
        </div>
    </div>
}
