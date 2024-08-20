import React from 'react'
import PawCard from '../components/PawCard'
import pawcare from '../assets/icons/pawcare.png'
import pawdopt from '../assets/icons/pawdopt.png'
import pawshelther from '../assets/icons/pawshelther.png'
import { NavLink } from 'react-router-dom'

function Features() {
  return (
    <div className='flex flex-1 flex-col gap-8 w-full justify-center items-center'>
        <div className='text-6xl font-extrabold font-palanquin'>
            <p className='pl-4'>Where Every <span className='text-[#B95D2F] font-montserrat'>Tail</span> Wags with <span className='text-[#B95D2F] font-montserrat'>Joy!</span></p>
        </div>
        <div className='flex flex-1 flex-row gap-12 justify-between'>
            
            <PawCard iconUrl={pawcare} iconAlt="pawcare" heading="Care & Adore"
              subtext="Dogs are known for being loyal and faithful to their owners. "/>
            <PawCard iconUrl={pawdopt} iconAlt="pawdopt" heading="Adopt your Paws"
              subtext="Dogs have a unique way of sweating and their noses are wet"/>
            <PawCard iconUrl={pawshelther} iconAlt="pawshelther" heading="Place for Shelther"
              subtext="There are hundreds of breeds of dogs around the world"/>
        </div>
    </div>
  )
}

export default Features