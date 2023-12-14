import React from 'react';
import { motion } from 'framer-motion';

interface props {
    name: string;
    id: string;
    onClick: (value: boolean) => void;
}

const MenuButton = (props: props) => {

    return (
        <a href={`#${props.id}`} className="group hover:text-white transition duration-300" >
            <motion.button className="text-2xl font-inter font-black cursor-pointer text-white"
                whileHover={{
                    scale: 1.3,
                    color: '#dd2627',
                    originX: 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300
                }}

                onClick={() => props.onClick(false)}
            >
                {props.name}
            </motion.button>
        </a>
    )
}

export default MenuButton;