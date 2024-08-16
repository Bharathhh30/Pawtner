import React from 'react'

function DogCard({imgURL, dogAlt}) {
  return (
    <div>
        <img src={imgURL} alt={dogAlt} height={180} width={160}  className='rounded-xl'/>
    </div>
  )
}

export default DogCard