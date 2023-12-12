import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Main = () => {

    return (
        <div className="mt-10 sm:mt-0 block items-center justify-center text-center text-white">
            <motion.h2 
                variants={{
                    hidden: { opacity: 0, y: 75,},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5,
                    delay: 0.25
                }}
                className="text-sm tracking-[0.5px] sm:text-2xl sm:tracking-[3px] lg:text-2xl lg:tracking-[13px] font-regular"
            >
                KUCHYNE A VSTAVANÉ SKRINE
            </motion.h2>
            <motion.h1 
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.7,
                    delay: 1
                }}    
                className="text-3xl sm:text-6xl lg:mt-4 lg:text-8xl font-bold"
            >
                ŠITÉ NA MIERU
            </motion.h1 >
            <Link to="products" spy={true} smooth={true} offset={-100} duration={1000}>
                <motion.button  
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.7,
                    delay: 1.50
                }}
                className="w-32 h-10 mt-10 rounded-xl text-red hover:before:bg-redborder-red-600 relative sm:w-36 sm:h-12 lg:h-[50px] lg:w-40 overflow-hidden border-2 border-red-600 bg-red-600/40 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-700 hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full"
            >
                <span className="relative z-10 text-xs md:text-md lg:text-lg font-bold">
                    NAŠA TVORBA
                </span>
            </motion.button>
            </Link>
        </div>
    )
}

export default Main;