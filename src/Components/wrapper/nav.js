import React from "react";
//import { Link } from "react-router-dom";

const Navbar = () => {

        return(
            
            <nav className="navbar">
                <ul>
                    <li><a href={"/about"}>About</a></li>
                    <li><a href="gallery">Gallery</a></li>
                    <li><a href="blog">Blog</a></li>
                    <li><a href="dioramas">Dioramas</a></li>
                    <li><a href="shop">Shop</a></li>
                </ul>
            </nav>
        )

}

export default Navbar;