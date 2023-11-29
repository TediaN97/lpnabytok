import React from 'react';
import ContactForm from './ContactForm.tsx';
import Footer from './Footer.tsx';
import { motion } from 'framer-motion';

const Contact = () => {

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
            <div className="h-[300px] font-inter mt-20 ml-96 mr-20 flex items-center justify-between" id="contact">
                <p className='text-3xl font-bold'>
                    OZVITE SA NÁM
                    <span className="block ml-10 mt-5 w-36 transition-all duration-500 h-1 bg-red-600"></span>
                </p>
                <ContactForm />
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact;