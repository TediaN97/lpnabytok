import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import  MenuButton from './MenuButton'


const Navbar = () => {

    const [fix, setFix] = useState(false)
    const [ isOpened, setIsOpened ] = useState(false);

    const menuButtonsName = [
        "DOMOV", "PRODUKTY", "O NÁS", "KONTAKT"
    ]

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
        <nav className={`fixed z-20 top-0 w-full text-white ${fix ? ' bg-gray-600 font-inria trasition duration-500 shadow-2xl' : 'bg-transparent  trasition duration-500'}`}>
            <div className='hidden lg:flex lg:justify-between'>
                <div className="ml-20 xl:ml-48">
                    <Link to="carousel" spy={true} smooth={true} offset={0} duration={1000} >
                        <img className="w-52 cursor-pointer" src="/transparentLogo.png"/> 
                    </Link>
                </div>
                <div className="mr-20 xl:mr-48 flex">
                    <ul className="flex items-center lg:gap-10 xl:gap-32">
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
            </div>
            <div className='flex justify-between items-center lg:hidden w-full'>
                <div className={`z-20 ${fix ? "mt-0" : "mt-8"} transition-mt duration-500 ml-10 md:ml-20 cursor-pointer`}>
                    <Link to="carousel" spy={true} smooth={true} offset={0} duration={1000} >
                        <img className="w-40 md:w-52 cursor-pointer" src="/transparentLogo.png"/> 
                    </Link>
                </div>
                <button onClick={() => setIsOpened(!isOpened)} className={`z-20 fixed ${fix ? "mt-0" : "mt-8"} transition-mt duration-500 right-10 md:right-20 p-3 w-11 h-11 rounded-md`}>
                    <div className={`bg-white h-0.5 rounded-md w-full transition-all ${ isOpened ? "rotate-45 translate-y-0.5" : "" }`}>
                    </div>
                    <div className={`bg-white h-0.5 rounded-md w-3/4 my-1 ${ isOpened ? "hidden" : ""}`}>
                    </div>
                    <div className={`bg-white h-0.5 rounded-md w-full transition-all ${ isOpened ? "-rotate-45" : "" }`}>
                    </div>
                </button>
                <motion.div className={`z-10 fixed top-0 right-0 bottom-0 bg-gray-600 flex flex-col ${ isOpened ? "w-full" : "w-0"}`}
                    animate={
                        isOpened ? "open" : "closed"
                    }
                    variants={{
                        open: {
                            opacity: 1, 
                            width: "100%",
                            transition:{
                                duration: 0.7,
                                ease: [0.83, 0, 0.17, 1]
                            }
                        },
                        closed: {
                            opacity: 0, 
                            width: "0px",
                            transition:{
                                delay: 1.5,
                                duration: 0.7,
                                ease: [0.83, 0, 0.17, 1]
                            }
                        }
                    }}  
                >
                    <div className={`flex-1 flex items-center justify-center flex-col gap-10 p-8`}>
                        {menuButtonsName.map((name: string, index: number) => (
                           <motion.div className='opacity-0' key={index}
                            animate={
                                    isOpened ? "open" : "closed"
                                }
                                variants={{
                                    open: {
                                        x: 0,
                                        opacity: 1, 
                                        transition:{
                                            delay: 0.5,
                                            duration: 0.7 + index * 0.5,
                                            ease: [0.83, 0, 0.17, 1],
                                        }
                                    },
                                    closed: {
                                        x: 100,
                                        opacity: 0, 
                                        transition:{
                                            duration: 0.7 + index * 0.5,
                                            ease: [0.83, 0, 0.17, 1],
                                        }
                                    }
                                }}
                            >  
                                <MenuButton name={name} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar;