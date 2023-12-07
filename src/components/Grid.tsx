import React from 'react';
import Tile from './Tile';
import { motion } from 'framer-motion';

const Grid = () => {

    const furniture= [
        {
            src: '/kuchynaFotka.jpg',
            name: 'Kuchyne',
            folder: 'kuchyne'
        },
        {
            src: '/vstavana.jpg',
            name: 'Vstavané skrine',
            folder: 'vstavaneSkrine'
        },
        {
            src: '/obyvacka2.jpg',
            name: 'Obývacie steny',
            folder: 'obyvacieSteny'
        },
        {
            src: '/spalna.jpg',
            name: 'Spálne',
            folder: 'spalne'
        },
        {
            src: '/kupelna.jpg',
            name: 'Kúpelne',
            folder: 'kupelne'
        },
        {
            src: '/LPnabytok.jpg',
            name: 'Príslušenstvo',
            folder: 'prislusenstvo'
        },
    ];

    return (
        <motion.div 
            className='grid grid-cols-1 gap-5 mt-10 md:mt-20 ml-10 mr-10 md:gap-10 md:ml-32 md:mr-32 sm:grid-cols-2 xl:grid-cols-3'
            variants={{
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5,
                delay: 2.25
            }}
        >
            {furniture.map((item, index) => 
                <Tile key={index} src={item.src} name={item.name} folder={item.folder}/>
            )}
        </motion.div>
    )
}
export default Grid;