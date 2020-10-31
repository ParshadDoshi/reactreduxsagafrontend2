import React, { useEffect } from "react";

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import ProductRoutes from './../routes/ProductRoutes'
import LoginRoutes from './../routes/LoginRoutes'
import { Header } from './Header'
import { Nav } from './Nav'
import './layout.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function Layout() {

  return (
    <div>
      <Router>
        <header><Header /> </header>

        <div id="main">

          <nav><Nav /></nav>
          <article>

            <ProductRoutes />

          </article>

        </div>
        <footer>Footer</footer>
      </Router>
    </div>
  )
}