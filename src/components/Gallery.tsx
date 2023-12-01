import React, { useState } from 'react';
import { kitchenImages } from '../utils/ImportAll';
import { bedroomsImages } from '../utils/ImportAll';
import { bathroomsImages } from '../utils/ImportAll';
import { accessoriesImages } from '../utils/ImportAll';
import { wardrobesImages } from '../utils/ImportAll';
import { livingWallsImages } from '../utils/ImportAll';

interface props {
  gallery: string
}

const Gallery = (props: props) => {

  const [image, setImage] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setImage(true);
  }

  const close = () => {
    setImage(false);
  }

  return (
    <>
      <div className={image ? "w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black visible opacity-100 scale(1) overflow-hidden z-30" : "w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black invisible opacity-0 scale(0) overflow-hidden z-999"}>
        <img className='w-auto max-w-full h-auto max-h-full block leading-1 box-border pl-[20px] pr-[20px] m-auto' src={tempingSrc} />
        <img className='fixed top-6 right-2 p-4 bg-black/40 z-50 cursor-pointer hover:bg-white/10 rounded-2xl' src='../../public/close.svg' alt='close' onClick={close} /> 
      </div>
      <div className='relative p-5 md:p-10 ml-32 mr-32'>
          <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
              {props.gallery === 'kuchyne' ? (
                kitchenImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)} />
                ))
              ) : props.gallery === 'vstavaneSkrine' ? (
                wardrobesImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)}/>
                ))
              ) : props.gallery === 'obyvacieSteny' ? (
                livingWallsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)}/>
                ))
              ) : props.gallery === 'spalne' ? (
                bedroomsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)}/>
                ))
              ) : props.gallery === 'kupelne' ? (
                bathroomsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)}/>
                ))
              ) : props.gallery === 'prislusenstvo' ? (
                accessoriesImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`image-${index}`} onClick={() => getImg(key)}/>
                ))
              ) : ( 
                <div>
                </div>
              )
            }
          </div>
      </div>
    </>
  );
};

export default Gallery;