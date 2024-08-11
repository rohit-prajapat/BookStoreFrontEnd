import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';


const Navitems = ()=>{
    return (
        <div className="flex flex-wrap">
            
        
            <li>
            <Link to="/home">Home</Link>
            </li>

            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
                <Link to={'/about'}>AboutUs</Link>
            </li>

            <li>
                <Link to={'/contact'}></Link>
            </li>

        </div>
    )
}
const Header = () => {
    
    
    const newLocal = ""
  return (
    <div className='mx-w-screen-2xl container mx-auto md:20 px-4'>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <Navitems></Navitems>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Navitems ></Navitems>
                   
                </ul>
            </div>
            <div className="navbar-end">

                <div className="form-control h-px hidden md:block mb-10 hpx-9 mr-5">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <a className="btn" 
                    onClick={()=>{
                        document.getElementById('my_modal_3').showModel();
                    }}
                >
                <LogIn></LogIn>
                <Register></Register>
                </a>
            </div>
            </div>
    </div>
  )
}

export default Header
