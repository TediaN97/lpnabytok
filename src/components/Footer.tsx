import React from 'react';

const Footer = () => {

    return (
        <div className='mt-10 rounded-t-lg lg:mt-16 bg-gray-600 lg:rounded-t-2xl' data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" >
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:justify-between border-b ml-10 mr-10 lg:ml-40 lg:mr-40' >
                <div className='mt-5 lg:mt-10 xl:mt-24'>
                    <img className="w-52" height="50" width="50" src="/transparent_logo.webp" alt="LPnábytok" />
                </div>
                <div className='text-white mt-5 lg:ml-52 text-md md:text-lg lg:mt-10 xl:mt-24 scroll-smooth'>
                    <ul>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            <a href="/#ONas">
                                O Nás
                            </a>
                        </li>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            <a href="/#Produkty">
                                Produkty
                            </a>
                        </li>
                        <li className='mb-3 cursor-pointer transport-all duration-500 hover:transport-all hover:duration-500 hover:text-red-600'>
                            <a href="/gdpr">
                                Ochrana osobných údajov
                            </a>
                        </li>
                    </ul>
                    <div className='flex justify-center lg:justify-start'>
                        <a href='https://www.facebook.com/lpnabytok'>
                            <img 
                                className='cursor-pointer hover:scale-110 transition-scale duration-500' height="50" width="50" src='/facebook_logo.webp' alt="facebook"/>
                        </a>
                        <a href='https://www.instagram.com/lpnabytok/'>
                            <img className='cursor-pointer hover:scale-110 transition-scale duration-500' height="50" width="50" src='/Instagram_logo.webp' alt="facebook" />
                        </a>
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
                        info@lpnabytok.sk <br />
                    </p>
                </div>
            </div>
            <div className='justify-center flex flex-col items-center text-center text-white mt-5 lg:mt-10'>
                <p className='text-sm font-bold'>
                    Všetky práva vyhradené. © 2024 lpnabytok.sk 
                </p>
                <p className='text-sm font-bold mb-5'>
                    Created by <a href='https://www.linkedin.com/in/mat%C3%BA%C5%A1-sabat-571002118/'>Matúš Sabat</a>.
                </p>
            </div>
        </div> 
    )
}

export default Footer;