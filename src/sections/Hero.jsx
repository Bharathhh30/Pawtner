import React, { useState } from 'react';
import dog1 from '../assets/images/dog1.jpg';
import DogCard from '../components/DogCard';
import { dogs } from '../constants/index';
import dog2 from '../assets/images/dog2.jpg';
import dog77 from '../assets/images/dog77.png';
import cat1 from '../assets/images/cat1.png';


function Hero() {
    const [dogImg, setDogImg] = useState(dog1);
  return (
    <section className='w-full flex flex-col justify-center gap-10'>
      <div className='relative flex flex-row w-full justify-between items-center pt-28 px-14'>
        {/* Text Section */}
        <div className='flex flex-col justify-center items-start px-6 pb-52'>
          <p className='text-6xl font-palanquin font-extrabold'>
            Meet Your <span className='font-montserrat text-[#B95D2F]'>Pawtner</span>
          </p>
          <div className='mt-4 text-xl'>
            <p className='font-montserrat text-slate-500'>
              A loyal companion with a wagging tail and boundless affection.
            </p>
            <p className='font-montserrat text-slate-500'>
              Always by your side, they offer unconditional love.
            </p>
          </div> 
          <div className='flex justify-center gap-16'>
            <div className='pt-8'>
                <DogCard imgURL={dog2} dogAlt="dog2" />
            </div>
            <div className='pt-8'>
                <DogCard imgURL={cat1} dogAlt="cat1" />
            </div>
            <div className='pt-8 '>
                <DogCard imgURL={dog77} dogAlt="dog77"  />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex-shrink-0 pb-48'>
          <img src={dogImg} alt="dog1 pic" height={700} width={610} className='rounded-xl shadow-xl ring-1 ring-slate-300' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
