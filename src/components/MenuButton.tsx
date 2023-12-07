import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface props {
    name: string;
}

const MenuButton = (props: props) => {

    return (
        <motion.button className="text-2xl font-inter font-black cursor-pointer text-white"
            whileHover={{
                scale: 1.3,
                color: '#4f46e5',
                originX: 0
            }}
            transition={{
                type: "spring",
                stiffness: 300
            }}
        >
            {props.name}
        </motion.button>
    )
}

export default MenuButton;