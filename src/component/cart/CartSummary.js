import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
export default function CartSummary() {

    const cartItemsTotal = useSelector(state => state.CartReducer.cartItemsTotal)
    const cartPrice = useSelector(state => state.CartReducer.cartPrice)
    const userId = useSelector(state => state.UserReducer.id)
    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)
    console.log("USER ID IN CART SUMMARY IS" + userId)
    const getSummary = () => {
        if (cartItemsTotal > 0 && isLoggedIn) {
            return <span>
                {cartItemsTotal} item(s),
                ${cartPrice.toFixed(2)}
            </span>
        } else {
            return <span>Your cart: (empty) </span>
        }
    }
    const getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white
    ${(!isLoggedIn) ? "disabled" : ""}`;
    }

    return <div className="float-right">
        <small>
            {getSummary()}
            <Link className={getLinkClasses()} to={`/cart/${userId}`}>
                <i className="fa fa-shopping-cart"></i>
            </Link>
        </small>
    </div>
}
