import React from 'react'
import logo from '../assets/images/logo.jpg'

function PagesFooter() {
  return (
    <>
    <div className='bg-white'>
         <div className='flex w-[100%] bg-slate-50 '>
                <div className='flex flex-1 flex-row justify-evenly mt-10'>
                  <div className='flex flex-1 justify-center flex-col gap-y-1 pl-40'>
                    <div className='flex flex-1 overflow-hidden h-[20%] rounded-lg'>
                      <img src={logo} alt="logo" className='rounded-lg' />
                    </div>
                    <div className='h-[80%]'>
                      <p>HiNanna@pluto.com</p>
                      <p>+91 495950252032</p>
                      <p>Conoor , Tamil Nadu , India</p>
                      <p>500006</p>
                    </div>
                  </div>
                  <div className='flex flex-1 justify-center flex-col gap-y-2'>
                    <div className='h-[20%] font-poppins text-xl'>
                    Information
                    </div>
                    <div className='h-[80%]'>
                      <p>Careers</p>
                      <p>Press</p>
                      <p>Blog</p>
                      <p>Get us to Know</p>
                    </div>
                  </div>
                  <div className='flex flex-1 justify-center flex-col gap-y-2'>
                    <div className='h-[20%] font-poppins text-xl'>
                      Explore
                    </div>
                    <div className='h-[80%]'>
                      <p>Pawadopt</p>
                      <p>Pawcare</p>
                      <p>Pawshelther</p>
                      <p>Pawoctor</p>
                    </div>
                  </div>
                  <div className='flex flex-1 justify-center flex-col gap-y-2'>
                    <div className='h-[20%] font-poppins text-xl'>
                      Connect with us
                    </div>
                    <div className='h-[80%]'>
                      <p>Facebook</p>
                      <p>Instagram</p>
                      <p>Twitter</p>
                      <p>LinkedIn</p>
                    </div>
                  </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default PagesFooter