import React from 'react';
import Tile from './Tile';
import { motion } from 'framer-motion';

const Grid = () => {

    const furniture= [
        {
            src: '/kuchynaFotka.jpg',
            name: 'Kuchyne'
        },
        {
            src: '/vstavana.jpg',
            name: 'Vstavané skrine'
        },
        {
            src: '/obyvacka2.jpg',
            name: 'Obývacie steny'
        },
        {
            src: '/spalna.jpg',
            name: 'Spálne'
        },
        {
            src: '/kupelna.jpg',
            name: 'Kúpelne'
        },
        {
            src: '/LPnabytok.jpg',
            name: 'Príslušenstvo'
        },
    ];

    return (
        <motion.div 
            className='grid grid-cols-3 gap-10 mt-20 ml-32 mr-32'
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
                <Tile key={index} src={item.src} name={item.name} />
            )}
        </motion.div>
    )
}
export default Grid;