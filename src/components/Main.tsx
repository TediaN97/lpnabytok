import React from 'react';

const Main = () => {

    return (
        <div>
            <div className="block items-center justify-center text-center text-white mb-10">
                <h2 
                    className="text-md md:tracking-[5px] lg:text-xl lg:tracking-[11px] lg:ml-3 font-regular"
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-duration="600"
                    data-aos-easing="ease-in-sine" 
                >
                    KUCHYNE A VSTAVANÉ SKRINE
                </h2>
                <h1    
                    className="text-3xl tracking-wide md:text-5xl lg:mt-4 lg:text-7xl font-bold lg:tracking-[6px]"
                    data-aos="fade-up"
                    data-aos-delay={1200}
                    data-aos-duration="600"
                    data-aos-easing="ease-in-sine"  
                >
                    ŠITÉ NA MIERU
                </h1 >
            </div>
            <div className='hidden lg:block items-center justify-center text-center absolute bottom-10 right-1/2'>
                <img className='h-10 animate-bounce' src="/scroll.webp" alt="skrollovať" />
            </div>
        </div>

    )
}

export default Main;