import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from './../component/product/ProductList'
//import { AddEditProduct } from './../component/product/AddEditProduct'
import { ProductDetails } from './../component/product/ProductDetails'
import { AddEditProduct } from './../component/product/AddEditProduct'
import { PageNotFound } from "./../component/product/PageNotFound";
import { PrivateRoute } from './PrivateRoute'
import { Login } from './../component/user/Login'
import { AddCart } from './../component/cart/AddCart'
import CartDetails from '../component/cart/CartDetails';
import { SignUp } from './../component/user/SignUp'
export default function ProducRoutes() {
    return (
        <Switch>

            {/* <Route exact path="/products/create" component={AddEditProduct} /> */}
            {/* <Route exact path="/cart" component={CartDetails} /> */}
            <PrivateRoute exact path="/products/create" component={AddEditProduct} />

            <PrivateRoute exact path="/products/update/:id" component={AddEditProduct} />

            <PrivateRoute exact path="/cart/add/:id" component={AddCart} />
            <Route exact path="/cart/:id" component={CartDetails} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={SignUp} />
            <Redirect from="/" to="/products"></Redirect>
            <Route path="*" component={PageNotFound} />
        </Switch>

    )
} 