import React from 'react';
import Tile from './Tile';

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
        <div className='grid grid-cols-3 gap-10 mt-20 ml-32 mr-32'>
            {furniture.map((item, index) => 
                <Tile key={index} src={item.src} name={item.name} />
            )}
        </div>
    )
}
export default Grid;