import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from './../component/product/ProductList'
//import { AddEditProduct } from './../component/product/AddEditProduct'
import { ProductDetails } from './../component/product/ProductDetails'
import { AddEditProduct } from './../component/product/AddEditProduct'

import { PageNotFound } from "./../component/product/PageNotFound";

export default function LoginRoutes() {
    return (
        <Switch>

            <Route exact path="/login" component={Login} />
        </Switch>


    )
} 