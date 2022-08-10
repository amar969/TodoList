import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    
    return(
        <>
        <nav>
            <Link to="/Summary:tag"></Link>
            <Link to="/Home" >Home</Link>
        </nav>
        </>
    )
}