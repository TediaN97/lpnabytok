import React, { useState, useEffect } from 'react';
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
  const [imgs, setImgs] = useState<Array<{ key: string, value: string }>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const getImg = (images: Array<{ key: string, value: string }>, imgIndex: number) => {
    const currentImage = images[imgIndex].key;
    setImgs(images);
    setCurrentImageIndex(imgIndex);
    setTempImgSrc(currentImage);
    setImage(true);
  }

  const close = () => {
    setImage(false);
  }

  const getNextImg = (imgIndex: number) => {
    if(imgIndex !== -1 && imgIndex !== imgs.length ) {
      const currentImage = imgs[imgIndex].key;
      setCurrentImageIndex(imgIndex);
      setTempImgSrc(currentImage);
    }
  }

  const nextImg = (nextIndex: number) => {
    if(nextIndex !== imgs.length ) {
      const currentImage = imgs[nextIndex].key;
      setCurrentImageIndex(nextIndex);
      setTempImgSrc(currentImage);
    }
  }

  const prevImg = (prevIndex: number) => {
    if(prevIndex !== -1 ) {
      const currentImage = imgs[prevIndex].key;
      setCurrentImageIndex(prevIndex);
      setTempImgSrc(currentImage);
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
          getNextImg(currentImageIndex -1 );
        } else if (event.key === 'ArrowRight') {
          getNextImg(currentImageIndex + 1);
        } else if (event.key === 'Escape') {
          close(); 
      }
  }

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

  }, [tempingSrc]);

  return (
    <>
      <div className={image ? "w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black visible opacity-100 scale(1) overflow-hidden z-30" : "w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black invisible opacity-0 scale(0) overflow-hidden z-999"}>
        <img className='w-auto max-w-full h-auto max-h-full block leading-1 box-border pl-[20px] pr-[20px] m-auto' src={tempingSrc} alt="" />
        <img className={`fixed w-16 h-16 p-4 bg-black/40 z-50 hover:bg-white/10 cursor-pointer rounded-2xl left-5 ${currentImageIndex === 0 ? "hidden" : "flex" } `} src="/chevron-compact-left.svg" alt="left-chevron" onClick={() => prevImg( currentImageIndex - 1)} />
        <img className={`fixed w-16 h-16 p-4 bg-black/40 z-50 hover:bg-white/10 cursor-pointer rounded-2xl right-5 ${currentImageIndex === imgs.length - 1 ? "hidden" : "flex" } `} src="/chevron-compact-right.svg" alt="right-chevron" onClick={() => nextImg( currentImageIndex + 1)}/>
        <img className='fixed top-6 right-5 p-4 bg-black/40 z-50 cursor-pointer hover:bg-white/10 rounded-2xl' src='../../public/close.svg' alt='close' onClick={close} /> 
      </div>
      <div className='relative p-5 md:p-10 ml-32 mr-32'>
          <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
              {props.gallery === 'kuchyne' ? (
                kitchenImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`kuchyňa-${index}`} onClick={() => getImg(kitchenImages, index)} />
                ))
              ) : props.gallery === 'vstavaneSkrine' ? (
                wardrobesImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`vstavaná_skriňa-${index}`} onClick={() => getImg(wardrobesImages, index)}/>
                ))
              ) : props.gallery === 'obyvacieSteny' ? (
                livingWallsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`obývacia_stena-${index}`} onClick={() => getImg(livingWallsImages, index)}/>
                ))
              ) : props.gallery === 'spalne' ? (
                bedroomsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`spálňa-${index}`} onClick={() => getImg(bedroomsImages, index)}/>
                ))
              ) : props.gallery === 'kupelne' ? (
                bathroomsImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`kúpeľňa-${index}`} onClick={() => getImg(bathroomsImages, index)}/>
                ))
              ) : props.gallery === 'prislusenstvo' ? (
                accessoriesImages.map(({ key, value }, index) => (
                  <img className='rounded-2xl cursor-pointer hover:opacity-70' key={index} src={key} alt={`príslušenstvo-${index}`} onClick={() => getImg(accessoriesImages, index)}/>
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