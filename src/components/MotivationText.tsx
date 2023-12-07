import React from 'react';
import { motion } from 'framer-motion';

const MotivationText = () => {

    return (
        <div className='flex flex-col items-center text-center justify-center'>
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5,
                    delay: 0.25
                }}
                className='text-2xl font-black text-center sm:text-3xl lg:text-5xl'
            >
                <h1>
                    Kuchynské linky
                </h1>
                <h1 className='text-red-600'>
                    Vstavané skrine
                </h1>
                <h1>
                    Obývacie steny a iné.
                </h1>
            </motion.div>
            <motion.div className='text-gray-700 mt-10 pl-3 pr-3 w-full sm:w-3/4 lg:w-1/2'
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5,
                    delay: 1.25
                }}
            >
                <p>
                    ​Vstúpte do sveta elegancie s naším nábytkom na mieru. Každý kus spája tradičnú eleganciu s 
                    moderným dizajnom. Kvalita a originalita za najlepšiu cenu. S <span className='font-bold'>3D vizualizáciou</span> Vám predstavíme 
                    váš nový domov pred jeho vytvorením.
                    <br />
                    <br /> 
                    <span className="font-bold">Zmeňte svoj domov s nami už dnes!</span>
                </p>
            </motion.div>
        </div>
    )
}

export default MotivationText;