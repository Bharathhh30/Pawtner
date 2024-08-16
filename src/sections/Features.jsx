import React from 'react'
import PawCard from '../components/PawCard'

function Features() {
  return (
    <div className='flex flex-1 flex-col gap-8 w-full justify-center items-center'>
        <div className='text-6xl font-extrabold font-palanquin'>
            <p className='pl-4'>Where Every <span className='text-[#B95D2F] font-montserrat'>Tail</span> Wags with <span className='text-[#B95D2F] font-montserrat'>Joy!</span></p>
        </div>
        <div className='flex flex-1 flex-row gap-12 justify-between'>
            <PawCard/>
            <PawCard/>
            <PawCard/>
        </div>
    </div>
  )
}

export default Features