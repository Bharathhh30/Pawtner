import React from 'react'
import TextHoverEffect from '../components/Ace-ui/Highlight'

function Footer() {
  return (
    <>
        <div className='flex flex-1 flex-col'>
            <div className="h-[10rem] flex flex-1 items-center justify-center">
                <TextHoverEffect text = "PAWTNER"/>
                
            </div>
            <div className='flex flex-1 w-full bg-slate-50'>
                Hello
            </div>
            
        </div>
    </>
  )
}

export default Footer