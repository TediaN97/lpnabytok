import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

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
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/kitchen1.png)"
            }} 
            className="font-inter rounded-lg justify-center bg-center bg-cover bg-fixed mt-10 md:mt-20 lg:rounded-2xl lg:ml-12 lg:mr-12" id="about"    
        >
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:clip-custom'>
                    <div className='bg-gray-600 rounded-t-lg lg:rounded-tl-2xl lg:rounded-none text-white text-center flex flex-col items-center justify-center'>
                        <div className='items-center pt-10 pb-10 lg:h-96'>
                            <img className="h-10 m-auto mb-5" src='/hand-money-income-dollar-icon.svg' alt='cena'/>
                            <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>
                                CENA
                            </h2>
                            <br />
                            <p className='text-md sm:text-lg lg:text-xl w-72 '>
                                Bezkonkurenčne najlepšia na trhu.
                            </p>
                        </div>
                    </div>
                    <div className='bg-red-600 text-white items-center justify-center text-center flex flex-col'>
                        <div className='items-center pt-10 pb-10 lg:h-96'>
                            <img className="h-10 m-auto mb-5" src='/quality-badge-star-icon.svg' alt='kvalita'/>
                            <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>
                                KVALITA
                            </h2>
                            <br />
                            <p className='text-md sm:text-lg lg:text-xl w-72'>
                                Zaručujeme najvyššiu kvalitu dostupnú na trhu.
                            </p>
                        </div>
                    </div>
                    <div className='items-center justify-center text-center flex flex-col bg-white'>
                        <div className='items-center pt-10 pb-10 lg:h-96'>
                            <img className="h-10 m-auto mb-5" src='/eye-look-icon.svg' alt='vizualizácia'/>
                            <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>
                                VIZUALIZÁCIA
                            </h2>
                            <br />
                            <p className='text-md sm:text-lg lg:text-xl w-72'>
                                Naše vizualizácie sú vždy precízne a starostlivo vyhotovené.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='justify-center text-center items-center flex flex-col pt-16 pb-16'>
                    <h1 className='group text-white text-2xl sm:text-3xl lg:text-5xl font-bold'>
                        O NÁS
                        <span className="block w-10 mt-3 ml-5 sm:ml-7 sm:w-12 lg:mt-5 lg:w-24 transition-all duration-500 h-1 bg-red-600"></span>
                    </h1>
                    <br/>
                    <p className='mt-10 text-gray-100 text-lg w-full pl-3 pr-3 sm:w-3/4'>
                        LP nábytok je lukratívna firma s mnohými skúsenosťami v rámci poradenstva, vizualizácie, výroby a finalizáciou zákaziek. 
                        Realizuje najmä nábytok na mieru, vstavaných skríň a kuchynských liniek s dôrazom na kvalitu a detaily k plnej spokojnosti svojich odberateľov.
                        Pracujeme s najkvalitnejším kovaním a materiálmi špičkových značiek dnešnej doby. Našim cieľom je uspokojiť aj najnáročnejšieho zákazníka.
                    </p>
                </div>
        </motion.div>
    )
}

export default About;