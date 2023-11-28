import React from 'react';

const About = () => {

    return (
        <div style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/kitchen1.png)"}}className="h-[920px] font-inter justify-center mt-20 ml-32 mr-32 bg-center bg-cover bg-fixed rounded-2xl" id="about">
            <div className='grid grid-cols-3 h-[550px]'>
                <div className='bg-gray-700 rounded-tl-2xl text-white text-center flex flex-col items-center justify-center'>
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
                    border-l-[550px] border-l-gray-700
                    border-b-[48px] border-b-transparent">
                </div>
                <div className="h-28  
                    border-l-[550px] border-l-red-600
                    border-b-[48px] border-b-transparent">
                </div>
                <div className="h-16  
                    border-l-[550px] border-l-white
                    border-b-[48px] border-b-transparent">
                </div>
            </div>
            <div className='justify-center text-center'>
                <h1 className='text-white text-3xl font-bold'>
                    O NÁS
                </h1>
                <br/>
                <p className='text-white text-xl mt-10 ml-52 mr-52'>
                    LP nábytok je lukratívna firma s mnohými skúsenosťami v rámci poradenstva, vizualizácie, výroby a finalizáciou zákaziek. 
                    Realizuje najmä nábytok na mieru, vstavaných skríň a kuchynských liniek s dôrazom na kvalitu a detaily k plnej spokojnosti svojich odberateľov.
                    Pracujeme s najkvalitnejším kovaním a materiálmi špičkových značiek dnešnej doby. Našim cieľom je uspokojiť aj najnáročnejšieho zákazníka.
                </p>
            </div>
        </div>
    )
}

export default About;