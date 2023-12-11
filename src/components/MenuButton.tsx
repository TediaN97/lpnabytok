import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface props {
    name: string;
    id: string;
    onClick: (value: boolean) => void;
}

const MenuButton = (props: props) => {

    return (
        <Link className="group hover:text-white transition duration-300" to={props.id} spy={true} smooth={true} offset={-100} duration={1000} >
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

                onClick={() => props.onClick(false)}
            >
                {props.name}
            </motion.button>
        </Link>
    )
}

export default MenuButton;