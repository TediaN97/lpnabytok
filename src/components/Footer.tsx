import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {

    return (
        <div className='mt-10 rounded-t-lg lg:mt-16 bg-gray-600 lg:rounded-t-2xl'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:justify-between border-b ml-10 mr-10 lg:ml-40 lg:mr-40'>
                <div className='mt-5 lg:mt-10 xl:mt-24'>
                    <img className="h-20" src="/transparent_logo.png" alt="LPnábytok" />
                </div>
                <div className='text-white mt-5 lg:ml-52 text-md md:text-lg lg:mt-10 xl:mt-24'>
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
                    <div className='flex justify-center lg:justify-start'>
                        <motion.img 
                            className='h-12 md:h-14 cursor-pointer' src='/facebook_logo.png' alt="facebook" 
                            whileHover={{
                                scale: 1.1,
                            }}
                        />
                        <motion.img className='h-12 md:h-14 cursor-pointer' src='/Instagram_logo.png' alt="facebook" 
                            whileHover={{
                                scale: 1.1,
                            }}
                        />
                    </div>     
                </div>
                <div className='mt-5 text-white text-md lg:ml-52 md:text-lg mb-5 lg:mb-10 lg:mt-10 xl:mt-24'>
                    <p>
                        Rampová 3 <br />
                        04001, Košice <br />
                        Slovensko <br />
                        <br />
                        +421 910 443 393 <br />
                        lpnabytok@gmail.com <br />
                        lp@lpnabytok.sk <br />
                    </p>
                </div>
            </div>
            <div className='justify-center flex flex-col items-center text-center text-white mt-5 lg:mt-10'>
                <p className='text-sm font-bold'>
                    Všetky práva vyhradené. © 2023 lpnabytok.sk 
                </p>
                <p className='text-sm font-bold mb-5'>
                    Created by Matúš Sabat.
                </p>
            </div>
        </div> 
    )
}

export default Footer;