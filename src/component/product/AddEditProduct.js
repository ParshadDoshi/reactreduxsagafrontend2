import React, { useEffect, useLayoutEffect } from 'react';
import { formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, editProduct, fetchProduct } from './../../action/ProductAction'
import { useHistory } from "react-router-dom";


export const AddEditProduct = ({ match }) => {
    console.log("MATCH OBJECT is" + JSON.stringify(match))

    const dispatch = useDispatch();
    const history = useHistory();
    let product = useSelector(state => {
        return state.product
    });

    const success = useSelector(state => state.success)
    const loading = useSelector(state => state.loading)

    useEffect(() => {

        if (match.path === "/products/create") {

            history.replace("/products/create")
        }
        if (match.path === "/products/update/:id") {
            history.replace(`/products/update/${match.params.id}`)

        }
        dispatch(fetchProduct(match.params.id))





    }, [])
    function generateInitialValues() {
        if (match.path === "/products/create")
            return {
                imagename: null,
                name: '',
                price: ''
            }
        if (match.path === "/products/update/:id")
            return {
                imagename: null,
                name: product.name,
                price: product.price
            }
    }

    // console.log("PRODUCT REUTRNED IS"+ JSON.stringify(product))

    // console.log("produtcts" + JSON.stringify(products) + match.params._id + typeof match.params._id)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: generateInitialValues(),
        onSubmit: ({ name, price, imagename }) => {

            console.log("ID" + match.params.id + "IMAGE NAME" + imagename)
            if (match.params.id === undefined)
                dispatch(createProduct({ name: name, price: price, imagename: imagename }))
            else {
                if (name !== '')
                    product = { name: name }
                if (price !== '')
                    product = { ...product, price: price }
                console.log("Product is " + JSON.stringify(product))
                dispatch(editProduct(match.params.id, product))

            }
            if (!loading)
                history.push("/products")
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
                <label for="file">File upload</label>

                <input id="imagename" name="imagename" type="file" onChange={(event) => {


                    formik.setFieldValue("imagename", event.currentTarget.files[0])
                }} />
            </div>

            <div className="form-group row">
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
                </div></div>
            <div className="form-group row">
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
                </div></div>
            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Submit</button></div></div>
        </form>
    );
};
/* export const AddEditProduct = ({match}) => {
    console.log("MATCH OBJECT is"+ JSON.stringify(match))

    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => {
        return state.product
    });
    const loading = useSelector(state=>state.loading)
    useEffect(() => {
       dispatch( fetchProduct(match.params._id))

    },[])


    console.log("PRODUCT REUTRNED IS"+ JSON.stringify(product))
    function setName(){
        if(product.name)
         return product.name
         else
         return ''
    }
   // console.log("produtcts" + JSON.stringify(products) + match.params._id + typeof match.params._id)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            name: product?.name || '',
            price:  product?.price ||'',
        },
        onSubmit: values => {
          console.log("On submit"+ match.params._id)

           if(match.params._id === undefined)
            dispatch(addProduct({name:values.name,price:values.price}))
            else
            {

            let data = {name:values.name,price:values.price}
            dispatch(updateProduct(match.params._id,data))

            }
            if(!loading)
            history.push("/products")
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>

            <div className="form-group row">
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
            </div></div>
            <div className="form-group row">
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
            </div></div>
            <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
            <button type="submit"  className="btn btn-primary">Submit</button></div></div>
        </form>
    );
};
 */