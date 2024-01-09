import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Main from './Main';

const Carousel = () => {

    const slides= [
        {
            src: '/intro1.webp'
        },
        {
            src: '/intro2.webp'
        },
        {
            src: '/intro3.webp'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const timer = setTimeout(nextSlide, 4000);
        return () => 
            clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="w-full h-[350px] sm:h-[95vh] bg-gray-800 font-inria rounded-b-lg" id="Domov" >
            <div style={{backgroundImage: `url(${slides[currentIndex].src})`}} className="bg-[length:100%_100%] w-full h-full bg-center opacity-40 duration-500 rounded-b-lg">
            </div>
            <Navbar />
            <div className="absolute flex items-center justify-between w-full top-[0%]">
                <div className="w-10 h-[350px] sm:h-[95vh] md:w-16 lg:w-24 flex lg:bg-gradient-to-r lg:from-black lg:to-white/0 lg:hover:to-white/10 justify-center items-center cursor-pointer outline-none">
                    <img className="w-16 h-16 lg:hover:animate-pulse" src="/chevron-compact-left.svg" alt="left-chevron" onClick={prevSlide} />
                </div>
                <Main />
                <div className="w-10 h-[350px] sm:h-[95vh] md:w-16 lg:w-24 flex lg:bg-gradient-to-r lg:from-white/0 lg:to-black lg:hover:bg-gradient-to-r lg:hover:from-white/10 lg:hover:to-black justify-center items-center right-0 cursor-pointer outline-none">
                    <img className="w-16 h-16 lg:hover:animate-pulse" src="/chevron-compact-right.svg" alt="right-chevron" onClick={nextSlide}/>
                </div>
            </div>
        </div>
        );
}

export default Carousel;