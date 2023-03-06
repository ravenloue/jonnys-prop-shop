import React, { useState } from "react";
//
import title from './../../logo898.png';
import etsy from './../../etsy.png';
import insta from './../../insta.png';
import nav from './../../nav.png';
import twitter from './../../twitter.png';
import Navbar from "./nav";

function Header (){

    const [open, setOpen] = useState(false);

    return(
        <header>
            <img src={ title } id="title" alt="JonnysPropShop" />
            <button className="ico" onClick={() => setOpen(!open)}>
                <img src={nav} id="nav" alt="nav menu"/></button>
            <a href="https://www.instagram.com/jonnynumbercinco/" target="_blank"><img src={insta} className="ico" alt="instagram"/></a>
            <a href="https://www.etsy.com/shop/JonnysToyShop" target="_blank"><img src={etsy} className="ico" alt="etsy shop"/></a>
            <a href="https://twitter.com/Numberfive18c" target="_blank"><img src={twitter} className="ico" alt="twitter"/></a>

            { open && <Navbar />}
        </header>
    )
}

export default Header;