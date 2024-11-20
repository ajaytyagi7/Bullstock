import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useUserContext } from '../UserContext';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import logo from '../Images/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";




const Navbar = () => {
  const {userloggedIn,Logout} = useUserContext();

  const [click, setclick] = useState(false);
  

  const closeNav = () => {
    setclick(false)
  };


  const handleClick = () => {
    setclick(!click);
  }

  const showLogin = () => {
    if (userloggedIn) {
      return (
        <button onClick={Logout} className="text-white bg-gradient-to-r from-orange-200 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-3 py-2.5 text-center me-2 mb-2  text-sm fs-5 ">Logout</button>
      )
    } else {   
      return <>

        <NavLink
          to="/Login"
          className=" hover:text-white rounded-md px-3  text-sm fs-5"
        >
          <button onClick={closeNav} className='text-white bg-gradient-to-r from-fuchsia-700 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-3 py-1.5 text-center me-2 mb-1  text-sm fs-5 '>Login</button>
        </NavLink>


      </>
    }
  }
  const content = <>
  <div className=" navbar lg:hidden block absolute top-20 w-full left-0 right-0 bg-slate-50 transition">
    <ul className="text-center text-xl p-20 text-black">
      <Link to="Home">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Home</li>
      </Link>
     <Link  to="Community">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded"  onClick={closeNav}>Community</li>
      </Link>
      <Link  to="MutualFund">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded"  onClick={closeNav}>MutualFund</li>
      </Link>
      <Link  to="Contact">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Contactus</li>
      </Link>
      <Link  to="Blog">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Blog</li>
      </Link>
     {showLogin()}
    </ul>

  </div>
</>
  return (
    <div className='bg-slate-50  '>
     <nav >
       <div className="h-5vh flex justify-between z-50 text-white lg:py-5 px-10 py-1 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <img className='img-fluid h-16' src={logo} alt="" />  
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end  font-normal hidden">
          <div className="flex-10">
          <ul className="flex gap-8 mr-16  mt-1 text-[17px]">
        <Link to="Home">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">Home</li>
        </Link>
        <Link to="News">
        <li className="hover:text-[#638ed4] transition  border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">News</li>
        </Link>
        <Link to="Mutual Fund">
        <li className="hover:text-[#638ed4] transition  border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">MutualFund</li>
        </Link>
        <Link to="Blog">
        <li className="hover:text-[#638ed4] transition  border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer  text-dark">Blog</li>
        </Link>
        <Link to="Community">
        <li className="hover:text-[#638ed4] transition  border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer  text-dark">Community</li>
        </Link>
        <Link to="Contact">
        <li className="hover:text-[#638ed4] transition  border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">Contactus</li>
        </Link>
        {showLogin()}
      </ul>

        </div>
        </div>
        <div>
          {click && content}
        </div>
        <button  className="block sm:hidden transition dark" onClick={handleClick}>
           {click ? <FiX/> :<FiMenu />}
        </button>
       </div>
    </nav>

    </div>
  )
}

export default Navbar  