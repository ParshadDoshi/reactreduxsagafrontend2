import React, { useEffect, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { addCart, addCartSuccess, fetchCart } from '../../action/CartAction';

export const AddCart = ({ match }) => {
    const userId = useSelector(state => state.UserReducer.id)
    const history = useHistory();
    const onSuccess = (data) => {

        dispatch(addCartSuccess(data))

        swal({
            title: "Added to Cart!",
            text: "Item is added succesfully!",
            icon: "success",
            button: "OK",
        });
        dispatch(fetchCart(userId))
        history.push("/products")
    }
    const onFailure = () => { }
    //console.log("MATCH OBJECT ADDEDIT PRODUCT is" + JSON.stringify(match))

    console.log("ADD CART Product ID" + match.params.id + "User Id" + userId)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addCart(userId, match.params.id, 1, "add", onSuccess, onFailure))

    }, [])

    return (
        null)
}