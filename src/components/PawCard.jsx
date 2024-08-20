import React from 'react'


function PawCard({iconUrl , iconAlt , heading , subtext}) {
  return (
    <div className='flex flex-1'>
      <div className='bg-white h-[320px] w-[259px] rounded-2xl flex flex-1 justify-center items-center gap-y-4 flex-col mt-8 shadow-xl'>
        <img src={iconUrl} alt={iconAlt} className='w-[50px] h-[50px] rounded-t-2xl '/>
        <h1 className='text-3xl font-palanquin font-bold text-[#B95D2F]'>{heading}</h1>
        <p className='text-sm font-semibold font-poppins text-center px-2'>{subtext}</p>
      </div>
      
    </div>
  )
}

export default PawCard