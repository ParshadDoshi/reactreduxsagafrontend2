import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {

    return (<div>

        <p style={{ textAlign: "center" }}>
            <Link to="/products">Go to Home </Link>
        </p>
    </div>
    )
}