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
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/kitchen1.png)"}}className="h-[920px] font-inter justify-center mt-10 ml-32 mr-32 bg-center bg-cover bg-fixed rounded-2xl" id="about">
                <div className='grid grid-cols-3 h-[550px]'>
                    <div className='bg-gray-600 rounded-tl-2xl text-white text-center flex flex-col items-center justify-center'>
                        <div className='items-center mt-20'>
                            <img className="h-10 m-auto mb-5" src='/hand-money-income-dollar-icon.svg' alt='price'/>
                            <p className='font-bold text-3xl'>
                                CENA
                            </p>
                            <br />
                            <p className='text-xl w-72'>
                                Bezkonkurenčne najlepšia na trhu.
                            </p>
                        </div>
                    </div>
                    <div className='bg-red-600 text-white items-center justify-center text-center flex flex-col'>
                        <div className='items-center mt-20'>
                            <img className="h-10 m-auto mb-5" src='/quality-badge-star-icon.svg' alt='quality'/>
                            <p className='font-bold text-3xl'>
                                KVALITA
                            </p>
                            <br />
                            <p className='text-xl w-72'>
                                Zaručujeme najvyššiu kvalitu dostupnú na trhu.
                            </p>
                        </div>
                    </div>
                    <div className='items-center justify-center text-center flex flex-col bg-white'>
                        <div className='items-center mt-20'>
                            <img className="h-10 m-auto mb-5" src='/eye-look-icon.svg' alt='vizualization'/>
                            <p className='font-bold text-3xl'>
                                VIZUALIZÁCIA
                            </p>
                            <br />
                            <p className='text-xl w-72'>
                                Naše vizualizácie sú vždy precízne a starostlivo vyhotovené.
                            </p>
                        </div>
                    </div>
                    <div className="h-40  
                        border-l-[493px] border-l-gray-600
                        border-b-[48px] border-b-transparent">
                    </div>
                    <div className="h-28  
                        border-l-[493px] border-l-red-600
                        border-b-[48px] border-b-transparent">
                    </div>
                    <div className="h-16  
                        border-l-[495px] border-l-white
                        border-b-[48px] border-b-transparent">
                    </div>
                </div>
                <div className='justify-center text-center items-center flex flex-col'>
                    <h1 className='group text-white text-3xl font-bold'>
                        O NÁS
                        <span className="block ml-4 mt-5 w-16 transition-all duration-500 h-1 bg-red-600"></span>
                    </h1>
                    <br/>
                    <p className='text-white text-xl mt-10 ml-52 mr-52'>
                        LP nábytok je lukratívna firma s mnohými skúsenosťami v rámci poradenstva, vizualizácie, výroby a finalizáciou zákaziek. 
                        Realizuje najmä nábytok na mieru, vstavaných skríň a kuchynských liniek s dôrazom na kvalitu a detaily k plnej spokojnosti svojich odberateľov.
                        Pracujeme s najkvalitnejším kovaním a materiálmi špičkových značiek dnešnej doby. Našim cieľom je uspokojiť aj najnáročnejšieho zákazníka.
                    </p>
                </div>
        </motion.div>
    )
}

export default About;