import React, { useEffect, useLayoutEffect } from 'react';
import { formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, createProduct, editProduct } from './../../action/ProductAction'
import { useHistory } from "react-router-dom";
import './addeditproduct.css'

export const AddEditProduct = ({ match }) => {
    console.log("MATCH OBJECT ADDEDIT PRODUCT is" + JSON.stringify(match))
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    const history = useHistory();

    let product = useSelector(state => {
        return state.ProductReducer.product
    });
    if (match.path == "/products/create")
        product = {}

    useEffect(() => {
        dispatch(fetchProduct(match.params.id))

    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            imagename: null,
            name: product.name || '',
            price: product.price || ''
        },
        onSubmit: ({ name, price, imagename }) => {

            console.log("ID" + match.params.id + "IMAGE NAME" + imagename + "NAME" + name + "PRICE" + price)
            if (match.params.id === undefined) {
                dispatch(createProduct({ name, price, imagename }))

            } else {

                console.log("Product is " + JSON.stringify(product))
                dispatch(editProduct(match.params.id, name, price))

            }
            if (!loading)
                history.push("/products")
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <ul class="wrapper">
                <li class="form-row">
                    <label for="file">File upload</label>

                    <input id="imagename" name="imagename" type="file" onChange={(event) => {

                        formik.setFieldValue("imagename", event.currentTarget.files[0])
                    }} />

                </li>
                <li class="form-row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Enter Product Name"
                        />
                    </div></li>
                <li class="form-row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Product Price</label>
                    <div className="col-sm-10">
                        <input
                            id="price"
                            name="price"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            placeholder="Enter Product Price"
                        />
                    </div></li>
                <li class="form-row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Submit</button></div></li></ul>
        </form>
    );
};
