import React from 'react'
import logo from '../assets/images/logo.jpg';
import { Link , NavLink} from 'react-router-dom';

function Nav() {
  return (
    <header className='w-full py-8 px-8  z-10'>
        <nav className='flex justify-between items-center'>
            <NavLink to="/">
                <img src={logo} alt="header logo" height={100} width={100} />
            </NavLink>

            <ul className='flex flex-1 justify-center items-center gap-16 text-slate-500 text-xl'>
                <li>
                    <NavLink to='/pawdopt' className={({isActive})=>`${isActive ? "text-[#B95D2F]" : "text-slate-500"}`} >Pawdopt</NavLink>
                </li>
                <li>
                    <NavLink to='/pawcare' className={({isActive})=>`${isActive ? "text-[#B95D2F]" : "text-slate-500"}`} >Pawcare</NavLink>
                </li>
                <li>
                    <NavLink to='/pawshelther' className={({isActive})=>`${isActive ? "text-[#B95D2F]" : "text-slate-500"}`} >Pawshelther</NavLink>
                </li>
                <li>
                    <NavLink to='/pawoctor' className={({isActive})=>`${isActive ? "text-[#B95D2F]" : "text-slate-500"}`} >Pawoctor</NavLink>
                </li>
            </ul>

            <div className='flex justify-center gap-8 text-slate-500'>
                <NavLink to='/login'><button className='bg-white px-4 py-1 rounded-md ring-1 ring-slate-900/5 shadow-xl '>Login</button></NavLink>
                <NavLink to='/signup'><button className='bg-white px-4 py-1 rounded-md ring-1 ring-slate-900/5 shadow-xl'>Sign Up</button></NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Nav