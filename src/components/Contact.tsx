import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm.tsx';
import Footer from './Footer.tsx';
import { motion } from 'framer-motion';

const Contact = () => {

    const [ state, setState ] = useState(false);

    const handleState = (newState: boolean) => {
        setState(newState);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [state]);


    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
        >
            <div className={`top-24 bg-green-100 border border-green-500 text-green-700 px-4 py-3 text-center rounded relative z-50 transition-opacity duration-500 ${state ? "opacity-100" : "opacity-0 duration-500" }`} role="alert">
                <strong className="font-bold">Úšpešne!</strong>
                <span className="block sm:inline"> Správa bola úšpešne odoslaná.</span>
            </div>
            <div className="h-[300px] font-inter mt-20 ml-96 mr-20 flex items-center justify-between" id="contact">
                <p className='text-3xl font-bold'>
                    OZVITE SA NÁM
                    <span className="block ml-10 mt-5 w-36 transition-all duration-500 h-1 bg-red-600"></span>
                </p>
                <ContactForm isStateSuccess={handleState} />
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact;