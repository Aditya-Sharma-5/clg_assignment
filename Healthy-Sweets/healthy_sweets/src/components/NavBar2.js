import React from 'react'
import logo from "../assets/logo.avif"
import {AiOutlineSearch} from "react-icons/ai"
import {BsBag} from "react-icons/bs"
import {MdAccountCircle} from "react-icons/md"

const NavBar2 = () => {
  return (
    <div className=' w-screen h-[60px] flex justify-between '>
        <div className='flex justify-start gap-10'>
            <div>
                <img src={logo}/>
            </div>

            <div  className=' flex justify-start gap-10 items-center'>
                
                <div>
                    Shop Now
                </div>
                
                <div>
                    Best Seller
                </div>
                
                <div>
                    New Launch
                </div>
            </div>
        </div>

        <div className=' flex gap-8 justify-evenly'>
            <div className=' flex justify-center items-center'>
                <div>
                    <AiOutlineSearch/>
                </div>
                <div>
                    Search
                </div>
            </div>

            <div>
                <MdAccountCircle/>
            </div>
            
            <div className=' flex'>
                <div className=' flex w-1/3 justify-end items-center mr-12 relative'>
                    <BsBag className=' text-2xl'/>
                    <div className='flex absolute top-3 -right-3 font-bold rounded-full h-5 w-5 bg-slate-900 text-white text-center items-center justify-center'>
                        0
                    </div>
                </div>
                <div>
                    Cart
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar2