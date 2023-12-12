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
        <nav className={`relative flex z-20 top-0 justify-between w-full text-black bg-transparent trasition duration-500`}>
            <div className="ml-10 xl:ml-48">
                <a href="/">
                    <img className="h-14 md:h-16 lg:h-20 cursor-pointer" src="/transparentLogo.png"/> 
                </a>
            </div>
        </nav>
    )
}

export default Navbar;