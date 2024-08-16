import React from 'react'
import logo from '../assets/images/logo.jpg';

function Nav() {
  return (
    <header className='w-full py-8 px-8  z-10'>
        <nav className='flex justify-between items-center'>
            <a href="/">
                <img src={logo} alt="header logo" height={100} width={100} />
            </a>

            <ul className='flex flex-1 justify-center items-center gap-16 text-slate-500 text-xl'>
                <li>Pawdopt</li>
                <li>Pawcare</li>
                <li>PawShelther</li>
                <li>Pawoctor</li>
            </ul>

            <div className='flex justify-center gap-8 text-slate-500'>
                <button className='bg-white px-4 py-1 rounded-md ring-1 ring-slate-900/5 shadow-xl '>Login</button>
                <button className='bg-white px-4 py-1 rounded-md ring-1 ring-slate-900/5 shadow-xl'>Sign Up</button>
            </div>
        </nav>
    </header>
  )
}

export default Nav