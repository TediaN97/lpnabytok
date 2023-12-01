import React from 'react';


interface props {
    src: string;
    name: string;
    folder: string;
}

const Tile = (props: props) => {



    return (
        <a href={`/galeria/${props.folder}`} style={{backgroundImage: `url(${props.src})`}} className='h-[450px] rounded-2xl bg-cover bg-center cursor-pointer transport-all duration-500 hover:scale-110 hover:transport-all hover:duration-500 group'>
            <div className='h-32 bg-black mt-[322px] rounded-2xl bg-opacity-50 items-center justify-center flex flex-col'>
                <p className='font-semibold text-2xl text-white text-center mb-3'>
                    {props.name}
                </p>
                <p className='opacity-0 group-hover:opacity-100 transport-all duration-500 hover:transport-all hover:duration-500 font-regular text-sm text-white text-center'>
                    {"<< Zobraziť viac >>"}
                </p>
            </div>
        </a>
    )
}

export default Tile;