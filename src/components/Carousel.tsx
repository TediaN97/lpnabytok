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
        setTimeout(nextSlide, 4000);
    }, [currentIndex]);

    return (
        <div className="max-w-[1920px] h-[860px] w-full relative bg-gradient-to-r from-gray-200 via-gray-800 to-black font-inria">
            <div style={{backgroundImage: `url(${slides[currentIndex].src})`}} className="w-full h-full bg-center bg-cover opacity-40 duration-500">
            </div>
            <Navbar />
            <div className="absolute top-[0%] h-[860px] w-24 flex bg-gradient-to-r from-gray-600 to-white/0 justify-center items-center cursor-pointer">
                <img className="w-16 h-16" src="/chevron-compact-left.svg" alt="left-chevron" onClick={prevSlide} />
            </div>
            <div className="absolute top-[0%] h-[860px] w-24 bg-gradient-to-r from-white/0 to-black  flex justify-center items-center right-0 cursor-pointer">
                <img className="w-16 h-16" src="/chevron-compact-right.svg" alt="right-chevron" onClick={nextSlide}/>
            </div>
            <Main />
        </div>
        );
}

export default Carousel;