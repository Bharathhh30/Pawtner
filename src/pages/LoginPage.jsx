import React from 'react';
import LoginPic from '../assets/images/LoginPic.jpeg'; 
import loginvector from '../assets/images/loginvector.jpg';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen"> {/* Background color of the page */}
      <div className="flex bg-white rounded-lg shadow-xl overflow-hidden" style={{ width: '800px', height: '500px' }}>
        
        {/* Left Side: Image */}
        <div className="flex-1">
          <img
            src={LoginPic}
            alt="Dog pic"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-10 ">
          <div className='mb-6'>
            <img src={loginvector} alt="" className='h-48' />
          </div>
          <h2 className="text-3xl font-semibold text-[#B85D31]  font-palanquin mb-6">Login</h2>
          <form className="w-full font-montserrat outline-none mb-10">
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full outline-none"
            />
            <div className='flex flex-1 justify-evenly gap-y-4'>
              <p>Don't Have a Account <NavLink to='/signup ' className="text-[#B85D31]">signup here!</NavLink></p>
            </div>
            <button
              type="submit"
              className="bg-[#F6EDD9] text-[#B85D31] rounded-xl px-12 py-2 ml-32 ring-1 ring-slate-900/5 shadow-xl gap-y-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
