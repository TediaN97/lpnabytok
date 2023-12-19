import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm.tsx';
import Footer from './Footer.tsx';

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
        <div>
            {state ? (
                <div className={`top-[${window.scrollY}px] w-full bg-green-100 border border-green-500 text-green-700 px-4 py-3 text-center rounded absolute z-50 transition-opacity duration-500 ${state ? "opacity-100" : "opacity-0 duration-500" }`} data-aos="fade-down" role="alert">
                    <strong className="font-bold">Úšpešne!</strong>
                <span className="block sm:inline"> Správa bola úšpešne odoslaná.</span>
            </div>
            ) : (<div></div>)}
            <div className="mt-10 xl:h-[150px] xl:mb-52" id="Kontakt" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" >
                <div className='w-full flex flex-col items-center justify-center text-center xl:flex-row xl:absolute xl:justify-evenly'>
                    <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold xl:mb-24'>
                        OZVITE SA NÁM
                        <span className="block w-36 ml-5 mt-3 sm:w-44 lg:w-72 lg:ml-7 lg:mt-5 h-1 bg-red-600"></span>
                    </h1>
                    <ContactForm isStateSuccess={handleState} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;