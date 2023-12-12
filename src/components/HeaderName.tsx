import React from 'react';

interface props {
    gallery: string;
}

const HeaderName = (props: props) => {

    return (
        props.gallery === 'kuchyne' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-52 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Kuchyne
                </h1>
            </div>
        ) : props.gallery === 'vstavaneSkrine' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-64 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Vstavané skrine
                </h1>
            </div>
        ) : props.gallery === 'obyvacieSteny' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-64 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Obývacie steny
                </h1>
            </div>
        ) : props.gallery === 'ine' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-52 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Iné
                </h1>
            </div>
        ) : props.gallery === 'spalne' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-52 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Spálne
                </h1>
            </div>
        ) : props.gallery === 'kupelne' ? (
            <div>
                <a href='/'><img className="absolute h-12 w-10 left-10 text-xl p-1 md:text-2xl md:p-2 md:h-14 md:w-14 bg-red-600 lg:h-16 xl:left-48 lg:w-20 lg:text-3xl lg:p-2 lg:hover:bg-red-600/80 mt-10 text-white rounded-2xl" src="/chevron-compact-left.svg" alt="naspäť" /></a>
                <h1 className='h-12 w-40 text-xl md:text-2xl md:h-14 md:w-48 bg-red-600 lg:h-16 lg:w-52 lg:text-3xl font-bold mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Kúpelne
                </h1>
            </div>
        ) : (
            <div>

            </div>
        ) 
    )
}

export default HeaderName;