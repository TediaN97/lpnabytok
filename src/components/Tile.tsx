import React from 'react';

interface props {
    src: string;
    name: string;
}

const Tile = (props: props) => {

    return (
        <div style={{backgroundImage: `url(${props.src})`}} className='h-[450px] rounded-2xl bg-cover bg-center bg-blend-overlay'>
            <div className='h-32 bg-black mt-[322px] rounded-2xl bg-opacity-50 items-center justify-center flex'>
                <p className='font-semibold text-2xl text-white text-center'>
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Tile;