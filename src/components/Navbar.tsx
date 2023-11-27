import React, {useState, useEffect} from 'react';

const Navbar = () => {

    return (
        <nav className="absolute flex top-8 justify-between w-full">
            <div className="ml-48">
                <img className="w-52" src="/transparentLogo.png"/>
            </div>
            <div className="mr-48 text-white flex justify-center">
                <ul className="flex items-center gap-32">
                    <li >
                        <a href="#" >DOMOV</a>
                    </li>
                    <li className="font-bold">
                        <a href="#">PRODUKTY</a>
                    </li>
                    <li>
                        <a href="#">O NÁS</a>
                    </li>
                    <li>
                        <a href="#">KONTAKT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;