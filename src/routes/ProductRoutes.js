import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from './../component/product/ProductList'
//import { AddEditProduct } from './../component/product/AddEditProduct'
import { ProductDetails } from './../component/product/ProductDetails'
import { AddEditProduct } from './../component/product/AddEditProduct'

import { PageNotFound } from "./../component/product/PageNotFound";

export default function ProducRoutes() {
    return (
        <Switch>

            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/create" component={AddEditProduct} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/products/update/:id" component={AddEditProduct} />
            <Route path="*" component={PageNotFound} />
        </Switch>


    )
} 