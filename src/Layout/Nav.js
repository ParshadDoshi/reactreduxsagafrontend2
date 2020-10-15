import React,{useEffect} from "react";
import {Link} from 'react-router-dom'

export function Nav(){
    
    return(
        <div style = {{display:"flex",flexDirection:"column",borderRight:"2px solid red",height:"100%"}}>
            <div style = {{color:"greenyellow"}}> My Profile</div>
        
                <Link to="/login">Products</Link>
                <Link to="/signUp">Test</Link>
        
        </div>
    )
}