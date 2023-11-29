import React from 'react';

const Footer = () => {

    return (
        <div className='mt-16 bg-gray-600 h-[400px] rounded-t-2xl'>
            <div className='flex justify-between border-b ml-40 mr-40'>
                <div className='pt-24 flex '>
                    <img className="h-24" src="/transparentLogo.png" alt="logo" />
                </div>
                <div className='text-white pt-24 ml-52 text-lg'>
                    <ul>
                        <li className='mb-3'>
                            O Nás
                        </li>
                        <li className='mb-3 '>
                            Produkty
                        </li>
                        <li className='mb-3'>
                            Ochrana osobných údajov
                        </li>
                    </ul>
                    <div className='flex'>
                        <img className='h-14' src='/facebook_logo.png' alt="facebook" />
                        <img className='h-14' src='/Instagram_logo.png' alt="facebook" />
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