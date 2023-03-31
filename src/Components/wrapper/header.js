import React, { useState } from "react";
//
import title from './../../images/logo898.png';
import etsy from './../../images/etsy.png';
import insta from './../../images/insta.png';
import nav from './../../images/nav.png';
import twitter from './../../images/twitter.png';
import Navbar from "./nav";
import { HashRouter, Route } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";

function Header (){

    const [open, setOpen] = useState(false);

    return(
        <header>

            <a href="/jonnys-prop-shop"><img src={ title } id="title" alt="JonnysPropShop" /></a>
            <button className="ico" onClick={() => setOpen(!open)}>
                <img src={nav} id="nav" alt="nav menu"/></button>
            <a href="https://www.instagram.com/jonnynumbercinco/" target="_blank" rel="noreferrer"><img src={insta} className="ico" alt="instagram"/></a>
            <a href="https://www.etsy.com/shop/JonnysToyShop" target="_blank" rel="noreferrer"><img src={etsy} className="ico" alt="etsy shop"/></a>
            <a href="https://twitter.com/Numberfive18c" target="_blank" rel="noreferrer"><img src={twitter} className="ico" alt="twitter"/></a>

            
                { open && <Navbar />}
                <HashRouter basename="/jonnys-prop-shop">
                    <Route exact path="/about" component={ <About /> } />
                    <Route exact path="/gallery" component={Home} />
                    <Route exact path="/blog" component={Home} />
                    <Route exact path="/dioramas" component={Home} />
                    <Route exact path="/shop" component={Home} />
                </HashRouter>

        </header>
    )
}

export default Header;