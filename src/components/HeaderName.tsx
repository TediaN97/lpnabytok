import React from 'react';

interface props {
    gallery: string;
}

const HeaderName = (props: props) => {

    return (
        props.gallery === 'kuchyne' ? (
                <h1 className='h-16 bg-red-600 w-52 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Kuchyne
                </h1>
            ) : props.gallery === 'vstavaneSkrine' ? (
                <h1 className='h-16 bg-red-600 w-64 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>

                    Vstavané skrine
                </h1>
            ) : props.gallery === 'obyvacieSteny' ? (
                <h1 className='h-16 bg-red-600 w-64 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Obývacie steny
                </h1>
            ) : props.gallery === 'prislusenstvo' ? (
                <h1 className='h-16 bg-red-600 w-52 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Príslušenstvo
                </h1>
            ) : props.gallery === 'spalne' ? (
                <h1 className='h-16 bg-red-600 w-52 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Spálne
                </h1>
            ) : props.gallery === 'kupelne' ? (
                <h1 className='h-16 bg-red-600 w-52 text-3xl font-regular mt-10 text-white rounded-2xl text-center items-center justify-center flex'>
                    Kúpelne
                </h1>
            ) : (
                <div>

                </div>
            ) 
    )
}

export default HeaderName;