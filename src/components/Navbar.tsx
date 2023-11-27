import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {

    return (
        <nav className="absolute flex top-8 justify-between w-full">
            <div className="ml-48">
                <img className="w-52" src="/transparentLogo.png"/>
            </div>
            <div className="mr-48 text-white flex justify-center">
                <ul className="flex items-center gap-32">
                    <li >
                        <Link to="carousel" spy={true} smooth={true} offset={50} duration={500} >
                            DOMOV</Link>
                    </li>
                    <li className="font-bold">
                        <Link to="products" spy={true} smooth={true} offset={50} duration={500} >PRODUKTY</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>O NÁS</Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>KONTAKT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;