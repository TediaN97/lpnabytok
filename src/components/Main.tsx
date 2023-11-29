import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Main = () => {

    return (
        <div className="absolute top-[40%] left-[35%] text-white">
            <motion.p 
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
                className="text-2xl tracking-[13px] font-regular"
            >
                KUCHYNE A VSTAVANÉ SKRINE
            </motion.p>
            <motion.p 
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
                className="mt-4 text-8xl font-bold"
            >
                ŠITÉ NA MIERU
            </motion.p >
            <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>
                <motion.button  
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.7,
                    delay: 2
                }}
                className="mt-10 ml-48 rounded-xl text-red hover:before:bg-redborder-red-600 relative h-[50px] w-40 overflow-hidden border-2 border-red-600 bg-red-600/40 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-700 hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full"
            >
                <span className="relative z-10 font-bold">
                    VIAC INFO
                </span>
            </motion.button>
            </Link>
        </div>
    )
}

export default Main;