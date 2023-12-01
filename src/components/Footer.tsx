import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Gallery from './Gallery';

const Footer = () => {

    return (
        <div className='mt-16 bg-gray-600 h-[400px] rounded-t-2xl'>
            <div className='flex justify-between border-b ml-40 mr-40'>
                <div className='pt-24 flex '>
                    <img className="h-24" src="/transparentLogo.png" alt="logo" />
                </div>
                <div className='text-white pt-24 ml-52 text-lg'>
                    <ul>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            <Link to="about" spy={true} smooth={true} offset={-25} duration={1000}>
                                O Nás
                            </Link>
                        </li>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            <Link to="products" spy={true} smooth={true} offset={-100} duration={1000}>
                                Produkty
                            </Link>
                        </li>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            Ochrana osobných údajov
                        </li>
                    </ul>
                    <div className='flex'>
                        <motion.img 
                            className='h-14 cursor-pointer' src='/facebook_logo.png' alt="facebook" 
                            whileHover={{
                                scale: 1.1,
                            }}
                        />
                        <motion.img className='h-14 cursor-pointer' src='/Instagram_logo.png' alt="facebook" 
                            whileHover={{
                                scale: 1.1,
                            }}
                        />
                    </div>     
                </div>
                <div className='text-white pt-24 ml-52 text-lg mb-10'>
                    <p>
                        Pradiareň 745/12 <br />
                        06001, Kežmarok <br />
                        Slovensko <br />
                        <br />
                        +421 910 443 393 <br />
                        lpnabytok@gmail.com <br />
                        lp@lpnabytok.sk <br />
                    </p>
                </div>
            </div>
            <div className='justify-center flex flex-col items-center text-center text-white mt-[20px]'>
                <p className='text-sm font-bold'>
                Všetky práva vyhradené. © 2023 lpnabytok.sk 
                </p>
                <p className='text-sm font-bold'>
                Created by Matúš Sabat.
                </p>
            </div>
        </div> 
    )
}

export default Footer;