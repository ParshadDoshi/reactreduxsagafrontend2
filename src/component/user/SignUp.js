import React, { useEffect, useLayoutEffect } from 'react';
import { formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, editProduct, fetchProduct } from './../../action/ProductAction'
import { useHistory } from "react-router-dom";
import './signup.css'
import { registerUser } from './../../action/UserAction'
import * as Yup from "yup";

export const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory(0);

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email().required('Please Enter your Email'),
        password: Yup.string().required("Password is Required"),
        confirmpwd: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match")
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            password: ''

        },
        validationSchema: SignUpSchema,
        onSubmit: ({ name, email, password }) => {
            dispatch(registerUser({ name, email, password }))
            history.push("/products")
        }
    });
    return (

        <form onSubmit={formik.handleSubmit}  >
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
            </div>
            <br />

            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Enter E-mail"
                    />
                </div>
                {formik.errors.email && formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <br />
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
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
            <br />
            <div className="form-group row">
                <label htmlFor="confirmpwd" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input
                        id="confirmpwd"
                        name="confirmpwd"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmpwd}
                        placeholder="Enter Confirm Password"
                    />
                </div>
                {formik.errors.confirmpwd && formik.touched.confirmpwd ? (
                    <div>{formik.errors.confirmpwd}</div>
                ) : null}

            </div>

            <br />
            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Submit</button></div></div>

        </form>

    );
}

/*
 */