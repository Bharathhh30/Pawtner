import React from 'react'
import catvectoe from '../assets/images/catvectoe.jpg'
import catvector1 from '../assets/images/catvector1.jpg'
import catvector2 from '../assets/images/catvector2.jpg'

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='flex bg-white rounded-lg shadow-xl overflow-hidden w-[800px] h-[500px]'>
          <div className='flex-1'>
            <img src={catvectoe} alt="Catvector image"  />
          </div>
          <div className='flex flex-1 justify-center items-center flex-col text-xl'>
            <img src={catvector1} alt="cat vector 2" className='h-20' />

            <h2 className='text-3xl font-semibold text-[#B85D31] font-palanquin mb-6'>Sign Up</h2>
            <form className='w-full gap-y-4 font-montserrat outline-none flex justify-center items-center flex-col '>
              <input type="text" name="username" id="username" placeholder='Enter Your Name' className='border border-gray-300 rounded-md px-10 py-2 outline-none' />
              <input type="email" name="email" id="email" placeholder='Email Address' className='border border-gray-300 rounded-md px-10 py-2 outline-none' />
              <input type="password" name="password" id="password" placeholder='Password' className='border border-gray-300 rounded-md px-10 py-2 outline-none' />
              <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Password' className='border border-gray-300 rounded-md px-10 py-2 outline-none' />
              <button type="submit" className="bg-[#F6EDD9] text-[#B85D31] rounded-xl px-12 py-2  ring-1 ring-slate-900/5 shadow-xl gap-y-2">Sign Up</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default SignUp