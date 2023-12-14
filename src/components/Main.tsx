import React from 'react';

const Main = () => {

    return (
        <div className="mt-10 sm:mt-0 block items-center justify-center text-center text-white">
            <h2 
                className="text-md sm:text-2xl sm:tracking-[3px] md:tracking-[4px] lg:text-xl lg:tracking-[11px] lg:ml-3 font-regular"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration="600"
                data-aos-easing="ease-in-sine" 
            >
                KUCHYNE A VSTAVANÉ SKRINE
            </h2>
            <h1    
                className="text-3xl sm:text-6xl lg:mt-4 lg:text-7xl font-bold lg:tracking-[6px]"
                data-aos="fade-up"
                data-aos-delay={1200}
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"  
            >
                ŠITÉ NA MIERU
            </h1 >
            <a href="#products">
                <button  
                    className="w-32 h-10 mt-10 rounded-xl text-red hover:before:bg-redborder-red-600 relative sm:w-36 sm:h-12 lg:h-[50px] lg:w-40 overflow-hidden border-2 border-red-600 bg-red-600/40 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-700 hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full"
                    data-aos="fade-up"
                    data-aos-delay={1800}
                    data-aos-duration="600"
                    data-aos-easing="ease-in-sine"
                >
                    <span className="relative z-10 text-xs md:text-lg font-bold">
                        NAŠA TVORBA
                    </span>
                </button>
            </a>
        </div>
    )
}

export default Main;