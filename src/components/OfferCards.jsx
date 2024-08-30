import React from 'react'

function OfferCards({iconUrl , iconAlt , heading }) {
  return (
    <div>
        <div className='flex flex-1 justify-center flex-col rounded-lg overflow-hidden shadow-md h-[320px] w-[259px]'>
            <div className='h-[90%]'>
                <img src={iconUrl} alt={iconAlt} />
            </div>

            <div className='h-[10%] flex flex-1 justify-center'>
                <h1>{heading}</h1>
            </div>
        </div>
    </div>
  )
}

export default OfferCards