import React from "react";
import { Link } from 'react-router-dom'

export function Header() {

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ color: "blue" }}> My WebStore</div>
            <div style={{ marginLeft: "auto", marginRight: "10px" }}>
                <Link to="/login">Login</Link>
                <Link to="/signUp" style={{ margin: "10px" }}>SignUp</Link>
            </div>
        </div>
    )
}
