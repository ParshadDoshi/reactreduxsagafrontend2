import React, { useEffect } from 'react';
import { formik, useFormik } from 'formik';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { loginUser, loginUserFailure, loginUserSuccess } from './../../action/UserAction'
import { useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
import { fetchCart } from '../../action/CartAction';
import './login.css'
import * as Yup from "yup";

const formStyle = {
    background: " #333",
    marginLeft: "auto", marginRight: "10px",

    width: "500px",
    'font-size': "20px"
};

export const Login = (props) => {
    const { addToast } = useToasts()
    const dispatch = useDispatch()
    const location = props.location.pathname
    const userId = useSelector(state => state.UserReducer.id)
    const token = useSelector(state => state.UserReducer.token)

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required('Please Enter your Email'),
        password: Yup.string().required("Password is Required"),
    });
    const onSuccess = () => {
        if (token)
            dispatch(fetchCart(userId))
        if (location === "/login")
            history.push("/products")
        else
            history.push(location)
    }
    /*
    That is actually all. useEffect() is called once component is
     mounted and than on every state update. If you want to use it
      as componentWillUnmout you have to return a cleanup function like 
      below */
    useEffect(() => {

        return () => {

            //  dispatch(fetchCart(userId))
        }
    });

    const history = useHistory(0)
    const onFailure = (data) => {
        addToast(data.message, { appearance: data.success, autoDismiss: true, autoDismissTimeOut: 5000 })
    }
    //console.log("LOCATION " + JSON.stringify(props.location.pathname))

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            email: '',
            password: ''

        },
        validationSchema: LoginSchema,

        onSubmit: ({ email, password }) => {
            console.log("SUBMIT IS CALLED")
            dispatch(loginUser({ email, password }, onSuccess, onFailure))

        }
    });
    return (
        <div style={formStyle}>
            <form onSubmit={formik.handleSubmit}  >

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Enter E-mail"
                        />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="Enter Password"
                        />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Submit</button></div></div>
            </form>
        </div>
    );
}

/*
<div className="form-group row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
        <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter User Name"
        />
    </div>
</div> */