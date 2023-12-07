import React from 'react';


interface props {
    src: string;
    name: string;
    folder: string;
}

const Tile = (props: props) => {



    return (
        <a href={`/galeria/${props.folder}`} style={{backgroundImage: `url(${props.src})`}} className='h-[300px]  rounded-2xl bg-cover bg-center cursor-pointer transport-all duration-500 hover:scale-110 hover:transport-all hover:duration-500 group lg:h-[450px]'>
            <div className='h-20 mt-[220px] bg-black lg:mt-[322px] lg:h-32 rounded-2xl bg-opacity-50 items-center justify-center flex flex-col'>
                <p className='font-semibold text-2xl text-white text-center mb-3'>
                    {props.name}
                </p>
                <p className='lg:opacity-0 group-hover:opacity-100 transport-all duration-500 hover:transport-all hover:duration-500 font-regular text-sm text-white text-center'>
                    {"<< Zobraziť viac >>"}
                </p>
            </div>
        </a>
    )
}

export default Tile;