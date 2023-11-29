import React from 'react';
import { motion } from 'framer-motion';

const MotivationText = () => {

    return (
        <>
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
                className='text-5xl font-black text-center'
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
            <motion.p 
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
                className="text-center mt-20 text-gray-700"
            >
                 ​Vstúpte do sveta elegancie s naším nábytkom na mieru. Každý kus spája tradičnú eleganciu s 
                 <br/> 
                 moderným dizajnom. Kvalita a originalita za najlepšiu cenu. S <span className='font-bold'>3D vizualizáciou</span> Vám predstavíme 
                 <br/>
                 váš nový domov pred jeho vytvorením. 
                 <br />
                 <br />
                 <span className="font-bold">Zmeňte svoj domov s nami už dnes!</span>
            </motion.p>
        </>
    )
}

export default MotivationText;