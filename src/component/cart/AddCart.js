import React, { useEffect, useLayoutEffect } from 'react';
import { formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from "react-router-dom";
import { addCart, addCartSuccess, fetchCart } from '../../action/CartAction';

export const AddCart = ({ match }) => {
    const userId = useSelector(state => state.UserReducer.id)
    const onSuccess = (data) => {
        alert("Item is added")
        dispatch(addCartSuccess(data))
        console.log("USER ID AFTER ADD SUCCESS IS" + match.params.id)

        history.push("/products")
    }
    const onFailure = () => { }
    //console.log("MATCH OBJECT ADDEDIT PRODUCT is" + JSON.stringify(match))

    console.log("ADD CART Product ID" + match.params.id + "User Id" + userId)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addCart(userId, match.params.id, 1, onSuccess, onFailure))

    }, [])

    const history = useHistory();
    // history.push("/products")

    return (
        null)
}