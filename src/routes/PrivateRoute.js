import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Login } from '../component/user/Login';
export const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem('userToken')

    return (
        <Route {...rest} render={(props) => (token)
            ? (
                <Component {...props} />
            ) : (
                <Login {...props} />
            )
        } />

    );
}
/* export const PrivateRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)
    const token = localStorage.getItem('userToken')
    console.log("Token Is" + token);
    console.log("rest Is" + JSON.stringify(rest));
    // console.log("props Is" + JSON.stringify(props));
    return (
        <Route {...rest} render={(props) => (token)
            ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )
        } />
    )
} */