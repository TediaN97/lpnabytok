import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [fix, setFix] = useState(false)

    const setFixed = () => {
        if(window.scrollY > 0){
            setFix(true);
        }else{
            setFix(false);
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", setFixed);
        
        return () => {
          document.removeEventListener("scroll", setFixed);
        };
      }, []); 

    return (
        <nav className={`fixed flex z-20 top-0 justify-between w-full text-white ${fix ? ' bg-gray-600 font-inria trasition duration-500 shadow-2xl' : 'bg-transparent  trasition duration-500'}`}>
            <div className="ml-48">
                <Link to="carousel" spy={true} smooth={true} offset={0} duration={1000} >
                    <img className="w-52 cursor-pointer" src="/transparentLogo.png"/> 
                </Link>
            </div>
            <div className="mr-48 flex justify-center">
                <ul className="flex items-center gap-32">
                    <li className='cursor-pointer hover:animate-pulse'>
                        <Link className="group hover:text-white transition duration-300" to="carousel" spy={true} smooth={true} offset={0} duration={1000}>
                            DOMOV
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </Link>

                    </li>
                    <li className="font-bold cursor-pointer hover:animate-pulse">
                        <Link className="group hover:text-white transition duration-300" to="products" spy={true} smooth={true} offset={-100} duration={1000} >
                            PRODUKTY
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-white hover:animate-pulse'>
                        <Link className="group hover:text-white transition duration-300" to="about" spy={true} smooth={true} offset={-25} duration={1000}>
                            O NÁS
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-white hover:animate-pulse'>
                        <Link className="group hover:text-white transition duration-300" to="contact" spy={true} smooth={true} offset={55} duration={1000}>
                            KONTAKT
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;