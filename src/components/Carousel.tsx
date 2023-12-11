import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Main from './Main';

const Carousel = () => {

    const slides= [
        {
            src: '/kitchen2.png'
        },
        {
            src: '/kitchen3.png'
        },
        {
            src: '/kitchen4.png'
        },
        {
            src: '/kitchen5.png'
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
        <div className="w-full h-[550px] sm:h-[700px] lg:max-w-[1920px] lg:h-[860px] bg-gray-800 font-inria rounded-b-lg" id="carousel">
            <div style={{backgroundImage: `url(${slides[currentIndex].src})`}} className="w-full h-full bg-center bg-cover opacity-40 duration-500 rounded-b-lg">
            </div>
            <Navbar />
            <div className="absolute flex items-center justify-between w-full top-[0%]">
                <div className="w-10 h-[550px] sm:h-[700px] md:w-16 lg:w-24 lg:h-[860px] flex lg:bg-gradient-to-r lg:from-black lg:to-white/0 justify-center items-center cursor-pointer">
                    <img className="w-16 h-16" src="/chevron-compact-left.svg" alt="left-chevron" onClick={prevSlide} />
                </div>
                <Main />
                <div className="w-10 h-[550px] sm:h-[700px] md:w-16 lg:h-[860px] lg:w-24 flex lg:bg-gradient-to-r lg:from-white/0 lg:to-black justify-center items-center right-0 cursor-pointer">
                    <img className="w-16 h-16" src="/chevron-compact-right.svg" alt="right-chevron" onClick={nextSlide}/>
                </div>
            </div>
        </div>
        );
}

export default Carousel;