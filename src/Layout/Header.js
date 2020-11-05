import React, { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from './../action/UserAction'
import CartSummary from "../component/cart/CartSummary";

export function Header() {
    const userId = useSelector(state => state.UserReducer.id)
    const history = useHistory()

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)
    const token = useSelector(state => state.UserReducer.token)

    const logoutUser = () => {

        dispatch(logout())
        history.push("/products")
    }

    useEffect(() => {
    }, [isLoggedIn])

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ color: "blue" }}> My WebStore</div>
                <div style={{ marginLeft: "auto", marginRight: "10px" }}>
                    {(!token) ? (<Link to="/login">Login</Link>) : (<button onClick={logoutUser}>Logout</button>)}
                    <Link to="/signup" style={{ margin: "10px" }}>SignUp</Link>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginLeft: "auto", marginRight: "10px" }}>
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}
