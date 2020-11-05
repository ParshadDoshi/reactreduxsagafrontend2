import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { addCart, fetchCart, removeCart } from '../../action/CartAction';
export default function CartDetailsRows({ cart, cartPrice, userId }) {
    //const userId = useSelector(state => state.UserReducer.id)
    let message
    const dispatch = useDispatch()
    //const cartItemsTotal = useSelector(state => state.CartReducer.cartItemsTotal)
    let eventCalled = false
    const onFailure = () => { }
    const onSuccess = (data) => {
        dispatch(fetchCart(userId))
        swal({
            title: " Cart  Updated! ",
            text: message,
            icon: "success",
            button: "OK",
        });
    }

    /* const handleChange = item => (event) => {
        alert("In FOrmik Handle change" + event.target.value + "ID" + item)
        dispatch(addCart(userId, item, event.target.value, onSuccess, onFailure))
    } */
    const handleChange = (quantity, productId) => {
        // alert("In handle change" + quantity + "ID" + productId)
        if (quantity == 0) {
            swal({
                title: " Cant Decrease quantity! ",
                text: "Please click on Remove in Cart",
                icon: "success",
                button: "OK",
            });
        }
        else {
            message = "item is added to cart"
            eventCalled = true
            dispatch(addCart(userId, productId, quantity, "update", onSuccess, onFailure))
        }
    }
    return (
        <React.Fragment>
            {cart.map(item =>
                <tr key={item.id}>
                    <td>
                        <input type="number" value={item.quantity}
                            onChange={(e) => {
                                if (!eventCalled)
                                    handleChange(e.target.value, item.id)

                            }} />

                    </td>
                    <td>{item.productName}</td>

                    <td>${item.total.toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger"
                            onClick={() => {
                                message = "item is removed from cart"
                                dispatch(removeCart(userId, item.id, onSuccess, onFailure))
                            }}>
                            Remove
</button>
                    </td>
                </tr>
            )}
            <tr>
                <th colSpan="3" className="text-right">Total:</th>
                <th colSpan="2">${cartPrice.toFixed(2)}</th>
            </tr>
        </React.Fragment>
    )
}