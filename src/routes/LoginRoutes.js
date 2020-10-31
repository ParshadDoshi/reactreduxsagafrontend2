import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from './../component/product/ProductList'
//import { AddEditProduct } from './../component/product/AddEditProduct'
import { ProductDetails } from './../component/product/ProductDetails'
import { AddEditProduct } from './../component/product/AddEditProduct'

import { PageNotFound } from "./../component/product/PageNotFound";
import { SignUp } from './../component/user/SignUp'
import { Login } from './../component/user/Login'
export default function LoginRoutes() {
    return (
        <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />

        </Switch>

    )
} 