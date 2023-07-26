import React from 'react'
import logo from "../assets/logo.avif"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import {BsBag} from "react-icons/bs"

const NavBar = () => {
  return (
    <div className='h-[80px] '>

        <div className="flex justify-between h-full w-full" >

          <div className=' flex justify-start items-center w-1/3  ml-8  gap-10'>
            <RxHamburgerMenu className=' text-2xl'/>
            <AiOutlineSearch className=' text-2xl'/>
          </div>

          <div className=' flex justify-center h-full w-1/3 '>  
            <img src={logo}/>
          </div>

          <div className=' flex w-1/3 justify-end items-center mr-12 relative'>
            <BsBag className=' text-2xl'/>
            <div className='flex absolute top-3 -right-3 font-bold rounded-full h-5 w-5 bg-slate-900 text-white text-center items-center justify-center'>0</div>
          </div>
        </div>
    </div>
  )
}

export default NavBar